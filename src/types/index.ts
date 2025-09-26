export interface Budget {
  id: string;
  name: string;
  type: 'execution' | 'spend' | 'ufr';
  year: number;
  amount: number;
  status: 'submitted' | 'draft';
  fiscal_year: string;
  created_at: string;
  updated_at: string;
}

export interface BudgetMetrics {
  total_authorized: number;
  total_obligated: number;
  total_expended: number;
  execution_rate: number;
  burn_rate: number;
}

export interface FundsBreakdown {
  name: string;
  value: number;
  color: string;
}