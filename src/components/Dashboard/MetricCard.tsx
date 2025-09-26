import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

interface MetricCardProps {
  title: string;
  amount: number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  className?: string;
}

export default function MetricCard({ title, amount, subtitle, trend, trendValue, className = '' }: MetricCardProps) {
  return (
    <div className={`usa-card usa-card--header-first metric-card animate-fade-in-up ${className}`}>
      <div className="usa-card__container">
        <div className="usa-card__header">
          <h3 className="usa-card__heading text-sm font-semibold text-gray-600 uppercase tracking-wide">
            {title}
          </h3>
        </div>
        <div className="usa-card__body">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {formatCurrency(amount)}
          </div>
          {subtitle && (
            <div className="text-sm text-gray-500 mb-3">{subtitle}</div>
          )}
          {trend && trendValue && (
            <div className={`usa-tag usa-tag--small flex items-center ${
              trend === 'up' 
                ? 'usa-tag--accent-warm text-red-700' 
                : trend === 'down' 
                ? 'usa-tag--accent-cool text-green-700' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {trend === 'up' && <TrendingUp size={12} className="mr-1" />}
              {trend === 'down' && <TrendingDown size={12} className="mr-1" />}
              <span className="text-xs font-medium">{trendValue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}