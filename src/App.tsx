import React, { useState } from 'react'
import { Calendar, Clock, Home, Menu } from 'lucide-react'
import { Appointment, Property } from './types'
import PropertyList from './components/PropertyList'
import AppointmentList from './components/AppointmentList'
import Sidebar from './components/Sidebar'

function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState<'properties' | 'appointments'>('properties')

  const addAppointment = (appointment: Omit<Appointment, 'id' | 'status'>) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now(),
      status: 'pending'
    }
    setAppointments([...appointments, newAppointment])
  }

  const updateAppointmentStatus = (id: number, status: Appointment['status']) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <Menu size={24} />
              </button>
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Real Estate Manager</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          activeView={activeView}
          setActiveView={setActiveView}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeView === 'properties' ? (
            <PropertyList onScheduleAppointment={addAppointment} />
          ) : (
            <AppointmentList
              appointments={appointments}
              onUpdateStatus={updateAppointmentStatus}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default App