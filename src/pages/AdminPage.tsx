import React from 'react';
import Header from '../components/Layout/Header';

export default function AdminPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <Header title="Financial Management Hub" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Management Hub</h2>
          <p className="text-gray-600 mb-6">
            Administrative controls for managing users, permissions, and system settings.
          </p>
          <div className="text-left max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">Planned Features:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>User management and role assignments</li>
              <li>Permission controls by division/directorate</li>
              <li>System configuration settings</li>
              <li>Audit logs and activity tracking</li>
              <li>Data import/export tools</li>
              <li>Budget template management</li>
              <li>Approval workflow configuration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}