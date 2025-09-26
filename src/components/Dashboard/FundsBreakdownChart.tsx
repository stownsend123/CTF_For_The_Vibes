import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'X', value: 25, color: '#8b5cf6' },
  { name: 'Y', value: 30, color: '#10b981' },
  { name: 'Z', value: 20, color: '#ef4444' },
  { name: 'I', value: 25, color: '#f59e0b' }
];

export default function FundsBreakdownChart() {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center text-xs">
            <div 
              className="w-3 h-3 rounded mr-2" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="font-medium">$ {item.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-bold">
          Total
        </div>
      </div>
    </div>
  );
}