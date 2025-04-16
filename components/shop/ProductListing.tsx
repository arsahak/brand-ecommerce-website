
// "use client"

// import { useState, useEffect } from "react"
// import { LuGrid2X2 } from "react-icons/lu"
// import { BiChevronDown, BiListCheck, BiMenu } from "react-icons/bi"
// import {Products} from "@/types/product"
// import FilterLayout from "./FilterLayout"
// import ProductSidebar from "./ProductSidebar"
// import ProductGrid from "./ProductGrid"
// interface ProductListingProps {
//   products: Products[]
// }

// export default function ProductListing({ products }: ProductListingProps) {
//   const [isGridView, setIsGridView] = useState(true)
//   const [isMobile, setIsMobile] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)

//   // Filter State
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
//   const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
//   const [selectedColor, setSelectedColor] = useState<string | null>(null)
//   const [selectedSize, setSelectedSize] = useState<string | null>(null)
//   const [priceRange, setPriceRange] = useState<number>(1071)

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     checkIsMobile()
//     window.addEventListener("resize", checkIsMobile)

//     return () => {
//       window.removeEventListener("resize", checkIsMobile)
//     }
//   }, [])

//   const filteredProducts = products.filter((product) => {
//     return (
//       (!selectedCategory || product.category === selectedCategory) &&
//       (!selectedBrand || product.brand === selectedBrand) &&
//       (!selectedColor || product.color === selectedColor) &&
//       (!selectedSize || product.size === selectedSize) &&
//       product.price <= priceRange
//     )
//   })

//   const sidebarProps = {
//     selectedCategory,
//     setSelectedCategory,
//     selectedBrand,
//     setSelectedBrand,
//     selectedColor,
//     setSelectedColor,
//     selectedSize,
//     setSelectedSize,
//     priceRange,
//     setPriceRange,
//     isOpen,
//     setIsOpen,
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 overflow-x-hidden">
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Mobile Sidebar Trigger */}
//         {isMobile && (
//           <FilterLayout isOpen={isOpen} onClose={() => setIsOpen(false)}>
//             <button
//               onClick={() => setIsOpen(true)}
//               className="md:hidden fixed z-90 bottom-10 right-8 bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700"
//             >
//               <BiMenu className="w-6 h-6" />
//             </button>
//             <div className="w-[300px] sm:w-[400px] h-full bg-white p-4 overflow-y-auto">
//               <ProductSidebar {...sidebarProps} />
//             </div>
//           </FilterLayout>
//         )}

//         {/* Desktop Sidebar */}
//         {!isMobile && (
//           <div className="w-full md:w-64 space-y-6 sticky top-0">
//             <ProductSidebar {...sidebarProps} />
//           </div>
//         )}

//         {/* Main Content */}
//         <div className="flex-1">
//           {/* Top Bar */}
//           <div className="flex justify-between items-center mb-8">
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setIsGridView(true)}
//                 className={`p-2 ${isGridView ? "bg-black text-white" : "text-gray-400"}`}
//               >
//                 <LuGrid2X2 className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setIsGridView(false)}
//                 className={`p-2 ${!isGridView ? "bg-black text-white" : "text-gray-400"}`}
//               >
//                 <BiListCheck className="w-5 h-5" />
//               </button>
//             </div>
//             <button className="flex items-center gap-2 text-sm border rounded px-4 py-2">
//               Default sorting
//               <BiChevronDown className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Product Grid */}
//           <ProductGrid products={filteredProducts} isGridView={isGridView} />
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import type { Products } from "@/types/product";
import { useState } from "react";
import { BiChevronDown, BiListCheck, BiMenu, BiX } from "react-icons/bi";
import { LuGrid2X2 } from "react-icons/lu";
import ProductGrid from "./ProductGrid";
import ProductSidebar from "./ProductSidebar";

interface ProductListingProps {
  products: Products[];
}

export default function ProductListing({ products }: any) {
  const [isGridView, setIsGridView] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(1071);

  const filteredProducts = products.filter((product: any) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedColor || product.color === selectedColor) &&
      (!selectedSize || product.size === selectedSize) &&
      product.price <= priceRange
    );
  });

  const sidebarProps = {
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    priceRange,
    setPriceRange,
  };

  return (
    <div className="container mx-auto px-4 py-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div
          className={`
            fixed md:relative inset-y-0 left-0 z-30 w-64 bg-white shadow-lg md:shadow-none
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          <div className="h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 md:hidden">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <BiX className="w-6 h-6" />
              </button>
            </div>
            <ProductSidebar {...sidebarProps} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2 items-center">
              <button
                className="md:hidden mr-2"
                onClick={() => setIsSidebarOpen(true)}
              >
                <BiMenu className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 ${
                  isGridView ? "bg-black text-white" : "text-gray-400"
                }`}
              >
                <LuGrid2X2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 ${
                  !isGridView ? "bg-black text-white" : "text-gray-400"
                }`}
              >
                <BiListCheck className="w-5 h-5" />
              </button>
            </div>
            <button className="flex items-center gap-2 text-sm border rounded px-4 py-2">
              Default sorting
              <BiChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} isGridView={isGridView} />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
