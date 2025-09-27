import React from 'react'
import ProductSec from './ProductSec'
import DealsDay from '../HomePage/DealsDay'
import CTASection from '../HomePage/CTASection'
import PageBreadcrumb from "@/components/PageBreadcrumb"

export default function Index() {
  return (
    <div>
      <PageBreadcrumb pageName="All Products" pageLink="/allproduct" />
      <ProductSec />
      <DealsDay />
      <CTASection />
    </div>
  );
}
