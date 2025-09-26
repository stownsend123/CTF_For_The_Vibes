'use client'

import { useState } from 'react'
import { Hop as Home, FileText, DollarSign, Settings, Search, Bell, ChevronLeft, ChevronRight } from 'lucide-react'

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'requirements', label: 'Requirements', icon: FileText },
  { id: 'status-of-funds', label: 'Status of Funds', icon: DollarSign },
  { id: 'admin', label: 'Financial Management Hub', icon: Settings },
]

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <nav className={`bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-xl ${isCollapsed ? 'w-16' : 'w-72'} transition-all duration-300 ease-in-out flex flex-col h-screen`}>
      {/* Header */}
      <div className="p-4 border-b border-blue-500">
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
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white hover:bg-blue-500 p-2 rounded-md transition-colors"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" size={16} />
            <input
              className="w-full pl-10 pr-4 py-2 bg-blue-500/50 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              type="search"
              placeholder="Quick Search"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive 
                      ? "bg-white text-blue-600 shadow-lg font-semibold" 
                      : "text-blue-100 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-blue-600' : ''} />
                  {!isCollapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Notifications */}
      <div className="p-4 border-t border-blue-500">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-blue-100 hover:bg-blue-500 hover:text-white rounded-lg transition-colors">
          <div className="relative">
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          {!isCollapsed && <span className="font-medium">Notifications</span>}
        </button>
      </div>
    </nav>
  )
}