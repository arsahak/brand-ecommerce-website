"use client"

import Link from "next/link"
import { useState } from "react"
import { FaRegHeart } from "react-icons/fa"
import { GoEye } from "react-icons/go"
import { IoIosGitCompare } from "react-icons/io"
import { IoBagAddOutline } from "react-icons/io5"
import Rating from "../shared/Rate"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  countdown?: string
  tag?: string
  colors?: string[]
  rating?: number
  sizes?: string[]
  category?: string
}

const products: Record<string, Product[]> = {
  "new-arrivals": [
    {
      id: 1,
      name: "V-neck cotton T-shirt",
      price: 59.99,
      tag: "NEW",
      image: "/assets/product/clothes (1).jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 2,
      name: "Polarized sunglasses",
      price: 79.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (2).jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 3,
      name: "Ramie shirt with pockets",
      price: 89.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/earrings.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 4,
      name: "Ribbed cotton-blend top",
      price: 69.99,
      tag: "",
      image: "/assets/product/bindi.jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ],
  "best-seller": [
    {
      id: 1,
      name: "Polarized sunglasses",
      price: 79.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (3).jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 2,
      name: "Ramie shirt with pockets",
      price: 89.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/bindi.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 3,
      name: "Ribbed cotton-blend top",
      price: 69.99,
      tag: "",
      image: "/assets/product/earrings.jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ],
  "on-sale": [
    {
      id: 1,
      name: "Polarized sunglasses",
      price: 79.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (2).jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 2,
      name: "Ramie shirt with pockets",
      price: 89.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/bindi.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 3,
      name: "Ribbed cotton-blend top",
      price: 69.99,
      tag: "",
      image: "/assets/product/earrings.jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ],
}

import { ReactNode } from "react";

interface TooltipProps {
  title: string;
  children: ReactNode;
}

const Tooltip = ({ title, children }: TooltipProps) => (
  <div className="relative group">
    {children}
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-black rounded">
      {title}
    </span>
  </div>
);

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("new-arrivals")
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Custom Tab Navigation */}
      <div className="flex justify-center border-b">
        {Object.keys(products).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 font-medium relative text-2xl
              ${activeTab === tab ? "text-primary" : "text-gray-600"}
              hover:text-primary transition-colors`}
          >
            {tab
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform translate-y-0.5" />
            )}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products[activeTab].map((product) => (
            <div className="bg-white rounded-lg p-4 border hover:shadow-lg transition-shadow">
            <div className="relative group overflow-hidden border-b"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link href={`/product/${product?.id}`}>
                    <img src={product?.image || "/placeholder.svg"} alt={product?.name} className="w-full h-52 object-contain" />
                </Link>
                {product?.tag && (
                    <span
                        className={`absolute top-2 left px-2 py-1 text-xs text-white rounded ${product?.tag === "SALE" ? "bg-primaryG" : "bg-[#4CAF50]"
                            }`}
                    >
                        {product?.tag}
                    </span>
                )}
                <div
                    className={`absolute inset-0 left-[150px] right-0 transition-all duration-500 translate-x-[100%] group-hover:translate-x-0  w-full flex flex-col p-2 gap-2`}>
                    <Tooltip title="Wishlist" >
                        <button
                        
                            className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1"
                        > <FaRegHeart /></button>
                    </Tooltip>

                    <Tooltip title="View">
                        <button
                        
                            className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1"
                        ><GoEye /></button> 
                    </Tooltip>

                    <Tooltip title="Add to Cart">
                        <button
                            className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1"
                        ><IoBagAddOutline /></button>
                    </Tooltip>

                    <Tooltip title="Compare">
                        <button
                            className="text-primaryG border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1"
                        ><IoIosGitCompare /></button>
                    </Tooltip>
                </div>

                <div
                    className={`absolute bg-white inset-0 top-40 transition-all duration-500 translate-y-[100%] group-hover:translate-y-0  w-full p-2`}>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            {
                                product?.colors?.map((ele, ind) =>
                                    <span
                                        key={ind}
                                        className="w-5 h-5 rounded-sm border border-gray-300"
                                        style={{ backgroundColor: ele }}
                                    ></span>
                                )
                            }
                        </div>
                        <div className="flex gap-2">
                            {
                                product?.sizes?.map((ele, ind) =>
                                    <p key={ind}>{ele}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                <Link href={`/category/${product?.category?.toLowerCase()}`}>
                    <p className="text-gray-500">{product?.category}</p>
                </Link>
                <Link href={`/gadget/product/${product.id}`}>
                    <h3 className="font-medium hover:text-primaryG text-gray-600 transition-colors line-clamp-1">{product?.name}</h3>
                </Link>
                <Rating rating={product?.rating ?? 0} />
                <div className="flex items-center gap-2">
                    {product?.price && (
                        <span className="text-gray-500 ">${product?.price?.toFixed(2)}</span>
                    )}
                    {product?.originalPrice && <span className="font-medium line-through">${product?.originalPrice?.toFixed(2)}</span>}
                </div>
            </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  )
}

