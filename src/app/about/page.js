import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";
import Index from "@/page/AboutPage/Index";
import React from "react";

export default function page() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <Index />
      <Footer />
    </div>
  );
}
