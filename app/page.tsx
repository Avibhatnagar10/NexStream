// app/page.tsx
"use client"; // Use this if you're using useState in any components

import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import './globals.css'; // Import global styles

const HomePage = () => {
  const handleGetStarted = () => {
    // Navigate to the account creation page
    window.location.href = '/create-account'; // Change this to your account creation page route
  };

  return (
    <div className="bg-black text-white h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-[10rem] font-extrabold mb-10 text-center transition-transform duration-300 transform hover:scale-110" style={{ color: 'white', fontSize: '3rem' }}>
  StreamForge - Your Way, Your Stream, Your Platform
</h1>
        <button
          className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
