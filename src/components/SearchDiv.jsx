import React from 'react'

function SearchDiv() {
  return (
    <div className="relative border-2 border-black w-4/5 md:h-16 flex flex-col md:flex-row justify-between items-center p-2 ml-20 mt-12 rounded-md bg-white">
      <div className="flex items-center w-full px-4 md:border-r-2">
        <span className="mr-2"><i className="bi bi-search"></i></span>
        <input 
          type="text" 
          placeholder="Condition, procedure, doctor..." 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
        />
      </div>

      
      <div className="flex items-center w-full px-4 md:border-r-2">
        <span className="mr-2"><i className="bi bi-geo-alt-fill"></i></span>
        <input 
          type="text" 
          placeholder="Chennai, Tamil Nadu" 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
        />
      </div>

      
      <div className="flex items-center w-full px-4">
        <span className="mr-2"><i className="bi bi-prescription2"></i></span>
        <input 
          type="text" 
          placeholder="Choose Insurance" 
          className="px-2 py-1 text-sm w-full focus:outline-none" 
        />
      </div>
      <div className="md:absolute md:right-0 md:top-0 md:h-full md:w-16 w-full">
        <button className="bg-yellow-300 h-full w-full flex justify-center items-center">
          <i className="bi bi-search"></i>
        </button>
      </div>

    </div>
  )
}

export default SearchDiv;