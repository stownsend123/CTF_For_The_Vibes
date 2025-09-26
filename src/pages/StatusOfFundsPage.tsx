import React from 'react';
import Header from '../components/Layout/Header';

export default function StatusOfFundsPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <Header title="Status of Funds" />
      <main className="usa-section p-6">
        <div className="usa-grid-container">
          <div className="usa-card chart-container animate-fade-in-up">
            <div className="usa-card__container">
              <div className="usa-card__header text-center">
                <h2 className="usa-card__heading text-3xl font-bold text-gray-900">Status of Funds</h2>
                <p className="text-gray-600 mt-2">
                  Comprehensive fund status information, trends, and financial analytics.
                </p>
              </div>
              <div className="usa-card__body">
                <div className="max-w-4xl mx-auto">
                  <div className="usa-alert usa-alert--success usa-alert--slim">
                    <div className="usa-alert__body">
                      <p className="usa-alert__text">
                        Advanced fund tracking and analysis capabilities coming soon.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Planned Features:</h3>
                    <div className="usa-list">
                      <ul className="usa-list space-y-3">
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-cool mr-3 mt-1">Track</span>
                          <span>Real-time authorized, obligated, and expended fund tracking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-warm mr-3 mt-1">Balance</span>
                          <span>Automated balance calculations and future projections</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag mr-3 mt-1">Trends</span>
                          <span>Historical trend analysis with predictive modeling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-cool mr-3 mt-1">Compare</span>
                          <span>Budget vs. actual spending comparisons and variance analysis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-warm mr-3 mt-1">Breakdown</span>
                          <span>Division and directorate financial breakdowns</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag mr-3 mt-1">Visual</span>
                          <span>Interactive charts and advanced data visualizations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="usa-tag usa-tag--accent-cool mr-3 mt-1">Export</span>
                          <span>Comprehensive export capabilities for reporting and analysis</span>
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