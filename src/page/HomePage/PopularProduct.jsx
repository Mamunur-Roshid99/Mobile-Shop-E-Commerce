"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setSelectedProduct } from "@/store/productSlice";


// sample products (dummy)
const products = [
  {
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
    title: "Samsung Galaxy A54",
    image:
      "https://i.pinimg.com/1200x/8c/49/c0/8c49c093e87967598c63c87bd7e39000.jpg",
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
    title: "iPhone 15 Pro",
    image:
      "https://i.pinimg.com/736x/8e/1c/37/8e1c3744a4f11b8a6d5d053c59e9a75c.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "iPhone",
  },
  {
    title: "iPhone 14",
    image:
      "https://i.pinimg.com/736x/a0/76/34/a07634ff404e2b59f613f04509067f4c.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "iPhone",
  },
  {
    title: "Vivo X100 Pro",
    image:
      "https://i.pinimg.com/736x/6b/fc/95/6bfc95a7c6e34a375c072d2428a5d769.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "vivo",
  },
  {
    title: "Vivo V29",
    image:
      "https://i.pinimg.com/736x/4a/63/df/4a63df10317e3580656ce283b7210a0c.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "vivo",
  },
  {
    title: "Xiaomi 14 Pro",
    image:
      "https://i.pinimg.com/1200x/5d/d7/2a/5dd72a5695c77afdd551c2b12067322a.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "xiaomi",
  },
  {
    title: "Redmi Note 13",
    image:
      "https://i.pinimg.com/736x/ac/bb/28/acbb28dc5b8e8c6876873e0c485e25c4.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "xiaomi",
  },
  {
    title: "Realme GT 5",
    image:
      "https://i.pinimg.com/1200x/5a/5e/8b/5a5e8b91bd4e8d329918d6275fc7aaf5.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "realme",
  },
  {
    title: "Realme Narzo 60x",
    image:
      "https://i.pinimg.com/1200x/98/34/c1/9834c1d956e1cd61c18ade02d73863ea.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "realme",
  },
  {
    title: "MacBook Pro 16",
    image:
      "https://i.pinimg.com/1200x/c5/95/c9/c595c9dc092cb7fbfecedde02a6952ae.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "laptop",
  },
  {
    title: "Dell XPS 13",
    image:
      "https://i.pinimg.com/1200x/ff/b4/08/ffb408f8f331a635275e1fa35988c811.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "laptop",
  },
  {
    title: "Apple Watch Series 9",
    image:
      "https://i.pinimg.com/736x/11/86/54/11865435c73c053c79cd8ad90b385da8.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "smartwatch",
  },
  {
    title: "Samsung Galaxy Watch 6",
    image:
      "https://i.pinimg.com/736x/4f/5b/06/4f5b069edf4944acdf0f7658bbc94c69.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "smartwatch",
  },
  {
    title: "AirPods Pro 2",
    image:
      "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "airpods",
  },
  {
    title: "AirPods 3rd Gen",
    image:
      "https://i.pinimg.com/1200x/a4/b7/49/a4b749ae448794555252d2ac9c70716c.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "airpods",
  },
  {
    title: "iPhone 15 Silicone Case",
    image:
      "https://i.pinimg.com/1200x/b5/d5/61/b5d56134cc60550895d3368d6b8a5428.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "phonecase",
  },
  {
    title: "Samsung S24 Ultra Protective Case",
    image:
      "https://i.pinimg.com/1200x/1a/c9/02/1ac9020077de789859ea976c1260d9e9.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "phonecase",
  },
  {
    title: 'Samsung Neo QLED 55"',
    image:
      "https://i.pinimg.com/736x/cd/c8/44/cdc84400e429fd160673ec83bfe9aa76.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "smarttv",
  },
  {
    title: 'LG OLED C3 65"',
    image:
      "https://i.pinimg.com/1200x/ab/48/0f/ab480f1640cda7ed27301524141b6635.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "smarttv",
  },
];

const PopularProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();

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
          <Link
            href="/allproduct"
            className="bg-[#3BB77E] text-white text-sm px-4 rounded-sm font-medium cursor-pointer py-2"
          >
            See All
          </Link>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          {products.slice(0,8).map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              onClick={() => {
                dispatch(setSelectedProduct(product));
                router.push(`/product/${product.id}`);
              }}
              className="bg-white rounded-xl p-2 border border-gray-200 flex flex-col gap-1 cursor-pointer hover:shadow-lg duration-300 lg:p-4 relative"
            >
              {/* img */}
              <div className="w-full h-40 lg:h-52 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain w-[65%] md:w-[60%] lg:w-[70%]"
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
                  <div className="text-xs text-[#B6B6B6]">{product.sold}</div>
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
                      product.badge === "Hot" ? "bg-[#DD3333]" : "bg-[#67BCEE]"
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
