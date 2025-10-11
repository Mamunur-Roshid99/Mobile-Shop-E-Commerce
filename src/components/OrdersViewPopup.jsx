import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";

const OrdersViewPopup = ({
  handlePrint,
  setSelectedOrder,
  selectedOrder,
  getBadgeClass,
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-lg max-h-[90vh] overflow-y-auto mx-4 md:max-w-xl lg:max-w-2xl md:p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-lg lg:text-xl">
            Order Details - {selectedOrder.id}
          </h2>
          <GiCrossMark
            onClick={() => {
              setSelectedOrder(null);
            }}
            className="cursor-pointer lg:text-xl"
          />
        </div>
        {/*  */}
        <div className="flex flex-col gap-2 mb-6 border-b border-b-[#ECECEC] pb-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-[#65758B] font-medium text-sm md:flex md:flex-col lg:text-[15px]">
            Order Date:{" "}
            <span className="text-[#253D4E] font-semibold">
              {selectedOrder.date}
            </span>
          </h1>
          <h1 className="text-[#65758B] font-medium text-sm md:flex md:flex-col lg:flex-row gap-3 lg:text-[15px]">
            Status:{" "}
            <span
              className={`px-2 py-1 text-xs rounded-full font-semibold ${getBadgeClass(
                selectedOrder.status
              )}`}
            >
              {selectedOrder.status}
            </span>
          </h1>
        </div>
        {/* information */}
        <div className="flex flex-col gap-3 mb-6 border-b border-b-[#ECECEC] pb-3">
          <div className="flex items-center gap-2 font-bold">
            <AiOutlineUser className="text-[#3BB77E] text-lg" />
            <h1>Customer Information</h1>
          </div>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between lg:justify-start lg:gap-52">
            {/* name */}
            <div className="flex flex-col text-sm">
              <h1 className="text-[#65758B] font-medium">Name</h1>
              <p className="font-bold">{selectedOrder.customerName}</p>
            </div>
            {/* email */}
            <div className="flex flex-col text-sm">
              <h1 className="text-[#65758B] font-medium">Email</h1>
              <p className="font-bold">{selectedOrder.customerEmail}</p>
            </div>
          </div>
        </div>

        {/* order items */}
        <div className="flex flex-col gap-2 mb-6 border-b border-b-[#ECECEC] pb-3">
          <div className="flex items-center gap-2 font-bold">
            <BsBox className="text-[#3BB77E] text-sm" />
            <h1>Order Items</h1>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="border-b border-b-[#ECECEC] text-[#65758B]">
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-center">Qty</th>
                <th className="p-2 text-right">Price</th>
              </thead>
              <tbody>
                {selectedOrder.products.map((p, i) => (
                  <tr key={i}>
                    <td className="p-2 font-semibold">{p.name}</td>
                    <td className="p-2 text-center font-semibold">{p.qty}</td>
                    <td className="p-2 text-right font-semibold">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* shipping */}
        <div className="flex flex-col gap-2 mb-6 border-b border-b-[#ECECEC] pb-3">
          <div className="flex items-center gap-2 font-bold">
            <CiLocationOn className="text-[#3BB77E] text-lg" />
            <h1>Shipping Address</h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm">
              {selectedOrder.shippingAddress}
            </p>
            {selectedOrder.trackingNumber !== "-" && (
              <div className="text-xs md:text-sm">
                <h1 className="text-[#65758B]">Tracking</h1>
                <p className="font-medium">{selectedOrder.trackingNumber}</p>
              </div>
            )}
          </div>
        </div>

        {/* payment */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-bold">
            <MdOutlinePayment className="text-[#3BB77E] text-base" />
            <h1>Payment Information</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <h1 className="font-medium text-[#65758B]">Payment Method</h1>
              <p className="font-bold">{selectedOrder.paymentMethod}</p>
            </div>
            <div className="flex items-center justify-between font-bold md:text-lg lg:text-xl">
              <h1>Total</h1>
              <p>{selectedOrder.total}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-5">
          <button
            onClick={() => setSelectedOrder(null)}
            className="border border-[#3BB77E] text-[#3BB77E] text-sm px-4 rounded-sm font-semibold cursor-pointer py-2"
          >
            Close
          </button>
          <button
            onClick={() => handlePrint(selectedOrder)}
            className="bg-[#3BB77E] text-white text-sm px-4 rounded-sm font-semibold cursor-pointer py-2 flex items-center gap-2"
          >
            <IoMdPrint className="text-lg" />
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersViewPopup;
