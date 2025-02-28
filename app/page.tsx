
import { CategorySlider } from "@/components/home/CategorySlider";
import Collection from "@/components/home/Collection";
import HeroSectionslider from "@/components/home/HeroSectionslider";
import JointheClub from "@/components/home/JointheClub";
import ProductTabs from "@/components/home/ProductsTab";
import Features from "@/components/shared/Features";

export const metadata = {
  title: "Hazel Fashion Store",
  description: "B2B and B2C eCommerce platform",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSectionslider />
      <CategorySlider/>
      <ProductTabs/>
      <Collection/>
      {/* <Byhazel /> */}
      <Features/>
      <JointheClub />
    </div>
  );
}
