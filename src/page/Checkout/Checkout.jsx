"use client";

import React, { useState } from "react";
import { MdPayment } from "react-icons/md";

const Checkout = () => {
  const [activePaymenttab, setActivePaymenttab] = useState("online");
  return (
    <div className="pb-12 pt-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/*  */}
        <div>
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
            Checkout
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mt-5">
          {/* left */}
          <div className="space-y-4">
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
              <h1 className="text-[#253D4E] font-semibold my-3">Customer Information</h1>
              {/* form */}
              <form>
                <div>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="text" placeholder="ZIP" />
                </div>
                <div>
                  <textarea name="" id="" placeholder="Full address"></textarea>
                </div>
                <div>
                  <input type="text" placeholder="District" />
                </div>
                <div>
                  <input type="text" placeholder="Thana" />
                </div>
              </form>
            </div>
          </div>
          {/* right */}
          <div className="rounded-lg shadow-sm border border-[#ECECEC] p-4">
            <div>
              <div>3</div>
              <h1>Product Description</h1>
            </div>
            {/* product */}
            <div>
              {/* img */}
              <div>
                <img src="/images/apple.png" alt="" />
              </div>
              <div>
                <p>
                  PITAKA Military-Grade Protective Case for iPhone 16 Pro and 16
                  Pro Max ( iPhone 16 Pro /
                </p>
              </div>
              {/* price */}
              <div>
                <p>$1030</p>
                <p>$1230</p>
              </div>
            </div>
            {/* apply promo */}
            <div>
              <input type="text" placeholder="Apply promo code" />
              <input type="text" placeholder="Gift voucher" />
            </div>
            {/* price */}
            <div>
              {/* subtotal */}
              <div>
                <h1>Sub total</h1>
                <p>$10,490</p>
              </div>
              {/* Delivery Charge */}
              <div>
                <h1>Delivery Charge</h1>
                <p>$150</p>
              </div>
              {/* Total */}
              <div>
                <h1>Total</h1>
                <p>$10,490</p>
              </div>
            </div>
            {/*  */}
            <div>
              <label>
                <input type="checkbox" />
                <p className="text-gray-800 text-base leading-relaxed">
                  I accept the{" "}
                  <span className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  outlined, including{" "}
                  <span className="text-blue-600 hover:underline">
                    Delivery
                  </span>
                  ,{" "}
                  <span className="text-blue-600 hover:underline">Refund</span>,
                  and{" "}
                  <span className="text-blue-600 hover:underline">
                    Cancellation
                  </span>{" "}
                  Policies.
                </p>
              </label>
            </div>
            {/* order button */}
            <div>
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
