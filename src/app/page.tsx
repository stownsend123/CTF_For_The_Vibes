'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import DashboardSection from '@/components/DashboardSection'
import PlanCard from '@/components/PlanCard'
import PlaygroundCard from '@/components/PlaygroundCard'
import CurrentBreakdownPanel from '@/components/CurrentBreakdownPanel'
import { dashboardData } from '@/data/mockData'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const handlePlanClick = (planName: string) => {
    console.log(`Clicked on ${planName}`)
  }

  const handlePlaygroundClick = (action: string) => {
    console.log(`Clicked on ${action}`)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
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
        )
      case 'requirements':
        return (
          <div className="flex-1 bg-gray-50">
            <Header title="Requirements" />
            <main className="p-6">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements Management</h2>
                  <p className="text-gray-600">Requirements page content will be implemented here.</p>
                </div>
              </div>
            </main>
          </div>
        )
      case 'status-of-funds':
        return (
          <div className="flex-1 bg-gray-50">
            <Header title="Status of Funds" />
            <main className="p-6">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Status of Funds</h2>
                  <p className="text-gray-600">Status of funds page content will be implemented here.</p>
                </div>
              </div>
            </main>
          </div>
        )
      case 'admin':
        return (
          <div className="flex-1 bg-gray-50">
            <Header title="Financial Management Hub" />
            <main className="p-6">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Management Hub</h2>
                  <p className="text-gray-600">Admin page content will be implemented here.</p>
                </div>
              </div>
            </main>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderPage()}
      </div>
    </div>
  )
}