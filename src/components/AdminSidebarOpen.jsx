"use client";

import * as React from "react";
import { Box, Drawer } from "@mui/material";
import { BiLayout } from "react-icons/bi";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineTag,
  AiOutlineFileText,
  AiOutlineFolder,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { BiBarChartAlt2 } from "react-icons/bi";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: AiOutlineDashboard },
  { title: "Products", url: "/dashboard/products", icon: BsBox },
  { title: "Categories", url: "/dashboard/categories", icon: AiOutlineFolder },
  { title: "Orders", url: "/dashboard/orders", icon: AiOutlineShoppingCart },
  { title: "Customers", url: "/dashboard/customers", icon: AiOutlineUser },
  { title: "Coupons", url: "/dashboard/coupons", icon: AiOutlineTag },
  { title: "Reports", url: "/dashboard/reports", icon: BiBarChartAlt2 },
  { title: "Settings", url: "/dashboard/settings", icon: AiOutlineSetting },
  { title: "Users", url: "/dashboard/users", icon: AiOutlineUser },
  { title: "Logs", url: "/dashboard/logs", icon: AiOutlineFileText },
];

export default function AdminSidebarOpen() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 350,
        height: "100%",
        position: "relative",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <aside className="w-full bg-[#253D4E] text-white h-screen p-4 overflow-y-auto">
        <div className="flex items-center justify-center mb-5">
          <div className="w-24 h-24 rounded-full">
            <img
              src="https://i.pinimg.com/1200x/de/49/20/de4920079c458a717be1c62acd4d2159.jpg"
              alt="logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.url;
            return (
              <a
                key={item.title}
                href={item.url}
                className={`flex items-center gap-2 p-2 rounded-md transition-colors font-semibold ${
                  isActive ? "bg-[#3BB77E]" : ""
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className="text-2xl text-[#253D4E] flex items-center justify-center">
        <BiLayout />
      </button>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.923)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "black",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
