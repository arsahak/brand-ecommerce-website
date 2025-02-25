"use client"

import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  countdown?: string
  tag?: string
  colors: { name: string; value: string }[]
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
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
      "colors": [
        { name: "Red", value: "#FF4747" },
        { name: "Orange", value: "#FF8A00" },
        { name: "Yellow", value: "#FFD600" },
        { name: "Blue", value: "#4777FF" },
        { name: "Green", value: "#47FF47" },
        { name: "Purple", value: "#9747FF" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ],
}

import { ReactNode } from "react";
import ProductCard from "../shared/ProductCard"

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
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

