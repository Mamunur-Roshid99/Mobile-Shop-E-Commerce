"use client"

import React, { useState } from "react";
import AdminSidebarOpen from "./AdminSidebarOpen";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { usePathname } from "next/navigation";

const mockNotifications = [
  {
    id: 1,
    title: "New Order #ORD-007",
    message: "Order received from Chris Wilson",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Low Stock Alert",
    message: "iPhone 14 Pro stock is running low",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Payment Received",
    message: "Payment of $999 received",
    time: "2 hours ago",
    unread: false,
  },
];

const AdminTopNav = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const pathname = usePathname();

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const handleLogout = () => {
    // Your logout logic here
    console.log("Logout clicked");
  };

   const formatPathName = (path) => {
     if (path === "/dashboard" || path === "/") return "Dashboard";
     const parts = path.split("/").filter(Boolean);
     return parts[parts.length - 1]
       .replace(/-/g, " ")
       .replace(/\b\w/g, (c) => c.toUpperCase());
   };

  return (
    <div className="bg-white border-b border-b-[#ECECEC]">
      <div className="flex items-center justify-between px-5 py-3 lg:px-7 lg:py-4">
        {/* Sidebar toggle */}
        <div className="lg:hidden">
          <AdminSidebarOpen />
        </div>

        {/* Logo */}
        <h1 className="text-[#253D4E] font-bold text-2xl">{formatPathName(pathname)}</h1>

        {/* Notifications and user settings */}
        <div className="flex items-center gap-3 relative">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifDropdown(!showNotifDropdown)}
              className="relative p-2 rounded-lg hover:bg-gray-100 duration-300 cursor-pointer"
            >
              <AiOutlineBell className="w-6 h-6 text-[#253D4E] " />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3BB77E] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            {showNotifDropdown && (
              <div className="absolute right-0 mt-2 w-72 lg:w-82 bg-white shadow rounded-md border border-[#ECECEC] z-20">
                <div className="flex items-center justify-between p-2 border-b border-b-[#ECECEC]">
                  <span className="font-bold text-[#253D4E] ">
                    Notifications
                  </span>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-[#253D4E] font-semibold cursor-pointer"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-3 hover:bg-gray-50 cursor-pointer text-[#253D4E]"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-sm">{n.title}</p>
                        {n.unread && (
                          <span className="w-2 h-2 bg-[#3BB77E] rounded-full"></span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{n.message}</p>
                      <p className="text-xs text-gray-400">{n.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User settings */}
          <div className="relative">
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="p-2 rounded-lg hover:bg-gray-100 duration-300 cursor-pointer"
            >
              <AiOutlineUser className="w-6 h-6 text-[#253D4E] " />
            </button>
            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded-md border border-[#ECECEC] z-20">
                <div className="p-2 font-bold border-b border-b-[#ECECEC] text-[#253D4E] ">
                  Admin Account
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-sm font-medium"
                  onClick={() => console.log("Settings clicked")}
                >
                  Settings
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-sm font-medium text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopNav;