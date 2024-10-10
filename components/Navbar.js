// components/Navbar.js
"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const handleStreamToggle = () => {
    console.log("Stream started/stopped");
  };

  const handleLogin = () => {
    console.log("User logged in");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-mode', !isDarkMode);
  };

  return (
    <nav className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
      <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
        StreamForge
      </h1>
      <div className="flex items-center space-x-4">
        <button
          className={`px-4 py-2 rounded hover:shadow-lg transition duration-300 ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'}`}
          onClick={handleStreamToggle}
        >
          Start Live Stream
        </button>
        <button
          className={`px-4 py-2 rounded hover:shadow-lg transition duration-300 ${isDarkMode ? 'bg-green-500 text-white' : 'bg-green-600 text-white'}`}
          onClick={handleLogin}
        >
          User Login
        </button>
        {/* <button
          className={`px-4 py-2 rounded hover:shadow-lg transition duration-300 ${isDarkMode ? 'bg-yellow-500 text-black' : 'bg-yellow-600 text-black'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
