import { FiSearch, FiMoreHorizontal, FiDownload, FiFilter } from "react-icons/fi"
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { BiSort } from "react-icons/bi"
import Image from "next/image"
import Link from "next/link"

const Orders = () => {
  // Example orders data - replace with your actual data
  const orders = [
    {
      id: "ORD001",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/placeholder.svg",
      },
      date: "2024-02-28",
      status: "Processing",
      paymentStatus: "paid",
      items: 3,
      total: 249.99,
    },
    {
      id: "ORD002",
      customer: {
        name: "Sarah Smith",
        email: "sarah@example.com",
        avatar: "/placeholder.svg",
      },
      date: "2024-02-28",
      status: "Shipped",
      paymentStatus: "paid",
      items: 2,
      total: 129.99,
    },
    {
      id: "ORD003",
      customer: {
        name: "Mike Johnson",
        email: "mike@example.com",
        avatar: "/placeholder.svg",
      },
      date: "2024-02-27",
      status: "Delivered",
      paymentStatus: "paid",
      items: 1,
      total: 89.99,
    },
    {
      id: "ORD004",
      customer: {
        name: "Emily Brown",
        email: "emily@example.com",
        avatar: "/placeholder.svg",
      },
      date: "2024-02-27",
      status: "Pending",
      paymentStatus: "unpaid",
      items: 4,
      total: 399.99,
    },
    {
      id: "ORD005",
      customer: {
        name: "Alex Wilson",
        email: "alex@example.com",
        avatar: "/placeholder.svg",
      },
      date: "2024-02-26",
      status: "Cancelled",
      paymentStatus: "unpaid",
      items: 2,
      total: 159.99,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container py-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-aviano-regular uppercase font-bold mb-2">Orders</h1>
              <p className="text-gray-600">Manage and track your orders</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FiFilter className="w-4 h-4 mr-2" />
                Filters
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FiDownload className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-md shadow-sm text-sm font-medium hover:bg-gray-800">
                <FaPlus className="w-4 h-4 mr-2" />
                Add Order
              </button>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
            <div className="relative">
              <select className="border border-gray-300 rounded-md pl-4 pr-10 py-2 bg-white focus:ring-black focus:border-black appearance-none">
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <BiSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="border border-gray-300 rounded-md pl-4 pr-10 py-2 bg-white focus:ring-black focus:border-black appearance-none">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
              </select>
              <BiSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Order ID
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Customer
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Order Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Payment Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Items
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-fold text-gray-800 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Link href={`/orders/${order.id}`} className="hover:text-blue-600">
                        {order.id}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex capitalize text-sm leading-5 font-semibold rounded-full ${order.paymentStatus=== "unpaid"? "text-red-500": "text-green-500"}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items} items</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <FiMoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
                  <span className="font-medium">20</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <FaChevronLeft className="h-5 w-5" />
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    8
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <FaChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders

