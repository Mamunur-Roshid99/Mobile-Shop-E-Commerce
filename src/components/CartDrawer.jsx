"use client";

import React, { useState } from "react";
import { Drawer } from "@mui/material";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import CartBadge from "./CartBadge";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "@/store/cartSlice";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const cartCount = products.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);

  const handleCartClick = () => {
    setOpen(true); // Drawer open
  };

  const totalPrice = products.reduce(
    (acc, item) =>
      acc + parseFloat(item.discountPrice.replace("$", "")) * item.quantity,
    0
  );

  const list = () => (
    <div className="w-74 md:w-96 lg:w-[500px] m-8">
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
      <div className="pb-2 border-b-2 border-b-[#ECECEC] max-h-[400px] overflow-y-auto md:max-h-[200px] lg:max-h-[280px]">
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
                  {/* price */}
                  <div className="flex items-end gap-3">
                    <span className="text-[#3BB77E] font-bold border-b-2">
                      {course.discountPrice}
                    </span>
                    <del className="text-[#ADADAD] font-medium text-sm">
                      {course.price}
                    </del>
                  </div>

                  {/* quantity */}
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center border border-[#ECECEC] rounded-sm overflow-hidden w-max">
                      {/* decrement */}
                      <button
                        className="px-3 py-1 bg-gray-100 text-[#253D4E] hover:bg-gray-200 transition-colors font-bold"
                        onClick={() => console.log("decrement")}
                      >
                        -
                      </button>

                      {/* quantity display */}
                      <div className="px-4 py-1 text-center font-medium text-[#253D4E]">
                        0
                      </div>

                      {/* increment */}
                      <button
                        className="px-3 py-1 bg-gray-100 text-[#253D4E] hover:bg-gray-200 transition-colors font-bold"
                        onClick={() => console.log("increment")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => dispatch(removeFromCart(course.id))}
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
            <span className="text-xl font-bold text-[#3BB77E]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/*  */}
      <div className="mt-5 space-y-3">
        <Link
          href={"/checkout"}
          onClick={() => setOpen(false)}
          className="bg-[#3BB77E] hover:bg-[#33a570] duration-300 text-white w-full h-12 lg:h-14 rounded-lg flex items-center gap-2 justify-center font-medium cursor-pointer"
        >
          Checkout <FaArrowRight />
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="border-[#3BB77E] border hover:bg-[#3BB77E] duration-300 w-full h-12 lg:h-14 rounded-lg font-medium cursor-pointer hover:text-white"
        >
          Clear Cart
        </button>
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
