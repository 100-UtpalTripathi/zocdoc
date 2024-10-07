import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/brand.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 border-none bg-[#fcfbef] shadow-md relative">
      <div className="container mx-auto flex justify-between items-center border-none relative">
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none mr-4 ml-2"
          >
            <i className="bi bi-list text-3xl"></i>
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center mr-6">
          <img src={Logo} alt="Brand Logo" className="h-10 w-30" />
        </div>

        {/* Cross Icon for Mobile */}
        {isMenuOpen && (
          <div className="md:hidden top-4 right-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <i className="bi bi-x text-3xl"></i>
            </button>
          </div>
        )}

        {/* Links for Larger Screens */}
        <ul className="hidden md:flex flex-row space-x-12 text-lg">
          <li>
            <Link to="/browse" className="text-gray-700 hover:text-gray-900">
              Browse &nbsp; <i className="bi bi-chevron-down"></i>
            </Link>
          </li>
          <li>
            <Link to="/help" className="text-gray-700 hover:text-gray-900">
              Help
            </Link>
          </li>
          <li>
            <Link
              to="/list-practice"
              className="text-gray-700 hover:text-gray-900"
            >
              List your practice on Zocdoc
            </Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          <li>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Log in &nbsp; <i className="bi bi-chevron-down"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-black px-4 py-2 rounded-md"
              style={{ backgroundColor: "#fef04b" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d1b937")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fef04b")}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-normal mb-6 mt-8">Welcome to Zocdoc</h1>
          <div className="flex flex-col space-y-4 mb-8">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-normal py-2 px-4 rounded">
              <Link to="/signup">Signup</Link>
            </button>
            <button className="hover:bg-gray-300 text-black font-normal py-2 px-4 rounded border border-black">
              <Link to = "/login">Login</Link>
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-8 space-y-8 bg-[#323332] shadow-md px-4 py-8 w-full">
            <ul className="text-lg px-4">
              <li>
                <Link to="/browse" className="text-[#6c6c6d] hover:text-white">
                  Browse <i className="bi bi-chevron-down"></i>
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-[#6c6c6d] hover:text-white">
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/list-practice"
                  className="text-[#6c6c6d] hover:text-white"
                >
                  List your practice on Zocdoc
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
