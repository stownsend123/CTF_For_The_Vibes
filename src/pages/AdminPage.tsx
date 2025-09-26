import React from 'react';
import Header from '../components/Layout/Header';

export default function AdminPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <Header title="Financial Management Hub" />
      <main className="usa-section p-6">
        <div className="usa-grid-container">
          <div className="usa-card chart-container animate-fade-in-up">
            <div className="usa-card__container">
              <div className="usa-card__header text-center">
                <h2 className="usa-card__heading text-3xl font-bold text-gray-900">Financial Management Hub</h2>
                <p className="text-gray-600 mt-2">
                  Administrative controls for managing users, permissions, and system configuration.
                </p>
              </div>
              <div className="usa-card__body">
                <div className="max-w-4xl mx-auto">
                  <div className="usa-alert usa-alert--warning usa-alert--slim">
                    <div className="usa-alert__body">
                      <p className="usa-alert__text">
                        Administrative features require proper security clearance and authorization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Administrative Capabilities:</h3>
                    <div className="usa-list">
                      <ul className="usa-list space-y-3">
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-warm mr-3 mt-1">Users</span>
                          <span>Comprehensive user management and role assignments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-cool mr-3 mt-1">Access</span>
                          <span>Granular permission controls by division and directorate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag mr-3 mt-1">Config</span>
                          <span>System configuration settings and preferences</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-warm mr-3 mt-1">Audit</span>
                          <span>Comprehensive audit logs and activity tracking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-cool mr-3 mt-1">Import</span>
                          <span>Data import/export tools for system integration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag mr-3 mt-1">Templates</span>
                          <span>Budget template management and standardization</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-warm mr-3 mt-1">Workflow</span>
                          <span>Approval workflow configuration and automation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}