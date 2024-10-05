import React from "react";
import halfCircle from "../assets/halfCircle.svg";
import hand from "../assets/zocdoc-app-in-hand.png";
import QR from "../assets/QR.svg";
import appstoreicon from "../assets/appstore.svg";
import playstoreicon from "../assets/googleplay.svg";
import arrow from "../assets/arrow.svg";

function ZocdocAppSection() {
  return (
    <div className="w-full bg-[#fec695] flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/3 text-black p-20">
        <h2 className="text-3xl font-normal mb-4">
          Thousands of providers. One app.
        </h2>
        <p className="mb-4">
          The Zocdoc app is the quickest, easiest way to book and keep track of
          your appointments.
        </p>
        <p>Scan the QR code to get the app now</p>

        <div className="mt-4 p-2">
          <img src={QR} alt="QR Code" className="w-32 h-32" />
        </div>

        <div className="flex space-x-4">
          <a href="#" className="flex items-center">
            <img
              src={appstoreicon}
              alt="App Store Icon"
              className="w-36 h-16"
            />
          </a>

          <a href="#" className="flex items-center">
            <img
              src={playstoreicon}
              alt="Play Store Icon"
              className="w-36 h-16"
            />
          </a>
        </div>
      </div>

      <div className="w-full md:w-2/3 relative flex justify-center items-center">
        <img
          src={halfCircle}
          alt="Half Circle"
          className="w-[1400px] h-[1400px] object-contain absolute z-0 -bottom-[500px] -right-20 overflow-hidden"
        />

        <img
          src={arrow}
          alt="Arrow Icon"
          className="relative z-5 w-[250px] h-[250px] object-contain -top-16 left-20"
        />
        <img
          src={hand}
          alt="Hand Icon"
          className="relative z-10 w-[700px] h-[700px] object-contain top-10"
        />
      </div>
    </div>
  );
}

export default ZocdocAppSection;
