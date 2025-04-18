"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const categories = [
  {
    id: 1,
    title: "New in",
    items: 12,
    image: "/assets/category/category-2.jpg",
  },
  {
    id: 2,
    title: "Shoes",
    items: 12,
    image:  "/assets/category/category-4.jpg",
  },
  {
    id: 3,
    title: "Bags",
    items: 12,
    image:  "/assets/category/category-3.jpg",
  },
  {
    id: 4,
    title: "Shoes",
    items: 12,
    image:  "/assets/category/category-1.jpg",
  },
  {
    id: 5,
    title: "Promotion",
    items: 12,
    image:  "/assets/home/hero-img/gold-3184582_1280.jpg",
  },
  {
    id: 6,
    title: "Clothing",
    items: 12,
    image:  "/assets/home/hero-img/jewellery-3968328_1280.jpg",
  },
]

export function CategorySlider() {
//   const sliderRef = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null);


  const scroll = (direction: "left" | "right") => {
    const element = sliderRef.current;
  
    if (element instanceof HTMLElement) {
      const scrollAmount = direction === "left" ? -400 : 400;
      element.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative container mx-auto px-6 py-12">
      <div className="flex justify-between items-center my-10">
        <h2 className="text-2xl font-medium">Categories you might like</h2>
        <Link
          href="#"
          className="text-lg font-medium border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity"
        >
          View All Collection
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <BiChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => (
            <Link key={category.id} href="#" className="relative flex flex-col items-center flex-shrink-0 snap-start group">
              <div className="w-[280px] h-[280px] rounded-full overflow-hidden mb-4 relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
               
              </div>
              <h3 className="text-2xl font-medium absolute bottom-12 z-10 text-white">{category.title}</h3>
              {/* <p className="text-sm text-gray-500">{category.items} items</p> */}
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <BiChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

