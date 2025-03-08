
import { CategorySlider } from "@/components/home/CategorySlider";
import Collection from "@/components/home/Collection";
import HeroSectionslider from "@/components/home/HeroSectionslider";
// import JointheClub from "@/components/home/JointheClub";
import ProductTabs from "@/components/home/ProductsTab";
import VideoSection from "@/components/home/VideoSection";
import Features from "@/components/shared/Features";
import { Toaster } from "react-hot-toast";

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
      <VideoSection/>
      <Collection/>
      {/* <Byhazel /> */}
      <Features/>
      {/* <JointheClub /> */}
      <Toaster/>
    </div>
  );
}
