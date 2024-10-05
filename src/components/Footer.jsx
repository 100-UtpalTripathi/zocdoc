import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import appstoreicon from "../assets/appstore.svg";
import playstoreicon from "../assets/googleplay.svg";

function Footer() {
  const [zocdoc, setZocdoc] = useState(null);
  const [discover, setDiscover] = useState(null);
  const [insuranceCarriers, setInsuranceCarriers] = useState(null);
  const [topSpecialties, setTopSpecialties] = useState(null);
  const [doctorService, setDoctorService] = useState(null);
  const [marketing, setMarketing] = useState(null);

  // Fetch data from each endpoint
  useEffect(() => {
    axios
      .get("http://localhost:9000/zocdoc")
      .then((response) => setZocdoc(response.data));
    axios
      .get("http://localhost:9000/discover")
      .then((response) => setDiscover(response.data));
    axios
      .get("http://localhost:9000/insuranceCarriers")
      .then((response) => setInsuranceCarriers(response.data));
    axios
      .get("http://localhost:9000/topSpecialties")
      .then((response) => setTopSpecialties(response.data));
    axios
      .get("http://localhost:9000/doctorService")
      .then((response) => setDoctorService(response.data));
    axios
      .get("http://localhost:9000/marketing")
      .then((response) => setMarketing(response.data));
  }, []);

  if (
    !zocdoc ||
    !discover ||
    !insuranceCarriers ||
    !topSpecialties ||
    !doctorService ||
    !marketing
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#323332] text-white min-h-screen p-8 px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h2 className="text-xl font-normal mb-4">{zocdoc.heading}</h2>
          <ul>
            {zocdoc.menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-[#adadad] hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-normal mb-4">{discover.heading}</h2>
          <ul>
            {discover.menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-[#adadad] hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Insurance Carriers column */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            {insuranceCarriers.heading}
          </h2>
          <ul>
            {insuranceCarriers.menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-[#adadad] hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-normal mb-4">{topSpecialties.heading}</h2>
          <ul>
            {topSpecialties.menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-[#adadad] hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-normal mb-4">{doctorService.heading}</h2>
          <ul>
            {doctorService.menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-[#adadad] hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-normal mb-4 mt-10">
            {marketing.heading}
          </h2>
          <ul>
            {marketing.menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-[#adadad] hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-4 mt-10">Get the Zocdoc app</h2>
          <a href="#" className="flex items-center space-x-2">
            <img
              src={appstoreicon}
              alt="App Store Icon"
              className="w-36 h-16"
            />{" "}
          </a>

          <a href="#" className="flex items-center space-x-2">
            <img
              src={playstoreicon}
              alt="App Store Icon"
              className="w-36 h-16"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
