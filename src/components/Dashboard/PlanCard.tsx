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
        return <DollarSign className="w-8 h-8 text-green-600" />;
      case 'spend':
        return <FileText className="w-8 h-8 text-blue-600" />;
      case 'ufr':
        return <CreditCard className="w-8 h-8 text-red-600" />;
      default:
        return <DollarSign className="w-8 h-8 text-gray-600" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'execution':
        return 'bg-green-50 border-green-200';
      case 'spend':
        return 'bg-blue-50 border-blue-200';
      case 'ufr':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div 
      className={`p-4 rounded-lg border-2 cursor-pointer hover:shadow-md transition-shadow ${getBgColor()}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        {getIcon()}
        <div className="text-sm font-medium text-gray-900">{title}</div>
      </div>
    </div>
  );
}