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
import { FaArrowRight } from "react-icons/fa6";

const FeaturedCate = () => {
  const [activeTab, setActiveTab] = useState("cakemilk");
  const [loading, setLoading] = useState(false);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);

  const handleTabClick = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setSelectedCategoryProducts([]);
    setTimeout(() => setLoading(false), 500);
  };

  const handleCategoryClick = (products) => {
    setSelectedCategoryProducts(products);
  };

  const categories = [
    {
      title: "Chocolate Cake",
      image: "/images/1.png",
      bgcolor: "#FFFCEB",
      products: [
        {
          title: "Choco Slice",
          image: "/images/1.png",
          price: 250,
        },
        {
          title: "Choco Roll",
          image: "/images/1.png",
          price: 300,
        },
      ],
    },
    {
      title: "Vanilla Cake",
      image: "/images/1.png",
      bgcolor: "#F2FCE4",
      products: [
        {
          title: "Vanilla Slice",
          image: "/images/1.png",
          price: 200,
        },
        {
          title: "Vanilla Roll",
          image: "/images/1.png",
          price: 220,
        },
      ],
    },
    {
      title: "Strawberry Milkshake",
      image: "/images/1.png",
      bgcolor: "#ECFFEC",
      products: [
        {
          title: "Strawberry Shake",
          image: "/images/1.png",
          price: 180,
        },
        {
          title: "Strawberry Ice Cream",
          image: "/images/1.png",
          price: 150,
        },
      ],
    },
    {
      title: "Chocolate Cake",
      image: "/images/1.png",
      bgcolor: "#FEEFEA",
      products: [
        {
          title: "Choco Slice",
          image: "/images/1.png",
          price: 250,
        },
        {
          title: "Choco Roll",
          image: "/images/1.png",
          price: 300,
        },
      ],
    },
    {
      title: "Vanilla Cake",
      image: "/images/1.png",
      bgcolor: "#FFF3EB",
      products: [
        {
          title: "Vanilla Slice",
          image: "/images/1.png",
          price: 200,
        },
        {
          title: "Vanilla Roll",
          image: "/images/1.png",
          price: 220,
        },
      ],
    },
    {
      title: "Strawberry Milkshake",
      image: "/images/1.png",
      bgcolor: "#FFF3FF",
      products: [
        {
          title: "Strawberry Shake",
          image: "/images/1.png",
          price: 180,
        },
        {
          title: "Strawberry Ice Cream",
          image: "/images/1.png",
          price: 150,
        },
      ],
    },
    {
      title: "Chocolate Cake",
      image: "/images/1.png",
      bgcolor: "#F2FCE4",
      products: [
        {
          title: "Choco Slice",
          image: "/images/1.png",
          price: 250,
        },
        {
          title: "Choco Roll",
          image: "/images/1.png",
          price: 300,
        },
      ],
    },
    {
      title: "Vanilla Cake",
      image: "/images/1.png",
      bgcolor: "#FEEFEA",
      products: [
        {
          title: "Vanilla Slice",
          image: "/images/1.png",
          price: 200,
        },
        {
          title: "Vanilla Roll",
          image: "/images/1.png",
          price: 220,
        },
      ],
    },
    {
      title: "Strawberry Milkshake",
      image: "/images/1.png",
      bgcolor: "#F2FCE4",
      products: [
        {
          title: "Strawberry Shake",
          image: "/images/1.png",
          price: 180,
        },
        {
          title: "Strawberry Ice Cream",
          image: "/images/1.png",
          price: 150,
        },
        {
          title: "Strawberry Shake",
          image: "/images/1.png",
          price: 180,
        },
        {
          title: "Strawberry Ice Cream",
          image: "/images/1.png",
          price: 150,
        },
      ],
    },
  ];

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
        <div className="mt-7 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {selectedCategoryProducts.length > 0
                ? selectedCategoryProducts.map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f3e8e8] rounded-lg p-4 flex items-center justify-between"
                    >
                      {/* left */}
                      <div>
                        <h1 className="text-[#253D4E] font-bold text-2xl mb-2">
                          {product.title}
                        </h1>
                        <p className="text-[#000000] font-semibold text-lg mb-4">
                          Price:{" "}
                          <span className="text-[#3BB77E]">
                            ${product.price}
                          </span>
                        </p>
                        <div className="bg-[#3BB77E] text-white flex items-center gap-2 w-28 text-sm p-2 rounded-sm font-medium cursor-pointer">
                          <span>Shop Now</span>
                          <FaArrowRight />
                        </div>
                      </div>
                      {/* right */}
                      <div className="w-[45%] md:w-[50%] lg:w-[60%]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full"
                        />
                      </div>
                    </div>
                  ))
                : categories
                    .flatMap((cat) => cat.products)
                    .slice(0, 6)
                    .map((product, idx) => (
                      <div
                        key={idx}
                        className="bg-[#f3e8e8] rounded-lg p-4 flex items-center justify-between"
                      >
                        {/* left */}
                        <div>
                          <h1 className="text-[#253D4E] font-bold text-2xl mb-2">
                            {product.title}
                          </h1>
                          <p className="text-[#000000] font-semibold text-lg mb-4">
                            Price:{" "}
                            <span className="text-[#3BB77E]">
                              ${product.price}
                            </span>
                          </p>
                          <div className="bg-[#3BB77E] text-white flex items-center gap-2 w-28 text-sm p-2 rounded-sm font-medium cursor-pointer">
                            <span>Shop Now</span>
                            <FaArrowRight />
                          </div>
                        </div>
                        {/* right */}
                        <div className="w-[45%] md:w-[50%] lg:w-[60%]">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full"
                          />
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

export default FeaturedCate;
