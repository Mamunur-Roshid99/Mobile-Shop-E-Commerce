"use client";

import AdminSidebar from "@/components/AdminSidebar";
import AdminTopNav from "@/components/AdminTopNav";
import React from "react";

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden w-full">
      {/* Sidebar (fixed height, no scroll, hidden on mobile) */}
      <div className="hidden lg:block h-full shrink-0">
        <AdminSidebar />
      </div>

      {/* Right content area */}
      <div className="flex flex-col flex-1 h-full w-full">
        <AdminTopNav />
        {/* Main scrollable content */}
        <main className="flex-1 bg-[#F8FAFC] px-4 py-3 lg:px-7 overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
