import React from 'react'
import { X } from 'lucide-react'
import { Product } from '../types'

interface CartProps {
  cartItems: Product[]
  removeFromCart: (productId: number) => void
  closeCart: () => void
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart, closeCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      })
      const data = await response.json()
      window.location.href = data.init_point
    } catch (error) {
      console.error('Error creating MercadoPago preference:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={closeCart} className="text-gray-600 hover:text-gray-800">
              <X size={24} />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
                <button
                  onClick={handleCheckout}
                  className="w-full mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300"
                >
                  Checkout with MercadoPago
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart