import React, { useState, useEffect } from 'react';

function SearchDiv() {
  // Separate states for each input
  const [specialties, setSpecialties] = useState([]);
  const [searchTermSpecialty, setSearchTermSpecialty] = useState('');
  const [filteredSpecialties, setFilteredSpecialties] = useState([]);

  const [location, setLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  
  const [insurance, setInsurance] = useState('');
  const [filteredInsurance, setFilteredInsurance] = useState([]);

  useEffect(() => {
    // Fetch specialties (and optionally locations, insurance data if you have them)
    const fetchSpecialties = async () => {
      try {
        const response = await fetch('http://localhost:11000/specialties');
        const data = await response.json();
        setSpecialties(data.specialties); // Adjust based on your data structure
      } catch (error) {
        console.error('Error fetching specialties:', error);
      }
    };

    fetchSpecialties();
  }, []);

  // Handle specialty search input
  const handleSpecialtySearch = (event) => {
    const value = event.target.value;
    setSearchTermSpecialty(value);
    if (specialties.length > 0) {
      const filtered = specialties.filter(specialty =>
        specialty.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSpecialties(filtered);
    }
  };

  // Handle location search input
  const handleLocationSearch = (event) => {
    const value = event.target.value;
    setLocation(value);
    const locationsList = ["Chennai", "Delhi", "Mumbai", "New York"]; // Example locations
    const filtered = locationsList.filter(loc =>
      loc.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  // Handle insurance search input
  const handleInsuranceSearch = (event) => {
    const value = event.target.value;
    setInsurance(value);
    const insuranceList = ["Blue Cross", "United Health", "Aetna", "Cigna"]; // Example insurances
    const filtered = insuranceList.filter(ins =>
      ins.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredInsurance(filtered);
  };

  return (
    <div className="relative border-2 border-black w-4/5 md:h-16 flex flex-col md:flex-row justify-between items-center p-2 ml-20 mt-12 rounded-md bg-white">
      {/* Specialty Search */}
      <div className="flex items-center w-full px-4 md:border-r-2 border-b-2 md:border-b-0 relative">
        <span className="mr-2"><i className="bi bi-search"></i></span>
        <input 
          type="text" 
          placeholder="Condition, procedure, doctor..." 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
          value={searchTermSpecialty}
          onChange={handleSpecialtySearch}
        />
        {filteredSpecialties.length > 0 && (
          <div className="absolute z-10 flex flex-col bg-white border mt-48 w-full">
            <ul className="pl-4 max-h-40 overflow-y-auto">
              {filteredSpecialties.map((specialty, index) => (
                <li 
                  key={index} 
                  className="py-1 hover:bg-yellow-300 cursor-pointer transition-colors"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Location Search */}
      <div className="flex items-center w-full px-4 md:border-r-2 border-b-2 md:border-b-0 relative">
        <span className="mr-2"><i className="bi bi-geo-alt-fill"></i></span>
        <input 
          type="text" 
          placeholder="Chennai, Tamil Nadu" 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
          value={location}
          onChange={handleLocationSearch}
        />
        {filteredLocations.length > 0 && (
          <div className="absolute z-10 bg-white border mt-2 w-full rounded-md shadow-lg">
            <ul className="list-disc pl-4 max-h-40 overflow-y-auto">
              {filteredLocations.map((loc, index) => (
                <li 
                  key={index} 
                  className="py-1 hover:bg-yellow-300 cursor-pointer transition-colors"
                >
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Insurance Search */}
      <div className="flex items-center w-full px-4 relative">
        <span className="mr-2"><i className="bi bi-prescription2"></i></span>
        <input 
          type="text" 
          placeholder="Choose Insurance" 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
          value={insurance}
          onChange={handleInsuranceSearch}
        />
        {filteredInsurance.length > 0 && (
          <div className="absolute z-10 bg-white border mt-2 w-full rounded-md shadow-lg">
            <ul className="list-disc pl-4 max-h-40 overflow-y-auto">
              {filteredInsurance.map((ins, index) => (
                <li 
                  key={index} 
                  className="py-1 hover:bg-yellow-300 cursor-pointer transition-colors"
                >
                  {ins}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="h-8 md:absolute md:right-0 md:top-0 md:h-full md:w-16 w-full">
        <button className="bg-yellow-300 h-full w-full flex justify-center items-center">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchDiv;
