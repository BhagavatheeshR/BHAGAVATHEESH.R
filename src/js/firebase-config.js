// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN-JgOZqSI9pIT0Cj6bdcVzMgkRz0LDKc",
  authDomain: "bhagavatheesh-8d0fa.firebaseapp.com",
  projectId: "bhagavatheesh-8d0fa",
  storageBucket: "bhagavatheesh-8d0fa.firebasestorage.app",
  messagingSenderId: "697974879425",
  appId: "1:697974879425:web:ea6c9a4ba41b22075e9040",
  measurementId: "G-P6BREMY00V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };