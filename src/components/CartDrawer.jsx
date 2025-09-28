"use client";

import React, { useState } from "react";
import { Drawer } from "@mui/material";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import CartBadge from "./CartBadge";

const products = [
  {
    id: 1,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Baking material",
    image: "/images/chips.png",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
  },
  {
    id: 2,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Fresh Fruits",
    image: "/images/product1.png",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
  },
];

export default function CartDrawer() {
  const [cartCount, setCartCount] = useState(3);
  const [open, setOpen] = useState(false);

  const handleCartClick = () => {
    setOpen(true); // Drawer open
  };

const list = () => (
  <div className="w-80 md:w-96 lg:w-[500px] m-8">
    {/* Header */}
    <div className="flex items-center justify-between pb-6 border-b-2 border-b-[#ECECEC]">
      <h2 className="text-xl font-bold md:text-2xl lg:text-3xl text-[#253D4E]">
        Your shopping cart
      </h2>
      <button onClick={() => setOpen(false)}>
        <IoCloseSharp className="w-6 h-6" />
      </button>
    </div>

    {/* Cart Items */}
    <div className="pb-2 border-b-2 border-b-[#ECECEC]">
      {products.length === 0 ? (
        <div className="py-12 text-center">
          <RiShoppingBag3Line className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="p-4 space-y-4">
          {products.map((course, idx) => (
            <div
              key={idx}
              className="flex p-3 space-x-4 border border-[#ECECEC] rounded-lg shadow-sm"
            >
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-16 h-16 rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{course.title}</h3>
                <p className="text-sm text-gray-500">
                  {course.discountedPrice}
                </p>
              </div>
              <div
                // onClick={() => removeFromCart(course.id)}
                className="text-xl font-bold text-center cursor-pointer hover:text-[#3BB77E] duration-300 flex items-center justify-center"
              >
                ✕
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Total */}
    {products.length > 0 && (
      <div className="mt-4 border-b-2 border-b-[#ECECEC]">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-[#253D4E]">Subtotal:</span>
          <span className="text-xl font-bold text-[#3BB77E]">৳5</span>
        </div>
      </div>
    )}

    {/*  */}
    <div className="mt-5">
      <Link
        href={"/checkout"}
        onClick={() => setOpen(false)}
        className="bg-[#3BB77E] hover:bg-[#33a570] duration-300 text-white w-full h-12 lg:h-14 rounded-lg flex items-center gap-2 justify-center font-medium cursor-pointer"
      >
        Checkout <FaArrowRight />
      </Link>
    </div>
  </div>
);


  return (
    <div>
      {/* শুধু CartBadge কে trigger করো */}
      <CartBadge count={cartCount} onClick={handleCartClick} />

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.923)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "black",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}

