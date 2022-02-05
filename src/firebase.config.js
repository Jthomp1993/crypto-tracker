// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCPayeaaV-_4BXBrTikhVMIsyxgdhPZkKA",
  authDomain: "crypto-tracker-cfc44.firebaseapp.com",
  projectId: "crypto-tracker-cfc44",
  storageBucket: "crypto-tracker-cfc44.appspot.com",
  messagingSenderId: "780582074012",
  appId: "1:780582074012:web:d54536e3966aacd4e3df59",
  measurementId: "G-8TXRPGLZW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();