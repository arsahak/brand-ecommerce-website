// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { BiMinus, BiPlus, BiSearch } from "react-icons/bi"
// import earing from "@/public/assets/product/earrings.jpg"

// const colors = ["blue", "black", "red", "green", "brown", "pink", "cyan"]
// const sizes = ["38", "39", "40", "41", "42", "43", "S", "M", "X", "XL"]
// const brands = ["GEEK", "NIKE", "ADIDAS"]
// const categories = ["Shoes", "Clothing", "Accessories"]

// interface ProductSidebarProps {
//   selectedCategory: string | null
//   setSelectedCategory: (category: string | null) => void
//   selectedBrand: string | null
//   setSelectedBrand: (brand: string | null) => void
//   selectedColor: string | null
//   setSelectedColor: (color: string | null) => void
//   selectedSize: string | null
//   setSelectedSize: (size: string | null) => void
//   priceRange: number
//   setPriceRange: (price: number) => void
// }

// export default function ProductSidebar({
//   selectedCategory,
//   setSelectedCategory,
//   selectedBrand,
//   setSelectedBrand,
//   selectedColor,
//   setSelectedColor,
//   selectedSize,
//   setSelectedSize,
//   priceRange,
//   setPriceRange,
// }: ProductSidebarProps) {
//   const [expandedSections, setExpandedSections] = useState({
//     categories: true,
//     brand: true,
//     price: true,
//     color: true,
//     size: true,
//     type: true,
//   })

//   return (
//     <div className="space-y-6">
//       {/* Search */}
//       <div className="relative">
//         <input type="text" placeholder="Search brand" className="w-full border rounded-md pl-3 pr-10 py-2 text-sm" />
//         <button className="absolute right-3 top-1/2 -translate-y-1/2">
//           <BiSearch className="w-4 h-4 text-gray-400" />
//         </button>
//       </div>

//       {/* Categories */}
//       <div>
//         <button
//           onClick={() => setExpandedSections({ ...expandedSections, categories: !expandedSections.categories })}
//           className="flex items-center justify-between w-full py-2 border-b"
//         >
//           <span className="font-medium">CATEGORIES</span>
//           {expandedSections.categories ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//         </button>
//         {expandedSections.categories && (
//           <div className="pt-4 space-y-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
//                 className={`block text-sm ${selectedCategory === category ? "text-black font-bold" : "text-gray-600"}`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Product Brand */}
//       <div>
//         <button
//           onClick={() => setExpandedSections({ ...expandedSections, brand: !expandedSections.brand })}
//           className="flex items-center justify-between w-full py-2 border-b"
//         >
//           <span className="font-medium">PRODUCT BRAND</span>
//           {expandedSections.brand ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//         </button>
//         {expandedSections.brand && (
//           <div className="pt-4 space-y-2">
//             {brands.map((brand) => (
//               <button
//                 key={brand}
//                 onClick={() => setSelectedBrand(brand === selectedBrand ? null : brand)}
//                 className={`block text-sm ${selectedBrand === brand ? "text-black font-bold" : "text-gray-600"}`}
//               >
//                 {brand}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Filter by Price */}
//       <div>
//         <div>
//           <input
//             type="range"
//             min="50"
//             max="1071"
//             value={priceRange}
//             onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
//             className="w-full"
//           />
//           <p className="text-sm">Up to ${priceRange}</p>
//         </div>
//       </div>

//       {/* Color */}
//       <div>
//         <button
//           onClick={() => setExpandedSections({ ...expandedSections, color: !expandedSections.color })}
//           className="flex items-center justify-between w-full py-2 border-b"
//         >
//           <span className="font-medium">COLOR</span>
//           {expandedSections.color ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//         </button>
//         {expandedSections.color && (
//           <div className="pt-4 flex flex-wrap gap-2">
//             {colors.map((color) => (
//               <button
//                 key={color}
//                 onClick={() => setSelectedColor(color === selectedColor ? null : color)}
//                 className={`w-6 h-6 rounded-full border border-gray-200 ${selectedColor === color ? "border-black" : ""}`}
//                 style={{ backgroundColor: color }}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Size */}
//       <div>
//         <button
//           onClick={() => setExpandedSections({ ...expandedSections, size: !expandedSections.size })}
//           className="flex items-center justify-between w-full py-2 border-b"
//         >
//           <span className="font-medium">SIZE</span>
//           {expandedSections.size ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
//         </button>
//         {expandedSections.size && (
//           <div className="pt-4 flex flex-wrap gap-2">
//             {sizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size === selectedSize ? null : size)}
//                 className={`min-w-[36px] h-9 border rounded text-sm transition-colors ${
//                   selectedSize === size ? "border-black font-bold" : "border-gray-400 hover:border-black"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Best Sellers */}
//       <div>
//         <h3 className="font-medium mb-4">Best sellers</h3>
//         <div className="space-y-4">
//           <div className="flex gap-4">
//             <Image
//               src={earing || "/placeholder.svg"}
//               alt="Mesh Crew T-shirt"
//               width={60}
//               height={60}
//               className="rounded"
//             />
//             <div>
//               <h4 className="text-sm">Mesh Crew T-shirt</h4>
//               <p className="text-sm text-gray-600">$35.00</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import { BiMinus, BiPlus, BiSearch } from "react-icons/bi"
import earing from "@/public/assets/product/earrings.jpg"

const colors = ["blue", "black", "red", "green", "brown", "pink", "cyan"]
const sizes = ["38", "39", "40", "41", "42", "43", "S", "M", "X", "XL"]
const brands = ["GEEK", "NIKE", "ADIDAS"]
const categories = ["Shoes", "Clothing", "Accessories"]

interface ProductSidebarProps {
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
  selectedBrand: string | null
  setSelectedBrand: (brand: string | null) => void
  selectedColor: string | null
  setSelectedColor: (color: string | null) => void
  selectedSize: string | null
  setSelectedSize: (size: string | null) => void
  priceRange: number
  setPriceRange: (price: number) => void
}

export default function ProductSidebar({
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
}: ProductSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brand: true,
    price: true,
    color: true,
    size: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="space-y-6 p-4">
      {/* Search */}
      <div className="relative">
        <input type="text" placeholder="Search brand" className="w-full border rounded-md pl-3 pr-10 py-2 text-sm" />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <BiSearch className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full py-2 border-b"
        >
          <span className="font-medium">CATEGORIES</span>
          {expandedSections.categories ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
        </button>
        {expandedSections.categories && (
          <div className="pt-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`block text-sm ${selectedCategory === category ? "text-black font-bold" : "text-gray-600"}`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Brand */}
      <div>
        <button
          onClick={() => toggleSection("brand")}
          className="flex items-center justify-between w-full py-2 border-b"
        >
          <span className="font-medium">PRODUCT BRAND</span>
          {expandedSections.brand ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
        </button>
        {expandedSections.brand && (
          <div className="pt-4 space-y-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand === selectedBrand ? null : brand)}
                className={`block text-sm ${selectedBrand === brand ? "text-black font-bold" : "text-gray-600"}`}
              >
                {brand}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter by Price */}
      <div>
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full py-2 border-b"
        >
          <span className="font-medium">PRICE</span>
          {expandedSections.price ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
        </button>
        {expandedSections.price && (
          <div className="pt-4">
            <input
              type="range"
              min="50"
              max="1071"
              value={priceRange}
              onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-sm">Up to ${priceRange}</p>
          </div>
        )}
      </div>

      {/* Color */}
      <div>
        <button
          onClick={() => toggleSection("color")}
          className="flex items-center justify-between w-full py-2 border-b"
        >
          <span className="font-medium">COLOR</span>
          {expandedSections.color ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
        </button>
        {expandedSections.color && (
          <div className="pt-4 flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color === selectedColor ? null : color)}
                className={`w-6 h-6 rounded-full border border-gray-200 ${selectedColor === color ? "border-black" : ""}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div>
        <button
          onClick={() => toggleSection("size")}
          className="flex items-center justify-between w-full py-2 border-b"
        >
          <span className="font-medium">SIZE</span>
          {expandedSections.size ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
        </button>
        {expandedSections.size && (
          <div className="pt-4 flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                className={`min-w-[36px] h-9 border rounded text-sm transition-colors ${
                  selectedSize === size ? "border-black font-bold" : "border-gray-400 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Best Sellers */}
      <div>
        <h3 className="font-medium mb-4">Best sellers</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Image
              src={earing || "/placeholder.svg"}
              alt="Mesh Crew T-shirt"
              width={60}
              height={60}
              className="rounded"
            />
            <div>
              <h4 className="text-sm">Mesh Crew T-shirt</h4>
              <p className="text-sm text-gray-600">$35.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

