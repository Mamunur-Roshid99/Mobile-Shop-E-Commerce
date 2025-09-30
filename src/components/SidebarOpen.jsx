"use client";

import * as React from "react";
import { Box, Drawer } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { BsFire } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { LuHeadset } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

export default function SidebarOpen() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: "/deals", label: "Deals", icon: <BsFire /> },
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/allproduct", label: "All Product" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

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
      <div className="w-full p-5">
        {/* logo */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="w-22 h-12">
            <img
              src="https://i.pinimg.com/1200x/de/49/20/de4920079c458a717be1c62acd4d2159.jpg"
              alt="logo"
              className="w-full h-full object-center "
            />
          </div>
          {/* Close button */}
          <button onClick={() => setOpen(false)} className="text-2xl">
            <RxCross2 />
          </button>
        </div>
        {/* links */}
        <div className="flex flex-col gap-5 mt-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-center rounded-sm py-2 gap-2 font-semibold text-white ${
                pathname === link.href ? "bg-[#3BB77E] " : "bg-[#253D4E]"
              } hover:bg-[#3BB77E] transition`}
            >
              <p className="text-[#3BB77E]">{link.icon && link.icon}</p>
              {link.label}
            </Link>
          ))}
        </div>
        {/*  */}
        <div className="mt-7">
          <p className="text-[#7E7E7E] font-medium text-sm">
            100% Secure delivery without contacting the courier
          </p>{" "}
          <p className="text-[#7E7E7E] font-medium text-sm">
            Need help? Call Us:{" "}
            <span className="text-[#3BB77E]">+ 1800 900</span>
          </p>
        </div>
        {/* contact */}
        <div className="flex items-center gap-2 mt-7">
          <LuHeadset className="text-[#253D4E] text-3xl" />
          <div className="flex flex-col">
            <p className="text-[#3BB77E] font-semibold text-2xl">1900 - 888</p>
            <span className="text-[#7E7E7E] text-xs">24/7 Support Center</span>
          </div>
        </div>
        {/* socail links */}
        <div className="mt-7 grid grid-cols-4 gap-5">
          <div className="bg-[#3BB77E] text-white size-12 flex items-center justify-center rounded-full text-xl duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
            <GrFacebookOption />
          </div>
          <div className="bg-[#3BB77E] text-white size-12 flex items-center justify-center rounded-full text-xl duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
            <FaInstagram />
          </div>
          <div className="bg-[#3BB77E] text-white size-12 flex items-center justify-center rounded-full text-xl duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
            <FaLinkedin />
          </div>
          <div className="bg-[#3BB77E] text-white size-12 flex items-center justify-center rounded-full text-xl duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
            <BsTwitterX />
          </div>
          <div className="bg-[#3BB77E] text-white size-12 flex items-center justify-center rounded-full text-xl duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
            <FaPinterest />
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <IoIosMenu />
      </button>
      <Drawer
        anchor="right"
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
