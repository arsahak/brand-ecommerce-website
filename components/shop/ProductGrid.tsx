import { useCart } from "@/hooks/useCart";
import type { Products } from "@/types/product";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "../shared/ProductCard";

interface ProductGridProps {
  products: Products[];
  isGridView: boolean;
}

export default function ProductGrid({
  products,
  isGridView,
}: ProductGridProps) {
  const { addItem } = useCart()
  return (
    <div
      className={`grid ${isGridView ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        } gap-6`}
    >
      {products.length > 0 ? (
        products.map((product, index) => (
          // <div key={index} className="group border rounded-md overflow-hidden">
          //   <div className="relative mb-1 group overflow-hidden">
          //     {product.tag && (
          //       <span
          //         className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded ${product.tag === "NEW" ? "bg-green-500" : "bg-red-500"
          //           }`}
          //       >
          //         {product.tag}
          //       </span>
          //     )}
          //     <Image
          //       src={product.image || "/placeholder.svg"}
          //       alt={product.name}
          //       width={400}
          //       height={500}
          //       className="w-full rounded"
          //     />
          //     <div
          //           className={`absolute inset-0 top-[400px]  transition-all duration-500 translate-y-[100%] group-hover:translate-y-0  w-full flex flex-col p-2 gap-2`}>
          //     <button
          //      onClick={() => addItem({ ...product, quantity: 1 })}
          //       className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
          //     >
          //       <FaShoppingCart className="w-5 h-5" />
          //       <span className="font-aviano-regular uppercase">Add to Cart</span>
          //     </button>
          //     </div>
          //   </div>
          //   <div className="space-y-2 p-3">
          //     <p className="text-sm text-gray-500">{product.brand}</p>
          //     <div className="flex">
          //       {[...Array(5)].map((_, i) => (
          //         <svg
          //           key={i}
          //           className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"
          //             }`}
          //           fill="currentColor"
          //           viewBox="0 0 20 20"
          //         >
          //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          //         </svg>
          //       ))}
          //     </div>
          //     <h3 className="font-medium">{product?.name}</h3>
          //     <div className="flex items-center gap-2">
          //       <span className="font-medium">
          //         ${product?.price.toFixed(2)}
          //       </span>
          //       {/* {product?.originalPrice && (
          //         <span className="text-sm text-gray-500 line-through">
          //           ${product?.originalPrice.toFixed(2)}
          //         </span>
          //       )} */}
          //     </div>
          //   </div>
          // </div>
          <ProductCard key={product.id} product={product}/>
        ))
      ) : (
        <div className="!flex !justify-center ml-20 text-center text-gray-500 my-36">No products found</div>
      )}
    </div>
  );
}
