// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhJ9IGT9CBWI60GE39Ugtt47lfeuuU-u4",
  authDomain: "netflixgpt-2a5c5.firebaseapp.com",
  projectId: "netflixgpt-2a5c5",
  storageBucket: "netflixgpt-2a5c5.firebasestorage.app",
  messagingSenderId: "684954190196",
  appId: "1:684954190196:web:2b472ee23313d589f4ac21",
  measurementId: "G-RNSLNW8LZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();