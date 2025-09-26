import React from 'react';
import { DollarSign, FileText, CreditCard } from 'lucide-react';

interface PlanCardProps {
  type: 'execution' | 'spend' | 'ufr';
  year: number;
  title: string;
  onClick?: () => void;
}

export default function PlanCard({ type, year, title, onClick }: PlanCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'execution':
        return <DollarSign className="w-12 h-12 text-green-600" />;
      case 'spend':
        return <FileText className="w-12 h-12 text-blue-600" />;
      case 'ufr':
        return <CreditCard className="w-12 h-12 text-red-600" />;
      default:
        return <DollarSign className="w-12 h-12 text-gray-600" />;
    }
  };

  const getCardStyle = () => {
    switch (type) {
      case 'execution':
        return 'border-l-4 border-green-500 hover:border-green-600';
      case 'spend':
        return 'border-l-4 border-blue-500 hover:border-blue-600';
      case 'ufr':
        return 'border-l-4 border-red-500 hover:border-red-600';
      default:
        return 'border-l-4 border-gray-500';
    }
  };

  return (
    <div 
      className={`usa-card plan-card cursor-pointer ${getCardStyle()}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="usa-card__container">
        <div className="usa-card__body text-center py-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 rounded-full bg-gray-50">
              {getIcon()}
            </div>
            <div>
              <h3 className="usa-card__heading text-base font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Year {year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}