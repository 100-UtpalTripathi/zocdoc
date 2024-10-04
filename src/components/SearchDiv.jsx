import React from 'react'

function SearchDiv() {
  return (
    <div className="relative border-2 border-black w-4/5 h-16 flex justify-between items-center p-2 ml-20 mt-12 rounded-md bg-white">
      <div className="flex items-center w-full px-4 border-r-2">
        <span className="mr-2"><i className="bi bi-search"></i></span>
        <input 
          type="text" 
          placeholder="Condition, procedure, doctor..." 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
        />
      </div>

      
      <div className="flex items-center w-full px-4 border-r-2">
        <span className="mr-2"><i className="bi bi-geo-alt-fill"></i></span>
        <input 
          type="text" 
          placeholder="Chennai, Tamil Nadu" 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
        />
      </div>

      
      <div className="flex items-center w-full pl-4 p-4">
        <span className="mr-2"><i className="bi bi-prescription2"></i></span>
        <input 
          type="text" 
          placeholder="Choose Insurance" 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-16">
        <button className="bg-yellow-300 h-full w-full flex justify-center items-center">
          <i className="bi bi-search"></i>
        </button>
      </div>

    </div>
  )
}

export default SearchDiv;
