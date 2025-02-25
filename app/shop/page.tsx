import ProductListing from "@/components/shop/ProductListing";
import product1 from "@/public/assets/product/clothes (1).jpg"
import product2 from "@/public/assets/product/clothes (2).jpg"
import product3 from "@/public/assets/product/clothes (3).jpg"

const products = [
  {
    image: product1,
    brand: "GEEK",
    category: "Shoes",
    name: "Faxon Canvas Low-Top Sneaker",
    rating: 3,
    price: 450.0,
    originalPrice: undefined,
    tag: undefined,
    color: "blue",
    size: "42",
  },
  {
    image: product2,
    brand: "GEEK",
    category: "Accessories",
    name: "Viscose-Cashmere Scarf",
    rating: 3,
    price: 450.0,
    originalPrice: 650.0,
    tag: "SALE 25%",
    color: "black",
    size: "M",
  },
  {
    image: product3,
    brand: "GEEK",
    category: "Clothing",
    name: "Round neck sweater",
    rating: 3,
    price: 450.0,
    originalPrice: null,
    tag: "NEW",
    color: "red",
    size: "XL",
  },
]

const page = () => {
    return (
        <div className="py-28">
            <ProductListing products={products}/>
        </div>
    );
};

export default page;