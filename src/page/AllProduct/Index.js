import React from 'react'
import TopNav from './TopNav'
import ProductSec from './ProductSec'
import DealsDay from '../HomePage/DealsDay'
import CTASection from '../HomePage/CTASection'

export default function Index() {
  return (
    <div>
      <TopNav />
      <ProductSec />
      <DealsDay />
      <CTASection />
    </div>
  )
}
