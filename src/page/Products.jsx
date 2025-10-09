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
  const [fileName, setFileName] = useState("No file chosen");
  const [preview, setPreview] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setPreview(URL.createObjectURL(file)); // preview তৈরি
    } else {
      setFileName("No file chosen");
      setPreview(null);
    }
  };

const handleThumbnailChange = (e) => {
  const selectedFiles = Array.from(e.target.files);
  const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));

  // Append new thumbnails instead of replacing
  setThumbnails((prev) => [...prev, ...previewUrls]);
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
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg relative mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#3BB77E]">
                Add New Product
              </h2>
              <GiCrossMark
                onClick={() => setIsAddOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-[14px]">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  defaultValue={editProduct?.name || ""}
                  className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  required
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-[14px]">
                  Category
                </label>
                <select
                  className="w-full focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E] cursor-pointer"
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Wearables">Wearables</option>
                </select>
              </div>

              {/* Main Image + Multiple Thumbnails */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[14px]">Product Image</label>

                {/* Main Image Div */}
                <div
                  className="flex items-center gap-3 border border-[#ECECEC] rounded-sm px-3 py-2 cursor-pointer hover:border-[#3BB77E] transition"
                  onClick={() =>
                    document.getElementById("mainFileInput").click()
                  }
                >
                  <span className="text-[13px] font-semibold">Choose File</span>
                  <span className="text-xs text-[#253D4E] truncate max-w-[200px]">
                    {fileName}
                  </span>

                  <input
                    id="mainFileInput"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {/* Main Preview */}
                {preview && (
                  <div className="mt-2">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-18 lg:w-24 h-18 lg:h-24 object-cover border border-[#ECECEC] rounded-sm shadow-sm"
                    />
                  </div>
                )}

                {/* Multiple Thumbnails */}
                <label className="font-bold text-[14px] mt-4">
                  Upload Gallery
                </label>
                <div
                  className="flex items-center gap-3 border border-[#ECECEC] rounded-sm px-3 py-2 cursor-pointer hover:border-[#3BB77E] transition"
                  onClick={() =>
                    document.getElementById("thumbFileInput").click()
                  }
                >
                  <span className="text-[13px] font-semibold">
                    Choose Files
                  </span>
                  <span className="text-xs text-[#253D4E] truncate max-w-[200px]">
                    {thumbnails.length > 0
                      ? `${thumbnails.length} file(s) selected`
                      : "No file chosen"}
                  </span>

                  <input
                    id="thumbFileInput"
                    type="file"
                    name="thumbnails"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                    multiple
                  />
                </div>

                {/* Thumbnail Previews */}
                {thumbnails.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {thumbnails.map((src, index) => (
                      <div
                        key={index}
                        className="w-18 lg:w-24 h-18 lg:h-24 border border-[#ECECEC] rounded-sm overflow-hidden shadow-sm relative"
                      >
                        <img
                          src={src}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[14px]">Description</label>
                <textarea
                  name="description"
                  placeholder="Enter product description..."
                  rows="3"
                  className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  required
                ></textarea>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[14px]">
                  Features (comma separated)
                </label>
                <input
                  type="text"
                  name="features"
                  placeholder="Easy to grip, 20 min runtime, Cordless use"
                  className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  required
                />
              </div>

              {/* Specifications */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[14px]">
                  Specifications (comma separated)
                </label>
                <input
                  type="text"
                  name="specifications"
                  placeholder="Ergonomic grip, Self-sharpening blades, Charging time: 8 hours"
                  className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  required
                />
              </div>

              {/* Price */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[14px]">Price</label>
                  <input
                    type="text"
                    name="price"
                    placeholder="$21.00"
                    className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[14px]">
                    Discount Price
                  </label>
                  <input
                    type="text"
                    name="discountPrice"
                    placeholder="$24.00"
                    className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  />
                </div>
              </div>

              {/* Brand */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[14px]">Brand</label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Samsung"
                  className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  required
                />
              </div>

              {/* Discount Percent & Badge */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[14px]">
                    Discount Percent
                  </label>
                  <input
                    type="text"
                    name="discountPercent"
                    placeholder="8%"
                    className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[14px]">Badge</label>
                  <input
                    type="text"
                    name="badge"
                    placeholder="Hot"
                    className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  />
                </div>
              </div>

              {/* Rating & Sold */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[14px]">Rating</label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="4"
                    min="1"
                    max="5"
                    className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[14px]">Sold</label>
                  <input
                    type="number"
                    name="sold"
                    placeholder="5"
                    min="0"
                    className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
