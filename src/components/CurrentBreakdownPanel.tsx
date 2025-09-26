'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '@/lib/utils'

interface CurrentBreakdownPanelProps {
  data: {
    totalAuthorized: number
    totalObligated: number
    totalExpended: number
    remainingObligated: number
    executionRate: number
    burnRate: number
    fundsBreakdown: Array<{ name: string; value: number; color: string }>
  }
}

export default function CurrentBreakdownPanel({ data }: CurrentBreakdownPanelProps) {
  const executionData = [
    { name: 'Executed', value: data.executionRate },
    { name: 'Remaining', value: 100 - data.executionRate }
  ]

  const burnData = [
    { name: 'Burned', value: data.burnRate },
    { name: 'Remaining', value: 100 - data.burnRate }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-center mb-6">
        <h2 className="text-lg font-bold">Current Breakdown of Funds</h2>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-xs text-gray-600 mb-1">Total Authorized</div>
          <div className="text-lg font-bold text-green-600">
            {formatCurrency(data.totalAuthorized)}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-xs text-gray-600 mb-1">Total Obligated</div>
          <div className="text-lg font-bold text-blue-600">
            {formatCurrency(data.totalObligated)}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-xs text-gray-600 mb-1">Total Expended</div>
          <div className="text-lg font-bold text-red-600">
            {formatCurrency(data.totalExpended)}
          </div>
          <div className="text-xs text-gray-500">46.0% of Obligated</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-xs text-gray-600 mb-1">Remaining Obligated</div>
          <div className="text-lg font-bold text-orange-600">
            {formatCurrency(data.remainingObligated)}
          </div>
          <div className="text-xs text-gray-500">22.8% Remaining</div>
        </div>
      </div>

      {/* Execution Rate Chart */}
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-1">Execution Rate</div>
            <div className="text-xs text-gray-500">Overall Rate</div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 mr-3">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={executionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={30}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xl font-bold text-gray-900">{data.executionRate}%</div>
          </div>
        </div>
      </div>

      {/* Burn Rate Chart */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-1">Burn Rate</div>
            <div className="text-xs text-gray-500">Average Monthly</div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 mr-3">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={burnData}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={30}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    <Cell fill="#ef4444" />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xl font-bold text-gray-900">{data.burnRate}%</div>
          </div>
        </div>
      </div>

      {/* Funds Breakdown Chart */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="h-32 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.fundsBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {data.fundsBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {data.fundsBreakdown.map((item) => (
            <div key={item.name} className="flex items-center text-xs">
              <div 
                className="w-3 h-3 rounded mr-2" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="font-medium">$ {item.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-bold text-sm">
            Total
          </div>
        </div>
      </div>
    </div>
  )
}