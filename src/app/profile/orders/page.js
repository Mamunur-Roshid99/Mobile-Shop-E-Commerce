"use client";
import UserOrderTable from "@/components/UserOrderTable";
import UserProductView from "@/components/UserProductView";
import React, { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fake Orders Data
  const orders = [
    {
      id: "#12345",
      date: "2025-09-29",
      name: "Mamunur Roshid",
      phone: "019758269",
      status: "Completed",
      total: "$120",
      deliveryCharge: "$10",
      address: "123 Main Street, Dhaka, Bangladesh",
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
      {/* Orders Table */}
      <div className="rounded-lg shadow-sm border border-[#ECECEC]">
        <div className="flex items-center justify-between border-b border-b-[#ECECEC] py-3 px-4">
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-2xl">
            My Orders
          </h1>
        </div>

        <UserOrderTable orders={orders} handleView={handleView} />
      </div>

      {/* Modal */}
      {isOpen && selectedOrder && (
        <UserProductView
          isOpen={isOpen}
          selectedOrder={selectedOrder}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
