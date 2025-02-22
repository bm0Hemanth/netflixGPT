// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT17VmZ4xJonxiHLYsyoMiUa15J7R5RKU",
  authDomain: "netflixgpt-acd25.firebaseapp.com",
  projectId: "netflixgpt-acd25",
  storageBucket: "netflixgpt-acd25.firebasestorage.app",
  messagingSenderId: "820662160541",
  appId: "1:820662160541:web:30bdb6ef46d6e816015874",
  measurementId: "G-H0F813FTQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();