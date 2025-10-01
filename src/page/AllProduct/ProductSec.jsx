"use client";

import ProductFiltering from "@/components/ProductFiltering";
import { setSelectedProduct } from "@/store/productSlice";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const links = [
  { label: "All" },
  { label: "samsung" },
  { label: "iPhone" },
  { label: "vivo" },
  { label: "xiaomi" },
  { label: "realme" },
  { label: "laptop" },
  { label: "smartwatch" },
  { label: "airpods" },
  { label: "phonecase" },
  { label: "smarttv" },
];

// Sample products (dummy)
const products = [
  {
    title: "Samsung Galaxy S24 Ultra",
    image:
      "https://i.pinimg.com/736x/aa/ff/a3/aaffa3f6b3eccfd7d80f9f4b8823b5b4.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/aa/ff/a3/aaffa3f6b3eccfd7d80f9f4b8823b5b4.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/aa/ff/a3/aaffa3f6b3eccfd7d80f9f4b8823b5b4.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/aa/ff/a3/aaffa3f6b3eccfd7d80f9f4b8823b5b4.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/aa/ff/a3/aaffa3f6b3eccfd7d80f9f4b8823b5b4.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
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
    brand: "Hambger Hel",
    discountPercent: "8%",
    category: "phonecase",
  },
  {
    title: "Samsung S24 Ultra Protective Case",
    image:
      "https://i.pinimg.com/1200x/1a/c9/02/1ac9020077de789859ea976c1260d9e9.jpg",
    rating: 2,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    category: "phonecase",
  },
  {
    title: 'Samsung Neo QLED 55"',
    image:
      "https://i.pinimg.com/736x/cd/c8/44/cdc84400e429fd160673ec83bfe9aa76.jpg",
    rating: 3,
    sold: 5,
    price: "$23.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "smarttv",
  },
  {
    title: 'LG OLED C3 65"',
    image:
      "https://i.pinimg.com/1200x/ab/48/0f/ab480f1640cda7ed27301524141b6635.jpg",
    rating: 1,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    category: "smarttv",
  },
];

const ProductSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  // Filter products
useEffect(() => {
  setLoading(true);
  const timer = setTimeout(() => {
    let tempProducts = products;

    // Category filter (exclude badge values)
    if (
      selectedCategory !== "All" &&
      selectedCategory !== "Hot" &&
      selectedCategory !== "New"
    ) {
      tempProducts = tempProducts.filter(
        (p) => p.category === selectedCategory
      );
    }

    // Badge filter
    if (selectedCategory === "Hot") {
      tempProducts = tempProducts.filter((p) => p.badge === "Hot");
    } else if (selectedCategory === "New") {
      tempProducts = tempProducts.filter((p) => p.badge === "New");
    }

    // Price filter
    tempProducts = tempProducts.filter(
      (p) => parseFloat(p.discountPrice.replace("$", "")) <= maxPrice
    );

    setFilteredProducts(tempProducts);
    setLoading(false);
  }, 300);

  return () => clearTimeout(timer);
}, [selectedCategory, maxPrice]);


  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 lg:flex lg:items-start lg:justify-between lg:gap-10">
        {/* Left: Products */}
        <div className="lg:w-[70%]">
          {/* Top: Mobile dropdown */}
          <div className="flex items-center justify-between relative">
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
              All Products
            </h1>
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
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-8">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-200 animate-pulse h-44 rounded-md"
                  ></div>
                ))
              : filteredProducts.map((product, index) => (
                  <div
                    key={`${product.id}-${index}`}
                    onClick={() => {
                      dispatch(setSelectedProduct(product));
                      router.push(`/product/${product.id}`);
                    }}
                    className="bg-white rounded-xl p-2 border border-gray-200 flex flex-col gap-1 cursor-pointer hover:shadow-lg duration-300 lg:p-4 relative"
                  >
                    {/* Image */}
                    <div className="w-full h-40 lg:h-52 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full object-contain w-[65%] md:w-[60%] lg:w-[70%]"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <p className="text-[#ADADAD] text-xs mb-1">
                        {product.category}
                      </p>
                      <h1 className="text-[#253D4E] font-bold text-sm mb-3 lg:text-lg lg:leading-5">
                        {product.title}
                      </h1>

                      {/* Rating & sold */}
                      <div className="flex items-center gap-2 mb-3">
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
                        <div className="text-xs text-[#B6B6B6]">
                          {product.sold}
                        </div>
                      </div>

                      {/* Provider */}
                      <div className="flex items-center gap-1 text-[#B6B6B6] text-xs mb-3 font-semibold lg:text-sm">
                        By <p className="text-[#3BB77E]">{product.provider}</p>
                      </div>

                      {/* Price & Add */}
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-end gap-3">
                          <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                            {product.discountPrice}
                          </span>
                          <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                            {product.price}
                          </del>
                        </div>
                        <div className="flex gap-2 bg-[#DEF9EC] items-center justify-center rounded-sm py-2 text-[#3BB77E] font-bold cursor-pointer lg:px-3 hover:bg-[#3BB77E] hover:text-white duration-500">
                          <IoCartOutline />
                          <p>Add</p>
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    {product.discountPercent && (
                      <span className="absolute top-0 left-0 bg-[#3BB77E] text-white text-xs px-4 py-1 rounded-br-xl rounded-tl-xl">
                        {product.discountPercent}
                      </span>
                    )}
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
                  </div>
                ))}
          </div>
        </div>

        {/* Right: Filters */}
        <ProductFiltering
          links={links}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          filteredProducts={filteredProducts}
        />
      </div>
    </div>
  );
};

export default ProductSec;