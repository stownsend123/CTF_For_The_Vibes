import React from 'react';
import Header from '../components/Layout/Header';
import DashboardSection from '../components/Dashboard/DashboardSection';
import PlanCard from '../components/Dashboard/PlanCard';
import PlaygroundCard from '../components/Dashboard/PlaygroundCard';
import CurrentBreakdownPanel from '../components/Dashboard/CurrentBreakdownPanel';
import { dashboardData } from '../data/mockData';

export default function HomePage() {
  const handlePlanClick = (planName: string) => {
    console.log(`Clicked on ${planName}`);
  };

  const handlePlaygroundClick = (action: string) => {
    console.log(`Clicked on ${action}`);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Home" 
        fiscalYear={dashboardData.fiscalYear}
        required={dashboardData.required}
        authorized={dashboardData.authorized}
      />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              {/* Submitted Plans Section */}
              <DashboardSection title="Submitted">
                {dashboardData.submittedPlans.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    type={plan.type}
                    year={plan.year}
                    title={plan.name}
                    status={plan.status}
                    onClick={() => handlePlanClick(plan.name)}
                  />
                ))}
              </DashboardSection>

              {/* Draft Submissions Section */}
              <DashboardSection title="Draft Submissions">
                {dashboardData.draftSubmissions.slice(0, 3).map((plan) => (
                  <PlanCard
                    key={plan.id}
                    type={plan.type}
                    year={plan.year}
                    title={plan.name}
                    status={plan.status}
                    onClick={() => handlePlanClick(plan.name)}
                  />
                ))}
              </DashboardSection>

              {/* 2027 Draft Plans */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">2027</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dashboardData.draftSubmissions.slice(3, 5).map((plan) => (
                    <PlanCard
                      key={plan.id}
                      type={plan.type}
                      year={plan.year}
                      title={plan.name}
                      status={plan.status}
                      onClick={() => handlePlanClick(plan.name)}
                    />
                  ))}
                </div>
              </div>

              {/* Playground Section */}
              <DashboardSection title="Playground">
                <PlaygroundCard
                  type="compare"
                  title="Compare"
                  onClick={() => handlePlaygroundClick('Compare')}
                />
                <PlaygroundCard
                  type="create"
                  title="Create Scenario"
                  onClick={() => handlePlaygroundClick('Create Scenario')}
                />
                <PlaygroundCard
                  type="draft"
                  title="Draft Scenarios"
                  onClick={() => handlePlaygroundClick('Draft Scenarios')}
                />
              </DashboardSection>
            </div>

            {/* Right Column - Current Breakdown */}
            <div className="lg:col-span-1">
              <CurrentBreakdownPanel data={dashboardData.currentBreakdown} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}