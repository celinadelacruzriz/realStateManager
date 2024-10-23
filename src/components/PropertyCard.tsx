import React, { useState } from 'react'
import { Home, Bed, Bath, Square } from 'lucide-react'
import { Property } from '../types'
import AppointmentForm from './AppointmentForm'

interface PropertyCardProps {
  property: Property
  onScheduleAppointment: (appointment: any) => void
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onScheduleAppointment }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.address}</p>
        <p className="text-xl font-bold text-gray-900 mb-4">
          ${property.price.toLocaleString()}
        </p>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Bed size={18} className="mr-1" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={18} className="mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square size={18} className="mr-1" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Schedule Viewing
        </button>
      </div>

      {showForm && (
        <AppointmentForm
          propertyId={property.id}
          onSubmit={(data) => {
            onScheduleAppointment(data)
            setShowForm(false)
          }}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}

export default PropertyCard