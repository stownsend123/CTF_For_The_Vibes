import React from 'react';
import Header from '../components/Layout/Header';

export default function HomePage() {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Home" 
        fiscalYear="FY 2X" 
        required="$XXXX" 
        authorized="$YYYY" 
      />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600 mb-6">
              Welcome to the GIFF Air Force Financial Management System. Use the navigation to access different sections.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Submitted Plans</h3>
                <p className="text-blue-700">View and manage submitted financial plans</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Draft Submissions</h3>
                <p className="text-yellow-700">Work on draft financial submissions</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Current Breakdown</h3>
                <p className="text-green-700">View current fund breakdown and metrics</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}