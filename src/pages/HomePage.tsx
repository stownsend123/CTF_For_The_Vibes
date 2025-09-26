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
      
      <main className="usa-section p-6">
        <div className="usa-grid-container-widescreen">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Plans */}
            <div className="lg:col-span-2 space-y-8">
              {/* Submitted Plans */}
              <section className="usa-card chart-container animate-fade-in-up">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <div className="flex items-center justify-between">
                      <h2 className="usa-card__heading usa-tag usa-tag--big status-submitted text-white px-6 py-2 rounded-full">
                        Submitted Plans
                      </h2>
                    </div>
                  </div>
                  <div className="usa-card__body">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <PlanCard type="execution" year={2025} title="2025 Execution Plan" />
                      <PlanCard type="spend" year={2025} title="2025 Spend Plan" />
                      <PlanCard type="ufr" year={2025} title="2025 UFR" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Draft Submissions */}
              <section className="usa-card chart-container animate-fade-in-up">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <h2 className="usa-card__heading usa-tag usa-tag--big status-draft text-white px-6 py-2 rounded-full">
                      Draft Submissions
                    </h2>
                  </div>
                  <div className="usa-card__body space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-2">2026 Plans</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PlanCard type="execution" year={2026} title="2026 Execution Plan" />
                        <PlanCard type="spend" year={2026} title="2026 Spend Plan" />
                        <PlanCard type="ufr" year={2026} title="2026 UFR" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-2">2027 Plans</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PlanCard type="execution" year={2027} title="2027 Execution Plan" />
                        <PlanCard type="spend" year={2027} title="2027 Spend Plan" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Playground */}
              <section className="usa-card chart-container animate-fade-in-up">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <h2 className="usa-card__heading usa-tag usa-tag--big status-playground text-white px-6 py-2 rounded-full">
                      Playground
                    </h2>
                  </div>
                  <div className="usa-card__body">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <PlaygroundCard type="compare" title="Compare Scenarios" />
                      <PlaygroundCard type="create" title="Create Scenario" />
                      <PlaygroundCard type="draft" title="Draft Scenarios" />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Current Breakdown */}
            <div className="space-y-6">
              <section className="usa-card chart-container animate-fade-in-up">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <h2 className="usa-card__heading usa-tag usa-tag--big bg-blue-600 text-white px-6 py-2 rounded-full">
                      Current Breakdown of Funds
                    </h2>
                  </div>
                  
                  <div className="usa-card__body space-y-6">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <div className="space-y-6">
                      <div className="chart-container">
                        <ExecutionChart percentage={77.2} title="Execution Rate" />
                      </div>
                      <div className="chart-container">
                        <BurnRateChart percentage={58.9} title="Burn Rate" subtitle="Average Monthly" />
                      </div>
                      <div className="chart-container">
                        <FundsBreakdownChart />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}