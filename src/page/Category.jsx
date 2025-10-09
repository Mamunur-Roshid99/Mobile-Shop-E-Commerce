import React from 'react'
import { Plus } from "lucide-react";

const Category = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">Categories</h1>
          <p className="text-gray-500 text-xs lg:text-sm">
            Organize your product categories
          </p>
        </div>
        <button
          //   onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded hover:bg-[#3BB77E]/95 cursor-pointer transition duration-300 text-sm font-semibold"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>
      {/* card */}
      <div className="flex items-center gap-5">
        {/* 1 */}
        <div className="bg-white border border-[#ECECEC] rounded-lg shadow-sm p-5 space-y-2">
          <h1 className="font-bold text-sm lg:text-base">Total Categories</h1>
          <p className="font-bold text-lg lg:text-2xl">3</p>
        </div>
        {/* 2 */}
        <div className="bg-white border border-[#ECECEC] rounded-lg shadow-sm p-5 space-y-2">
          <h1 className="font-bold text-sm lg:text-base">Total Products</h1>
          <p className="font-bold text-lg lg:text-2xl">345</p>
        </div>
      </div>
    </div>
  );
}

export default Category
