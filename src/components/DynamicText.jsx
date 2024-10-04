import React, { useState, useEffect } from 'react';

function DynamicText() {
  const [index, setIndex] = useState(0); 
  const items = ['doctors', 'dentists', 'OB-GYNS', 'dermatologists']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval); 
  }, [items.length]);

  return (
    <div className="text-left text-3xl lg:text-5xl font-light text-gray-800 ml-20 mt-20">
      Book local {items[index]} <br></br> who take your insurance.
    </div>
  );
}

export default DynamicText;
