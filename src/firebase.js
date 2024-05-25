// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-ed3a5.firebaseapp.com",
  projectId: "x-next-ed3a5",
  storageBucket: "x-next-ed3a5.appspot.com",
  messagingSenderId: "253436503643",
  appId: "1:253436503643:web:19ec6cf64a71e5adaac17e",
  measurementId: "G-C4Y25QQNTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
