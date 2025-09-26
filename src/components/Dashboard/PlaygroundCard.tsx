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
        return <HelpCircle className="w-12 h-12 text-blue-600" />;
      case 'create':
        return <Plus className="w-12 h-12 text-green-600" />;
      case 'draft':
        return <BarChart3 className="w-12 h-12 text-purple-600" />;
      default:
        return <HelpCircle className="w-12 h-12 text-gray-600" />;
    }
  };

  return (
    <div 
      className="bg-white p-6 rounded-lg border-2 border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        {getIcon()}
        <div className="text-sm font-medium text-gray-900">{title}</div>
      </div>
    </div>
  );
}