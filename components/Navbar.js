import React, { useState } from 'react';
import { auth, provider } from '../app/firebaseConfig'; // Adjust the path accordingly
import { signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom'; // Use react-router-dom for routing

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleStreamToggle = () => {
    console.log("Stream started/stopped");
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleHomeRedirect = () => {
    navigate('/'); // Uncomment when react-router is integrated
  };

  return (
    <nav className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-transparent' : 'bg-gray-300'}`}>
      <h1
        className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer tracking-wide transition duration-300 ease-in-out transform hover:scale-110`}
        onClick={handleHomeRedirect}
      >
        StreamForge
      </h1>
      <div className="flex items-center space-x-6">
        <button onClick={handleStreamToggle}>
          Start Live Stream
        </button>
        <button onClick={() => alert("Contact us at info@streamforge.com")}>
          Contact Us
        </button>
        <button onClick={handleLogin}>
          Sign in 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
