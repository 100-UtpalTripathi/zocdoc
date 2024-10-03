import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

function LandingPage() {
  return (
    <>
    <div className="w-full h-[60vh] bg-[#fdfaef]">
        <Navbar/>
        <HeroSection/>
    </div>
    </>
  )
}

export default LandingPage;
