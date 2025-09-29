import React from 'react'

const UserProductView = ({ isOpen, selectedOrder, closeModal }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-full rounded-sm shadow-xl relative overflow-hidden min-h-[450px] max-h-[90vh] overflow-y-auto mx-5 md:mx-0 md:w-[600px] lg:w-[700px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-b-[#ECECEC] px-5 py-4">
            <h2 className="text-xl font-bold text-[#253D4E]">Order Details</h2>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-700 transition"
            >
              ✕
            </button>
          </div>

          {/* Order Info */}
          <div className="px-5 py-4 text-sm flex flex-col gap-0 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2 md:w-[50%]">
              {/* name */}
              <div className="flex justify-between">
                <span className="font-semibold text-[#3BB77E]">Name:</span>
                <span className="text-[#7E7E7E] font-medium">
                  {selectedOrder.name}
                </span>
              </div>
              {/* phone */}
              <div className="flex justify-between">
                <span className="font-semibold text-[#3BB77E]">Phone:</span>
                <span className="text-[#7E7E7E] font-medium">
                  {selectedOrder.phone}
                </span>
              </div>
              {/* address */}
              <div className="flex justify-between">
                <span className="font-semibold text-[#3BB77E]">Address:</span>
                <span className="text-[#7E7E7E] font-medium w-40">
                  {selectedOrder.address}
                </span>
              </div>
            </div>
            <div className="space-y-2 md:w-[40%]">
              {/* status */}
              <div className="flex justify-between">
                <span className="font-semibold text-[#3BB77E]">Status:</span>
                <span className="text-[#03d867] font-semibold">
                  {selectedOrder.status}
                </span>
              </div>
              {/* Item Price */}
              <div className="flex justify-between">
                <span className="font-semibold text-[#3BB77E]">
                  Item Price:
                </span>
                <span className="text-[#7E7E7E] font-medium">
                  {selectedOrder.total}
                </span>
              </div>
              {/* deliveryCharge */}
              <div className="flex justify-between pb-1">
                <span className="font-semibold text-[#3BB77E]">Shipping:</span>
                <span className="text-[#7E7E7E] font-medium">
                  {selectedOrder.deliveryCharge}
                </span>
              </div>
              {/* total */}
              <div className="flex justify-between border-t border-t-[#ECECEC] pt-1 text-base lg:text-lg">
                <span className="font-bold text-[#3BB77E]">Total:</span>
                <span className="text-[#7E7E7E] font-medium">
                  {selectedOrder.total}
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="border-t border-t-[#ECECEC] px-5 py-4 space-y-3 max-h-60 overflow-y-auto">
            {selectedOrder.products.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-[#ECECEC] rounded-lg p-3 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-lg border border-[#3BB77E]"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-[#253D4E]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500">Qty: {product.qty}</p>
                  </div>
                </div>
                <span className="font-semibold text-sm text-[#253D4E]">
                  {product.price}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-t-[#ECECEC] px-5 py-4 flex justify-end bg-gray-50">
            <button
              onClick={closeModal}
              className="bg-[#3BB77E] text-white px-5 py-2 rounded-lg hover:bg-[#36a470] transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProductView
