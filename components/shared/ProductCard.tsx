"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { IoIosGitCompare } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import Rating from "./Rate";
import { useCart } from "@/hooks/useCart";

interface Product {
  id: number;
  image?: string;
  name: string;
  tag?: string;
  colors: { name: string; value: string }[];
  sizes?: string[];
  category?: string;
  rating?: number;
  price?: number;
  originalPrice?: number;
}

const ProductCard = ({ product }: any) => {
  // const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart()
  return (
    <div className="bg-white rounded-lg  border hover:shadow-lg transition-shadow">
      <div
        className="relative group overflow-hidden border-b h-72 w-full"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        {/* <Link href={`/product/${product?.id}`}>
                    <Image src={product?.image || "/placeholder.svg"} alt={product?.name} fill className="w-full h-full object-contain" />
                </Link> */}
        <Link href={`/product/${product?.id}`}>
          {product?.image ? (
            <Image
              src={product.image}
              alt={product?.name || "Product Image"}
              fill
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              src="/placeholder.svg"
              alt="Placeholder Image"
              fill
              className="w-full h-full object-contain"
            />
          )}
        </Link>
        {product?.tag && (
          <span
            className={`absolute top-2 left px-2 py-1 text-xs text-white rounded ${
              product?.tag === "SALE" ? "bg-primaryG" : "bg-[#4CAF50]"
            }`}
          >
            {product?.tag}
          </span>
        )}
        <div
          className={`absolute inset-0 left-[150px] right-0 transition-all duration-500 translate-x-[100%] group-hover:translate-x-0  flex flex-col p-2 gap-2`}
        >
          {/* <Tooltip title="Wishlist" > */}
          <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
            {" "}
            <FaRegHeart />
          </button>
          {/* </Tooltip> */}

          {/* <Tooltip title="View"> */}
          <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
            <GoEye />
          </button>
          {/* </Tooltip> */}

          {/* <Tooltip title="Add to Cart"> */}
          <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
            <IoBagAddOutline />
          </button>
          {/* </Tooltip> */}

          {/* <Tooltip title="Compare"> */}
          <button className="text-primary border border-primary rounded-lg hover:!bg-primary/80 hover:!text-white hover:scale-125 p-1 flex justify-center">
            <IoIosGitCompare />
          </button>
          {/* </Tooltip> */}
        </div>

        {/* <div
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
                </div> */}
      </div>
      <div className="mt-2 space-y-2 p-3">
        <Link href={`/category/${product?.category?.toLowerCase()}`}>
          <p className="text-gray-500">{product?.category}</p>
        </Link>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium hover:text-primaryG text-gray-600 transition-colors line-clamp-1">
            {product?.name}
          </h3>
        </Link>
        <Rating rating={product?.rating ?? 0} />
        <div className="flex items-center gap-2">
          {product?.price && (
            <span className="text-gray-500 ">
              ${product?.price?.toFixed(2)}
            </span>
          )}
          {product?.originalPrice && (
            <span className="font-medium line-through">
              ${product?.originalPrice?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
