"use client"

import React, { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";

const ProductEditOpenPopup = ({
  handleSubmit,
  editProduct,
  setIsAddOpen,
  setEditProduct,
}) => {
  const [fileName, setFileName] = useState("No file chosen");
  const [preview, setPreview] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    if (editProduct) {
      setPreview(editProduct.image);
      setFileName(editProduct.title);

      const existingThumbnails = [
        editProduct.thubimg1,
        editProduct.thubimg2,
        editProduct.thubimg3,
        editProduct.thubimg4,
      ].filter(Boolean); // remove undefined

      setThumbnails(existingThumbnails);
    } else {
      setPreview("");
      setFileName("No file chosen");
      setThumbnails([]);
    }
  }, [editProduct]);
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

    setThumbnails((prev) => [...prev, ...previewUrls]);
  };
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg relative mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#3BB77E] lg:text-2xl">
            {editProduct ? "Update Product" : "Add New Product"}
          </h2>
          <GiCrossMark
            onClick={() => {
              setIsAddOpen(false);
              setEditProduct(null);
            }}
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
              defaultValue={editProduct?.title || ""}
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
              defaultValue={editProduct?.category || ""}
            >
              <option value="">Select Category</option>
              <option value="samsung">Samsung</option>
              <option value="iPhone">iPhone</option>
              <option value="vivo">Vivo</option>
              <option value="realme">Realme</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="laptop">Laptop</option>
              <option value="smartwatch">Smartwatch</option>
              <option value="airpods">AirPods</option>
              <option value="phonecase">Phone Case</option>
            </select>
          </div>

          {/* Main Image + Multiple Thumbnails */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[14px]">Product Image</label>

            {/* Main Image Div */}
            <div
              className="flex items-center gap-3 border border-[#ECECEC] rounded-sm px-3 py-2 cursor-pointer hover:border-[#3BB77E] transition"
              onClick={() => document.getElementById("mainFileInput").click()}
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
              <div className="mt-2 relative inline-block">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-18 lg:w-24 h-18 lg:h-24 object-cover border border-[#ECECEC] rounded-sm shadow-sm"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreview("");
                    setFileName("No file chosen");
                  }}
                  className="absolute left-0 top-0 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600"
                >
                  <GiCrossMark className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Multiple Thumbnails */}
            <label className="font-bold text-[14px] mt-4">Upload Gallery</label>
            <div
              className="flex items-center gap-3 border border-[#ECECEC] rounded-sm px-3 py-2 cursor-pointer hover:border-[#3BB77E] transition"
              onClick={() => document.getElementById("thumbFileInput").click()}
            >
              <span className="text-[13px] font-semibold">Choose Files</span>
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
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const newThumbs = [...thumbnails];
                        newThumbs.splice(index, 1);
                        setThumbnails(newThumbs);
                      }}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10"
                    >
                      <GiCrossMark className="w-3 h-3" />
                    </button>
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
              defaultValue={editProduct?.description || ""}
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
              defaultValue={editProduct?.features || ""}
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
              defaultValue={editProduct?.specifications || ""}
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
                defaultValue={editProduct?.price?.replace("$", "") || ""}
                className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[14px]">Discount Price</label>
              <input
                type="text"
                name="discountPrice"
                placeholder="$24.00"
                defaultValue={
                  editProduct?.discountPrice?.replace("$", "") || ""
                }
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
              defaultValue={editProduct?.brand || ""}
              className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
              required
            />
          </div>

          {/* Discount Percent & Badge */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[14px]">Discount Percent</label>
              <input
                type="text"
                name="discountPercent"
                placeholder="8%"
                defaultValue={editProduct?.discountPercent || ""}
                className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[14px]">Badge</label>
              <input
                type="text"
                name="badge"
                placeholder="Hot"
                defaultValue={editProduct?.badge || ""}
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
                defaultValue={editProduct?.rating || ""}
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
                defaultValue={editProduct?.sold || ""}
                placeholder="5"
                min="0"
                className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
              />
            </div>
          </div>

          {/* button */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => {
                setIsAddOpen(false);
                setEditProduct(null);
              }}
              className="border border-[#3BB77E] text-[#3BB77E] text-sm px-4 rounded-sm font-semibold cursor-pointer py-2"
            >
              Cencel
            </button>
            <button className="bg-[#3BB77E] text-white text-sm px-4 rounded-sm font-semibold cursor-pointer py-2">
              {editProduct ? "Update Product" : " Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditOpenPopup;
