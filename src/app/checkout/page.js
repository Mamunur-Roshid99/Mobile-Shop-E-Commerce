import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";
import Checkout from "@/page/Checkout/Checkout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import React from "react";

export default function page() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <PageBreadcrumb pageName="Checkout" pageLink="/checkout" />
      <Checkout />
    </div>
  );
}
