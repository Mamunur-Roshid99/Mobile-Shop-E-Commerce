"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { LuHeadset } from "react-icons/lu";

const categories = [
  "Technology",
  "Business",
  "Health",
  "Sports",
  "Entertainment",
];

const NavLink = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Browse All Category"
  );

  const links = [
    { href: "/deals", label: "Deals", icon: <BsFire /> },
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/allproduct", label: "All Product" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div className="border-b border-b-[#ECECEC] hidden lg:block ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between py-3">
        {/* category & links */}
        <div className="flex items-center gap-10">
          {/* category */}
          <div className="relative inline-block text-left bg-[#3BB77E] text-white px-4 py-2 rounded-sm gap-5">
            <BiCategoryAlt className="inline-flex text-xl" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-between w-48 text focus:outline-none font-semibold"
            >
              {selectedCategory}
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.354a.75.75 0 111.14.976l-4 4.7a.75.75 0 01-1.14 0l-4-4.7a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-300 rounded-md shadow-lg">
                {categories.map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* links */}
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 font-semibold ${
                  pathname === link.href ? "text-[#3BB77E] " : "text-[#253D4E]"
                } hover:text-[#3BB77E] transition`}
              >
                <p className="text-[#3BB77E]">{link.icon && link.icon}</p>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* contact */}
        <div className="flex items-center gap-2">
          <LuHeadset className="text-[#253D4E] text-3xl" />
          <div className="flex flex-col">
            <p className="text-[#3BB77E] font-semibold text-2xl">1900 - 888</p>
            <span className="text-[#7E7E7E] text-xs">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLink;
