import ProductDetails from "@/components/productDetails/ProductDetails";
import { data } from "@/public/data";

const page = async ({ params }: any) => {
  const { id } = await params;

  const product = data.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center py-28 text-xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="py-28">
      <ProductDetails product={product} />
    </div>
  );
};

export default page;
