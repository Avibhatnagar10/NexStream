// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmAsaKuBf6pAQAnX1gRAKGJag15ZIjuMI",
  authDomain: "streamforge-atw80.firebaseapp.com",
  projectId: "streamforge-atw80",
  storageBucket: "streamforge-atw80.appspot.com",
  messagingSenderId: "16132538424",
  appId: "1:16132538424:web:2f72ad6dc3809b34e8e6cd",
  measurementId: "G-ZHDGF5T7YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
