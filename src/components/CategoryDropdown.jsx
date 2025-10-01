"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories = [
  {
    name: "Samsung",
    img: "/images/samsung.png",
    slug: "samsung",
  },
  {
    name: "iPhone",
    img: "https://i.pinimg.com/736x/b3/e6/ae/b3e6aeaa47709e1e4d23a7b2776b9b12.jpg",
    slug: "iphone",
  },
  {
    name: "Vivo",
    img: "https://i.pinimg.com/736x/af/d5/9f/afd59f934bff361e9f510d2ae92eee3a.jpg",
    slug: "vivo",
  },
  {
    name: "Xiaomi",
    img: "https://i.pinimg.com/736x/54/48/31/54483104e8b038e77ced575abb634af9.jpg",
    slug: "xiaomi",
  },
  {
    name: "Realme",
    img: "https://i.pinimg.com/736x/cf/1d/ce/cf1dced7251cc204d6145ed72c38a8b9.jpg",
    slug: "realme",
  },
  {
    name: "Laptop",
    img: "https://i.pinimg.com/1200x/78/bf/a8/78bfa893270a0b531705b1c56f25674d.jpg",
    slug: "laptop",
  },
  {
    name: "Smart Watch",
    img: "https://i.pinimg.com/736x/ef/bb/17/efbb17fc0cfc2be91f2c913c66676a5f.jpg",
    slug: "smartwatch",
  },
  {
    name: "AirPods",
    img: "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    slug: "airpods",
  },
  {
    name: "Phone Case",
    img: "https://i.pinimg.com/1200x/e0/d7/7f/e0d77fd36e5b028212325d3773d27a32.jpg",
    slug: "phonecase",
  },
  {
    name: "Smart TV",
    img: "https://i.pinimg.com/1200x/57/80/ac/5780ac2b64c9f4177054455119124a8e.jpg",
    slug: "smarttv",
  },
];

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const router = useRouter()

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-32 text-sm text-[#253D4E] focus:outline-none font-semibold"
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
          {categories.map((category, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedCategory(category.name);
                setIsOpen(false);
                router.push(`/category/${category.slug}`);
              }}
              className="px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100"
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}