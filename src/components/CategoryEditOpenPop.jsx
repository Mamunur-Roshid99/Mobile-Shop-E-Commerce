"use client"

import React, { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";

const CategoryEditOpenPop = ({
  handleSubmit,
  editCategory,
  setIsAddOpen,
  setEditCategory,
}) => {
  const [fileName, setFileName] = useState("No file chosen");
  const [preview, setPreview] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    if (editCategory) {
      setPreview(editCategory.image);
      setFileName(editCategory.title);

      const existingThumbnails = [
        editCategory.thubimg1,
        editCategory.thubimg2,
        editCategory.thubimg3,
        editCategory.thubimg4,
      ].filter(Boolean); // remove undefined

      setThumbnails(existingThumbnails);
    } else {
      setPreview("");
      setFileName("No file chosen");
      setThumbnails([]);
    }
  }, [editCategory]);
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
            {editCategory ? "Update Category" : "Add New Category"}
          </h2>
          <GiCrossMark
            onClick={() => {
              setIsAddOpen(false);
              setEditCategory(null);
            }}
            className="cursor-pointer"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold text-[14px]">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Category Name"
              defaultValue={editCategory?.name || ""}
              className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
              required
            />
          </div>
          {/* Category  Slug */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold text-[14px]">
              Category Slug
            </label>
            <input
              type="text"
              placeholder="Category  Slug"
              defaultValue={editCategory?.slug || ""}
              className="focus:outline-none border border-[#ECECEC] text-[13px] text-[#253D4E] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
              required
            />
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
          </div>
          {/* button */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => {
                setIsAddOpen(false);
                setEditCategory(null);
              }}
              className="border border-[#3BB77E] text-[#3BB77E] text-sm px-4 rounded-sm font-semibold cursor-pointer py-2"
            >
              Cencel
            </button>
            <button className="bg-[#3BB77E] text-white text-sm px-4 rounded-sm font-semibold cursor-pointer py-2">
              {editCategory ? "Update Category" : " Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryEditOpenPop;