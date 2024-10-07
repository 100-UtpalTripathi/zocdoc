import React from "react";
import doctorusinglaptop from "../assets/doctorusinglaptop.jpg";

function ProviderService() {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto p-16">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={doctorusinglaptop}
          alt="Zocdoc Doctor Practice APply"
          className="object-obtain h-full"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-12">
        <h2 className="text-xl font-light mb-4">
          Zocdoc for private practices
        </h2>
        <p className="mb-2 font-normal text-3xl">
          Are you a provider interested in reaching new patients?
        </p>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            Reach patients in your area looking for a new provider.
          </li>
          <li className="mb-2">Fill last-minute openings in your schedule.</li>
          <li>Strengthen your online reputation with verified reviews.</li>
        </ul>

        <button className="w-72 h-12 bg-yellow-300 text-black rounded-md hover:bg-yellow-400 mt-6 ml-4">
            List your practice in Zocdoc
          </button>
      </div>
    </div>
  );
}

export default ProviderService;
