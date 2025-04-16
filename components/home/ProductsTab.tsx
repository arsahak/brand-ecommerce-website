"use client"

import { useState } from "react"

// interface Product {
//   id: number
//   title: string
//   descripti
//   price: number
//   originalPrice?: number
//   discount?: number
//   image: string
//   countdown?: string
//   tag?: string
//   colors: { name: string; value: string }[]
//   rating?: number
//   sizes?: string[]
//   category?: string
// }

const products: Record<string, Product[]> = {
  "new-arrivals": [
    {
      id: "1",
      title: "V-neck cotton T-shirt",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 59.99,
      brand: "vigo",
      originalPrice: 70,
      tag: "NEW",
      image: "/assets/product/clothes (1).jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "2",
      title: "Polarized sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 79.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (2).jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "3",
      title: "Ramie shirt with pockets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 89.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/earrings.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id:" 4",
      title: "Ribbed cotton-blend top",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 69.99,
      brand: "vigo",
      originalPrice: 100,
      tag: "",
      image: "/assets/product/bindi.jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "5",
      title: "V-neck cotton T-shirt",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 59.99,
      brand: "vigo",
      originalPrice: 70,
      tag: "NEW",
      image: "/assets/product/clothes (1).jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "6",
      title: "Polarized sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 79.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (2).jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "7",
      title: "Ramie shirt with pockets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 89.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/earrings.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id:" 8",
      title: "Ribbed cotton-blend top",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 69.99,
      brand: "vigo",
      originalPrice: 100,
      tag: "",
      image: "/assets/product/bindi.jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ],
  "best-seller": [
    {
      id: "1",
      title: "Polarized sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 79.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (3).jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "2",
      title: "Ramie shirt with pockets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 89.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/bindi.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "3",
      title: "Ribbed cotton-blend top",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 69.99,
      brand: "vigo",
      originalPrice: 200,
      tag: "",
      image: "/assets/product/earrings.jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ],
  "on-sale": [
    {
      id: "1",
      title: "Polarized sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 79.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (2).jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "2",
      title: "Ramie shirt with pockets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 89.99,
      brand: "vigo",
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/bindi.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: "3",
      title: "Ribbed cotton-blend top",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
      price: 69.99,
      brand: "vigo",
      originalPrice: 100,
      tag: "",
      image: "/assets/product/earrings.jpg",
      "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ],
}

import { ReactNode } from "react";
import ProductCard from "../shared/ProductCard"
import { Product } from "@/types/product";
import Link from "next/link";

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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
          {products[activeTab].map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}          
        </div>
        <div className="flex justify-center mt-10 mx-auto">
        <Link href="/shop"><button  className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Shop More
        </button></Link>
      </div>
      </div>
    </div>
  )
}

