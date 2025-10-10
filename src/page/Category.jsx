"use client"

import React, { useState } from "react";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";
import CategoryEditOpenPop from "@/components/CategoryEditOpenPop";

const mockProducts = [
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

const Category = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  // console.log(editProduct)
  const filteredCategorys = mockProducts.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      editProduct
        ? "Product updated successfully"
        : "Product added successfully"
    );
    setIsAddOpen(false);
    setEditCategory(null);
  };

  const handleDelete = (id) => {
    toast.success("Product deleted successfully");
  };
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
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded hover:bg-[#3BB77E]/95 cursor-pointer transition duration-300 text-sm font-semibold"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      {/* card */}
      <div className="flex items-center gap-5">
        <div className="bg-white p-4 lg:p-5 rounded shadow hover:shadow-lg transition">
          <p className="text-sm font-medium">Total Categories</p>
          <h2 className="text-2xl font-bold mt-2 text-[#253D4E]">5 P</h2>
        </div>
        <div className="bg-white p-4 lg:p-5 rounded shadow hover:shadow-lg transition">
          <p className="text-sm font-medium">Total Products</p>
          <h2 className="text-2xl font-bold mt-2 text-[#253D4E]">525 P</h2>
        </div>
      </div>

      {/* Search + Table */}
      <div className="bg-white rounded-sm shadow p-4">
        <div className="relative mb-4 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3BB77E] text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-b-[#ECECEC] text-[#65758B]">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategorys.map((category) => (
                <tr
                  key={category.id}
                  className="border-b border-b-[#ECECEC] hover:bg-gray-50 duration-300"
                >
                  <td className="p-4 font-semibold">{category.name}</td>
                  <td className="p-4 font-semibold">{category.slug}</td>
                  <td className="font-semibold size-24 rounded-sm p-2">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="w-full h-full rounded-sm border border-[#ECECEC]"
                    />
                  </td>
                  <td className="p-4 font-medium flex items-center mt-4 justify-center gap-2">
                    <button
                      onClick={() => setEditCategory(category)}
                      className="p-2 rounded hover:bg-[#3bb77d38] text-[#3BB77E]"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="p-2 rounded hover:bg-red-100 text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {(isAddOpen || editCategory) && (
        <CategoryEditOpenPop
          handleSubmit={handleSubmit}
          editCategory={editCategory}
          setEditCategory={setEditCategory}
          setIsAddOpen={setIsAddOpen}
        />
      )}
    </div>
  );
};

export default Category;
