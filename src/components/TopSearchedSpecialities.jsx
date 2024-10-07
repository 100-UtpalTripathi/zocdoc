import React from "react";
import PrimaryCare from '../assets/primaryCare.svg';
import dentist from '../assets/dentist.svg';
import obgyan from '../assets/obgyan.svg';
import dermatologist from '../assets/dermatologist.svg';
import psychiatrist from '../assets/psychiatrist.svg';
import eyedoctor from '../assets/eyedoctor.svg';

function TopSearchedSpecialities() {
  return (
    <div className="px-16">
      <h2 className="text-2xl font-normal mb-4">Top-searched specialities</h2>

      <div className="flex flex-wrap md:flex-nowrap mt-8 gap-8 justify-around">

        <div className="flex flex-col items-center p-6 bg-[#fef0bb] rounded-lg w-full">
          <div className="w-24 h-24 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={PrimaryCare}
              alt="Primary Care"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-base font-normal mt-4">Primary Care</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-[#fef0bb] rounded-lg w-full">
          <div className="w-24 h-24 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={dentist}
              alt="Dentist"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base font-normal mt-4">Dentist</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-[#fef0bb] rounded-lg w-full">
          <div className="w-24 h-24 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={obgyan}
              alt="OB-GYN"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base font-normal mt-4">OB-GYN</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-[#fef0bb] rounded-lg w-full">
          <div className="w-24 h-24 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={dermatologist}
              alt="Dermatologist"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base font-normal mt-4">Dermatologist</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-[#fef0bb] rounded-lg w-full">
          <div className="w-24 h-24 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={psychiatrist}
              alt="Psychiatrist"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base font-normal mt-4">Psychiatrist</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-[#fef0bb] rounded-lg w-full">
          <div className="w-24 h-24 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={eyedoctor}
              alt="Eye Doctor"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base font-normal mt-4">Eye Doctor</p>
        </div>
      </div>
    </div>
  );
}

export default TopSearchedSpecialities;
