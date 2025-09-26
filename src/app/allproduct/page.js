import React from 'react'
import Navbar from '@/layout/Navbar'
import NavLink from '@/layout/NavLink'
import TopNavbar from '@/layout/TopNavbar'
import Index from '@/page/AllProduct/Index'
import Footer from '@/layout/Footer'

export default function page() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <Index />
      <Footer />
    </div>
  )
}
