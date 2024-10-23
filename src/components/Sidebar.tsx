import React from 'react'
import { Home, Calendar } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  activeView: 'properties' | 'appointments'
  setActiveView: (view: 'properties' | 'appointments') => void
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeView, setActiveView, onClose }) => {
  return (
    <div className={`
      fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-30
      md:relative md:translate-x-0
    `}>
      <div className="h-full flex flex-col">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
        </div>

        <nav className="flex-1 px-2 space-y-1">
          <button
            onClick={() => {
              setActiveView('properties')
              onClose()
            }}
            className={`
              w-full flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${activeView === 'properties'
                ? 'bg-blue-100 text-blue-900'
                : 'text-gray-600 hover:bg-gray-50'}
            `}
          >
            <Home className="mr-3 h-5 w-5" />
            Properties
          </button>

          <button
            onClick={() => {
              setActiveView('appointments')
              onClose()
            }}
            className={`
              w-full flex items-center px-4 py-2 text-sm font-medium rounded-md
              ${activeView === 'appointments'
                ? 'bg-blue-100 text-blue-900'
                : 'text-gray-600 hover:bg-gray-50'}
            `}
          >
            <Calendar className="mr-3 h-5 w-5" />
            Appointments
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar