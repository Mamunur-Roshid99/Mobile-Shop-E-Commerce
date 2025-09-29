import Navbar from '@/layout/Navbar'
import NavLink from '@/layout/NavLink'
import TopNavbar from '@/layout/TopNavbar'
import PageBreadcrumb from "@/components/PageBreadcrumb";
import React from 'react'
import Index from '@/page/HotDeals/Index';
import CTASection from '@/page/HomePage/CTASection';
import Footer from '@/layout/Footer';

export default function page() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <PageBreadcrumb pageName="Hot Deals" pageLink="/deals" />
      <Index />
      <CTASection />
      <Footer />
    </div>
  );
}
