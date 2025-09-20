"use client";

import React, { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import CoffeeTeaContent from "@/components/CoffeeTeaContent";
import PetFoodsContent from "@/components/PetFoodsContent";
import VegetablesContent from "@/components/VegetablesContent";
import CakeMilkContent from "@/components/CakeMilkContent ";

const FeaturedCate = () => {
  const [activeTab, setActiveTab] = useState("cakemilk");
  const [loading, setLoading] = useState(false);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);

  const handleTabClick = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setSelectedCategoryProducts([]); // clear previous products
    setTimeout(() => setLoading(false), 500);
  };

  const handleCategoryClick = (products) => {
    setSelectedCategoryProducts(products);
  };

  return (
    <div className="pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
              Featured Categories
            </h1>
            <div className="flex items-center gap-4">
              <button className="custom-swiper-prev bg-[#F2F3F4] text-[#7E7E7E] size-8 lg:size-10 flex items-center justify-center text-2xl rounded-full hover:bg-[#3BB77E] hover:text-white">
                <MdKeyboardArrowLeft />
              </button>
              <button className="custom-swiper-next bg-[#F2F3F4] text-[#7E7E7E] size-8 lg:size-10 flex items-center justify-center text-2xl rounded-full hover:bg-[#3BB77E] hover:text-white">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-9 lg:gap-5">
            <button
              onClick={() => handleTabClick("cakemilk")}
              className="text-[#253D4E] font-medium text-sm hover:text-[#3BB77E] text-left cursor-pointer"
            >
              Cake & Milk
            </button>
            <button
              onClick={() => handleTabClick("coffetea")}
              className="text-[#253D4E] font-medium text-sm hover:text-[#3BB77E] text-left cursor-pointer"
            >
              Coffees & Teas
            </button>
            <button
              onClick={() => handleTabClick("petfoods")}
              className="text-[#253D4E] font-medium text-sm hover:text-[#3BB77E] text-left cursor-pointer"
            >
              Pet Foods
            </button>
            <button
              onClick={() => handleTabClick("vegetables")}
              className="text-[#253D4E] font-medium text-sm hover:text-[#3BB77E] text-left cursor-pointer"
            >
              Vegetables
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-7">
          {loading ? (
            <div className="grid grid-cols-8 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 animate-pulse h-[170px] rounded-sm"
                ></div>
              ))}
            </div>
          ) : (
            <>
              {activeTab === "cakemilk" && (
                <CakeMilkContent onCategoryClick={handleCategoryClick} />
              )}
              {activeTab === "coffetea" && (
                <CoffeeTeaContent onCategoryClick={handleCategoryClick} />
              )}
              {activeTab === "petfoods" && (
                <PetFoodsContent onCategoryClick={handleCategoryClick} />
              )}
              {activeTab === "vegetables" && (
                <VegetablesContent onCategoryClick={handleCategoryClick} />
              )}
            </>
          )}
        </div>

        {/* Products */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {selectedCategoryProducts.length > 0 ? (
            selectedCategoryProducts.map((product, idx) => (
              <div key={idx} className="border rounded p-2 text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-24 object-cover mb-2 rounded"
                />
                <h2 className="font-bold text-sm">{product.title}</h2>
                <p className="text-gray-500 text-sm">৳{product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full">
              Click on a category card to see all products
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCate;