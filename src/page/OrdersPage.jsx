"use client";
import { useState } from "react";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { IoEyeOutline } from "react-icons/io5";
import OrdersViewPopup from "@/components/OrdersViewPopup";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: "#ORD-001",
      customerName: "John Doe",
      customerEmail: "john.doe@email.com",
      date: "2024-01-15",
      total: "$999",
      status: "Delivered",
      items: 1,
      products: [{ name: "iPhone 14 Pro", qty: 1, price: "$999" }],
      shippingAddress: "123 Main St, New York, NY 10001",
      paymentMethod: "Credit Card (**** 4242)",
      trackingNumber: "TRK123456789",
    },
    {
      id: "#ORD-002",
      customerName: "Jane Smith",
      customerEmail: "jane.smith@email.com",
      date: "2024-01-14",
      total: "$899",
      status: "Shipped",
      items: 1,
      products: [{ name: "Samsung Galaxy S23", qty: 1, price: "$899" }],
      shippingAddress: "456 Oak Ave, Los Angeles, CA 90001",
      paymentMethod: "PayPal",
      trackingNumber: "TRK123456790",
    },
    {
      id: "#ORD-003",
      customerName: "Mike Johnson",
      customerEmail: "mike.j@email.com",
      date: "2024-01-14",
      total: "$249",
      status: "Processing",
      items: 2,
      products: [{ name: "AirPods Pro", qty: 1, price: "$249" }],
      shippingAddress: "789 Pine Rd, Chicago, IL 60601",
      paymentMethod: "Credit Card (**** 5555)",
      trackingNumber: "-",
    },
    {
      id: "#ORD-004",
      customerName: "Sarah Williams",
      customerEmail: "sarah.w@email.com",
      date: "2024-01-13",
      total: "$599",
      status: "Pending",
      items: 1,
      products: [{ name: "iPad Air", qty: 1, price: "$599" }],
      shippingAddress: "321 Elm St, Houston, TX 77001",
      paymentMethod: "Credit Card (**** 1234)",
      trackingNumber: "-",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  console.log(selectedOrder);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      order.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handlePrint = (order) => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head><title>Invoice - ${order.id}</title></head>
          <body style="font-family:Arial;padding:30px;">
            <h1>Invoice - ${order.id}</h1>
            <p><b>Date:</b> ${order.date}</p>
            <p><b>Customer:</b> ${order.customer}</p>
            <p><b>Email:</b> ${order.customerEmail}</p>
            <hr/>
            <table border="1" cellspacing="0" cellpadding="6" style="width:100%;border-collapse:collapse;">
              <tr><th>Product</th><th>Qty</th><th>Price</th></tr>
              ${order.products
                .map(
                  (p) =>
                    `<tr><td>${p.name}</td><td>${p.qty}</td><td>${p.price}</td></tr>`
                )
                .join("")}
            </table>
            <h3>Total: ${order.total}</h3>
            <p><b>Payment:</b> ${order.paymentMethod}</p>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const getBadgeClass = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500 text-white";
      case "Shipped":
        return "bg-blue-500 text-white";
      case "Processing":
        return "bg-yellow-400 text-black";
      case "Pending":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold lg:text-3xl">Orders</h1>
        <p className="text-gray-500 text-xs lg:text-sm">
          Track and manage customer orders
        </p>
      </div>

      {/* search & table */}
      <div className="bg-white rounded-sm shadow p-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="relative mb-4 max-w-sm md:w-72 bg-[#F8FAFC]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full border border-[#ECECEC] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3BB77E] text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-[#ECECEC] rounded h-9 text-xs focus:outline-none focus:ring-2 focus:ring-[#3BB77E] px-4 font-medium cursor-pointer bg-[#F8FAFC]"
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-b-[#ECECEC] text-[#65758B]">
                <th className="p-4 text-left">Order ID</th>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Items</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-b-[#ECECEC] hover:bg-gray-50 duration-300"
                >
                  <td className="p-4 font-semibold">{order.id}</td>
                  <td className="p-4 font-semibold">{order.customerName}</td>
                  <td className="p-4 font-semibold">{order.date}</td>
                  <td className="p-4 font-semibold">{order.items}</td>
                  <td className="p-4 font-semibold">{order.total}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-semibold ${getBadgeClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div
                      onClick={() => setSelectedOrder(order)}
                      className="size-8 rounded-sm flex items-center justify-center text-lg cursor-pointer hover:bg-[#3BB77E] hover:text-white duration-500"
                    >
                      <IoEyeOutline />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Modal */}
      {selectedOrder && (
        <OrdersViewPopup
          handlePrint={handlePrint}
          setSelectedOrder={setSelectedOrder}
          selectedOrder={selectedOrder}
          getBadgeClass={getBadgeClass}
        />
      )}
    </div>
  );
}
