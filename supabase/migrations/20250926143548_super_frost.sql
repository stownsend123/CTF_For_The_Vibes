/*
  # GIFF Financial Management Database Schema

  1. New Tables
    - `budgets` - Core budget plans (execution, spend, UFR)
    - `users` - System users with roles and permissions
    - `documents` - File attachments for budget plans
    - `budget_metrics` - Financial metrics and calculations
    - `audit_logs` - System activity tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for role-based access control
    - Secure document access by budget ownership

  3. Indexes
    - Performance indexes on frequently queried columns
    - Composite indexes for complex queries
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'user', 'viewer')),
  division text,
  directorate text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Budgets table
CREATE TABLE IF NOT EXISTS budgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('execution', 'spend', 'ufr')),
  year integer NOT NULL,
  amount decimal(15,2) DEFAULT 0,
  status text NOT NULL CHECK (status IN ('submitted', 'draft')) DEFAULT 'draft',
  division text,
  directorate text,
  fiscal_year text NOT NULL,
  user_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Documents table
CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  size integer NOT NULL,
  budget_id uuid REFERENCES budgets(id) ON DELETE CASCADE,
  uploaded_by uuid REFERENCES users(id),
  uploaded_at timestamptz DEFAULT now()
);

-- Budget metrics table
CREATE TABLE IF NOT EXISTS budget_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  budget_id uuid REFERENCES budgets(id) ON DELETE CASCADE,
  total_authorized decimal(15,2) DEFAULT 0,
  total_obligated decimal(15,2) DEFAULT 0,
  total_expended decimal(15,2) DEFAULT 0,
  execution_rate decimal(5,2) DEFAULT 0,
  burn_rate decimal(5,2) DEFAULT 0,
  calculated_at timestamptz DEFAULT now()
);

-- Audit logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  action text NOT NULL,
  table_name text NOT NULL,
  record_id uuid,
  old_values jsonb,
  new_values jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE budget_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for budgets
CREATE POLICY "Users can read own budgets"
  ON budgets
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create own budgets"
  ON budgets
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own budgets"
  ON budgets
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- RLS Policies for documents
CREATE POLICY "Users can access documents for their budgets"
  ON documents
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM budgets 
      WHERE budgets.id = documents.budget_id 
      AND budgets.user_id = auth.uid()
    )
  );

-- RLS Policies for budget_metrics
CREATE POLICY "Users can read metrics for their budgets"
  ON budget_metrics
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM budgets 
      WHERE budgets.id = budget_metrics.budget_id 
      AND budgets.user_id = auth.uid()
    )
  );

-- RLS Policies for audit_logs
CREATE POLICY "Admins can read all audit logs"
  ON audit_logs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_budgets_user_id ON budgets(user_id);
CREATE INDEX IF NOT EXISTS idx_budgets_type_year ON budgets(type, year);
CREATE INDEX IF NOT EXISTS idx_budgets_status ON budgets(status);
CREATE INDEX IF NOT EXISTS idx_documents_budget_id ON documents(budget_id);
CREATE INDEX IF NOT EXISTS idx_budget_metrics_budget_id ON budget_metrics(budget_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- Insert sample data
INSERT INTO users (id, email, name, role, division, directorate) VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'admin@airforce.mil', 'System Administrator', 'admin', 'Financial Management', 'Budget Division'),
  ('550e8400-e29b-41d4-a716-446655440001', 'user@airforce.mil', 'Budget Analyst', 'user', 'Operations', 'Planning Division')
ON CONFLICT (email) DO NOTHING;

INSERT INTO budgets (id, name, type, year, amount, status, fiscal_year, user_id) VALUES
  ('660e8400-e29b-41d4-a716-446655440000', '2025 Execution Plan', 'execution', 2025, 30524893.89, 'submitted', 'FY25', '550e8400-e29b-41d4-a716-446655440001'),
  ('660e8400-e29b-41d4-a716-446655440001', '2025 Spend Plan', 'spend', 2025, 25000000.00, 'submitted', 'FY25', '550e8400-e29b-41d4-a716-446655440001'),
  ('660e8400-e29b-41d4-a716-446655440002', '2025 UFR', 'ufr', 2025, 15000000.00, 'submitted', 'FY25', '550e8400-e29b-41d4-a716-446655440001'),
  ('660e8400-e29b-41d4-a716-446655440003', '2026 Execution Plan', 'execution', 2026, 0, 'draft', 'FY26', '550e8400-e29b-41d4-a716-446655440001'),
  ('660e8400-e29b-41d4-a716-446655440004', '2026 Spend Plan', 'spend', 2026, 0, 'draft', 'FY26', '550e8400-e29b-41d4-a716-446655440001')
ON CONFLICT (id) DO NOTHING;

INSERT INTO budget_metrics (budget_id, total_authorized, total_obligated, total_expended, execution_rate, burn_rate) VALUES
  ('660e8400-e29b-41d4-a716-446655440000', 30524893.89, 23577222.88, 14024441.81, 77.2, 58.9)
ON CONFLICT (id) DO NOTHING;