import React from 'react'
import { Property } from '../types'
import PropertyCard from './PropertyCard'

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Downtown Condo',
    address: '123 Main St, Downtown',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200
  },
  {
    id: 2,
    title: 'Luxury Family Home',
    address: '456 Oak Ave, Suburbs',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800
  }
]

interface PropertyListProps {
  onScheduleAppointment: (appointment: any) => void
}

const PropertyList: React.FC<PropertyListProps> = ({ onScheduleAppointment }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onScheduleAppointment={onScheduleAppointment}
          />
        ))}
      </div>
    </div>
  )
}

export default PropertyList