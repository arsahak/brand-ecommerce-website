"use client"
import ImageMotion from "../motion/ImageMotion"

import Image from "next/image"
import Link from "next/link"
import { BiHeart, BiX } from "react-icons/bi"
import { BsTrash2 } from "react-icons/bs"
import { FaShoppingCart } from "react-icons/fa"

const WishlistPage = () => {
  // Example wishlist items - replace with your actual data
  const wishlistItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      image: "/assets/product/clothes (2).jpg",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 89.99,
      image: "/assets/product/woman-4290853_1280.jpg",
    },
    {
      id: 3,
      name: "Leather Boots",
      price: 159.99,
      image: "/assets/product/clothes (3).jpg",
    },
    // Add more items as needed
  ]

  const handleRemoveFromWishlist = (id: number) => {
    // Implement remove from wishlist functionality
    console.log("Remove item", id)
  }

  const handleMoveToCart = (id: number) => {
    // Implement move to cart functionality
    console.log("Move to cart", id)
  }

  return (
    <div className="bg-sectionbg pt-12">
      <div className="container py-10 md:py-20">
        <ImageMotion>
          <div className="flex items-center justify-center flex-col">
            <div className="font-aviano-regular uppercase text-center w-full md:max-w-[70%] mb-12">
              <h2 className="text-2xl md:text-4xl font-semibold text-center flex items-center justify-center gap-2">
                My Wishlist <BiHeart className="w-6 h-6 md:w-8 md:h-8" />
              </h2>
              <h2 className="text-base md:text-xl font-semibold mt-3">Your curated collection of favorite items</h2>
            </div>
          </div>
        </ImageMotion>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <BiHeart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">Start adding items to your wishlist as you shop</p>
            <Link
              href="/products"
              className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative group">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition duration-300"
                      aria-label="Remove from wishlist"
                    >
                      <BiX className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-aviano-regular uppercase text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-lg font-semibold mb-4">${item.price.toFixed(2)}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMoveToCart(item.id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
                    >
                      <FaShoppingCart className="w-5 h-5" />
                      <span className="font-aviano-regular uppercase">Add to Cart</span>
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition duration-300"
                      aria-label="Remove from wishlist"
                    >
                      <BsTrash2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default WishlistPage

