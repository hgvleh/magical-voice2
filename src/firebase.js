// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk2ac7zLA-N_F3P_dY2fcdnL4tP6K6fVw",
  authDomain: "zinsappata.firebaseapp.com",
  projectId: "zinsappata",
  storageBucket: "zinsappata.appspot.com",
  messagingSenderId: "113369271332",
  appId: "1:113369271332:web:1a55d786fac0aa96cb5cb1",
  measurementId: "G-V9LKMQYCTN",
  databaseURL: "https://zinsappata-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
