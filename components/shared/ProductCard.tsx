// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaRegHeart } from "react-icons/fa";
// import { GoEye } from "react-icons/go";
// import { IoIosGitCompare } from "react-icons/io";
// import { IoBagAddOutline } from "react-icons/io5";
// import Rating from "./Rate";
// import { useCart } from "@/hooks/useCart";

// interface Product {
//   id: number;
//   image?: string;
//   name: string;
//   tag?: string;
//   colors: { name: string; value: string }[];
//   sizes?: string[];
//   category?: string;
//   rating?: number;
//   price?: number;
//   originalPrice?: number;
// }

// const ProductCard = ({ product }: any) => {
//   // const [isHovered, setIsHovered] = useState(false);
//   const { addItem } = useCart()
//   return (
//     <div className="bg-white rounded-lg  border hover:shadow-lg transition-shadow">
//       <div
//         className="relative group overflow-hidden border-b h-72 w-full"
//         // onMouseEnter={() => setIsHovered(true)}
//         // onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* <Link href={`/product/${product?.id}`}>
//                     <Image src={product?.image || "/placeholder.svg"} alt={product?.name} fill className="w-full h-full object-contain" />
//                 </Link> */}
//         <Link href={`/product/${product?.id}`}>
//           {product?.image ? (
//             <Image
//               src={product.image}
//               alt={product?.name || "Product Image"}
//               fill
//               className="w-full h-full object-contain"
//             />
//           ) : (
//             <Image
//               src="/placeholder.svg"
//               alt="Placeholder Image"
//               fill
//               className="w-full h-full object-contain"
//             />
//           )}
//         </Link>
//         {product?.tag && (
//           <span
//             className={`absolute top-2 left px-2 py-1 text-xs text-white rounded ${
//               product?.tag === "SALE" ? "bg-primaryG" : "bg-[#4CAF50]"
//             }`}
//           >
//             {product?.tag}
//           </span>
//         )}
//         <div
//           className={`absolute inset-0 left-[150px] right-0 transition-all duration-500 translate-x-[100%] group-hover:translate-x-0  flex flex-col p-2 gap-2`}
//         >
//           {/* <Tooltip title="Wishlist" > */}
//           <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
//             {" "}
//             <FaRegHeart />
//           </button>
//           {/* </Tooltip> */}

//           {/* <Tooltip title="View"> */}
//           <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
//             <GoEye />
//           </button>
//           {/* </Tooltip> */}

//           {/* <Tooltip title="Add to Cart"> */}
//           <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
//             <IoBagAddOutline />
//           </button>
//           {/* </Tooltip> */}

//           {/* <Tooltip title="Compare"> */}
//           <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
//             <IoIosGitCompare />
//           </button>
//           {/* </Tooltip> */}
//         </div>

//         {/* <div
//                     className={`absolute bg-white inset-0 top-40 transition-all duration-500 translate-y-[100%] group-hover:translate-y-0  w-full p-2`}>
//                     <div className="flex justify-between items-center">
//                         <div className="flex gap-2">
//                             {
//                                 product?.colors?.map((ele, ind) =>
//                                     <span
//                                         key={ind}
//                                         className="w-5 h-5 rounded-sm border border-gray-300"
//                                         style={{ backgroundColor: ele }}
//                                     ></span>
//                                 )
//                             }
//                         </div>
//                         <div className="flex gap-2">
//                             {
//                                 product?.sizes?.map((ele, ind) =>
//                                     <p key={ind}>{ele}</p>
//                                 )
//                             }
//                         </div>
//                     </div>
//                 </div> */}
//       </div>
//       <div className="mt-2 space-y-2 p-3">
//         <Link href={`/category/${product?.category?.toLowerCase()}`}>
//           <p className="text-gray-500">{product?.category}</p>
//         </Link>
//         <Link href={`/product/${product.id}`}>
//           <h3 className="font-medium hover:text-primaryG text-gray-600 transition-colors line-clamp-1">
//             {product?.name}
//           </h3>
//         </Link>
//         <Rating rating={product?.rating ?? 0} />
//         <div className="flex items-center gap-2">
//           {product?.price && (
//             <span className="text-gray-500 ">
//               ${product?.price?.toFixed(2)}
//             </span>
//           )}
//           {product?.originalPrice && (
//             <span className="font-medium line-through">
//               ${product?.originalPrice?.toFixed(2)}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";
export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }
  return (
    <div className="flex flex-col">
      <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Image
          src={product?.image || "/placeholder.svg"}
          alt={product?.title}
          width={300}
          height={375}
          className="object-cover w-full h-full rounded"
        />
      </div>
      <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-white"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isWishlisted ? "#ffff" : "none"}
            stroke={isWishlisted ? "#ffff" : "#ffff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="flex justify-between mt-2 space-x-1">
        {product?.colors?.map((color, index) => (
          <div key={index} className="w-10 h-5 rounded-full cursor-pointer" style={{ backgroundColor: color?.value }} />
        ))}
      </div>

      <h3 className="font-medium text-lg mt-3">{product?.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-1">{product?.description}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <span className="font-bold text-lg">${product?.price}</span>
          {product?.originalPrice && <span className="text-gray-500 line-through ml-2">${product?.originalPrice}</span>}
        </div>

        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
