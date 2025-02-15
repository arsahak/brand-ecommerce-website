"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsSendArrowUpFill, BsTelephone } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";
import ImageMotion from "../motion/ImageMotion";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const FindaBoutique = () => {
  return (
    // bg-gradient-to-b from-white from-90% to-sectionbg to-10%
    <div className="bg-white relative">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-6">
          <div className="w-[100%] md:w-[40%]">
            <div className="font-aviano-regular flex justify-center md:justify-start">
              <ImageMotion>
                <h2 className="text-3xl md:text-5xl font-bold uppercase leading-[30px] md:leading-[50px] tracking-wider text-center md:text-left mt-8 md:mt-0">
                  FINDA
                  <br /> BOUTIQUE
                </h2>
              </ImageMotion>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="mt-8 text-center md:text-left">
                <ImageMotion>
                  <h2 className="text-4xl font-semibold uppercase font-aviano-regular ">
                    Showroom
                  </h2>
                </ImageMotion>
                <ImageMotion>
                  <h2 className="text-xl font-normal mt-2 font-outfit-sans">
                    bygboy all, no-2548 oslo
                  </h2>
                </ImageMotion>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <ImageMotion>
                <div className="flex items-center space-x-2 mt-8 justify-center md:justify-start">
                  <h2 className="text-lg font-medium font-aviano-regular uppercase">
                    Show on Google maps
                  </h2>
                  <Link
                    href="https://maps.app.goo.gl/RswLHsoJQiZyUVRW6"
                    target="_blank"
                  >
                    <BsSendArrowUpFill className="text-black size-5 cursor-pointer hover:text-gray-800" />
                  </Link>
                </div>
              </ImageMotion>
            </div>
            <div className="flex justify-center md:justify-start">
              <ImageMotion>
                <h2 className="text-xl font-semibold font-aviano-regular uppercase mt-5 text-center md:text-left">
                  Opening hours
                </h2>
              </ImageMotion>
            </div>
            <ImageMotion>
              <div className="flex justify-center md:justify-start">
                <div className="relative overflow-x-auto mt-2">
                  <table className="w-full text-lg text-left rtl:text-right text-black">
                    <tbody>
                      <tr>
                        <td className="pr-36 py-1">Monday - Friday</td>
                        <td className="py-1">10am - 7pm</td>
                      </tr>
                      <tr>
                        <td className="py-1">Saturday</td>
                        <td className="py-1">10am - 7pm</td>
                      </tr>
                      <tr>
                        <td className="py-1">Sunday</td>
                        <td className="py-1">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ImageMotion>

            <div className="flex justify-center md:justify-start">
              <ImageMotion>
                <h2 className="text-xl font-semibold font-aviano-regular uppercase mt-5 text-center md:text-left">
                  Contact us
                </h2>
              </ImageMotion>
            </div>
            <div className="flex justify-center md:justify-start">
              <ImageMotion>
                <div className="flex justify-center md:justify-start">
                  <div className="flex items-center space-x-16 mt-4">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <BsTelephone className="size-5 text-black" />
                      <p className="font-aviano-regular">Phone</p>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <IoMailUnreadOutline className="size-6 text-black" />
                      <p className="font-aviano-regular">Email</p>
                    </div>
                  </div>
                </div>
              </ImageMotion>
            </div>
          </div>
          <div className="w-full md:w-[58%]   md:absolute  right-0 bottom-0">
            <div className="container">
              <div className="flex items-center justify-center md:justify-end md:space-x-3 mb-5 cursor-pointer md:mr-[17%]">
                <ImageMotion>
                  <div className="flex items-center justify-start md:justify-center space-x-1">
                    <h2 className="text-xl font-semibold font-aviano-regular uppercase underline-offset-8 underline">
                      Explore all Boutiques
                    </h2>
                    <BsArrowRight className="size-6" />
                  </div>
                </ImageMotion>
              </div>
            </div>

            <div className="">
              <ScrollMotionEffect effect="fade-left" duration="1000">
                <div className="relative w-full h-[300px] lg:h-[400px]  xl:h-[500px] 2xl:h-[550px]">
                  <Image
                    src="/assets/home/abstract-store-with-futuristic-concept-architecture.jpg"
                    alt="Gallery Image"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                  />
                </div>{" "}
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sectionbg w-full h-[80px] xl:h-[70px]  2xl:h-[90px] hidden md:block"></div>
    </div>
  );
};

export default FindaBoutique;
