import React from 'react'
import TopSection from './TopSection'
import BlogHeroSec from './BlogHeroSec'
import DealsDay from '../HomePage/DealsDay'
import CTASection from '../HomePage/CTASection'

export default function Index() {
  return (
    <div>
      <TopSection />
      <BlogHeroSec />
      <DealsDay />
      <CTASection />
    </div>
  )
}
