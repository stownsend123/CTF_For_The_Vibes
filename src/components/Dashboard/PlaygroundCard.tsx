import React from 'react';
import { Circle as HelpCircle, Plus, ChartBar as BarChart3 } from 'lucide-react';

interface PlaygroundCardProps {
  type: 'compare' | 'create' | 'draft';
  title: string;
  onClick?: () => void;
}

export default function PlaygroundCard({ type, title, onClick }: PlaygroundCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'compare':
        return <HelpCircle className="w-12 h-12 text-purple-600" />;
      case 'create':
        return <Plus className="w-12 h-12 text-green-600" />;
      case 'draft':
        return <BarChart3 className="w-12 h-12 text-blue-600" />;
      default:
        return <HelpCircle className="w-12 h-12 text-gray-600" />;
    }
  };

  const getCardStyle = () => {
    switch (type) {
      case 'compare':
        return 'border-l-4 border-purple-500 hover:border-purple-600';
      case 'create':
        return 'border-l-4 border-green-500 hover:border-green-600';
      case 'draft':
        return 'border-l-4 border-blue-500 hover:border-blue-600';
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
            <h3 className="usa-card__heading text-base font-semibold text-gray-900">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}