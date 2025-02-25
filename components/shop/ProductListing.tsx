// "use client"

// import { useState } from "react"
// import Image, { StaticImageData } from "next/image"
// import { LuGrid2X2 } from "react-icons/lu"
// import { BiChevronDown, BiListCheck, BiMinus, BiPlus, BiSearch } from "react-icons/bi"

// import earing from "@/public/assets/product/earrings.jpg"


// const colors = ["blue", "black", "red", "green", "brown", "pink", "cyan"]
// const sizes = ["38", "39", "40", "41", "42", "43", "S", "M", "X", "XL"]
// const brands = ["GEEK", "NIKE", "ADIDAS"]
// const categories = ["Shoes", "Clothing", "Accessories"]

// interface Products {
//   category: string;
//   brand: string;
//   color: string;
//   size: string;
//   price: number;
//   tag?: string;
//   image?: StaticImageData;
//   name: string;
//   rating: number;
//   originalPrice?: number;
// }

// interface ProductListingProps {
//   products: Products[];
// }

// export default function ProductListing({ products }: ProductListingProps) {
//   const [isGridView, setIsGridView] = useState(true)
//   const [expandedSections, setExpandedSections] = useState({
//     categories: true,
//     brand: true,
//     price: true,
//     color: true,
//     size: true,
//     type: true,
//   })

//   // Filter State
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
//   const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
//   const [selectedColor, setSelectedColor] = useState<string | null>(null)
//   const [selectedSize, setSelectedSize] = useState<string | null>(null)
//   const [priceRange, setPriceRange] = useState<number>(1071)

//   const filteredProducts = products.filter((product) => {
//     return (
//       (!selectedCategory || product.category === selectedCategory) &&
//       (!selectedBrand || product.brand === selectedBrand) &&
//       (!selectedColor || product.color === selectedColor) &&
//       (!selectedSize || product.size === selectedSize) &&
//       product.price <= priceRange
//     )
//   })

//   return (
//     <div className="container mx-auto px-4 py-8 overflow-x-hidden">
//       <div className="grid grid-cols-[250px,1fr] gap-8">
//         {/* Sidebar */}
//         <div className="space-y-6 sticky top-0">
//           {/* Search */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search brand"
//               className="w-full border rounded-md pl-3 pr-10 py-2 text-sm"
//             />
//             <button className="absolute right-3 top-1/2 -translate-y-1/2">
//               <BiSearch className="w-4 h-4 text-gray-400" />
//             </button>
//           </div>

//           {/* Categories */}
//           <div>
//             <button onClick={() => setExpandedSections({ ...expandedSections, categories: !expandedSections.categories })} className="flex items-center justify-between w-full py-2 border-b">
//               <span className="font-medium">CATEGORIES</span>
//               {expandedSections.categories ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//             </button>
//             {expandedSections.categories && (
//               <div className="pt-4 space-y-2">
//                 {categories.map((category) => (
//                   <button key={category} onClick={() => setSelectedCategory(category === selectedCategory ? null : category)} className={`block text-sm ${selectedCategory === category ? "text-black font-bold" : "text-gray-600"}`}>
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Product Brand */}
//           <div>
//             <button onClick={() => setExpandedSections({ ...expandedSections, brand: !expandedSections.brand })} className="flex items-center justify-between w-full py-2 border-b">
//               <span className="font-medium">PRODUCT BRAND</span>
//               {expandedSections.brand ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//             </button>
//             {expandedSections.brand && (
//               <div className="pt-4 space-y-2">
//                 {brands.map((brand) => (
//                   <button key={brand} onClick={() => setSelectedBrand(brand === selectedBrand ? null : brand)} className={`block text-sm ${selectedBrand === brand ? "text-black font-bold" : "text-gray-600"}`}>
//                     {brand}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Product Type */}
//           <div>
//             <button
//               onClick={() => setExpandedSections({ ...expandedSections, type: !expandedSections.type })}
//               className="flex items-center justify-between w-full py-2 border-b"
//             >
//               <span className="font-medium">PRODUCT TYPE</span>
//               {expandedSections.type ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//             </button>
//           </div>

//           {/* Filter by Price */}
//           <div>
//             <div>
//               <input type="range" min="50" max="1071" value={priceRange} onChange={(e) => setPriceRange(parseInt(e.target.value))} className="w-full" />
//               <p className="text-sm">Up to ${priceRange}</p>
//             </div>
//           </div>

//           {/* Color */}
//           <div>
//             <button onClick={() => setExpandedSections({ ...expandedSections, color: !expandedSections.color })} className="flex items-center justify-between w-full py-2 border-b">
//               <span className="font-medium">COLOR</span>
//               {expandedSections.color ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//             </button>
//             {expandedSections.color && (
//               <div className="pt-4 flex flex-wrap gap-2">
//                 {colors.map((color) => (
//                   <button key={color} onClick={() => setSelectedColor(color === selectedColor ? null : color)} className={`w-6 h-6 rounded-full border border-gray-200 ${selectedColor === color ? "border-black" : ""}`} style={{ backgroundColor: color }} />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Size */}
//           <div>
//             <button
//               onClick={() => setExpandedSections({ ...expandedSections, size: !expandedSections.size })}
//               className="flex items-center justify-between w-full py-2 border-b"
//             >
//               <span className="font-medium">SIZE</span>
//               {expandedSections.size ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//             </button>
//             {expandedSections.size && (
//               <div className="pt-4 flex flex-wrap gap-2">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size === selectedSize ? null : size)}
//                     className={`min-w-[36px] h-9 border rounded text-sm transition-colors ${selectedSize === size ? "border-black font-bold" : "border-gray-400 hover:border-black"
//                       }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Best Sellers */}
//           <div>
//             <h3 className="font-medium mb-4">Best sellers</h3>
//             <div className="space-y-4">
//               <div className="flex gap-4">
//                 <Image src={earing} alt="Mesh Crew T-shirt" width={60} height={60} className="rounded" />
//                 <div>
//                   <h4 className="text-sm">Mesh Crew T-shirt</h4>
//                   <p className="text-sm text-gray-600">$35.00</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         {/* Main Content */}
//         <div>
//             {/* Top Bar */}
//             <div className="flex justify-between items-center mb-8">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setIsGridView(true)}
//                   className={`p-2 bg-black ${isGridView ? "text-white" : "text-gray-400"}`}
//                 >
//                   <LuGrid2X2 className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => setIsGridView(false)}
//                   className={`p-2 ${!isGridView ? "text-black" : "text-gray-400"}`}
//                 >
//                   <BiListCheck className="w-5 h-5" />
//                 </button>
//               </div>
//               <button className="flex items-center gap-2 text-sm border rounded px-4 py-2">
//                 Default sorting
//                 <BiChevronDown className="w-4 h-4" />
//               </button>
//             </div>

//             {/* Product Grid */}
//             <div className={`grid grid-cols-2 lg:grid-cols-3 ${isGridView ? "!grid-cols-2 lg:!grid-cols-3" : "grid-cols-1"} gap-6`}>
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product, index) => (
//                   <div key={index} className="group border rounded-md overflow-hidden">
//                     <div className="relative mb-1">
//                       {product.tag && (
//                         <span
//                           className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded ${product.tag === "NEW" ? "bg-green-500" : "bg-red-500"
//                             }`}
//                         >
//                           {product.tag}
//                         </span>
//                       )}
//                       <Image
//                         src={product.image || "/placeholder.svg"}
//                         alt={product.name}
//                         width={400}
//                         height={500}
//                         className="w-full rounded"
//                       />
//                     </div>
//                     <div className="space-y-2 p-3">
//                       <p className="text-sm text-gray-500">{product.brand}</p>
//                       <div className="flex">
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                         ))}
//                       </div>
//                       <h3 className="font-medium">{product.name}</h3>
//                       <div className="flex items-center gap-2">
//                         <span className="font-medium">${product.price.toFixed(2)}</span>
//                         {product.originalPrice && (
//                           <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))) :
//                 (
//                   <div className="text-center text-gray-500">No products found</div>
//                 )
//               }
//             </div>
//           </div>
//       </div>
//     </div>
//   )
// }


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


"use client"

import { useState } from "react"
import { LuGrid2X2 } from "react-icons/lu"
import { BiChevronDown, BiListCheck, BiMenu, BiX } from "react-icons/bi"
import ProductSidebar from "./ProductSidebar"
import ProductGrid from "./ProductGrid"
import type { Products } from "@/types/product"

interface ProductListingProps {
  products: Products[]
}

export default function ProductListing({ products }: ProductListingProps) {
  const [isGridView, setIsGridView] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Filter State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState<number>(1071)

  const filteredProducts = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedColor || product.color === selectedColor) &&
      (!selectedSize || product.size === selectedSize) &&
      product.price <= priceRange
    )
  })

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
  }

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
              <button className="md:hidden mr-2" onClick={() => setIsSidebarOpen(true)}>
                <BiMenu className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 ${isGridView ? "bg-black text-white" : "text-gray-400"}`}
              >
                <LuGrid2X2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 ${!isGridView ? "bg-black text-white" : "text-gray-400"}`}
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
  )
}

