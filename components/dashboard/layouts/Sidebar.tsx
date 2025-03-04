"use client";
// import { doLogout } from "@/app/action/userAuth";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaShoppingBasket } from "react-icons/fa";
// import { FaGetPocket, FaPeopleGroup, FaPeopleLine } from "react-icons/fa6";
// import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import {
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
// import { RiDashboardHorizontalFill } from "react-icons/ri";

const sideBarData = [
  // {
  //   icon: <RiDashboardHorizontalFill className="size-8 text-gray-700" />,
  //   slug: "/dashboard",
  //   title: "Dashboard",
  // },
  {
    icon: <FaShoppingBasket className="size-7 text-gray-700" />,
    slug: "/dashboard/orders",
    title: "Orders",
  },
  {
    icon: (
      <MdOutlineProductionQuantityLimits className="size-8 text-gray-700" />
    ),
    slug: "/dashboard/cart",
    title: "Carts",
  },
  {
    icon: <FaRegHeart className="size-7 text-gray-700" />,
    slug: "/wishlist",
    title: "Wishlist",
  },
  {
    icon: <CgProfile className="size-7 text-gray-700" />,
    slug: "/dashboard/profile",
    title: "Profile",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className=" sticky w-[72%] xl:w-[96%] h-screen bg-white shadow-xl mt-20"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-xl">
          {/* <div className="flex justify-center">
            <Image
              src="/assets/site-logo/hazle-logo.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-[220px] h-auto"
            />
          </div> */}
          <ul className="space-y-3 font-semibold mt-4 w-full">
            {sideBarData?.map((el, index) => (
              <li key={index}>
                <Link
                  href={el?.slug}
                  className={`flex items-center p-2 text-gray-700 rounded-lg  hover:bg-gray-100 group ${
                    pathname === el?.slug ? "bg-gray-100" : ""
                  }`}
                >
                  {el?.icon}
                  <p className="ms-3 text-lg">{el?.title}</p>
                </Link>
              </li>
            ))}
            <li className="">
              <form 
            //   action={doLogout}
              >
                <button
                  type="submit"
                  className={`flex items-center p-2 text-gray-700 rounded-lg  hover:bg-gray-100 group w-full`}
                >
                  <IoLogOut className="size-7 text-gray-700" />
                  <p className="ms-3 text-lg">Logout</p>
                </button>
              </form>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
