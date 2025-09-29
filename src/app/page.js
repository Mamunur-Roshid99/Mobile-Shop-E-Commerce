"use client"

import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";
import Index from "@/page/HomePage/Index";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <TopNavbar />
    <Navbar />
    <NavLink />
    <Index />
    <Footer />
    </>
  );
}
