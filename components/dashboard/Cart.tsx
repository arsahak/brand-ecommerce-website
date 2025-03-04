// 'use client'
// import { FiSearch, FiTrash2, FiEdit } from "react-icons/fi"
// import { FaShoppingCart, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa"
// import { BiSort, BiMinus } from "react-icons/bi"
// import Image from "next/image"
// import Link from "next/link"

// interface CartItem {
//   id: string;
//   product: {
//     name: string;
//     sku: string;
//     image: string;
//   };
//   price: number;
//   quantity: number;
//   total: number;
//   status: string;
//   addedOn: string
// }

// interface DashboardCartProps {
//   cartItems: CartItem[];
// }

// const DashboardCart = ({ cartItems }: DashboardCartProps) => {

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "in stock":
//         return "bg-green-100 text-green-800"
//       case "low stock":
//         return "bg-yellow-100 text-yellow-800"
//       case "out of stock":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   // Calculate cart summary
//   const cartSummary = {
//     subtotal: cartItems.reduce((sum, item) => sum + item.total, 0),
//     tax: cartItems.reduce((sum, item) => sum + item.total, 0) * 0.08,
//     shipping: 15.0,
//     discount: 25.0,
//   }

//   const total = cartSummary.subtotal + cartSummary.tax + cartSummary.shipping - cartSummary.discount

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container py-10">
//         {/* Header Section */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div>
//               <h1 className="text-2xl md:text-3xl font-aviano-regular uppercase font-bold mb-2 flex items-center">
//                 <FaShoppingCart className="mr-2" /> Shopping Cart
//               </h1>
//               <p className="text-gray-600">Manage items in your shopping cart</p>
//             </div>
//             <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
//               <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                 <FiTrash2 className="w-4 h-4 mr-2" />
//                 Clear Cart
//               </button>
//               <button className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-md shadow-sm text-sm font-medium hover:bg-gray-800">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>

//           {/* Search and Filter Bar */}
//           <div className="mt-6 flex flex-col sm:flex-row gap-4">
//             <div className="flex-1 relative">
//               <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search items..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
//               />
//             </div>
//             <div className="relative">
//               <select className="border border-gray-300 rounded-md pl-4 pr-10 py-2 bg-white focus:ring-black focus:border-black appearance-none">
//                 <option value="">All Items</option>
//                 <option value="in-stock">In Stock</option>
//                 <option value="low-stock">Low Stock</option>
//                 <option value="out-of-stock">Out of Stock</option>
//               </select>
//               <BiSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//             </div>
//             <div className="relative">
//               <select className="border border-gray-300 rounded-md pl-4 pr-10 py-2 bg-white focus:ring-black focus:border-black appearance-none">
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="highest">Highest Price</option>
//                 <option value="lowest">Lowest Price</option>
//               </select>
//               <BiSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//             </div>
//           </div>
//         </div>

//         <div className=" gap-6">
//           {/* Cart Items Table */}
//           <div className="">
//             <div className="bg-white rounded-lg shadow overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                       >
//                         Product
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                       >
//                         Price
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                       >
//                         Quantity
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                       >
//                         Total
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                       >
//                         Status
//                       </th>
//                       <th scope="col" className="relative px-6 py-3">
//                         <span className="sr-only">Actions</span>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {cartItems.map((item) => (
//                       <tr key={item.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-16 w-16">
//                               <Image
//                                 className="h-16 w-16 rounded-md object-cover"
//                                 src={item.product.image || "/placeholder.svg"}
//                                 alt={item.product.name}
//                                 width={64}
//                                 height={64}
//                               />
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">{item.product.name}</div>
//                               <div className="text-sm text-gray-500">SKU: {item.product.sku}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.price.toFixed(2)}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center border rounded-md w-24">
//                             <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
//                               <BiMinus className="w-4 h-4" />
//                             </button>
//                             <input
//                               type="number"
//                               value={item.quantity}
//                               className="w-10 text-center border-0 focus:ring-0"
//                               readOnly
//                             />
//                             <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
//                               <FaPlus className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           ${item.total.toFixed(2)}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusColor(
//                               item.status,
//                             )}`}
//                           >
//                             {item.status}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <div className="flex items-center justify-end space-x-2">
//                             <button className="text-gray-400 hover:text-gray-500">
//                               <FiEdit className="w-5 h-5" />
//                             </button>
//                             <button className="text-gray-400 hover:text-red-500">
//                               <FiTrash2 className="w-5 h-5" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Pagination */}
//               <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//                 <div className="flex-1 flex justify-between sm:hidden">
//                   <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                     Previous
//                   </button>
//                   <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                     Next
//                   </button>
//                 </div>
//                 <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                   <div>
//                     <p className="text-sm text-gray-700">
//                       Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
//                       <span className="font-medium">5</span> results
//                     </p>
//                   </div>
//                   <div>
//                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                       <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                         <span className="sr-only">Previous</span>
//                         <FaChevronLeft className="h-5 w-5" />
//                       </button>
//                       <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                         1
//                       </button>
//                       <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                         <span className="sr-only">Next</span>
//                         <FaChevronRight className="h-5 w-5" />
//                       </button>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DashboardCart

// "use client"
// import { FaShoppingCart, FaPlus } from "react-icons/fa"
// import { BiMinus } from "react-icons/bi"
// import Image from "next/image"
// import { useState } from "react"
// import { useRouter } from "next/navigation"


// const DashboardCart = () => {
//   const router = useRouter()

//   // Example cart items data with selection state
//   const [cartItems, setCartItems] = useState([
//     {
//       id: "ITEM001",
//       product: {
//         name: "Premium Orange Juice",
//         image: "/placeholder.svg",
//         sku: "BEV-2024-001",
//       },
//       price: 2.99,
//       quantity: 1,
//       selected: false,
//     },
//     {
//       id: "ITEM002",
//       product: {
//         name: "Laptop Pro",
//         image: "/placeholder.svg",
//         sku: "TECH-2024-045",
//       },
//       price: 1299.99,
//       quantity: 1,
//       selected: false,
//     },
//     {
//       id: "ITEM003",
//       product: {
//         name: "Running Shoes",
//         image: "/placeholder.svg",
//         sku: "SHOE-2024-112",
//       },
//       price: 89.99,
//       quantity: 1,
//       selected: true,
//     },
//     {
//       id: "ITEM004",
//       product: {
//         name: "Smart Fitness Band",
//         image: "/placeholder.svg",
//         sku: "WEAR-2024-078",
//       },
//       price: 49.99,
//       quantity: 1,
//       selected: true,
//     },
//   ])

//   // Handle quantity change
//   const updateQuantity = (itemId: string, increment: boolean) => {
//     setCartItems(
//       cartItems.map((item) => {
//         if (item.id === itemId) {
//           const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)
//           return { ...item, quantity: newQuantity }
//         }
//         return item
//       }),
//     )
//   }

//   // Handle item selection
//   const toggleSelection = (itemId: string) => {
//     setCartItems(
//       cartItems.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, selected: !item.selected }
//         }
//         return item
//       }),
//     )
//   }

//   // Calculate total for selected items
//   const calculateTotal = () => {
//     return cartItems.filter((item) => item.selected).reduce((sum, item) => sum + item.price * item.quantity, 0)
//   }

//   // Handle checkout
//   const handleCheckout = () => {
//     const selectedItems = cartItems.filter((item) => item.selected)
//     if (selectedItems.length === 0) {
//       alert("Please select items to checkout")
//       return
//     }
//     // Navigate to checkout page with selected items
//     router.push({
//       pathname: "/checkout",
//       query: { items: JSON.stringify(selectedItems) },
//     })
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container py-10">
//         {/* Header Section */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div>
//               <h1 className="text-2xl md:text-3xl font-aviano-regular uppercase font-bold mb-2 flex items-center">
//                 <FaShoppingCart className="mr-2" /> Shopping Cart
//               </h1>
//               <p className="text-gray-600">Select items to proceed to checkout</p>
//             </div>
//             <div className="mt-4 md:mt-0">
//               <button
//                 onClick={handleCheckout}
//                 className="inline-flex items-center justify-center px-6 py-2 bg-black text-white rounded-md shadow-sm text-sm font-medium hover:bg-gray-800"
//               >
//                 Proceed to Checkout (${calculateTotal().toFixed(2)})
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Cart Items Table */}
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                   >
//                     Select
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                   >
//                     Product
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                   >
//                     Price
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                   >
//                     Quantity
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
//                   >
//                     Total
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {cartItems.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <input
//                         type="checkbox"
//                         checked={item.selected}
//                         onChange={() => toggleSelection(item.id)}
//                         className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
//                       />
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-16 w-16">
//                           <Image
//                             className="h-16 w-16 rounded-md object-cover"
//                             src={item.product.image || "/placeholder.svg"}
//                             alt={item.product.name}
//                             width={64}
//                             height={64}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">{item.product.name}</div>
//                           <div className="text-sm text-gray-500">SKU: {item.product.sku}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.price.toFixed(2)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center border rounded-md w-24">
//                         <button
//                           onClick={() => updateQuantity(item.id, false)}
//                           className="px-2 py-1 text-gray-600 hover:text-gray-800"
//                         >
//                           <BiMinus className="w-4 h-4" />
//                         </button>
//                         <input
//                           type="number"
//                           value={item.quantity}
//                           className="w-10 text-center border-0 focus:ring-0"
//                           readOnly
//                         />
//                         <button
//                           onClick={() => updateQuantity(item.id, true)}
//                           className="px-2 py-1 text-gray-600 hover:text-gray-800"
//                         >
//                           <FaPlus className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DashboardCart


"use client"

import { FiSearch, FiFilter } from "react-icons/fi"
import { FaShoppingCart } from "react-icons/fa"
import { BiMinus, BiPlus } from "react-icons/bi"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const DashboardCart = () => {
  const router = useRouter()

  // Example cart items data with selection state and stock information
  const initialCartItems = [
    {
      id: "ITEM001",
      product: {
        name: "Premium Orange Juice",
        image: "/assets/product/bindi.jpg",
        sku: "BEV-2024-001",
      },
      price: 2.99,
      quantity: 1,
      selected: false,
      stock: {
        status: "In Stock",
        quantity: 24,
      },
    },
    {
      id: "ITEM002",
      product: {
        name: "Laptop Pro",
        image: "/assets/product/earrings.jpg",
        sku: "TECH-2024-045",
      },
      price: 1299.99,
      quantity: 1,
      selected: false,
      stock: {
        status: "Low Stock",
        quantity: 3,
      },
    },
    {
      id: "ITEM003",
      product: {
        name: "Running Shoes",
        image: "/assets/product/clothes (1).jpg",
        sku: "SHOE-2024-112",
      },
      price: 89.99,
      quantity: 1,
      selected: true,
      stock: {
        status: "In Stock",
        quantity: 15,
      },
    },
    {
      id: "ITEM004",
      product: {
        name: "Smart Fitness Band",
        image: "/assets/product/clothes (2).jpg",
        sku: "WEAR-2024-078",
      },
      price: 49.99,
      quantity: 1,
      selected: true,
      stock: {
        status: "Out of Stock",
        quantity: 0,
      },
    },
  ]

  const [cartItems, setCartItems] = useState(initialCartItems)
  const [filteredItems, setFilteredItems] = useState(initialCartItems)
  const [searchTerm, setSearchTerm] = useState("")
  const [stockFilter, setStockFilter] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Handle quantity change
  const updateQuantity = (itemId: string, increment: boolean) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemId) {
          // Don't allow increasing quantity beyond available stock
          if (increment && item.quantity >= item.stock.quantity) {
            return item
          }
          const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  // Handle item selection
  const toggleSelection = (itemId: string) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, selected: !item.selected }
        }
        return item
      }),
    )
  }

  // Calculate total for selected items
  const calculateTotal = () => {
    return filteredItems.filter((item) => item.selected).reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  // Handle checkout
//   const handleCheckout = () => {
//     const selectedItems = cartItems.filter((item) => item.selected)
//     if (selectedItems.length === 0) {
//       alert("Please select items to checkout")
//       return
//     }
//     // Navigate to checkout page with selected items
//     router.push({
//       pathname: "/checkout",
//       query: { items: JSON.stringify(selectedItems) },
//     })
//   }

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in stock":
        return "bg-green-100 text-green-800"
      case "low stock":
        return "bg-yellow-100 text-yellow-800"
      case "out of stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Apply filters and search
  useEffect(() => {
    let result = [...cartItems]

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (item) =>
          item.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.product.sku.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply stock filter
    if (stockFilter) {
      result = result.filter((item) => item.stock.status.toLowerCase() === stockFilter.toLowerCase())
    }

    setFilteredItems(result)
  }, [cartItems, searchTerm, stockFilter])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container py-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-aviano-regular uppercase font-bold mb-2 flex items-center">
                <FaShoppingCart className="mr-2" /> Shopping Cart
              </h1>
              <p className="text-gray-600">Select items to proceed to checkout</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                // onClick={handleCheckout}
                className="inline-flex items-center justify-center px-6 py-2 bg-black text-white rounded-md shadow-sm text-sm font-medium hover:bg-gray-800"
              >
                Proceed to Checkout (${calculateTotal().toFixed(2)})
              </button>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FiFilter className="w-4 h-4 mr-2" />
                Filter by Stock
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-1">
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${stockFilter === "" ? "font-bold" : ""}`}
                      onClick={() => {
                        setStockFilter("")
                        setIsFilterOpen(false)
                      }}
                    >
                      All Items
                    </button>
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${stockFilter === "in stock" ? "font-bold" : ""}`}
                      onClick={() => {
                        setStockFilter("in stock")
                        setIsFilterOpen(false)
                      }}
                    >
                      In Stock
                    </button>
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${stockFilter === "low stock" ? "font-bold" : ""}`}
                      onClick={() => {
                        setStockFilter("low stock")
                        setIsFilterOpen(false)
                      }}
                    >
                      Low Stock
                    </button>
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${stockFilter === "out of stock" ? "font-bold" : ""}`}
                      onClick={() => {
                        setStockFilter("out of stock")
                        setIsFilterOpen(false)
                      }}
                    >
                      Out of Stock
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Active filters */}
          {(searchTerm || stockFilter) && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Search: {searchTerm}
                  <button className="ml-1 text-gray-500 hover:text-gray-700" onClick={() => setSearchTerm("")}>
                    ×
                  </button>
                </span>
              )}
              {stockFilter && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Stock: {stockFilter}
                  <button className="ml-1 text-gray-500 hover:text-gray-700" onClick={() => setStockFilter("")}>
                    ×
                  </button>
                </span>
              )}
              {(searchTerm || stockFilter) && (
                <button
                  className="text-sm text-blue-600 hover:text-blue-800"
                  onClick={() => {
                    setSearchTerm("")
                    setStockFilter("")
                  }}
                >
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>

        {/* Cart Items Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Select
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Stock
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      {/* <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={() => toggleSelection(item.id)}
                          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                          disabled={item.stock.status === "Out of Stock"}
                        />
                      </td> */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={() => toggleSelection(item.id)}
                          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                          disabled={item.stock.status === "Out of Stock"}
                        />
                          <div className="flex-shrink-0 h-16 w-16">
                            <Image
                              className="h-16 w-16 rounded-md object-cover"
                              src={item?.product?.image || "/placeholder.svg"}
                              alt={item.product.name}
                              width={64}
                              height={64}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-base font-medium text-gray-900">{item.product.name}</div>
                            <div className="text-sm text-gray-500">SKU: {item.product.sku}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">${item.price.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center border rounded-md w-[6.5rem]">
                          <button
                            onClick={() => updateQuantity(item.id, false)}
                            className="px-2 py-1 text-gray-600 hover:text-gray-800"
                            disabled={item.stock.status === "Out of Stock"}
                          >
                            <BiMinus className="w-4 h-4" />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            className="w-10 text-center border-0 focus:ring-0"
                            readOnly
                          />
                          <button
                            onClick={() => updateQuantity(item.id, true)}
                            className="px-2 py-1 text-gray-600 hover:text-gray-800"
                            disabled={item.stock.status === "Out of Stock" || item.quantity >= item.stock.quantity}
                          >
                            <BiPlus className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusColor(item.stock.status)}`}
                        >
                          {item.stock.status}
                          {item.stock.status !== "Out of Stock" && (
                            <span className="ml-1">({item.stock.quantity})</span>
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                      No items match your search or filter criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Empty state if no items */}
          {cartItems.length === 0 && (
            <div className="py-12 text-center">
              <FaShoppingCart className="mx-auto h-12 w-12 text-gray-300" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
              <p className="mt-1 text-sm text-gray-500">Start adding items to your cart to see them here.</p>
              <div className="mt-6">
                <Link
                  href="/products"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardCart

