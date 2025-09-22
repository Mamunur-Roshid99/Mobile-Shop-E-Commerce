"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const links = [
  { label: "All" },
  { label: "Baking material" },
  { label: "Fresh Fruits" },
  { label: "Milks & Dairies" },
  { label: "Meats" },
  { label: "Vegetables" },
];

// sample products (dummy)
const products = [
  {
    id: 1,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Baking material",
    image: "/images/chips.png",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
  },
  {
    id: 2,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Fresh Fruits",
    image: "/images/chips.png",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
  },
  {
    id: 3,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Milks & Dairies",
    image: "/images/chips.png",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    badge: "Hot",
  },
  {
    id: 4,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Meats",
    image: "/images/chips.png",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
  },
  {
    id: 5,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Vegetables",
    image: "/images/chips.png",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    badge: "Hot",
  },
  {
    id: 6,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Baking material",
    image: "/images/chips.png",
    rating: 3,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
  },
];

const PopularProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // simulate loading when category changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setFilteredProducts(
        selectedCategory === "All"
          ? products
          : products.filter((p) => p.category === selectedCategory)
      );
      setLoading(false);
    }, 500); // simulate 0.5s loading
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* top */}
        <div className="flex items-center justify-between relative">
          <div>
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
              Popular Products
            </h1>
          </div>

          {/* mobile dropdown */}
          <div className="relative inline-block text-left bg-[#3BB77E] text-white px-4 py-2 rounded-sm gap-5 z-10 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-between w-32 text focus:outline-none font-semibold text-sm"
            >
              {selectedCategory}
              <svg
                className={`w-5 h-5 ml-0 transition-transform ${
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
              <div className="absolute left-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
                {links.map((category) => (
                  <div
                    key={category.label}
                    onClick={() => {
                      setSelectedCategory(category.label);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100"
                  >
                    {category.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* desktop tabs */}
          <div className="lg:flex items-center gap-8 hidden">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => setSelectedCategory(link.label)}
                className={`font-semibold transition ${
                  selectedCategory === link.label
                    ? "text-[#3BB77E] border-b-2 border-[#3BB77E]"
                    : "text-[#253D4E]"
                } hover:text-[#3BB77E]`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 animate-pulse h-44 rounded-md"
                ></div>
              ))
            : filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl p-2 border border-gray-200 flex flex-col gap-1 cursor-pointer hover:shadow-lg duration-300 lg:p-4 relative"
                >
                  {/* img */}
                  <div className="w-full h-40 lg:h-52">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full"
                    />
                  </div>
                  {/* details */}
                  <div>
                    <p className="text-[#ADADAD] text-xs mb-1">
                      {product.category}
                    </p>
                    <h1 className="text-[#253D4E] font-bold text-sm mb-3 lg:text-lg lg:leading-5">
                      {product.title}
                    </h1>
                    {/* rating & sold */}
                    <div className="flex items-center gap-2 mb-3">
                      {/* rating */}
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`h-3 w-3 ${
                              i < product.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      {/* sold */}
                      <div className="text-xs text-[#B6B6B6]">
                        {product.sold}
                      </div>
                    </div>
                    {/* Provider */}
                    <div className="flex items-center gap-1 text-[#B6B6B6] text-xs mb-3 font-semibold lg:text-sm">
                      By <p className="text-[#3BB77E]">{product.provider}</p>
                    </div>
                    {/* Price & Add Button */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      {/* price */}
                      <div className="flex items-end gap-3">
                        <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                          {product.discountPrice}
                        </span>
                        <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                          {product.price}
                        </del>
                      </div>
                      {/*  */}
                      <div className="flex gap-2 bg-[#DEF9EC] items-center justify-center rounded-sm py-2 text-[#3BB77E] font-bold cursor-pointer lg:px-3 hover:bg-[#3BB77E] hover:text-white duration-500">
                        <div className="flex items-center justify-center">
                          <IoCartOutline />
                        </div>
                        <div className="flex items-center justify-center text-sm">
                          <p>Add</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Badge Section */}
                  <>
                    {" "}
                    {/* Discount Percent (left side) */}
                    {product.discountPercent && (
                      <span className="absolute top-0 left-0 bg-[#3BB77E] text-white text-xs px-4 py-1 rounded-br-xl rounded-tl-xl">
                        {product.discountPercent}
                      </span>
                    )}
                    {/* Badge (right side) */}
                    {product.badge && (
                      <span
                        className={`absolute top-0 right-0 ${
                          product.badge === "Hot"
                            ? "bg-[#DD3333]"
                            : "bg-[#67BCEE]"
                        } text-white text-xs px-4 py-1 rounded-bl-xl rounded-tr-xl`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;