"use client";

import { data } from "@/public/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineRight,
} from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import ReactImageMagnify from "react-image-magnify";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../shared/ProductCard";
import ReviewSection from "./ReviewSection";

interface Product {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  rating: number;
  price: number;
  originalPrice: number;
  tag: string;
  colors: [{ name: string; value: string }][];
  sizes: string[];
  dimensions: string;
  reviews: {
    username: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export default function ProductDetails({ product }: any) {
  const tabs = [
    "Description",
    "Customer Reviews",
    "Shipping & Returns",
    "Return Policies",
  ];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [activeMagnifyImg, setActiveMagnifyImg] = useState("");
  const [activeTab, setActiveTab] = useState("Description");

  useEffect(() => {
    // Set default image as the main magnify image
    if (product?.image) {
      setActiveMagnifyImg(product?.image);
    }
  }, [product?.image]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <Swiper
              direction="vertical"
              slidesPerView={4}
              spaceBetween={5}
              // navigation={true}
              // modules={[Navigation]}
              className="w-full h-[380px]"
            >
              {product?.images?.map((ele: any, i: number) => (
                <SwiperSlide key={i}>
                  <div
                    className="border rounded p-2 cursor-pointer relative h-full"
                    onClick={() => setActiveMagnifyImg(ele)}
                    onMouseMove={() => setActiveMagnifyImg(ele)}
                  >
                    {/* <div className="relative aspect-square"> */}
                    <Image
                      src={ele}
                      alt="Thumbnail"
                      fill
                      className="w-full h-full object-cover"
                    />
                    {/* </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-span-4 fluid__image-container z-20 h-full">
            <ReactImageMagnify
              {...{
                smallImage: {
                  isFluidWidth: true,
                  src: "your-image-url.jpg",
                },
                largeImage: {
                  src: "your-image-url.jpg",
                  width: 1200, // Adjust width as needed
                  height: 800, // Adjust height as needed
                },
                enlargedImagePortalId: "your-portal-id", // Move it outside of smallImage
              }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">CLOTHING</p>
            <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">(55 reviews)</span>
              </div>
              <span className="text-sm text-gray-500">
                5 sold in last 24 hours
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">$129.99</span>
            <span className="text-sm text-gray-500 line-through">$165.00</span>
            <span className="text-sm text-white bg-red-500 rounded-full px-1.5 font-medium">
              -21%
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              The garments labelled as Committed are products that have been
              produced using sustainable fibres or processes, reducing their
              environmental impact.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Colors: Gray</p>
            {/* <div className="flex gap-2">
              {product?.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${color === "black" ? "bg-black" : color === "beige" ? "bg-[#E6D5C1]" : "bg-gray-400"
                    }`}
                />
              ))}
            </div> */}
            <div className="flex gap-2">
              {product?.colors.map((color: any) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`h-6 w-6 rounded-full ${
                    selectedColor === color.name
                      ? "ring-2 ring-[#9333EA] ring-offset-2"
                      : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {product?.sizes.length > 0 &&
              product?.sizes?.map((size: any) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex h-10 w-10 items-center justify-center rounded border ${
                    selectedSize === size
                      ? "border-primaryK bg-primaryK text-white"
                      : "border-gray-200 text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="w-10 h-10 border rounded-lg flex items-center justify-center"
              >
                <AiOutlineMinus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border rounded-lg flex items-center justify-center"
              >
                <AiOutlinePlus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-gray-800">
              ADD TO CART - $129.99
            </button>
            <button className="w-12 h-12 border rounded-lg flex items-center justify-center">
              <AiOutlineHeart className="w-5 h-5" />
            </button>
          </div>

          <button className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600">
            BUY IT NOW
          </button>

          <div className="flex gap-6 py-4 border-t border-b">
            <button className="flex items-center gap-2 text-sm">
              <FiShare2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 text-sm">
              Ask A Question
            </button>
            <button className="flex items-center gap-2 text-sm">
              Delivery & Return
            </button>
          </div>

          <button className="flex items-center gap-1 text-sm">
            View Store Information <AiOutlineRight className="w-4 h-4" />
          </button>

          <div className="text-sm text-gray-500">
            <p>SKU: 5545412</p>
            <p>Vendor: Modave</p>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="border-b border-gray-200">
          <nav className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg font-medium relative ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === "Description" && (
          <div className="py-8">
            <p>{product?.description}</p>
          </div>
        )}
        {activeTab === "Customer Reviews" && (
          <div className="text-gray-600 space-y-4">
            {product?.reviews?.length > 0 ? (
              product.reviews.map((review: any, index: any) => (
                <div key={index} className="border-b pb-2">
                  <p>
                    <strong>{review.username}</strong> - {review.rating} / 5
                  </p>
                  <p>{review.comment}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet!</p>
            )}
          </div>
        )}
        {activeTab === "Shipping & Returns" && (
          <div className="py-8">
            <p>{product?.description}</p>
          </div>
        )}
        {activeTab === "Return Policies" && (
          <div className="py-8">
            <p>{product?.description}</p>
          </div>
        )}
      </div>
      <ReviewSection />
      <div>
        <div className="text-center my-5">
          <h2 className="text-2xl font-medium">
            Related <span className="text-primaryF">Products</span>
          </h2>
          <p>Browse the collection of top products</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.length > 0 ? (
            data?.map((product: any) => (
              <SwiperSlide key={product.id}>
                <ProductCard key={product.id} product={product} />
              </SwiperSlide>
            ))
          ) : (
            <div className="flex justify-center">
              <p> "No Products" </p>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
