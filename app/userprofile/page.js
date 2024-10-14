"use client"; // Use this to make the component a client component

import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Import auth
import { useAuthState } from "react-firebase-hooks/auth"; // Import useAuthState for easy auth state handling
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const UserProfile = () => {
  const [user] = useAuthState(auth); // Get the current user
  const [profilePic, setProfilePic] = useState(user?.photoURL || ""); // State for profile picture
  const [isUploading, setIsUploading] = useState(false); // State for upload indicator
  const router = useRouter(); // Create a router instance for navigation

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result); // Set the uploaded image as profile picture
      setIsUploading(false); // Hide upload indicator
    };
    if (file) {
      setIsUploading(true); // Show upload indicator
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Function to delete profile picture
  const handleDeletePicture = () => {
    setProfilePic(""); // Reset to blank
  };

  // Function to navigate to home page
  const handleReturnHome = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {user ? (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-gray-700 transition-transform duration-300 transform hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-dashed border-gray-700 text-gray-500">
                  <span className="text-lg">No Image</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
                title="Upload Profile Picture"
              />
              <div className="absolute bottom-0 right-0 flex space-x-2">
                <button
                  onClick={handleDeletePicture}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-2 rounded-md focus:outline-none"
                >
                  Delete
                </button>
                {isUploading && (
                  <span className="text-yellow-400">Uploading...</span>
                )}
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{user.displayName || "User"}</h1>
            <p className="text-gray-400">Email: {user.email}</p>
            <p className="text-gray-400">User ID: {user.uid}</p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleReturnHome}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
            >
              Return to Home
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-xl">Please sign in to see your profile</h1>
      )}
    </div>
  );
};

export default UserProfile;
