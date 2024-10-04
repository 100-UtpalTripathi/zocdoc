import React from 'react'
import halfCircle from '../assets/halfCircle.svg'
import hand from '../assets/zocdoc-app-in-hand.png'
import QR from '../assets/QR.svg'

function ZocdocAppSection() {
  return (
    <div className="w-full bg-[#fec695] flex flex-col md:flex-row items-center p-8">
      
      <div className="w-full md:w-1/3 text-black p-4">
        <h2 className="text-3xl font-normal mb-4">Thousands of providers. One app.</h2>
        <p className="mb-4">The Zocdoc app is the quickest, easiest way to book and keep track of your appointments.</p>
        <p>Scan the QR code to get the app now</p>

        <div className="mt-4 p-2">
            <img 
                src={QR}
                alt="QR Code" 
                className="w-32 h-32"
            />
        </div>
      </div>

    
      <div className="w-full md:w-2/3 relative justify-center items-center p-4">
        <img 
          src={halfCircle}
          alt="Half Circle" 
          className="w-full h-auto object-obtain rounded-lg"
        />
        
        <img 
          src={hand}
          alt="QR Code" 
          className="absolute top-0 right-0 w-80 h-80 m-4"
        />
      </div>
    </div>
  )
}

export default ZocdocAppSection;
