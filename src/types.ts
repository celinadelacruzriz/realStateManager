export interface Appointment {
  id: number
  propertyId: number
  clientName: string
  clientEmail: string
  clientPhone: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'cancelled'
}

export interface Property {
  id: number
  title: string
  address: string
  price: number
  image: string
  type: 'house' | 'apartment' | 'condo'
  bedrooms: number
  bathrooms: number
  sqft: number
}