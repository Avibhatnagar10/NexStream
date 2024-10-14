"use client"; // Use this if you're using useState in any components

import React, { useState, useEffect, useRef } from "react"; // Import useRef and useEffect
import { auth, provider } from "../firebaseConfig"; // Adjust the path accordingly
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold the user information
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu visibility
  const router = useRouter(); // Use useRouter for navigation
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the user state if logged in
      } else {
        setUser(null); // Clear user state if logged out
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleStreamToggle = () => {
    console.log("Stream started/stopped");
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Store user information on login
      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleHomeRedirect = () => {
    router.push('/'); // Redirect to home
  };

  const handleProfileRedirect = () => {
    router.push('/userprofile'); // Redirect to user profile
  };

  const handleSettingsRedirect = () => {
    router.push('/settings'); // Redirect to settings
  };

  const handleLogout = async () => {
    await auth.signOut(); // Sign out the user
    setUser(null); // Clear user information
    console.log('User signed out');
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <h1
        className="text-3xl font-bold text-white cursor-pointer tracking-wide transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={handleHomeRedirect}
      >
        StreamForge
      </h1>
      <div className="flex items-center space-x-6">
        <button
          className="text-sm font-medium text-white bg-transparent px-5 py-3 rounded-md 
          hover:bg-gray-700 hover:bg-opacity-50 hover:border-gray-700 transition duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={handleStreamToggle}
        >
          Start Live Stream
        </button>

        <button
          className="text-sm font-medium text-white bg-transparent px-5 py-3 rounded-md 
          hover:bg-gray-700 hover:bg-opacity-50 hover:border-gray-700 transition duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => alert("Contact us at info@streamforge.com")}
        >
          Contact Us
        </button>

        {user ? (
          <div className="relative" ref={dropdownRef}> {/* Attach the ref here */}
            <button
              className="text-sm font-medium text-white px-4 py-2 hover:underline focus:outline-none"
              onClick={toggleDropdown} // Use toggle function
            >
              {user.displayName || "Profile"}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-opacity-80 bg-gray-800 backdrop-blur-lg border border-gray-200 shadow-lg rounded-md transition-all duration-300 ease-in-out">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:bg-opacity-50 transition duration-300"
                  onClick={handleProfileRedirect} // Link to user profile
                >
                  User Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:bg-opacity-50 transition duration-300"
                  onClick={handleSettingsRedirect}
                >
                  Settings
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:bg-opacity-50 transition duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="text-sm font-medium text-white bg-transparent px-5 py-3 rounded-md 
            hover:bg-gray-700 hover:bg-opacity-50 hover:border-gray-700 transition duration-300 ease-in-out 
            focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={handleLogin}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
