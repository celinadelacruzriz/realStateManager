import React from 'react'
import { Calendar, Clock, User, Mail, Phone, Check, X } from 'lucide-react'
import { Appointment } from '../types'

interface AppointmentListProps {
  appointments: Appointment[]
  onUpdateStatus: (id: number, status: Appointment['status']) => void
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, onUpdateStatus }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Appointments</h2>
      <div className="space-y-4">
        {appointments.length === 0 ? (
          <p className="text-gray-500">No appointments scheduled yet.</p>
        ) : (
          appointments.map(appointment => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <User size={18} className="text-gray-500" />
                    <span className="font-medium">{appointment.clientName}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={18} className="text-gray-500" />
                    <span>{appointment.clientEmail}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={18} className="text-gray-500" />
                    <span>{appointment.clientPhone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} className="text-gray-500" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={18} className="text-gray-500" />
                    <span>{appointment.time}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => onUpdateStatus(appointment.id, 'confirmed')}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                    title="Confirm"
                  >
                    <Check size={20} />
                  </button>
                  <button
                    onClick={() => onUpdateStatus(appointment.id, 'cancelled')}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    title="Cancel"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="mt-2">
                <span className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                  ${appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AppointmentList