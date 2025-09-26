import React from 'react';
import { Home, FileText, DollarSign, Settings, Search, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'requirements', label: 'Requirements', icon: FileText },
  { id: 'status-of-funds', label: 'Status of Funds', icon: DollarSign },
  { id: 'admin', label: 'Financial Management Hub', icon: Settings },
];

export default function Sidebar({ currentPage, onPageChange, isCollapsed, onToggleCollapse }: SidebarProps) {
  return (
    <nav className={`usa-sidenav sidebar-nav ${isCollapsed ? 'w-16' : 'w-72'} transition-all duration-300 ease-in-out`}>
      {/* Header */}
      <div className="usa-sidenav__item border-b border-blue-600 p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-bold text-lg">G</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">GIFF</h1>
                <p className="text-blue-200 text-xs">Financial Tracker</p>
              </div>
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            className="usa-button usa-button--unstyled text-white hover:bg-blue-600 p-2 rounded-md transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="usa-search usa-search--small">
            <div className="usa-search__input-group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                className="usa-input pl-10 bg-white/10 border-white/20 text-white placeholder-blue-200 focus:bg-white focus:text-gray-900 focus:placeholder-gray-500"
                type="search"
                name="search"
                placeholder="Quick Search"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 p-4">
        <ul className="usa-sidenav__sublist space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id} className="usa-sidenav__item">
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive 
                      ? "bg-white text-blue-600 shadow-lg font-semibold" 
                      : "text-blue-100 hover:bg-blue-600 hover:text-white"
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={20} className={isActive ? 'text-blue-600' : ''} />
                  {!isCollapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Notifications */}
      <div className="p-4 border-t border-blue-600">
        <button className="usa-button usa-button--unstyled w-full flex items-center space-x-3 px-4 py-3 text-blue-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors">
          <div className="relative">
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          {!isCollapsed && <span className="font-medium">Notifications</span>}
        </button>
      </div>
    </nav>
  );
}