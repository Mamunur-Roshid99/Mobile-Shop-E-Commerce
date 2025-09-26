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
    title: "The Intermediate Guide to Healthy Food",
    subtitle: "Side Dish",
    image: "/images/blog1.png",
  },
  {
    title: "The Intermediate Guide to Healthy Food",
    subtitle: "Side Dish",
    image: "/images/blog1.png",
  },
  {
    title: "The Intermediate Guide to Healthy Food",
    subtitle: "Side Dish",
    image: "/images/blog1.png",
  },
];

const topSelling = [
  {
    id: 1,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/5.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
    rating: 4,
    sold: 5,
  },
  {
    id: 2,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/8.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
    rating: 4,
    sold: 5,
  },
  {
    id: 3,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/1.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
    rating: 4,
    sold: 5,
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
              Recips Articles
            </h1>
          </div>

          {/* products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {products.map((product, index) => (
              <div key={index} className="">
                <div className="w-full h-64 mb-3 lg:h-72">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full"
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
                  <div className="w-28 lg:w-36">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full"
                    />
                  </div>
                  {/* details */}
                  <div>
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
                  <div className="w-28 lg:w-36">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full"
                    />
                  </div>
                  {/* details */}
                  <div>
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
                  <div className="w-28 lg:w-36">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full"
                    />
                  </div>
                  {/* details */}
                  <div>
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