import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface BurnRateChartProps {
  percentage: number;
  title: string;
  subtitle: string;
}

export default function BurnRateChart({ percentage, title, subtitle }: BurnRateChartProps) {
  const data = [
    { name: 'Burned', value: percentage },
    { name: 'Remaining', value: 100 - percentage }
  ];

  const COLORS = ['#ef4444', '#e5e7eb'];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="text-sm font-medium text-gray-900 mb-2">{title}</div>
      <div className="flex items-center">
        <div className="w-20 h-20">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={35}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold text-gray-900">{percentage}%</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}