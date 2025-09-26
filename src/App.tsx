import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import HomePage from './pages/HomePage';
import RequirementsPage from './pages/RequirementsPage';
import StatusOfFundsPage from './pages/StatusOfFundsPage';
import AdminPage from './pages/AdminPage';
import RequirementsPage from './pages/RequirementsPage';
import StatusOfFundsPage from './pages/StatusOfFundsPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'requirements':
        return <RequirementsPage />;
      case 'status-of-funds':
        return <StatusOfFundsPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'requirements':
        return <RequirementsPage />;
      case 'status-of-funds':
        return <StatusOfFundsPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderPage()}