"use client"

import { useState } from "react"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"
import { useRouter, useSearchParams } from "next/navigation"

const Checkout = () => {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  // Get items from URL query
  const searchParams = useSearchParams()
  const items = searchParams.get('items') ? JSON.parse(searchParams.get('items') as string) : []

  const calculateTotal = () => {
    return items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
  }

  const handleConfirmOrder = async () => {
    setIsProcessing(true)
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // Redirect to success page or show confirmation
    alert("Order confirmed successfully!")
    router.push("/dashboard/orders")
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container py-10">
        <button onClick={() => router.back()} className="mb-6 flex items-center text-gray-600 hover:text-gray-900">
          <FaArrowLeft className="mr-2" /> Back to Cart
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-aviano-regular uppercase font-bold mb-8">Confirm Your Order</h1>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Order Summary</h2>
            </div>
            <div className="p-6">
              {items.map((item: any) => (
                <div key={item.id} className="flex items-center py-4 border-b border-gray-200 last:border-0">
                  <div className="flex-shrink-0 h-16 w-16">
                    <Image
                      className="h-16 w-16 rounded-md object-cover"
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="text-sm font-medium text-gray-900">{item.product.name}</div>
                    <div className="text-sm text-gray-500">Quantity: {item.quantity}</div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}

              <div className="mt-6 text-right">
                <div className="text-lg font-bold">Total: ${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Confirm Order Button */}
          <div className="flex justify-end">
            <button
              onClick={handleConfirmOrder}
              disabled={isProcessing}
              className={`px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors
                ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isProcessing ? "Processing..." : "Confirm Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

