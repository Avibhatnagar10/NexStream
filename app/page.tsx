"use client"; // Use this if you're using useState in any components

import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import "./globals.css"; // Import global styles
import { FaArrowRight } from "react-icons/fa"; // Icon import

const HomePage = () => {
  return (
    <div className="bg-black text-white h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-[7rem] sm:text-[8rem] md:text-[10rem] font-extrabold mb-10 text-center tracking-wide transition-transform duration-300 transform hover:scale-110">
          <span className="streamforge">StreamForge</span> - Your Way, Your
          Stream, Your Platform
        </h1>

        <button
          className="flex items-center justify-center px-10 py-4 border-4 border-blue-600 text-blue-900 rounded-full 
                     hover:bg-blue-600 hover:text-white 
                     transition duration-300 transform 
                     hover:scale-105 shadow-lg shadow-blue-500/50 
                     focus:ring-4 focus:ring-blue-300 focus:outline-none"
          onClick={() => (window.location.href = "/create-account")}
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
