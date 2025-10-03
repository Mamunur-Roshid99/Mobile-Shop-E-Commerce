"use client"

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const HeroSection = ({ product }) => {
  const thubImage = [
    {
      thubimg: product.thubimg1,
    },
    {
      thubimg: product.thubimg2,
    },
    {
      thubimg: product.thubimg3,
    },
    {
      thubimg: product.thubimg4,
    },
  ];

  const [mainImage, setMainImage] = useState(product.image);
  return (
    <div className="pt-7 pb-12 border-b border-b-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-7">
          {/* left */}
          <div className="flex flex-col gap-5 md:w-[45%] lg:w-[45%]">
            {/* main image */}
            <div className="w-full rounded-lg border border-[#ECECEC] flex items-center justify-center h-90 p-12 lg:h-98 lg:p-16 lg:px-28">
              <img
                src={mainImage}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* thubnail image */}
            <div className="flex items-center gap-8 overflow-x-auto flex-nowrap pb-2">
              {thubImage.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(img.thubimg)}
                  className={`rounded-lg p-4 size-22 flex-shrink-0 flex items-center justify-center md:size-18 lg:size-26 cursor-pointer
                    ${
                      mainImage === img.thubimg
                        ? "border-[#3BB77E] border"
                        : "border border-[#ECECEC]"
                    }`}
                >
                  <img src={img.thubimg} alt="" className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="md:w-[50%] lg:w-[45%]">
            <h1 className="text-[#253D4E] font-bold text-2xl mb-2 md:text-3xl lg:text-4xl">
              {product.title}
            </h1>
            {/* Rating & sold */}
            <div className="flex items-center gap-2 mb-2">
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
              <div className="text-xs text-[#B6B6B6]">{product.sold}</div>
            </div>
            <p className="text-[#253D4E] font-bold text-sm mb-2 lg:text-base">
              Brand:{" "}
              <span className="text-[#3BB77E] font-semibold">
                {product.brand}
              </span>
            </p>
            {/* price & discount par */}
            <div className="flex items-center gap-5 mb-3">
              {/* price */}
              <div className="flex items-end gap-3">
                <span className="text-[#3BB77E] font-bold text-lg border-b-2 lg:text-2xl">
                  {product.discountPrice}
                </span>
                <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white lg:text-base">
                  {product.price}
                </del>
              </div>
              {/* discount per */}
              {product.discountPercent && (
                <div className="text-red-500 font-semibold text-sm bg-[#F5F5F5] rounded-sm px-3 py-1">
                  {product.discountPercent}
                </div>
              )}
            </div>
            {/* color */}
            <div className="flex flex-col gap-2 mb-3">
              <h1 className="text-[#253D4E] font-bold text-sm lg:text-base">
                Color:
              </h1>
              {/* div */}
              <div className="flex items-center justify-between gap-2 lg:justify-start">
                {thubImage.map((img, idx) => (
                  <div
                    key={idx}
                    className="border border-[#A2D2C9] rounded-lg p-4 size-20 flex items-center justify-center"
                  >
                    <img src={img.thubimg} alt="" className="w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
            {/* quantity */}
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-[#253D4E] font-bold text-sm lg:text-base">
                Quantity:
              </h1>
              <div className="flex items-center border border-[#ECECEC] rounded-sm overflow-hidden w-max">
                {/* decrement */}
                <button
                  className="px-3 py-1 bg-gray-100 text-[#253D4E] hover:bg-gray-200 transition-colors font-bold"
                  onClick={() => console.log("decrement")}
                >
                  -
                </button>

                {/* quantity display */}
                <div className="px-4 py-1 text-center font-medium text-[#253D4E]">
                  0
                </div>

                {/* increment */}
                <button
                  className="px-3 py-1 bg-gray-100 text-[#253D4E] hover:bg-gray-200 transition-colors font-bold"
                  onClick={() => console.log("increment")}
                >
                  +
                </button>
              </div>
            </div>

            {/* button & wishlist */}
            <div className="flex items-center justify-between gap-5">
              <button className="bg-[#3BB77E] font-bold text-white w-[85%] text-sm py-3 rounded-sm cursor-pointer lg:text-base">
                Buy Now
              </button>
              <div className="w-[15%] border border-[#F1F1F1] flex items-center justify-center py-3 rounded-sm text-[#333333] cursor-pointer">
                <FaRegHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
