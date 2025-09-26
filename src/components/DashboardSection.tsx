import { Search } from 'lucide-react'

interface DashboardSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function DashboardSection({ title, children, className = '' }: DashboardSectionProps) {
  return (
    <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white bg-blue-500 px-4 py-2 rounded-full flex items-center">
          {title}
          <Search className="ml-2 w-4 h-4" />
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  )
}