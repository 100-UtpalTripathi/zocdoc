import React from "react";
import zocdocJobs from "../assets/zocdocJobs.svg";

function Jobs() {
  return (
    <div className="flex flex-col md:flex-row w-full p-16 bg-[#fef0bb]">
      <div className="bg-white flex flex-row w-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-16 ">
          <h2 className="text-xl font-normal mb-2">Zocdoc jobs</h2>
          <p className="mb-2 text-2xl">Join us, and help transform</p>
          <p className="text-2xl">healthcare for everyone.</p>
          <button className="w-72 h-12 bg-yellow-300 text-black rounded-md hover:bg-yellow-400 mt-6">
            View Job Openings
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-4  relative -top-20">
          <img
            src={zocdocJobs}
            alt="Zocdoc Jobs"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
