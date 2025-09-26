import React from 'react';

interface HeaderProps {
  title: string;
  fiscalYear?: string;
  required?: string;
  authorized?: string;
}

export default function Header({ title, fiscalYear = "FY 2X", required = "$XXXX", authorized = "$YYYY" }: HeaderProps) {
  return (
    <div className="bg-air-force-blue text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="text-sm">
          <span className="mr-4">{fiscalYear}</span>
          <span className="mr-4">Required: {required}</span>
          <span>Authorized: {authorized}</span>
        </div>
      </div>
    </div>
  );
}