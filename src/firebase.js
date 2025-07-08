// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeKHnAisRaKGz4qUY86FKLmpxBCcvRwxo",
  authDomain: "react-demo-pizza.firebaseapp.com",
  projectId: "react-demo-pizza",
  storageBucket: "react-demo-pizza.firebasestorage.app",
  messagingSenderId: "919552626568",
  appId: "1:919552626568:web:e4d7024495478aa00d343d",
  measurementId: "G-PR2474QZ1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth};