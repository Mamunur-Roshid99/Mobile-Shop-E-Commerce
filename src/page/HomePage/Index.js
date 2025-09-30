"use client"

import React from 'react'
import HeroSection from './HeroSection'
import PopularProduct from './PopularProduct'
import DealsDay from './DealsDay'
import ProductCategorySection from './ProductCategorySection'
import CTASection from './CTASection'
import CategorySection from './CategorySection'

export default function Index() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <PopularProduct />
      <DealsDay />
      <ProductCategorySection />
      <CTASection />
    </div>
  )
}
