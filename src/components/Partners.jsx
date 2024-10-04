import React from "react";
import medstar from '../assets/medstar-health-logo.svg'
import mountsinai from '../assets/mountsinai-logo.svg'
import montefiore from '../assets/montefiore-logo.svg'
import tufts from '../assets/tufts-medical-logo.svg'
import intermounthealth from '../assets/intermount-healt.svg'
import methodist from '../assets/Methodist.svg'

function Partners() {
  return (
    <div className="flex flex-col md:flex-row w-full px-20 py-2 ">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-12 bg-[#f8f8f6]">
        <h2 className="text-xl font-normal mb-2">Zocdoc for health systems</h2>
        <p className = "text-2xl font-normal">We’re trusted by top health systems.</p>
        <button className="w-72 h-12 bg-yellow-300 text-black rounded-md hover:bg-yellow-400 mt-6">
            Partner with Zocdoc
          </button>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-12 bg-[#f8f8f6]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className="flex justify-center p-4">
            <img
              src={medstar}
              alt="medstar health logo"
              className="object-contain w-full h-20 rounded-md"
            />
          </div>
          <div className="flex justify-center p-4">
            <img
              src={mountsinai}
              alt="mount sinai logo"
              className="object-contain w-full h-20 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={montefiore}
              alt="montefiore logo"
              className="object-contain w-full h-20 rounded-md "
            />
          </div>

          
          <div className="flex justify-center">
            <img
              src={intermounthealth}
              alt="intermountain health logo"
              className="object-contain w-full h-20 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={methodist}
              alt="methodist logo"
              className="object-contain w-full h-20 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={tufts}
              alt="tufts medical logo"
              className="object-contain w-full h-20 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
