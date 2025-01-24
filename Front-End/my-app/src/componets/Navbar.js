// src/components/Navbar.js
import React from 'react';
import logo from "../assests/logo.webp"
const Navbar = () => {
  return (
    <nav   className="bg-teal-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={logo} // Replace with your logo URL
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <span className="text-white text-3xl font-semibold">NotesApp</span>
        </div>

        {/* Center: Search Box */}
        <div className="flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search your notes..."
            className="w-full px-2 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500"
          />
        </div>

        {/* Right Side: Profile Icon */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40" // Replace with your profile icon URL
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
