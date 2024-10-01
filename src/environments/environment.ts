// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA73nlh_YCXrFtAWTS_ivOY8853VAbBhL8",
  authDomain: "schreknet-app.firebaseapp.com",
  projectId: "schreknet-app",
  storageBucket: "schreknet-app.appspot.com",
  messagingSenderId: "451575655267",
  appId: "1:451575655267:web:8ac5a296fcc8ff13320156",
  measurementId: "G-LW0MYKYHQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);