interface HeaderProps {
  title: string
  fiscalYear?: string
  required?: string
  authorized?: string
}

export default function Header({ 
  title, 
  fiscalYear = "FY 2X", 
  required = "Required: $XXXX", 
  authorized = "Authorized: $YYYY" 
}: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-blue-100 text-sm mt-1">Welcome, Giffords! 😊</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full">
              <span className="font-semibold">{fiscalYear}</span>
            </div>
            <div className="text-right">
              <div className="text-blue-100">{required}</div>
              <div className="text-blue-100">{authorized}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}