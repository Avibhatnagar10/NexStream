// app/page.tsx
"use client"; // Ensure this is included if you have hooks

import React from "react";
import Navbar from "./components/Navbar"; // Adjust the import path if necessary
import "./globals.css"; // Import global styles
import { FaArrowRight } from "react-icons/fa"; // Icon import

const HomePage = () => {
  return (
    <div className="bg-black text-white h-screen overflow-hidden">
      <Navbar />
      {/* Navbar at the top */}

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xlfont-extrabold mb-8 tracking-wide transition-transform duration-300 transform hover:scale-110">
          <p className="streamforge text-8xl font-extrabold  transition-transform duration-300 transform hover:scale-110">StreamForge</p> - Your Way, Your Stream, Your Platform
        </h1>

        <button
          className=" text- bg-white flex items-center justify-center px-8 py-3 border-4 border-blue-600 text-blue-900 rounded-full 
          hover:bg-blue-600 hover:text-white 
          transition duration-300 transform 
          hover:scale-105 shadow-lg shadow-blue-500/50 
          focus:ring-3 focus:ring-blue-300 focus:outline-none"
          aria-label="Get Started with StreamForge"
        >
          <span className="flex items-center">
            Get Started
            <FaArrowRight className="ml-2" /> {/* Arrow icon */}
          </span>   
        </button>
      </div>
    </div>
    
  );
};

export default HomePage;



