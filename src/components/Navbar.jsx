import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand Image and Name */}
        <div className="flex items-center">
          <img src="../assets/brand.svg" alt="Brand Logo" className="h-10 w-10" />
          <span className="ml-2 text-lg font-bold text-gray-700">Zocdoc</span>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/browse" className="text-gray-700 hover:text-gray-900">Browse</Link>
          </li>
          <li>
            <Link to="/help" className="text-gray-700 hover:text-gray-900">Help</Link>
          </li>
          <li>
            <Link to="/list-practice" className="text-gray-700 hover:text-gray-900">List your practice</Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
