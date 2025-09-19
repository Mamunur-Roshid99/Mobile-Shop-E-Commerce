"use client";

import React, { useState } from "react";
import SidebarOpen from "@/components/SidebarOpen";
import Image from "next/image";
import WishlistBadge from "@/components/WishlistBadge";
import CartBadge from "@/components/CartBadge";
import CategoryDropdown from "@/components/CategoryDropdown";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(2);

  const handleCartClick = () => {
    console.log("Cart clicked");
  };

  const handleWishlistClick = () => {
    console.log("Wishlist clicked");
  };

  return (
    <nav className="border-b border-b-[#ECECEC]">
      <header className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* mobile & tablet layout */}
        <div className="flex items-center justify-between py-4 lg:hidden">
          {/* menu */}
          <div className="text-3xl text-[#253D4E]">
            <SidebarOpen />
          </div>
          {/* logo */}
          <div>
            <Image src="/images/Nest.jpg" width={110} height={110} alt="logo" />
          </div>
          {/* cart & wishlist */}
          <div className="flex items-center gap-4">
            <WishlistBadge
              count={wishlistCount}
              onClick={handleWishlistClick}
            />
            <CartBadge count={cartCount} onClick={handleCartClick} />
            <div>
              <VscAccount className="text-[#253D4E] text-2xl" />
            </div>
          </div>
        </div>
        {/* Dekstop Layout */}
        <div className="hidden lg:flex items-center justify-between py-6">
          {/* logo & search */}
          <div className="flex items-center gap-14">
            {/* logo */}
            <div>
              <Image
                src="/images/Nest.jpg"
                width={150}
                height={150}
                alt="logo"
              />
            </div>
            {/* serach */}
            <div className="flex items-center border-2 border-[#BCE3C9] rounded-sm py-3 px-6">
              {/* category */}
              <div className="border-r border-r-gray-300 pr-3">
                <CategoryDropdown />
              </div>
              {/* search */}
              <div className="flex items-center pl-3 relative">
                <input
                  type="text"
                  className="focus:outline-none text-sm placeholder:text-[#838383] text-[#253D4E] font-medium w-80"
                  placeholder="Search for items..."
                />
                <IoSearchOutline className="text-[#838383] text-xl" />
              </div>
            </div>
          </div>
          {/* cart & wishlist & account */}
          <div className="flex items-center gap-5">
            <div className="flex items-end">
              <WishlistBadge
                count={wishlistCount}
                onClick={handleWishlistClick}
              />
              <p className="text-sm text-[#7E7E7E]">Wishlist</p>
            </div>
            <div className="flex items-end">
              <CartBadge count={cartCount} onClick={handleCartClick} />
              <p className="text-sm text-[#7E7E7E]">Cart</p>
            </div>
            <div className="flex items-end gap-1">
              <VscAccount
                className="hover:text-green-600"
                size={30}
                color="#253D4E"
              />
              <p className="text-sm text-[#7E7E7E]">Account</p>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
