// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
// import { TfiWorld } from "react-icons/tfi";

// const debounce = <T extends (...args: any[]) => void>(
//   func: T,
//   wait: number
// ) => {
//   let timeout: NodeJS.Timeout | undefined;

//   return (...args: Parameters<T>): void => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => func(...args), wait);
//   };
// };

// const MainNavbar = () => {
//   const [isTroggleMenuOpen, setIsTroggleMenuOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const [navbarColor, setNavbarColor] = useState(false);

//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   const menuItems = useMemo(
//     () => [
//       { title: "HOME", slug: "/" },
//       { title: "ABOUT", slug: "/about" },
//       { title: "GALLERY", slug: "/gallery" },
//       { title: "CONTACT US", slug: "/contact" },
//     ],
//     []
//   );

//   const handleScroll = useCallback(
//     debounce(() => {
//       setNavbarColor(window.scrollY >= 100);
//     }, 100),
//     []
//   );

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   useEffect(() => {
//     let timeoutId: NodeJS.Timeout;

//     if (isMenuOpen) {
//       // Delay the scroll lock by 1 second
//       timeoutId = setTimeout(() => {
//         document.body.style.overflow = "hidden";
//       }, 1000);
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     // Clean up the effect and clear timeout
//     return () => {
//       clearTimeout(timeoutId);
//       document.body.style.overflow = "auto";
//     };
//   }, [isMenuOpen]);

//   return (
//     <section className={`relative z-50`}>
//       <div
//         className={`w-full py-3 md:py-3 fixed top-0 transition-colors duration-100 ${
//           navbarColor
//             ? "!bg-white shadow-small duration-1000"
//             : "bg-transparent"
//         } z-50`}
//       >
//         {/* Navbar top */}
//         <div className="">
//           <div className="flex items-center container justify-between">
//             <div className="w-full flex items-center gap-x-10 2xl:gap-x-20">
//               <Link href={"/"}>
//                 <Image
//                   src={
//                     navbarColor
//                       ? "/assets/site-logo/hazel-logo-black.png"
//                       : "/assets/site-logo/hazel-logo-white.png"
//                   }
//                   alt="Hazel Logo"
//                   width={1000}
//                   height={1000}
//                   quality={100}
//                   className="cursor-pointer w-[100px] md:w-[180px] h-auto mt-2 mb-2"
//                 />
//               </Link>
//             </div>

//             <div className="w-full">
//               <div
//                 className={`flex items-center justify-end gap-x-4 md:gap-x-12 ${
//                   navbarColor
//                     ? "text-black border-black"
//                     : "text-white border-white"
//                 }`}
//               >
//                 <div>
//                   <FiSearch className="size-6 hover:text-black" />
//                 </div>
//                 <div>
//                   <TfiWorld className="size-5 hover:text-black" />
//                 </div>
//                 <div className="hidden lg:block">
//                   <Link
//                     href={`/`}
//                     className={`cursor-pointer uppercase text-lg lg:text-[17px] font-semibold transition-all duration-300 h-7 border-b-1 font-aviano-regular pb-1 ${
//                       navbarColor ? "border-black" : "border-white"
//                     }`}
//                   >
//                     Boutiques
//                   </Link>
//                 </div>
//                 <div className="hidden lg:block">
//                   <Link
//                     href={`/`}
//                     className={`cursor-pointer uppercase text-lg lg:text-[17px] font-semibold transition-all duration-300 h-7 border-1 p-2 font-aviano-regular ${
//                       navbarColor ? "border-black" : "border-white"
//                     }`}
//                   >
//                     Contact us
//                   </Link>
//                 </div>

//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setIsMenuOpen(!isMenuOpen);
//                   }}
//                   className={`${navbarColor ? "text-black" : "text-white"}`}
//                 >
//                   {isMenuOpen ? (
//                     <RxCross2 className="size-8 " />
//                   ) : (
//                     <IoReorderThreeOutline className="size-8 " />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Toggle Active */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full z-40 transition-transform duration-1000 ease-in-out ${
//           isMenuOpen
//             ? "translate-x-0 bg-black opacity-90"
//             : "translate-x-full bg-black"
//         }`}
//       >
//         <div className="text-white p-8 container my-20">
//           <Link href="#our-story" className="block text-lg mb-4">
//             Our Story
//           </Link>
//           <Link href="#gallery" className="block text-lg mb-4">
//             Gallery
//           </Link>
//           <Link href="#contact" className="block text-lg">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default React.memo(MainNavbar);



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaBars,
//   FaTimes,
//   FaSearch,
//   FaUser,
//   FaHeart,
//   FaShoppingCart,
//   FaChevronDown,
// } from "react-icons/fa";

// const MainNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openMegaMenu, setOpenMegaMenu] = useState(null);
//   const pathname = usePathname();

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Cloths", href: "/cloths" },
//     { name: "Cosmetics", href: "/cosmetics" },
//     { name: "Shop", href: "/shop" },
//   ];

//   const megaMenus = {
//     Cloths: [
//       {
//         title: "Men's Clothing",
//         items: ["Shirts", "T-Shirts", "Jeans", "Jackets"],
//       },
//       {
//         title: "Women's Clothing",
//         items: ["Dresses", "Tops", "Sarees", "Skirts"],
//       },
//       {
//         title: "Accessories",
//         items: ["Belts", "Watches", "Bags", "Shoes"],
//       },
//     ],
//     Cosmetics: [
//       {
//         title: "Makeup",
//         items: ["Lipstick", "Foundation", "Mascara", "Blush"],
//       },
//       {
//         title: "Skincare",
//         items: ["Moisturizers", "Serums", "Face Wash", "Sunscreen"],
//       },
//       {
//         title: "Hair Care",
//         items: ["Shampoo", "Conditioner", "Hair Oil", "Styling Products"],
//       },
//     ],
//   };

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Left: Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-xl font-bold text-gray-900">
//               BrandLogo
//             </Link>
//           </div>

//           {/* Center: Desktop Navigation */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {navItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => setOpenMegaMenu(item.name)}
//                 onMouseLeave={() => setOpenMegaMenu(null)}
//               >
//                 <Link
//                   href={item.href}
//                   className={`text-gray-700 hover:text-gray-900 ${
//                     pathname === item.href ? "font-semibold border-b-2 border-gray-900" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>

//                 {/* Mega Menu for Cloths & Cosmetics */}
//                 {megaMenus[item.name] && openMegaMenu === item.name && (
//                   <div className="absolute left-0 top-11 w-screen bg-white shadow-lg border-t border-gray-200">
//                     <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 gap-6">
//                       {megaMenus[item.name].map((category, index) => (
//                         <div key={index}>
//                           <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
//                           <ul className="mt-2 space-y-2">
//                             {category.items.map((subItem, subIndex) => (
//                               <li key={subIndex}>
//                                 <Link
//                                   href={`/category/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
//                                   className="text-gray-600 hover:text-gray-900 block"
//                                 >
//                                   {subItem}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right: Icons */}
//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-gray-700 hover:text-gray-900">
//               <FaSearch className="h-5 w-5" />
//             </button>

//             <div className="relative group">
//               <button className="p-2 text-gray-700 hover:text-gray-900">
//                 <FaUser className="h-5 w-5" />
//               </button>
//               <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-40 p-2">
//                 <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
//                   Login
//                 </Link>
//                 <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">
//                   Register
//                 </Link>
//               </div>
//             </div>

//             <button className="p-2 text-gray-700 hover:text-gray-900">
//               <FaHeart className="h-5 w-5" />
//             </button>

//             <button className="p-2 text-gray-700 hover:text-gray-900 relative">
//               <FaShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//                 3
//               </span>
//             </button>

//             <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700 hover:text-gray-900">
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
//           <div className="p-4 space-y-4">
//             {navItems.map((item) => (
//               <Link key={item.name} href={item.href} className="block text-gray-700 hover:text-gray-900">
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default MainNavbar;

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaBars,
//   FaTimes,
//   FaSearch,
//   FaUser,
//   FaHeart,
//   FaShoppingCart,
//   FaChevronDown,
// } from "react-icons/fa";

// const MainNavbar = () => {
//   const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
//   const [isOpen, setIsOpen] = useState<boolean>(false); // ✅ Fix: Added missing state
//   const [scrolled, setScrolled] = useState<boolean>(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Cloths", href: "/cloths", hasMegaMenu: true },
//     { name: "Cosmetics", href: "/cosmetics", hasMegaMenu: true },
//     { name: "Shop", href: "/shop" },
//   ];

//   const megaMenus = {
//     Cloths: [
//       { title: "Men's Clothing", items: ["Shirts", "T-Shirts", "Jeans", "Jackets"] },
//       { title: "Women's Clothing", items: ["Dresses", "Tops", "Sarees", "Skirts"] },
//       { title: "Accessories", items: ["Belts", "Watches", "Bags", "Shoes"] },
//     ],
//     Cosmetics: [
//       { title: "Makeup", items: ["Lipstick", "Foundation", "Mascara", "Blush"] },
//       { title: "Skincare", items: ["Moisturizers", "Serums", "Face Wash", "Sunscreen"] },
//       { title: "Hair Care", items: ["Shampoo", "Conditioner", "Hair Oil", "Styling Products"] },
//     ],
//   };

//   return (
//     <nav  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-2 ${
//       scrolled ? "bg-white shadow-md" : "bg-transparent text-white"
//     }`}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Left: Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className={`text-3xl font-bold ${scrolled? "text-gray-900": "text-white"}`}>
//               BrandLogo
//             </Link>
//           </div>

//           {/* Center: Desktop Navigation */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {navItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => setOpenMegaMenu(item.name)}
//                 onMouseLeave={() => setOpenMegaMenu(null)}
//               >
//                 <Link
//                   href={item.href}
//                   className={`${scrolled?"text-gray-700 hover:text-gray-900": "text-white"} text-xl flex items-center space-x-1 ${
//                     pathname === item.href ? "font-semibold border-b-2 border-white" : ""
//                   }`}
//                 >
//                   <span>{item.name}</span>
//                   {item.hasMegaMenu && <FaChevronDown className="text-sm" />}
//                 </Link>

//                 {/* Mega Menu for Cloths & Cosmetics */}
//                 {megaMenus[item.name] && openMegaMenu === item.name && (
//                   <div className="absolute left-0 top-[53px] w-screen bg-white shadow-lg border-t border-gray-200">
//                     <div className="container mx-auto px-6 py-6 grid grid-cols-3 gap-6">
//                       {megaMenus[item.name].map((category, index) => (
//                         <div key={index}>
//                           <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
//                           <ul className="mt-2 space-y-2">
//                             {category.items.map((subItem, subIndex) => (
//                               <li key={subIndex}>
//                                 <Link
//                                   href={`/category/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
//                                   className="text-gray-600 hover:text-gray-900 block"
//                                 >
//                                   {subItem}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right: Icons */}
//           <div className="flex items-center space-x-4">
//             <button onClick={() => setOpen(true)} aria-label="Open search" className={`p-2 ${scrolled?"text-gray-700 hover:text-gray-900":"text-white"}`}>
//               <FaSearch className="text-xl" />
//             </button>

//             <div className="relative group">
//               <button className={`p-2 ${scrolled?"text-gray-700 hover:text-gray-900":"text-white"}`}>
//                 <FaUser className="h-5 w-5" />
//               </button>
//               <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-40 p-2">
//                 <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
//                   Login
//                 </Link>
//                 <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">
//                   Register
//                 </Link>
//               </div>
//             </div>

//             <button className={`p-2 ${scrolled?"text-gray-700 hover:text-gray-900":"text-white"}`}>
//               <FaHeart className="h-5 w-5" />
//             </button>

//             <button className={`p-2 ${scrolled?"text-gray-700 hover:text-gray-900":"text-white"} relative`}>
//               <FaShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//                 3
//               </span>
//             </button>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2 text-gray-700 hover:text-gray-900"
//             >
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default MainNavbar;


"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
// import product1 from "@/public/assets/product/ai-generated-8773424_1280.png"
// import product2 from "@/public/assets/product/duck-783684_1280.jpg"
// import product3 from "@/public/assets/product/fire-fighters-1045906_1280.jpg"
import megaMenuImg from "@/public/assets/product/fashion-3080626_1280.jpg"
// import { div } from "framer-motion/client"
import ProductCard from "../shared/ProductCard"
import { useCart } from "@/hooks/useCart"
import { formatPrice } from "@/lib/utils"
import { useRouter } from "next/navigation"

type MegaMenu = "clothes" | "cosmetics" | "shop" | null

const clothesCategories = {
  "WOMEN'S FASHION": [
    "Dresses",
    "Tops & Tees",
    "Jackets & Coats",
    "Pants & Capris",
    "Sweaters",
    "Costumes",
    "Hoodies & Sweatshirts",
    "Pajamas & Robes",
    "Shorts",
    "Swimwear",
  ],
  "MEN'S FASHION": [
    "Shirts",
    "Jeans",
    "T-Shirts",
    "Jackets",
    "Trousers",
    "Casual Shorts",
    "Formal Wear",
    "Sports Wear",
    "Blazers",
    "Suits",
  ],
  ACCESSORIES: [
    "Watches",
    "Wallets",
    "Bags",
    "Sunglasses",
    "Belts",
    "Jewelry",
    "Hair Accessories",
    "Socks",
    "Hats & Caps",
    "Scarves",
  ],
}

const cosmeticsCategories = {
  "SKIN CARE": [
    "Face Wash",
    "Toner",
    "Moisturizer",
    "Serum",
    "Face Mask",
    "Eye Cream",
    "Sun Care",
    "Lip Care",
    "Face Oil",
    "Night Cream",
  ],
  MAKEUP: [
    "Foundation",
    "Lipstick",
    "Eyeliner",
    "Mascara",
    "Blush",
    "Eyeshadow",
    "Concealer",
    "Powder",
    "Brushes",
    "Nail Polish",
  ],
  "HAIR CARE": [
    "Shampoo",
    "Conditioner",
    "Hair Oil",
    "Hair Mask",
    "Hair Serum",
    "Hair Color",
    "Styling Products",
    "Hair Tools",
    "Treatments",
    "Sets",
  ],
}

const shopCategories = {
  "SHOP LAYOUT": [
    "Grid View",
    "List View",
    "Full Width",
    "Left Sidebar",
    "Right Sidebar",
    "No Sidebar",
    "Filter Dropdown",
    "Filter Sidebar",
  ],
  "SHOP FEATURES": [
    "Product Compare",
    "Wishlist",
    "Quick View",
    "Size Guide",
    "Shopping Cart",
    "Checkout",
    "Order Tracking",
    "My Account",
  ],
  "PRODUCT TYPES": [
    "Simple Product",
    "Variable Product",
    "Grouped Product",
    "External Product",
    "Digital Product",
    "On Sale",
    "Out of Stock",
    "New Arrival",
  ],
}

const products =
  [
    {
      id: 1,
      name: "V-neck cotton T-shirt",
      price: 59.99,
      tag: "NEW",
      image: "/assets/product/clothes (1).jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 2,
      name: "Polarized sunglasses",
      price: 79.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "Hot",
      image: "/assets/product/clothes (2).jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 3,
      name: "Ramie shirt with pockets",
      price: 89.99,
      originalPrice: 98.0,
      discount: 25,
      tag: "NEW",
      image: "/assets/product/earrings.jpg",
      countdown: "13D : 5H : 9M : 42S",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
    {
      id: 4,
      name: "Ribbed cotton-blend top",
      price: 69.99,
      tag: "",
      image: "/assets/product/bindi.jpg",
      "colors": ["#A7C0FF", "#B6A7FF", "#FFE5A7"],
      "rating": 4.8,
      "sizes": ["6.7-inch"],
      category: "clothes"
    },
  ]

export default function MainNavbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenu>(null)
  const [cartCount, setCartCount] = useState(1)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const accountRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (menu: MegaMenu) => {
    setActiveMegaMenu(menu)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!isHovering) {
      timeoutId = setTimeout(() => {
        setActiveMegaMenu(null)
      }, 300) // Delay closing the menu to allow moving to mega menu content
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isHovering])

  // Cart Drawer State
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  let timeoutId = null;
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const { items, removeItem, updateQuantity, clearCart } = useCart()

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)) {
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAccountMouseEnter = () => {
    setIsAccountMenuOpen(true);
  };

  const handleAccountMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsAccountMenuOpen(false);
    }, 300); // 300ms delay before closing
  };

  // const handleCheckout = () => {
  //     const selectedItems = cartItems.filter((item) => item.selected && item.stock.quantity > 0)
  //     if (selectedItems.length === 0) {
  //       toast.error("Please select items to checkout")
  //       return
  //     }
  //     // Navigate to checkout page with selected items
  //     router.push(`/checkout?items=${encodeURIComponent(JSON.stringify(selectedItems))}`)
  //   }
  return (
    <div className="fixed w-full z-40">
      <div className="relative">
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fw6ZaUvpoRBNhXUYxoJ1yxIAMAtoht.png"
                alt="Modave"
                width={146}
                height={40}
                className="h-10 w-auto"
              /> */}
                <h1 className="text-2xl font-bold text-orange-600">Brand Cosmo</h1>
              </Link>

              {/* Main Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <div onMouseEnter={() => handleMouseEnter("clothes")} onMouseLeave={handleMouseLeave}>
                  <button
                    className={`text-gray-800 font-medium hover:text-[#FF3333] transition-colors ${activeMegaMenu === "clothes" ? "text-[#FF3333]" : ""
                      }`}
                  >
                    Clothes
                    <span className="inline-block ml-1">▾</span>
                  </button>
                </div>
                <div onMouseEnter={() => handleMouseEnter("cosmetics")} onMouseLeave={handleMouseLeave}>
                  <button
                    className={`text-gray-800 font-medium hover:text-[#FF3333] transition-colors ${activeMegaMenu === "cosmetics" ? "text-[#FF3333]" : ""
                      }`}
                  >
                    Cosmetics
                    <span className="inline-block ml-1">▾</span>
                  </button>
                </div>
                {/* <div onMouseEnter={() => handleMouseEnter("shop")} onMouseLeave={handleMouseLeave}>
                  <button
                    className={`text-gray-800 font-medium hover:text-[#FF3333] transition-colors ${activeMegaMenu === "shop" ? "text-[#FF3333]" : ""
                      }`}
                  >
                    Shop
                    <span className="inline-block ml-1">▾</span>
                  </button>
                </div> */}
                <Link href="/shop" >
                  <button
                    className={`text-gray-800 font-medium hover:text-[#FF3333] transition-colors`}
                  >
                    Shop
                    {/* <span className="inline-block ml-1">▾</span> */}
                  </button>
                </Link>
              </nav>

              {/* Right Icons */}
              <div className="flex items-center space-x-6">
                <button className="hover:text-[#FF3333] transition-colors" onClick={() => setIsOpen(true)}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>
                <Link href='/login'>
                  <button ref={buttonRef} className="hover:text-[#FF3333] transition-colors" onMouseEnter={handleAccountMouseEnter} aria-label="Account">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </button>
                </Link>
                <Link href="/wishlist">
                  <button className="hover:text-[#FF3333] transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </Link>
                <button className="relative hover:text-[#FF3333] transition-colors" onClick={() => setIsCartOpen(true)}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3.8-13.5L19 12H7.2l-.8-9h13.4M20 4H5.2L4 .8C3.9.3 3.5 0 3 0H0v2h2.2L6 16c.1.5.5.8 1 .8h12c.5 0 .9-.3 1-.8L21.5 6c.1-.5-.2-1-.7-1z" />
                  </svg>
                  {items.length > 0  && (
                    <span className="absolute -top-2 -right-2 bg-[#FF3333] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {items.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/*search modal  */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div ref={modalRef} className="bg-white rounded-lg w-full max-w-5xl max-h-[100vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Search</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Searching..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <svg
                    className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Feature keywords Today</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Dresses", "Dresses women", "Dresses midi", "Dress summer"].map((keyword) => (
                        <button
                          key={keyword}
                          className="px-4 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Recently viewed products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {products?.map((product, i) => (
                        <ProductCard key={product?.id} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mega Menus */}
        <div
          ref={megaMenuRef}
          className={`absolute left-0 right-0 bg-white z-50 transition-all duration-300 shadow-lg ${activeMegaMenu ? "opacity-100 max-h-[600px] overflow-y-auto" : "opacity-0 max-h-0 overflow-hidden"
            }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {/* Menu Categories */}
              {activeMegaMenu === "clothes" && (
                <>
                  {Object.entries(clothesCategories).map(([title, items], index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-4">{title}</h3>
                      <ul className="space-y-3">
                        {items.map((item, i) => (
                          <li key={i}>
                            <Link href="#" className="text-gray-600 hover:text-[#FF3333] transition-colors">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="">
                    <h1 className="pb-10 font-bold text-xl">Recent Top Product</h1>
                    <div className="relative w-[100%] h-[60%]">
                      <Image src={megaMenuImg} alt="Clothes Collection" fill className="rounded-lg" />
                    </div>
                  </div>
                </>
              )}

              {activeMegaMenu === "cosmetics" && (
                <>
                  {Object.entries(cosmeticsCategories).map(([title, items], index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-4">{title}</h3>
                      <ul className="space-y-3">
                        {items.map((item, i) => (
                          <li key={i}>
                            <Link href="#" className="text-gray-600 hover:text-[#FF3333] transition-colors">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="">
                    <h1 className="pb-10 font-bold text-xl">Recent Top Product</h1>
                    <div className="relative w-[100%] h-[60%]">
                      <Image src={megaMenuImg} alt="Cosmetics Collection" fill className="rounded-lg" />
                    </div>
                  </div>
                </>
              )}

              {activeMegaMenu === "shop" && (
                <>
                  {Object.entries(shopCategories).map(([title, items], index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-4">{title}</h3>
                      <ul className="space-y-3">
                        {items.map((item, i) => (
                          <li key={i}>
                            <Link href="#" className="text-gray-600 hover:text-[#FF3333] transition-colors">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="">
                    <h1 className="pb-10 font-bold text-xl">Recent Top Product</h1>
                    <div className="relative w-[100%] h-[70%]">
                      <Image src={megaMenuImg} alt="Shop Collection" fill className="rounded-lg" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* account dropdown */}
        {isAccountMenuOpen && (
          <div ref={accountMenuRef}
            onMouseEnter={handleAccountMouseEnter}
            onMouseLeave={handleAccountMouseLeave} className="absolute right-0 top-[73px] mt-2 w-48 bg-white shadow-lg  p-2">
            <Link href="/dashboard/profile">
              <p className="p-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
            </Link>
            <Link href="/dashboard/orders">
              <p className="p-2 hover:bg-gray-100 cursor-pointer">Orders</p>
            </Link>
            <Link href="/logout">
              <p className="p-2 hover:bg-gray-100 cursor-pointer">Logout</p>
            </Link>
          </div>
        )}
        {/* cart drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
            <div className="w-96 bg-white h-full p-4 shadow-lg">
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-bold">Shopping Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-red-500">
                  ✖
                </button>
              </div>
              {/* cart product */}
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-semibold">Your Cart ({items.length})</h2>
                  {/* <button
                    // onClick={onClose}
                    className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Close cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                  </button> */}
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-300 mb-4"
                      >
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                      </svg>
                      <p className="text-gray-500 mb-4">Your cart is empty</p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  ) : (
                    <ul className="divide-y divide-gray-200">
                      {items.map((item) => (
                        <li key={item.id} className="py-4 flex">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="line-clamp-1">{item.name}</h3>
                              <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                            </div>

                            <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.description}</p>

                            <div className="flex items-center justify-between text-sm mt-2">
                              <div className="flex items-center border rounded-md">
                                <button
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <span className="px-2 py-1 text-gray-900">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>

                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                                aria-label="Remove item"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                      <p>Subtotal</p>
                      <p>{formatPrice(subtotal)}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
                    <button onClick={() => {
                  // onClose()
                  router.push("/checkout")
                }} className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                      Checkout
                    </button>
                    <div className="mt-3 flex justify-center text-center text-sm text-gray-500">
                      <button onClick={clearCart} className="text-gray-500 hover:text-gray-700">
                        Clear Cart
                      </button>
                      <span className="mx-2">•</span>
                      <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

