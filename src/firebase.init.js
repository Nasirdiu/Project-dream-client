// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUmyX0sfEuesBUMs-5098IL-AI_lTf2hI",
  authDomain: "luxury-living-4fa76.firebaseapp.com",
  projectId: "luxury-living-4fa76",
  storageBucket: "luxury-living-4fa76.appspot.com",
  messagingSenderId: "520437788620",
  appId: "1:520437788620:web:9ba8b2d2d2396142233769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;