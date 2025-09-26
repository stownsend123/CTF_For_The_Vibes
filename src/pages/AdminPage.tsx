import React from 'react';
import Header from '../components/Layout/Header';

export default function AdminPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <Header title="Financial Management Hub" />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Management Hub</h2>
            <p className="text-gray-600 mb-6">
              Administrative controls for managing users, permissions, and system configuration.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                Administrative features require proper security clearance and authorization.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Administrative Capabilities:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Comprehensive user management and role assignments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Granular permission controls by division and directorate
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  System configuration settings and preferences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Comprehensive audit logs and activity tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}