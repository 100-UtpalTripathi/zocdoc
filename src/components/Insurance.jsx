import React from "react";
import Cigna from "../assets/CignaIcon.svg";
import Medicare from "../assets/MedicareIcon.svg";
import BlueCross from "../assets/BlueCrossIcon.svg";
import UnitedHealthCare from "../assets/UnitedHealthcareIcon.svg";
import Aetna from "../assets/aetna.svg";

function Insurance() {
  return (
    <div className="p-16">
      <p className="text-3xl text-gray-800 font-normal ml-4">
        Find an in-network doctor from over 1,000 insurance plans
      </p>
      <p className="text-lg text-black-600 mt-3 ml-4 font-extralight">
        Add your insurance to see in-network primary care doctors
      </p>

      <div className="flex flex-wrap gap-4 mt-10 ml-4">
        <div className="border border-gray-600 rounded-lg p-7 w-[205px] h-[100px]">
          <img
            src={Cigna}
            alt="Cigna"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        <div
          className="border border-gray-600 rounded-lg p-7 w-[205px] h-[100px]
"
        >
          <img
            src={Medicare}
            alt="Medicare"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        <div
          className="border border-gray-600 rounded-lg p-7 w-[205px] h-[100px]
"
        >
          <img
            src={BlueCross}
            alt="Blue Cross"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        <div
          className="border border-gray-600 rounded-lg p-7 w-[205px] h-[100px]
"
        >
          <img
            src={UnitedHealthCare}
            alt="United Health Care"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        <div
          className="border border-gray-600 rounded-lg p-7 w-[205px] h-[100px]
"
        >
          <img
            src={Aetna}
            alt="Aetna"
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      </div>

      <button className="w-72 h-12 bg-white text-black rounded-md border border-black hover:bg-gray-200 mt-6 ml-4">
  Add your insurance coverage
</button>

    </div>
  );
}

export default Insurance;
