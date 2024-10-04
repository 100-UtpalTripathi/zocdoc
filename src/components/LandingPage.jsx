import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

function LandingPage() {
  return (
    <>
    <div className="w-full h-[55vh] bg-[#fdfaef]">
        <Navbar/>
        <HeroSection/>
    </div>
    </>
  )
}

export default LandingPage;
