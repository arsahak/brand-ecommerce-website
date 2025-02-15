"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TfiWorld } from "react-icons/tfi";

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout | undefined;

  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
};

const MainNavbar = () => {
  const [isTroggleMenuOpen, setIsTroggleMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "HOME", slug: "/" },
      { title: "ABOUT", slug: "/about" },
      { title: "GALLERY", slug: "/gallery" },
      { title: "CONTACT US", slug: "/contact" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMenuOpen) {
      // Delay the scroll lock by 1 second
      timeoutId = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 1000);
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect and clear timeout
    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <section className={`relative z-50`}>
      <div
        className={`w-full py-3 md:py-3 fixed top-0 transition-colors duration-100 ${
          navbarColor
            ? "!bg-white shadow-small duration-1000"
            : "bg-transparent"
        } z-50`}
      >
        {/* Navbar top */}
        <div className="">
          <div className="flex items-center container justify-between">
            <div className="w-full flex items-center gap-x-10 2xl:gap-x-20">
              <Link href={"/"}>
                <Image
                  src={
                    navbarColor
                      ? "/assets/site-logo/hazel-logo-black.png"
                      : "/assets/site-logo/hazel-logo-white.png"
                  }
                  alt="Hazel Logo"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="cursor-pointer w-[100px] md:w-[180px] h-auto mt-2 mb-2"
                />
              </Link>
            </div>

            <div className="w-full">
              <div
                className={`flex items-center justify-end gap-x-4 md:gap-x-12 ${
                  navbarColor
                    ? "text-black border-black"
                    : "text-white border-white"
                }`}
              >
                <div>
                  <FiSearch className="size-6 hover:text-black" />
                </div>
                <div>
                  <TfiWorld className="size-5 hover:text-black" />
                </div>
                <div className="hidden lg:block">
                  <Link
                    href={`/`}
                    className={`cursor-pointer uppercase text-lg lg:text-[17px] font-semibold transition-all duration-300 h-7 border-b-1 font-aviano-regular pb-1 ${
                      navbarColor ? "border-black" : "border-white"
                    }`}
                  >
                    Boutiques
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <Link
                    href={`/`}
                    className={`cursor-pointer uppercase text-lg lg:text-[17px] font-semibold transition-all duration-300 h-7 border-1 p-2 font-aviano-regular ${
                      navbarColor ? "border-black" : "border-white"
                    }`}
                  >
                    Contact us
                  </Link>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className={`${navbarColor ? "text-black" : "text-white"}`}
                >
                  {isMenuOpen ? (
                    <RxCross2 className="size-8 " />
                  ) : (
                    <IoReorderThreeOutline className="size-8 " />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Active */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-40 transition-transform duration-1000 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 bg-black opacity-90"
            : "translate-x-full bg-black"
        }`}
      >
        <div className="text-white p-8 container my-20">
          <Link href="#our-story" className="block text-lg mb-4">
            Our Story
          </Link>
          <Link href="#gallery" className="block text-lg mb-4">
            Gallery
          </Link>
          <Link href="#contact" className="block text-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
