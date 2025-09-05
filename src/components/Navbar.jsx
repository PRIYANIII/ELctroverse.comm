import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {

return (
 <nav className=" sticky top-0 w-full bg-white flex justify-center mt-4">
      {/* Navbar */}
      <div className=" bg-white shadow-lg rounded-full px-8 py-3 flex space-x-10 ">
        <Link
          to="/" className="text-lg font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/about" className="text-lg font-bold text-gray-800 hover:text-blue-600 transition"
        >
          About Us
        </Link>
        
        <Link
          to="/event" className="text-lg font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Events
        </Link>
        
        <Link
          to="/team" className="text-lg font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Our Team
        </Link>
        
      </div>
    </nav>
  );
}

export default Navbar