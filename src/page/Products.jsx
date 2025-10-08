"use client";

import React, { useState } from "react";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { GiCrossMark } from "react-icons/gi";
import { toast } from "react-hot-toast";

const mockProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    sku: "IP14P-001",
    category: "Smartphones",
    price: "$999",
    stock: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    sku: "SGS23-002",
    category: "Smartphones",
    price: "$899",
    stock: 32,
    status: "Active",
  },
  {
    id: 3,
    name: "AirPods Pro",
    sku: "APP-003",
    category: "Accessories",
    price: "$249",
    stock: 120,
    status: "Active",
  },
  {
    id: 4,
    name: "iPad Air",
    sku: "IPA-004",
    category: "Tablets",
    price: "$599",
    stock: 28,
    status: "Active",
  },
  {
    id: 5,
    name: "MacBook Air",
    sku: "MBA-005",
    category: "Laptops",
    price: "$1,199",
    stock: 15,
    status: "Active",
  },
  {
    id: 6,
    name: "Apple Watch Series 8",
    sku: "AWS8-006",
    category: "Wearables",
    price: "$399",
    stock: 8,
    status: "Low Stock",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    sku: "SWH-007",
    category: "Accessories",
    price: "$349",
    stock: 0,
    status: "Out of Stock",
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const filteredProducts = mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      editProduct
        ? "Product updated successfully"
        : "Product added successfully"
    );
    setIsAddOpen(false);
    setEditProduct(null);
  };

  const handleDelete = (id) => {
    toast.success("Product deleted successfully");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-700";
      case "Out of Stock":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-gray-500 text-xs">Manage your product inventory</p>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded hover:bg-[#3BB77E]/95 cursor-pointer transition duration-300 text-sm font-semibold"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
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
                <th className="p-4 text-left font-bold">Product Name</th>
                <th className="p-4 text-left">SKU</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Stock</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-b-[#ECECEC] hover:bg-gray-50 duration-300"
                >
                  <td className="p-4 font-semibold">{product.name}</td>
                  <td className="p-4 font-medium">{product.sku}</td>
                  <td className="p-4 font-medium">{product.category}</td>
                  <td className="p-4 font-medium">{product.price}</td>
                  <td className="p-4 font-medium">{product.stock}</td>
                  <td className="p-4 font-medium">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-right flex justify-end gap-2">
                    <button
                      onClick={() => setEditProduct(product)}
                      className="p-2 rounded hover:bg-[#3bb77d38] text-[#3BB77E]"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
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
      {isAddOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg relative">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Add New Product</h2>
              <GiCrossMark onClick={() => setIsAddOpen(false)} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold text-[15px]">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    defaultValue={editProduct?.name || ""}
                    className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="SKU"
                  defaultValue={editProduct?.sku || ""}
                  className="border px-3 py-2 rounded w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <select
                    defaultValue={editProduct?.category || ""}
                    className="border px-3 py-2 rounded w-full"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Smartphones">Smartphones</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Wearables">Wearables</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="Price"
                  defaultValue={editProduct?.price?.replace("$", "") || ""}
                  className="border px-3 py-2 rounded w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Stock"
                  defaultValue={editProduct?.stock || ""}
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Status"
                  defaultValue={editProduct?.status || ""}
                  className="border px-3 py-2 rounded w-full"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddOpen(false);
                    setEditProduct(null);
                  }}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {editProduct ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
