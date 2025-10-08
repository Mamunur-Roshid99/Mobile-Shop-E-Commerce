"use client"

import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398 },
  { name: "Mar", sales: 2000, revenue: 9800 },
  { name: "Apr", sales: 2780, revenue: 3908 },
  { name: "May", sales: 1890, revenue: 4800 },
  { name: "Jun", sales: 2390, revenue: 3800 },
  { name: "Jul", sales: 3490, revenue: 4300 },
];

const orderStatusData = [
  { name: "Pending", value: 30, color: "#f59e0b" },
  { name: "Processing", value: 45, color: "#3b82f6" },
  { name: "Shipped", value: 60, color: "#8b5cf6" },
  { name: "Delivered", value: 120, color: "#22c55e" },
];

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    product: "iPhone 14 Pro",
    amount: "$999",
    status: "Delivered",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    product: "Samsung Galaxy S23",
    amount: "$899",
    status: "Shipped",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    product: "AirPods Pro",
    amount: "$249",
    status: "Processing",
  },
  {
    id: "#ORD-004",
    customer: "Sarah Williams",
    product: "iPad Air",
    amount: "$599",
    status: "Pending",
  },
  {
    id: "#ORD-005",
    customer: "Tom Brown",
    product: "MacBook Air",
    amount: "$1,199",
    status: "Delivered",
  },
];

const Dashboard = () => {
  const getStatusBadge = (status) => {
    const colors = {
      Delivered: "bg-[#3BB77E]",
      Shipped: "bg-blue-500",
      Processing: "bg-purple-500",
      Pending: "bg-red-500",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full font-semibold text-white text-xs ${
          colors[status] || "bg-gray-400"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Revenue */}
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Revenue</p>
            <FaDollarSign className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2 text-[#253D4E]">$45,231.89</h2>
          <p className="text-xs text-[#3BB77E] flex items-center gap-1 mt-1">
            <FaArrowTrendUp /> +20.1% from last month
          </p>
        </div>

        {/* Orders */}
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Orders</p>
            <FaShoppingCart className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2 text-[#253D4E]">+2,350</h2>
          <p className="text-xs text-[#3BB77E] flex items-center gap-1 mt-1">
            <FaArrowTrendUp /> +180 from last month
          </p>
        </div>

        {/* Products */}
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Products</p>
            <FaBox className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2 text-[#253D4E]">1,234</h2>
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
            <FaArrowTrendDown /> -12 from last month
          </p>
        </div>

        {/* Customers */}
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Customers</p>
            <FaUserSecret className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2 text-[#253D4E]">573</h2>
          <p className="text-xs text-[#3BB77E] flex items-center gap-1 mt-1">
            <FaArrowTrendUp /> +201 since last month
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-7">
        {/* Sales Overview */}
        <div className="bg-white p-4 rounded shadow md:col-span-4">
          <h3 className="font-semibold mb-2">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3BB77E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3BB77E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#3BB77E"
                fillOpacity={1}
                fill="url(#colorSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Orders by Status */}
        <div className="bg-white p-4 rounded shadow md:col-span-3">
          <h3 className="font-semibold mb-2">Orders by Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                dataKey="value"
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold mb-2 text-[#253D4E] text-2xl">
          Recent Orders
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-b-[#ECECEC] text-[#65758B] font-normal">
                <th className="p-4 font-semibold">Order ID</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">Amount</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-b-[#ECECEC] hover:bg-gray-50">
                  <td className="p-4 font-semibold">{order.id}</td>
                  <td className="p-4 font-medium">{order.customer}</td>
                  <td className="p-4 font-medium">{order.product}</td>
                  <td className="p-4 font-medium">{order.amount}</td>
                  <td className="p-4 font-medium">{getStatusBadge(order.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;