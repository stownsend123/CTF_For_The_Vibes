import React from 'react';
import { DollarSign, FileText, CreditCard } from 'lucide-react';

interface PlanCardProps {
  type: 'execution' | 'spend' | 'ufr';
  year: number;
  title: string;
  status?: 'submitted' | 'draft';
  onClick?: () => void;
}

export default function PlanCard({ type, year, title, status = 'submitted', onClick }: PlanCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'execution':
        return <DollarSign className="w-12 h-12 text-green-600" />;
      case 'spend':
        return <FileText className="w-12 h-12 text-green-600" />;
      case 'ufr':
        return <CreditCard className="w-12 h-12 text-red-600" />;
      default:
        return <DollarSign className="w-12 h-12 text-gray-600" />;
    }
  };

  const getCardStyle = () => {
    return 'bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-1';
  };

  return (
    <div 
      className={getCardStyle()}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}