import React from 'react'
import HeroSection from './HeroSection'
import Provide from './Provide'
import OurTeam from './OurTeam'
import CTASection from '../HomePage/CTASection'
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function Index() {
  return (
    <div>
      <PageBreadcrumb pageName="About Us" pageLink="/about" />
      <HeroSection />
      <Provide />
      <OurTeam />
      <CTASection />
    </div>
  );
}
