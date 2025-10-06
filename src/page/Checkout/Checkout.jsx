"use client";

import React, { useState } from "react";
import { MdPayment } from "react-icons/md";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [activePaymenttab, setActivePaymenttab] = useState("online");
  const product = useSelector((state) => state.product.selectedProduct);
  return (
    <div className="pb-12 pt-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/*  */}
        <div>
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
            Checkout
          </h1>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mt-5">
          {/* left */}
          <div className="space-y-4 lg:w-[50%]">
            {/* payment */}
            <div className="rounded-lg shadow-sm border border-[#ECECEC] p-4">
              <div className="flex items-center gap-3">
                <div className="text-[#3BB77E] font-bold border-2 border-[#3bb77dcd] rounded-full size-8 flex items-center justify-center text-sm">
                  1
                </div>
                <h1 className="text-[#253D4E] font-bold text-lg">Payment</h1>
              </div>
              <div className="p-3">
                {/* payment type */}
                <div>
                  <div className="flex items-center gap-2 font-medium text-[#253D4E] mb-2">
                    <MdPayment className="text-[#3BB77E] text-lg" />
                    Payment Type
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActivePaymenttab("online")}
                      className={`text-sm p-4 border  rounded-sm font-medium ${
                        activePaymenttab === "online"
                          ? "border-[#3bb77d81] text-[#3BB77E]"
                          : "border-[#d9d9d9f0]"
                      }`}
                    >
                      Online Payment
                    </button>
                    <button
                      onClick={() => setActivePaymenttab("cod")}
                      className={`text-sm p-4 border  rounded-sm font-medium ${
                        activePaymenttab === "cod"
                          ? "border-[#3bb77d81] text-[#3BB77E]"
                          : "border-[#d9d9d9f0]"
                      }`}
                    >
                      Cash On Dalivery
                    </button>
                  </div>
                </div>
                {/* Payment Method */}
                {activePaymenttab === "online" && (
                  <div className="mt-3">
                    <div className="flex items-center gap-2 font-medium text-[#253D4E] mb-2">
                      <MdPayment className="text-[#3BB77E] text-lg" />
                      Payment Method
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 w-22 h-12 border border-[#d9d9d9f0] rounded-sm">
                        <img
                          src="https://i.pinimg.com/1200x/fc/bb/2e/fcbb2eb9bcf36fe0290973afd628a407.jpg"
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <div className="p-3 w-22 h-12 border border-[#d9d9d9f0] rounded-sm">
                        <img
                          src="https://i.pinimg.com/736x/a5/d8/64/a5d8641b077bde4e2b1dd7823468439f.jpg"
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* delivary */}
            <div className="rounded-lg shadow-sm border border-[#ECECEC] p-4">
              <div className="flex items-center gap-3">
                <div className="text-[#3BB77E] font-bold border-2 border-[#3bb77dcd] rounded-full size-8 flex items-center justify-center text-sm">
                  2
                </div>
                <h1 className="text-[#253D4E] font-bold text-lg">Delivery</h1>
              </div>
              <h1 className="text-[#253D4E] font-semibold my-3">
                Customer Information
              </h1>
              {/* form */}
              <form className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="w-full lg:col-span-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ZIP"
                    className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
                  />
                </div>
                <div className="col-span-3">
                  <textarea
                    name=""
                    id=""
                    rows={1}
                    placeholder="Full address"
                    className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
                  ></textarea>
                </div>
                <div className="col-span-3">
                  <input
                    type="text"
                    placeholder="District"
                    className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="text"
                    placeholder="Thana"
                    className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* right */}
          <div className="rounded-lg shadow-sm border border-[#ECECEC] p-4 lg:w-[50%]">
            <div className="flex items-center gap-3">
              <div className="text-[#3BB77E] font-bold border-2 border-[#3bb77dcd] rounded-full size-8 flex items-center justify-center text-sm">
                3
              </div>
              <h1 className="text-[#253D4E] font-bold text-lg">
                Product Description
              </h1>
            </div>
            {/* product */}
            <div className="mt-4 bg-[#F6F6F6] rounded-sm p-2">
              <div className="flex items-center gap-5">
                {/* img */}
                <div className="w-22 h-16 rounded-sm lg:w-[20%]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full rounded-sm"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:w-[80%]">
                  <div className="text-[#253D4E] font-semibold text-sm lg:text-xl">
                    <p>{product.title}</p>
                  </div>
                  {/* price */}
                  <span className="text-[#3BB77E] font-bold">
                    {product.discountPrice}
                  </span>
                </div>
              </div>
            </div>
            {/* apply promo */}
            <div className="mt-4 bg-[#F6F6F6] rounded-sm p-4 space-y-2">
              <input
                type="text"
                placeholder="Apply promo code"
                className="focus:outline-none bg-white text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
              />
              <input
                type="text"
                placeholder="Gift voucher"
                className="focus:outline-none bg-white text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] w-full"
              />
            </div>
            {/* price */}
            <div className="mt-5 space-y-3">
              {/* subtotal */}
              <div className="flex items-center justify-between font-medium text-[#253D4E] text-sm border-b border-b-[#ECECEC] pb-3 lg:text-base">
                <h1>Sub total</h1>
                <p>$10,490</p>
              </div>
              {/* Delivery Charge */}
              <div className="flex items-center justify-between font-medium text-[#253D4E] text-sm border-b border-b-[#ECECEC] pb-3 lg:text-base">
                <h1>Delivery Charge</h1>
                <p>$150</p>
              </div>
              {/* Total */}
              <div className="flex items-center justify-between font-medium text-[#253D4E] text-sm lg:text-base">
                <h1>Total</h1>
                <p>$10,490</p>
              </div>
            </div>
            {/*  */}
            <div className="mt-7">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-gray-800 text-sm leading-5 font-medium">
                  I accept the{" "}
                  <span className="text-[#3BB77E] hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  outlined, including{" "}
                  <span className="text-[#3BB77E] hover:underline">
                    Delivery
                  </span>
                  ,{" "}
                  <span className="text-[#3BB77E] hover:underline">Refund</span>
                  , and{" "}
                  <span className="text-[#3BB77E] hover:underline">
                    Cancellation
                  </span>{" "}
                  Policies.
                </p>
              </label>
            </div>
            {/* order button */}
            <div className="mt-5">
              <button className="bg-[#3BB77E] w-full text-white font-medium text-sm rounded-sm py-2 cursor-pointer lg:py-3">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
