import React from 'react';

interface HeaderProps {
  title: string;
  fiscalYear?: string;
  required?: string;
  authorized?: string;
}

export default function Header({ title, fiscalYear = "FY 2X", required = "$XXXX", authorized = "$YYYY" }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-blue-100 text-sm mt-1">Air Force Financial Management System</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full">
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