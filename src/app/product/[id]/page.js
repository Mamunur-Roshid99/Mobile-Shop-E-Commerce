import React from "react";
import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";
import ProductPageClient from "@/page/ProductPageClient/ProductPageClient";
import PageBreadcrumb from "@/components/PageBreadcrumb"
import TopNav from "@/page/ProductPageClient/TopNav";

export default function page() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <TopNav />
      <ProductPageClient />
    </div>
  );
}
