import React from 'react'

const ProductFiltering = ({
  setSelectedCategory,
  links,
  selectedCategory,
  maxPrice,
  setMaxPrice,
  filteredProducts,
}) => {
  return (
    <div className="hidden lg:block lg:w-[30%] space-y-6">
      {/* Category */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        {links.map((link) => (
          <div
            key={link.label}
            onClick={() => setSelectedCategory(link.label)}
            className={`cursor-pointer mb-2 p-2 rounded hover:bg-[#DEF9EC] ${
              selectedCategory === link.label
                ? "bg-[#3BB77E] text-white hover:text-black"
                : ""
            }`}
          >
            {link.label}
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="font-bold text-lg mb-4">Max Price</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Badge */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="font-bold text-lg mb-4">Badges</h2>
        {["Hot", "New"].map((b) => (
          <div
            key={b}
            className={`cursor-pointer mb-2 p-2 rounded ${
              filteredProducts.some((p) => p.badge === b)
                ? "text-[#3BB77E] font-semibold"
                : ""
            }`}
            onClick={() => setSelectedCategory(b === "Hot" ? "Hot" : "New")}
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFiltering
