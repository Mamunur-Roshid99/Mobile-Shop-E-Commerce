"use client"

import React from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProfileSidebar = () => {
        const pathname = usePathname();
  return (
    <aside className="w-full md:w-[30%] rounded-lg shadow-xs border border-[#ECECEC] p-4 lg:w-[25%]">
      <h2 className="text-[#253D4E] font-bold text-xl lg:text-2xl">
        Hello, Mamunur Roshid
      </h2>
      <nav className="mt-3 flex items-center md:flex-col md:gap-2 lg:gap-3">
        <Link
          href="/profile"
          className={`md:w-full flex items-center justify-center rounded-sm py-2 px-4 gap-2 font-semibold text-sm lg:text-base ${
            pathname === "/profile"
              ? "bg-[#3BB77E] text-white hover:text-white"
              : "border border-[#3bb77d3d] text-[#3BB77E]"
          } transition`}
        >
          Profile
        </Link>
        <Link
          href="/profile/orders"
          className={`md:w-full flex items-center justify-center rounded-sm py-2 px-4 gap-2 font-semibold text-sm lg:text-base ${
            pathname === "/profile/orders"
              ? "bg-[#3BB77E] text-white hover:text-white"
              : "border border-[#3bb77d3d] text-[#3BB77E]"
          } transition`}
        >
          My Orders
        </Link>
        <Link
          href="/profile/wishlist"
          className={`md:w-full flex items-center justify-center rounded-sm py-2 px-4 gap-2 font-semibold text-sm lg:text-base ${
            pathname === "/profile/settings"
              ? "bg-[#3BB77E] text-white hover:text-white"
              : "border border-[#3bb77d3d] text-[#3BB77E]"
          } transition`}
        >
          My Wishlist
        </Link>
      </nav>
      <button className="w-full flex items-center justify-center gap-2 mt-4 py-2 px-3 rounded-sm border border-red-300 text-red-600 hover:bg-red-600 hover:text-white transition font-medium text-sm lg:text-base duration-300">
        Logout
      </button>
    </aside>
  );
}

export default ProfileSidebar
