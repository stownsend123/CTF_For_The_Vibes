import { HelpCircle, Plus, BarChart3 } from 'lucide-react'

interface PlaygroundCardProps {
  type: 'compare' | 'create' | 'draft'
  title: string
  onClick?: () => void
}

export default function PlaygroundCard({ type, title, onClick }: PlaygroundCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'compare':
        return <HelpCircle className="w-12 h-12 text-blue-600" />
      case 'create':
        return <Plus className="w-12 h-12 text-blue-600" />
      case 'draft':
        return <BarChart3 className="w-12 h-12 text-blue-600" />
      default:
        return <HelpCircle className="w-12 h-12 text-gray-600" />
    }
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-1 p-4"
      onClick={onClick}
    >
      <div className="text-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            {getIcon()}
          </div>
          <h3 className="text-sm font-semibold text-gray-900">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}