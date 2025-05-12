import ProductListing from "@/components/shop/ProductListing";
import product1 from "@/public/assets/product/clothes (1).jpg"
import product2 from "@/public/assets/product/clothes (2).jpg"
import product3 from "@/public/assets/product/clothes (3).jpg"
// import { useSearchParams } from "next/navigation";
type SearchParams = {
  category?: string;
};

const products = [
  {
    id: "1",
    image: product1,
    brand: "GEEK",
    category: "Shoes",
    title: "Faxon Canvas Low-Top Sneaker",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
    rating: 3,
    price: 450.0,
    originalPrice: undefined,
    tag: "",
    "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
    sizes:  ["6.7-inch"],
  },
  {
    id: "2",
    image: product2,
    brand: "GEEK",
    category: "Accessories",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
    title: "Viscose-Cashmere Scarf",
    rating: 3,
    price: 450.0,
    originalPrice: 650.0,
    tag: "SALE",
    "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
    sizes: ["M"],
  },
  {
    id: "3",
    image: product3,
    brand: "GEEK",
    category: "Clothing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Lorem ipsum dolor sit amet.",
    title: "Round neck sweater",
    rating: 3,
    price: 450.0,
    originalPrice: 500,
    tag: "NEW",
    "colors": [
        { name: "Red", value: "#FFD700" },
        { name: "Orange", value: "#E63946" },
        { name: "Yellow", value: "#A63A50" },
        { name: "Blue", value: "#E9D8A6" },
        { name: "Green", value: "#1D3557" },
        { name: "Purple", value: "#ADB5BD" },
      ],
    sizes: ["XL"],
  },
]

const page = async ({ searchParams }: {searchParams: Promise<SearchParams>}) => {

  const params = await searchParams;
  const category = params.category;

  // You can now filter products by category
  const filteredProducts = products.filter(
    (product) => product.title.includes(category || "") || product.category === category
  );

    return (
        <div className="py-28">
            <ProductListing products={products}/>
        </div>
    );
};

export default page;