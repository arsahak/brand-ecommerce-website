// import Link from "next/link";
// import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { GrInstagram } from "react-icons/gr";

// const footerData = [
//   {
//     title: "Explore Hazel.com",
//     list: [
//       { subTitle: "Ready-To-Wear", slug: "ready-to-wear" },
//       { subTitle: "Cashmere", slug: "cashmere" },
//       { subTitle: "The Classics", slug: "the-classics" },
//       { subTitle: "Iconic Signatures", slug: "iconic-signatures" },
//       { subTitle: "New Arrivals", slug: "new-arrivals" },
//       { subTitle: "Next Up", slug: "next-up" },
//       { subTitle: "Always At HAZEL", slug: "always-at-hazel" },
//       { subTitle: "Better Choice", slug: "better-choice" },
//     ],
//   },
//   {
//     title: "Online Services",
//     list: [
//       { subTitle: "Help", slug: "help" },
//       { subTitle: "Shipping And Delivery", slug: "shipping-and-delivery" },
//       { subTitle: "Orders And Returns", slug: "orders-and-returns" },
//       { subTitle: "Size Guide", slug: "size-guide" },
//       { subTitle: "Care Guide", slug: "care-guide" },
//       { subTitle: "Magazine", slug: "magazine" },
//       { subTitle: "Your Favourites", slug: "your-favourites" },
//       { subTitle: "Gift Card", slug: "gift-card" },
//     ],
//   },
//   {
//     title: "Boutique Services",
//     list: [
//       { subTitle: "Boutique Services", slug: "boutique-services" },
//       { subTitle: "Find A Boutique", slug: "find-a-boutique" },
//       { subTitle: "Book An Appointment", slug: "book-an-appointment" },
//       { subTitle: "Become A Retailer", slug: "become-a-retailer" },
//       { subTitle: "Corporate Enquiries", slug: "corporate-enquiries" },
//       { subTitle: "External Link", slug: "external-link" },
//     ],
//   },
//   {
//     title: "The House of Hazel",
//     list: [
//       { subTitle: "About Us", slug: "about-us" },
//       { subTitle: "Careers", slug: "careers" },
//       { subTitle: "Legal", slug: "legal" },
//       { subTitle: "Vision", slug: "vision" },
//       { subTitle: "Contact Us", slug: "contact-us" },
//     ],
//   },
// ];

// const MainFooter = () => {
//   return (
//     <div className="bg-[#E6E5E0]">
//       <div className="container py-10 md:py-20">
//         <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start">
//           {footerData?.map((section, index) => (
//             <div key={index} className="mb-10 md:mb-0">
//               <h3 className="text-2xl font-semibold mb-3 md:mb-5 uppercase font-aviano-regular text-center md:text-left">
//                 {section.title}
//               </h3>
//               <ul className="space-y-2">
//                 {section.list.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start md:items-center md:justify-start justify-center"
//                   >
//                     <Link
//                       href={"/"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={
//                         "font-outfit-sans font-normal text-lg hover:underline pb-1"
//                       }
//                     >
//                       {item.subTitle}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center justify-between w-full space-x-10 mt-0 md:mt-6 mb-4">
//           <hr className="h-px my-8 bg-gray-400 border-0 w-[20%] md:w-[40%]" />
//           <div className="flex items-center justify-between space-x-2 w-[60%] md:w-[10%]">
//             <FaXTwitter className="size-5 font-black cursor-pointer" />
//             <GrInstagram className="size-5 font-black cursor-pointer" />
//             <FaLinkedin className="size-5 font-black cursor-pointer" />
//             <FaFacebookSquare className="size-5 font-black cursor-pointer" />
//           </div>
//           <hr className="h-px my-8 bg-gray-400 border-0 w-[20%] md:w-[40%]" />
//         </div>
//         <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between font-aviano-regular uppercase">
//           <h2 className="text-base md:text-lg text-center md:text-left">
//             COPYRIGHT © HAZEL Norway. ALL RIGHTS RESERVED.
//           </h2>
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-5 md:mb-0">
//             <Link href={"/privacy-policy"} className="hover:underline ">
//               <h2 className="text-base md:text-lg">Privacy Policy</h2>
//             </Link>
//             <Link href={"/cookie-policy"} className="hover:underline">
//               <h2 className="text-base md:text-lg">Cookie Policy</h2>
//             </Link>
//             <Link href={"/terms-and-conditions"} className="hover:underline">
//               <h2 className="text-base md:text-lg">Terms and Conditions</h2>
//             </Link>
//           </div>
//         </div>
//         <div className="font-aviano-regular uppercase text-center mt-6  md:mt-24">
//           <h2 className="text-lg md:text-2xl font-semibold mb-0 md:mb-3">
//             DISCOVER NExT
//           </h2>
//           <h2 className="text-2xl md:text-4xl font-semibold">
//             Explore Collect
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainFooter;



"use client"

import Image from "next/image"
import Link from "next/link"
import { FaDribbble, FaFacebookF, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import footerImg from "@/public/assets/site-logo/masterCard.png"
import footerImg1 from "@/public/assets/site-logo/paypal-.png"
import footerImg2 from "@/public/assets/site-logo/visa.png"
import footerImg3 from "@/public/assets/site-logo/images.png"
import footerImg4 from "@/public/assets/site-logo/google-paly.png"
const links = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Stories", href: "/about-us" },
  // { label: "Size Guide", href: "/size-guide" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Career", href: "/career" },
  { label: "My Account", href: "/dashboard/profile" },
];
export default function MainFooter() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-6 col-span-2">
            <Link href="/" className="inline-block">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fw6ZaUvpoRBNhXUYxoJ1yxIAMAtoht.png"
                alt="Modave"
                width={146}
                height={40}
                className="h-10 w-auto"
              /> */}
              <h1 className="text-2xl font-bold">Brand Cosmo</h1>
            </Link>
            <p className="text-sm">549 Oak St.Crystal Lake, IL 60014</p>
            <Link href="/get-direction" className="inline-flex items-center text-sm hover:underline">
              GET DIRECTION
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="space-y-2">
              <p className="text-sm">themesflat@gmail.com</p>
              <p className="text-sm">315-666-6688</p>
            </div>
            <div className="flex space-x-4">
              {[
                {
                  name: "facebook",
                  icon: <FaFacebookF />,
                },
                {
                  name: "twitter",
                  icon: <FaXTwitter />,
                },
                { name: "instagram", icon: <FaInstagram /> },
                { name: "tiktok", icon: <FaTiktok /> },
                { name: "dribbble", icon: <FaDribbble /> },
                {
                  name: "pinterest",
                  icon: <FaPinterest />,
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={`https://${social.name}.com`}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-400 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6">Information</h3>
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6">Customer Services</h3>
            <ul className="space-y-4">
              {[
                { name: "Shipping", path: "/shipping" },
                { name: "Return & Refund", path: "/returns-refunds" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-conditions" },
                { name: "Orders FAQs", path: "/orders-faq" },
                // { name: "My Wishlist", path: "/wishlist" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-sm hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Newsletter */}
          <div className="col-span-2">
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-sm mb-6">Sign up for our newsletter and get 10% off your first purchase</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full pr-12 py-4 px-4 border border-gray-700 focus:outline-none focus:border-gray-400 rounded-full"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white bg-gray-700 rounded-full"
                aria-label="Subscribe"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-xs mt-4">
              By clicking subcribe, you agree to the{" "}
              <Link href="#" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm">©2025 Modave. All Rights Reserved.</p>
              <div className="flex items-center space-x-2">
                <select className="text-sm bg-transparent border-none focus:outline-none cursor-pointer">
                  <option value="USD">USD</option>
                </select>
                <select className="text-sm bg-transparent border-none focus:outline-none cursor-pointer">
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm">Payment:</span>
              <div className="flex gap-2">
                <div className="w-14 h-10 relative"><Image src={footerImg} alt="Mastercard" className=" rounded" fill /></div>
                <div className="w-14 h-10 relative"><Image src={footerImg1} alt="Mastercard" className=" rounded" fill /></div>
                <div className="w-14 h-10 relative"><Image src={footerImg2} alt="Mastercard" className=" rounded" fill /></div>
                <div className="w-14 h-10 relative"><Image src={footerImg3} alt="Mastercard" className=" rounded" fill /></div>
                <div className="w-14 h-10 relative"><Image src={footerImg4} alt="Mastercard" className=" rounded" fill /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

