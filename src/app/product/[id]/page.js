import React from "react";
import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";
import ProductPageClient from "@/page/ProductPageClient/ProductPageClient";
import TopNav from "@/page/ProductPageClient/TopNav";
import DealsDay from "@/page/HomePage/DealsDay";
import CTASection from "@/page/HomePage/CTASection";
import Footer from "@/layout/Footer";

export default function page() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <TopNav />
      <ProductPageClient />
      <DealsDay />
      <CTASection />
      <Footer />
    </div>
  );
}
