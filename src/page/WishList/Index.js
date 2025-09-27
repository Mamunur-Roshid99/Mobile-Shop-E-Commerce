import React from 'react'
import PageBreadcrumb from "@/components/PageBreadcrumb"
import WishListHero from './WishListHero';
import DealsDay from '../HomePage/DealsDay';
import CTASection from '../HomePage/CTASection';

export default function Index() {
  return (
    <div>
      <PageBreadcrumb pageName="Wishlist" pageLink="/wishlist" />
      <WishListHero />
      <DealsDay />
      <CTASection />
    </div>
  );
}
