import React from 'react';
import Header from '../components/Layout/Header';
import MetricCard from '../components/Dashboard/MetricCard';
import PlanCard from '../components/Dashboard/PlanCard';
import ExecutionChart from '../components/Dashboard/ExecutionChart';
import BurnRateChart from '../components/Dashboard/BurnRateChart';
import FundsBreakdownChart from '../components/Dashboard/FundsBreakdownChart';
import PlaygroundCard from '../components/Dashboard/PlaygroundCard';

export default function HomePage() {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Home" 
        fiscalYear="FY 2X" 
        required="$XXXX" 
        authorized="$YYYY" 
      />
      
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Plans */}
          <div className="lg:col-span-2 space-y-6">
            {/* Submitted Plans */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white bg-blue-500 px-4 py-2 rounded-full">
                  Submitted
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <PlanCard type="execution" year={2025} title="2025 Execution Plan" />
                <PlanCard type="spend" year={2025} title="2025 Spend Plan" />
                <PlanCard type="ufr" year={2025} title="2025 UFR" />
              </div>
            </div>

            {/* Draft Submissions */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white bg-blue-500 px-4 py-2 rounded-full">
                  Draft Submissions
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">2026</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <PlanCard type="execution" year={2026} title="2026 Execution Plan" />
                    <PlanCard type="spend" year={2026} title="2026 Spend Plan" />
                    <PlanCard type="ufr" year={2026} title="2026 UFR" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">2027</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <PlanCard type="execution" year={2027} title="2027 Execution Plan" />
                    <PlanCard type="spend" year={2027} title="2027 Spend Plan" />
                  </div>
                </div>
              </div>
            </div>

            {/* Playground */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white bg-blue-500 px-4 py-2 rounded-full">
                  Playground
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <PlaygroundCard type="compare" title="Compare" />
                <PlaygroundCard type="create" title="Create Scenario" />
                <PlaygroundCard type="draft" title="Draft Scenarios" />
              </div>
            </div>
          </div>

          {/* Right Column - Current Breakdown */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white bg-blue-500 px-4 py-2 rounded-full">
                  Current Breakdown of Funds
                </h2>
              </div>
              
              <div className="space-y-4">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard 
                    title="Total Authorized" 
                    amount={30524893.89} 
                    className="text-center"
                  />
                  <MetricCard 
                    title="Total Obligated" 
                    amount={23577222.88} 
                    className="text-center"
                  />
                  <MetricCard 
                    title="Total Expended" 
                    amount={14024441.81} 
                    subtitle="59.2% of Obligated"
                    trend="up"
                    trendValue="2.3% Expended"
                    className="text-center"
                  />
                  <MetricCard 
                    title="Balance" 
                    amount={5374603.62} 
                    subtitle="17.6% Authorized"
                    className="text-center"
                  />
                </div>

                {/* Charts */}
                <div className="space-y-4">
                  <ExecutionChart percentage={77.2} title="Execution Rate" />
                  <BurnRateChart percentage={58.9} title="Burn Rate" subtitle="Average Monthly" />
                  <FundsBreakdownChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}