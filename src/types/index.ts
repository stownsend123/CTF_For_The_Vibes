export interface Budget {
  id: string;
  name: string;
  type: 'execution' | 'spend' | 'ufr';
  year: number;
  amount: number;
  status: 'submitted' | 'draft';
  division?: string;
  directorate?: string;
  fiscalYear: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  division?: string;
  directorate?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  budgetId: string;
  uploadedAt: Date;
  uploadedBy: string;
}

export interface FundsMetric {
  label: string;
  amount: number;
  percentage?: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}