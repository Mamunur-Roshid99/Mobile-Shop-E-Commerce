"use client"

import { useState } from "react";

const categories = [
  "Technology",
  "Business",
  "Health",
  "Sports",
  "Entertainment",
];

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Category");

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
  );
}