"use client";

import React, { useState } from "react";
import SidebarOpen from "@/components/SidebarOpen";
import WishlistBadge from "@/components/WishlistBadge";
import CategoryDropdown from "@/components/CategoryDropdown";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const categories = [
  { name: "Samsung", slug: "samsung" },
  { name: "iPhone", slug: "iphone" },
  { name: "Vivo", slug: "vivo" },
  { name: "Xiaomi", slug: "xiaomi" },
  { name: "Realme", slug: "realme" },
  { name: "Laptop", slug: "laptop" },
  { name: "Smart Watch", slug: "smartwatch" },
  { name: "AirPods", slug: "airpods" },
  { name: "Phone Case", slug: "phonecase" },
  { name: "Smart TV", slug: "smarttv" },
];

const Navbar = () => {
  const [wishlistCount, setWishlistCount] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleWishlistClick = () => {
    console.log("Wishlist clicked");
  };

const handleSearch = (e) => {
  if (e.key === "Enter") {
    const found = categories.find((cat) =>
      searchTerm.toLowerCase().includes(cat.name.toLowerCase())
    );
    if (found) {
      router.push(`/category/${found.slug}`);
      setSearchTerm("");
    } else {
      toast.error(
        "Sorry, no results found! We can't find any matches for your search term."
      );
    }
  }
};

  return (
    <nav className="border-b border-b-[#ECECEC] sticky top-0 bg-white z-50">
      <header className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* Mobile & tablet */}
        <div className="flex items-center justify-between py-4 lg:hidden">
          <div className="text-3xl text-[#253D4E]">
            <SidebarOpen />
          </div>
          <div className="w-22 h-12">
            <img
              src="https://i.pinimg.com/1200x/de/49/20/de4920079c458a717be1c62acd4d2159.jpg"
              alt="logo"
              className="w-full h-full object-center"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link href={"/wishlist"}>
              <WishlistBadge
                count={wishlistCount}
                onClick={handleWishlistClick}
              />
            </Link>
            <CartDrawer />
            <Link href={"/profile"}>
              <VscAccount className="text-[#253D4E] text-2xl" />
            </Link>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between py-5">
          <div className="flex items-center gap-14">
            <div className="w-22 h-12">
              <img
                src="https://i.pinimg.com/1200x/de/49/20/de4920079c458a717be1c62acd4d2159.jpg"
                alt="logo"
                className="w-full h-full object-center"
              />
            </div>

            {/* Search input with category */}
            <div className="flex flex-col relative">
              <div className="flex items-center border-2 border-[#BCE3C9] rounded-sm py-3 px-6">
                <CategoryDropdown />
                <div className="flex items-center pl-3 relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Search for items..."
                    className="focus:outline-none text-sm placeholder:text-[#838383] text-[#253D4E] font-medium w-80"
                  />
                  <IoSearchOutline className="text-[#838383] text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* cart & wishlist & account */}
          <div className="flex items-center gap-5">
            <Link href={"/wishlist"} className="flex items-end">
              <WishlistBadge
                count={wishlistCount}
                onClick={handleWishlistClick}
              />
              <p className="text-sm text-[#7E7E7E]">Wishlist</p>
            </Link>
            <div className="flex items-end">
              <CartDrawer />
              <p className="text-sm text-[#7E7E7E]">Cart</p>
            </div>
            <Link href={"/profile"} className="flex items-end gap-1">
              <VscAccount
                className="hover:text-green-600"
                size={30}
                color="#253D4E"
              />
              <p className="text-sm text-[#7E7E7E]">Account</p>
            </Link>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
