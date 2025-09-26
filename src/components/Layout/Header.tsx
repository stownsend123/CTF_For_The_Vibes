import React from 'react';

interface HeaderProps {
  title: string;
  fiscalYear?: string;
  required?: string;
  authorized?: string;
}

export default function Header({ title, fiscalYear = "FY 2X", required = "$XXXX", authorized = "$YYYY" }: HeaderProps) {
  return (
    <header className="usa-header usa-header--basic bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="usa-nav-container px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="usa-header__logo-text text-3xl font-bold">{title}</h1>
            <p className="text-blue-100 text-sm mt-1">Air Force Financial Management System</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="usa-tag usa-tag--big bg-white/20 text-white border-white/30">
              <span className="font-semibold">{fiscalYear}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-xs text-blue-200 uppercase tracking-wide">Required</div>
                <div className="font-bold text-lg">{required}</div>
              </div>
              <div className="w-px h-8 bg-blue-400"></div>
              <div className="text-center">
                <div className="text-xs text-blue-200 uppercase tracking-wide">Authorized</div>
                <div className="font-bold text-lg">{authorized}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}