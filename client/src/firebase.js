// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "volunto-adceb.firebaseapp.com",
  projectId: "volunto-adceb",
  storageBucket: "volunto-adceb.appspot.com",
  messagingSenderId: "783368062892",
  appId: "1:783368062892:web:f5291a336748a659955c09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);