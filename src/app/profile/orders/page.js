"use client";
import React, { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fake Orders Data
  const orders = [
    {
      id: "#12345",
      date: "2025-09-29",
      status: "Completed",
      total: "$120",
      products: [
        {
          name: "Wireless Headphone",
          qty: 1,
          price: "$80",
          img: "/images/1.png",
        },
        {
          name: "USB-C Charger",
          qty: 2,
          price: "$40",
          img: "/images/2.png",
        },
      ],
    },
  ];

  const handleView = (order) => {
    setSelectedOrder(order);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div>
      <div className="rounded-lg shadow-sm border border-[#ECECEC]">
        <div className="flex items-center justify-between border-b border-b-[#ECECEC] py-3 px-4">
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-2xl">
            My Orders
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-[#253D4E]">
            <thead className="bg-gray-100 text-xs uppercase">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-b-[#ECECEC]">
                  <td className="px-6 py-4 font-semibold">{order.id}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleView(order)}
                        className="text-[#3BB77E] border border-[#3BB77E] px-3 py-1 rounded text-sm font-medium"
                      >
                        View
                      </button>
                      <button className="text-[#f40000] border border-[#f40000] px-3 py-1 rounded text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <h2 className="text-lg font-bold text-[#253D4E] mb-4">
              Order Details
            </h2>

            {/* Order Info */}
            <div className="mb-4 text-sm">
              <p>
                <span className="font-semibold">Order ID:</span>{" "}
                {selectedOrder.id}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {selectedOrder.date}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selectedOrder.status}
              </p>
              <p>
                <span className="font-semibold">Total:</span>{" "}
                {selectedOrder.total}
              </p>
            </div>

            {/* Product Cards */}
            <div className="space-y-3">
              {selectedOrder.products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center border rounded-lg p-3 gap-4 shadow-sm"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#253D4E] text-sm">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      Quantity: {product.qty}
                    </p>
                    <p className="text-gray-700 font-semibold text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-[#3BB77E] text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}