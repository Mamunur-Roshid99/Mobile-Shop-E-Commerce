import React from 'react'
import HeroSection from './HeroSection'
import FeaturedCate from './FeaturedCate'
import PopularProduct from './PopularProduct'
import DealsDay from './DealsDay'
import ProductCategorySection from './ProductCategorySection'

export default function Index() {
  return (
    <div>
      <HeroSection />
      <FeaturedCate />
      <PopularProduct />
      <DealsDay />
      <ProductCategorySection />
    </div>
  )
}
