import React from 'react'

const UserOrderTable = ({ orders, handleView }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[700px] md:w-full text-sm text-left text-[#253D4E]">
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
                      className="text-[#3BB77E] border border-[#3BB77E] px-3 py-1 rounded text-sm font-medium hover:bg-[#3BB77E] hover:text-white transition"
                    >
                      View
                    </button>
                    <button className="text-[#f40000] border border-[#f40000] px-3 py-1 rounded text-sm font-medium hover:bg-[#f40000] hover:text-white transition">
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
  );
};

export default UserOrderTable
