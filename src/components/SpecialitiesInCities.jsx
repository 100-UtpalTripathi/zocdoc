import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SpecialitiesInCities() {
  const [cities, setCities] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showSpecialties, setShowSpecialties] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/cities')
      .then(response => setCities(response.data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/specialties')
      .then(response => setSpecialties(response.data))
      .catch(error => console.error('Error fetching specialties:', error));
  }, []);

  const toggleSpecialties = (cityId) => {
    setShowSpecialties(prevState => ({
      ...prevState,
      [cityId]: !prevState[cityId]
    }));
  };

  return (
    <div className="bg-[#fef0bb] p-16">
      
      <h2 className="text-2xl font-normal mb-10">Find doctors and dentists by city</h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cities.map((city) => (
          <div key={city.id} className="border-b pb-2">
            
            <div className="flex justify-between items-center">
              <span className="text-xl font-normal">{city.name}</span>
              <button
                className="text-lg"
                onClick={() => toggleSpecialties(city.id)}
              >
                {showSpecialties[city.id] ? '-' : '+'}
              </button>
            </div>

        
            {showSpecialties[city.id] && (
              <ul className="mt-2 ml-4 space-y-1">
                {specialties.map((specialty) => (
                  <li key={specialty.id} className="text-gray-700">
                    {city.name} {specialty.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialitiesInCities;
