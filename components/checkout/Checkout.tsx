// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { FaArrowLeft } from "react-icons/fa"
// import { useRouter, useSearchParams } from "next/navigation"

// const Checkout = () => {
//   const router = useRouter()
//   const [isProcessing, setIsProcessing] = useState(false)

//   // Get items from URL query
//   const searchParams = useSearchParams()
//   const items = searchParams.get('items') ? JSON.parse(searchParams.get('items') as string) : []

//   const calculateTotal = () => {
//     return items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
//   }

//   const handleConfirmOrder = async () => {
//     setIsProcessing(true)
//     // Simulate order processing
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     // Redirect to success page or show confirmation
//     alert("Order confirmed successfully!")
//     router.push("/dashboard/orders")
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container py-10">
//         <button onClick={() => router.back()} className="mb-6 flex items-center text-gray-600 hover:text-gray-900">
//           <FaArrowLeft className="mr-2" /> Back to Cart
//         </button>

//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-2xl md:text-3xl font-aviano-regular uppercase font-bold mb-8">Confirm Your Order</h1>

//           {/* Order Summary */}
//           <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h2 className="text-lg font-semibold">Order Summary</h2>
//             </div>
//             <div className="p-6">
//               {items.map((item: any) => (
//                 <div key={item.id} className="flex items-center py-4 border-b border-gray-200 last:border-0">
//                   <div className="flex-shrink-0 h-16 w-16">
//                     <Image
//                       className="h-16 w-16 rounded-md object-cover"
//                       src={item.product.image || "/placeholder.svg"}
//                       alt={item.product.name}
//                       width={64}
//                       height={64}
//                     />
//                   </div>
//                   <div className="ml-4 flex-1">
//                     <div className="text-sm font-medium text-gray-900">{item.product.name}</div>
//                     <div className="text-sm text-gray-500">Quantity: {item.quantity}</div>
//                   </div>
//                   <div className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
//                 </div>
//               ))}

//               <div className="mt-6 text-right">
//                 <div className="text-lg font-bold">Total: ${calculateTotal().toFixed(2)}</div>
//               </div>
//             </div>
//           </div>

//           {/* Confirm Order Button */}
//           <div className="flex justify-end">
//             <button
//               onClick={handleConfirmOrder}
//               disabled={isProcessing}
//               className={`px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors
//                 ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               {isProcessing ? "Processing..." : "Confirm Order"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Checkout

"use client"
import { Products } from '@/types/product';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Checkout = () => {
  // const [paymentMethod, setPaymentMethod] = useState<string>("delivery")
  // const [termsAccepted, setTermsAccepted] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [products] = useState<Products[]>([
  //   {
  //     id: "1",
  //     title: "Rok Dispenser",
  //     price: 55,
  //     quantity: 1,
  //     image: "/placeholder.svg?height=40&width=40",
  //   },
  //   {
  //     id:"2",
  //     title: "Rok Distilled Water",
  //     price: 199,
  //     quantity: 1,
  //     image: "/placeholder.svg?height=40&width=40",
  //   },
  // ])

  const searchParams = useSearchParams()
  const router = useRouter()

  const [items, setItems] = useState<Products[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("delivery")
  const [termsAccepted, setTermsAccepted] = useState(false)

  useEffect(() => {
    const itemsParam = searchParams.get("items")
    if (itemsParam) {
      try {
        const parsedItems = JSON.parse(decodeURIComponent(itemsParam))
        setItems(parsedItems)
      } catch (error) {
        console.error("Invalid items data:", error)
      }
    }
  }, [searchParams])

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const handleConfirmOrder = async () => {
    if (!termsAccepted) {
      alert("Please accept the terms and conditions.")
      return
    }

    setIsProcessing(true)
    await new Promise((res) => setTimeout(res, 2000))
    alert("Order confirmed successfully!")
    router.push("/dashboard/orders")
  }

  const subtotal = "Tk 245"
  const shipping = "Tk 0"
  const total = "Tk 245"
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* form */}
        <div>
          <div className="bg-slate-50 rounded-md p-6">
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div> */}
              {/* <span className="text-sm font-medium">Add new address</span> */}
            </div>

            <h2 className="text-xl font-medium mb-6">Enter a New Address</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="district" className="text-sm text-gray-600 mb-1 flex items-center block">
                  <span className="mr-1">+</span> District
                </label>
                <div className="relative">
                  <select
                    id="district"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white appearance-none"
                  >
                    <option value="" disabled selected>
                      Select district
                    </option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                    <option value="district3">District 3</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="thana" className="text-sm text-gray-600 mb-1 flex items-center block">
                  <span className="mr-1">+</span> Thana
                </label>
                <div className="relative">
                  <select
                    id="thana"
                    
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white appearance-none"
                  >
                    <option value="" disabled selected>
                      Select thana
                    </option>
                    <option value="thana1">Thana 1</option>
                    <option value="thana2">Thana 2</option>
                    <option value="thana3">Thana 3</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="area" className="text-sm text-gray-600 mb-1 flex items-center">
                  <span className="mr-1">+</span> Area
                </label>
                <div className="relative">
                  <select
                    id="area"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white appearance-none"
                  >
                    <option value="" disabled selected>
                      Select area
                    </option>
                    <option value="area1">Area 1</option>
                    <option value="area2">Area 2</option>
                    <option value="area3">Area 3</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="postcode" className="text-sm text-gray-600 mb-1 flex items-center block">
                  <span className="mr-1">+</span> Post Code
                </label>
                <input
                  id="postcode"
                  type="text"
                  placeholder="Enter your post code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="text-sm text-gray-600 mb-1 flex items-center block">
                <span className="mr-1">+</span> Address Details
              </label>
              <textarea
                id="address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white h-24 resize-none"
              ></textarea>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="delivery"
                      name="paymentMethod"
                      value="delivery"
                      checked={paymentMethod === "delivery"}
                      onChange={() => setPaymentMethod("delivery")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="delivery" className="ml-2 font-medium">
                      Delivery Charge
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="full"
                      name="paymentMethod"
                      value="full"
                      checked={paymentMethod === "full"}
                      onChange={() => setPaymentMethod("full")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="full" className="ml-2 font-medium">
                      Full Payment
                    </label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      id="partial"
                      name="paymentMethod"
                      value="partial"
                      checked={paymentMethod === "partial"}
                      onChange={() => setPaymentMethod("partial")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="partial" className="ml-2 font-medium">
                      Partial Payment
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the website's <span className="underline">Terms & Conditions</span>,{" "}
                  <span className="underline">Privacy Policy</span>, and <span className="underline">Refund Policy</span>.
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Pay later and confirm order
              </button>
              <button className="flex-1 px-4 py-2 border text-white border-gray-300 rounded-md bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Pay now and confirm order
              </button>
            </div>
          </div>
        </div>
        {/* product info */}
        <div>
          <div className="bg-white rounded-md border p-6">
            <h2 className="text-lg font-medium mb-6">Product information</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-normal text-gray-600 w-10">No</th>
                    <th className="text-left py-2 font-normal text-gray-600 w-16">Image</th>
                    <th className="text-left py-2 font-normal text-gray-600">Title</th>
                    <th className="text-left py-2 font-normal text-gray-600">Price</th>
                    <th className="text-left py-2 font-normal text-gray-600 w-20">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="py-4">{product.id}</td>
                      <td className="py-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden relative">
                          <Image
                            src={product.product.image || "/placeholder.svg"}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-4">{product.product.name}</td>
                      <td className="py-4">{product.price}</td>
                      <td className="py-4">{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
{/* 
            <div className="flex justify-between items-center my-4">
              <button
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <div className="flex items-center gap-1">
                <button className="h-8 w-8 p-0 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200">
                  {currentPage}
                </button>
              </div>

              <button
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div> */}

            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between py-1">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Tk{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{shipping}</span>
              </div>
              <div className="flex justify-between py-1 border-t mt-2 pt-2">
                <span className="text-gray-600 font-medium">Total</span>
                <div className="text-right">
                  <div className="font-bold">Tk{calculateTotal().toFixed(2)}</div>
                  <div className="text-xs text-gray-500">including VAT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

