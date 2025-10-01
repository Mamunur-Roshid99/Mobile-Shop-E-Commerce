"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// sample products (dummy)
const products = [
  {
    title: "Top 10 Budget Smartphones in 2025",
    subtitle: "Mobile Reviews",
    image: "/images/blog1.png",
    date: "25 April 2025",
    views: "120k Views",
    read: "6 mins read",
  },
  {
    title: "How to Choose the Right 5G Phone",
    subtitle: "Buying Guide",
    image: "/images/blog2.png",
    date: "28 April 2025",
    views: "95k Views",
    read: "4 mins read",
  },
  {
    title: "Upcoming Flagship Phones in 2025",
    subtitle: "Latest News",
    image: "/images/blog3.png",
    date: "30 April 2025",
    views: "135k Views",
    read: "5 mins read",
  },
];

const topSelling = [
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra",
    image:
      "https://i.pinimg.com/736x/aa/ff/a3/aaffa3f6b3eccfd7d80f9f4b8823b5b4.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "samsung",
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    image:
      "https://i.pinimg.com/1200x/4c/00/ae/4c00aee364b4a39de16d3596eb7dc11c.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "iPhone",
  },
  {
    id: 3,
    title: "Vivo X100 Pro",
    image:
      "https://i.pinimg.com/736x/c4/0a/73/c40a734a88b6f8a36a1176197a63509e.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "vivo",
  },
];

const BlogHeroSec = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 lg:flex lg:items-start lg:justify-between lg:gap-10">
        {/* left */}
        <div className="lg:w-[70%]">
          {/* top */}
          <div className="flex items-center gap-2">
            <img src="/images/blogt.png" alt="" className="w-5 lg:w-8" />
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
              Mobile Articles
            </h1>
          </div>

          {/* products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {products.map((product, index) => (
              <div key={index} className="">
                <div className="w-full h-64 mb-3 lg:h-80 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full rounded-lg"
                  />
                </div>
                <p className="text-center text-[#B6B6B6] font-medium">
                  {product.subtitle}
                </p>
                <h1 className="text-center text-[#253D4E] font-bold text-2xl mb-3">
                  {product.title}
                </h1>
                <div className="flex items-center justify-center text-sm text-[#7E7E7E] font-medium">
                  <p className="border-r border-r-[#D2D2D2] pr-4">
                    25 April 2022
                  </p>
                  <p className="border-r border-r-[#D2D2D2] px-4">126k Views</p>
                  <p className="pl-4">4 mins read</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-10 lg:w-[30%]">
          {/* selling */}
          <div>
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-xl border-b-2 pb-2 border-b-[#BCE3C9]">
              Top Selling
            </h1>
            <div className="flex flex-col gap-7 mt-5">
              {topSelling.map((product) => (
                <div key={product.id} className="flex items-start gap-5">
                  {/* img */}
                  <div className="w-[30%]">
                    <div className="w-full h-32 flex items-center justify-center px-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full object-contain bg-green-700"
                      />
                    </div>
                  </div>
                  {/* details */}
                  <div className="lg:w-[70%]">
                    <h1 className="text-[#253D4E] font-bold mb-2 lg:text-lg lg:leading-5">
                      {product.title}
                    </h1>
                    {/* rating & sold */}
                    <div className="flex items-center gap-2 mb-1">
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
                    {/* price */}
                    <div className="flex items-end gap-3">
                      <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                        {product.discountPrice}
                      </span>
                      <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                        {product.price}
                      </del>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Recently added */}
          <div>
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-xl border-b-2 pb-2 border-b-[#BCE3C9]">
              Recently added
            </h1>
            <div className="flex flex-col gap-7 mt-5">
              {topSelling.map((product) => (
                <div key={product.id} className="flex items-start gap-5">
                  {/* img */}
                  <div className="w-[30%]">
                    <div className="w-full h-32 flex items-center justify-center px-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full object-contain bg-green-700"
                      />
                    </div>
                  </div>
                  {/* details */}
                  <div className="lg:w-[70%]">
                    <h1 className="text-[#253D4E] font-bold mb-2 lg:text-lg lg:leading-5">
                      {product.title}
                    </h1>
                    {/* rating & sold */}
                    <div className="flex items-center gap-2 mb-1">
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
                    {/* price */}
                    <div className="flex items-end gap-3">
                      <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                        {product.discountPrice}
                      </span>
                      <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                        {product.price}
                      </del>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Top Rated */}
          <div>
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-xl border-b-2 pb-2 border-b-[#BCE3C9]">
              Top Rated
            </h1>
            <div className="flex flex-col gap-7 mt-5">
              {topSelling.map((product) => (
                <div key={product.id} className="flex items-start gap-5">
                  {/* img */}
                  <div className="w-[30%]">
                    <div className="w-full h-32 flex items-center justify-center px-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full object-contain bg-green-700"
                      />
                    </div>
                  </div>
                  {/* details */}
                  <div className="lg:w-[70%]">
                    <h1 className="text-[#253D4E] font-bold mb-2 lg:text-lg lg:leading-5">
                      {product.title}
                    </h1>
                    {/* rating & sold */}
                    <div className="flex items-center gap-2 mb-1">
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
                    {/* price */}
                    <div className="flex items-end gap-3">
                      <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                        {product.discountPrice}
                      </span>
                      <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                        {product.price}
                      </del>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSec;
