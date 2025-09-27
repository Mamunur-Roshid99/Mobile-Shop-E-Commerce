import React from "react";
import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";
import PageBreadcrumb from "@/components/PageBreadcrumb"
import Index from "@/page/Contact/Index";
import CTASection from "@/page/HomePage/CTASection";
import Footer from "@/layout/Footer";

export default function page() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <PageBreadcrumb pageName="Contact" pageLink="/contact" />
      <Index />
      <CTASection />
      <Footer />
    </div>
  );
}
