import React from 'react'
import HeroSection from './HeroSection'
import Provide from './Provide'
import CTASection from '../HomePage/CTASection'
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function Index() {
  return (
    <div>
      <PageBreadcrumb pageName="About Us" pageLink="/about" />
      <HeroSection />
      <Provide />
      <CTASection />
    </div>
  );
}
