import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/brand.svg";

function Navbar() {
  return (
    <nav className="py-4 border-none">
      <div className="container mx-auto flex flex-row justify-between items-center border-none">
        <div className="flex items-center">
          <img src={Logo} alt="Brand Logo" className="h-10 w-30" />
        </div>

        <ul className="flex flex-row space-x-12 text-lg">
          <li>
            <Link to="/browse" className="text-gray-700 hover:text-gray-900">
              Browse &nbsp; <i class="bi bi-chevron-down"></i>
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
          &nbsp;&nbsp; |
          <li>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Log in &nbsp; <i class="bi bi-chevron-down"></i>
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
    </nav>
  );
}

export default Navbar;
