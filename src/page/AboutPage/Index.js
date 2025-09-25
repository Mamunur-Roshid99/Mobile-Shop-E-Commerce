import React from 'react'
import HeroSection from './HeroSection'
import TopNav from './TopNav'
import Provide from './Provide'
import OurTeam from './OurTeam'
import CTASection from '../HomePage/CTASection'

export default function Index() {
  return (
    <div>
      <TopNav />
      <HeroSection />
      <Provide />
      <OurTeam />
      <CTASection />
    </div>
  )
}
