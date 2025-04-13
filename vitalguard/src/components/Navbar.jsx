// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        VitalGuard
      </div>

      {/* Menu Links */}
      <div className="space-x-4 hidden md:flex">
        <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
        <a href="#history" className="text-gray-700 hover:text-blue-600 font-medium">Medical History</a>
        <a href="#emergency" className="text-gray-700 hover:text-blue-600 font-medium">Emergency</a>
        <a href="#settings" className="text-gray-700 hover:text-blue-600 font-medium">Settings</a>
      </div>

      {/* Profile / Icon */}
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
        D
      </div>
    </nav>
  );
}

export default Navbar;
