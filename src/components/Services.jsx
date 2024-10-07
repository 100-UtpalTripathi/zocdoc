import React from "react";
import insurance from "../assets/ValuePropsInsurance.svg";
import reviews from "../assets/ValuePropsReviews.svg";
import booking from "../assets/ValuePropsBook.svg";

function Services() {
  return (
    <div className="p-16 bg-[#fef0bb] mt-20">
      <h2 className="text-3xl font-normal mb-4 text-center">
        Let’s get you a doc who gets you
      </h2>

      <div className="flex flex-wrap md:flex-nowrap mt-28 gap-12 justify-around">
        <div className="flex flex-col items-center p-6 rounded-lg w-full bg-white">
          <div className="w-46 h-50 relative -top-24   flex items-center justify-center">
            <img
              src={insurance}
              alt="Browse Insurance Providers"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-xl font-normal -mt-20">
            Browse providers who take your insurance
          </p>

          <button className="w-72 h-12 bg-white text-black rounded-md border border-black hover:bg-gray-200 mt-6 ml-4">
            See Specialties
          </button>
        </div>

        <div className="flex flex-col items-center p-6  rounded-lg w-full bg-white">
          <div className="w-46 h-50 relative -top-24   flex items-center justify-center">
            <img
              src={reviews}
              alt="Read reviews"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-xl font-normal -mt-20">Read reviews from users</p>

          <button className="w-72 h-12 bg-white text-black rounded-md border border-black hover:bg-gray-200 mt-6 ml-4">
            See Providers
          </button>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg w-full bg-white">
          <div className="w-46 h-50 relative -top-24   flex items-center justify-center">
            <img
              src={booking}
              alt="Book Appointment"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-xl font-normal -mt-20">
            Book an appointment today, online
          </p>

          <button className="w-72 h-12 bg-white text-black rounded-md border border-black hover:bg-gray-200 mt-6 ml-4">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
