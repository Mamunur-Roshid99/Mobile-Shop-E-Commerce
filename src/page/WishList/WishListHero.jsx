"use client";

import { setSelectedProduct } from "@/store/productSlice";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const WishListHero = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const products = useSelector((state) => state.wishlist.items);
  const count = products.length;
  return (
    <div className="pt-5 pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, idx) => {
            return (
              <div
                key={idx}
                className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-64"
                  />
                  <button
                    onClick={() => {
                      dispatch(removeFromWishlist(item.id));
                    }}
                    className="absolute p-2 transition-colors bg-white rounded-full shadow-md top-2 right-2 hover:bg-gray-50"
                  >
                    <FaHeart className="w-4 h-4 text-red-500 fill-current" />
                  </button>
                </div>

                <div className="p-4">
                  <h1 className="text-[#253D4E] font-bold text-sm mb-3 lg:text-lg lg:leading-5">
                    {item.title}
                  </h1>
                  {/* price */}
                  <div className="flex items-end gap-3 mb-3">
                    <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                      {item.discountPrice}
                    </span>
                    <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                      {item.price}
                    </del>
                  </div>

                  <div className="space-y-2">
                    <div
                      onClick={() => {
                        dispatch(setSelectedProduct(item));
                        router.push(`/product/${item.id}`);
                      }}
                      className="text-center bg-[#DEF9EC] rounded-sm py-2 text-[#3BB77E] font-bold cursor-pointer lg:px-3 hover:bg-[#3BB77E] hover:text-white duration-500"
                    >
                      View Details
                    </div>

                    <button
                      onClick={() => {
                        dispatch(removeFromWishlist(item.id));
                      }}
                      className="flex items-center justify-center w-full gap-2 px-4 py-2 text-red-600 border border-red-300 rounded hover:bg-red-50"
                    >
                      <LuTrash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {count === 0 && (
          <p className="text-center mt-10 text-gray-500">
            Your wishlist is empty
          </p>
        )}
      </div>
    </div>
  );
};

export default WishListHero;
