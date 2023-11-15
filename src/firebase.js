// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALDl0T6xtVD_OqUUgvcgqcH5TM1icqX1M",
  authDomain: "usermanagementapp-f9c8a.firebaseapp.com",
  projectId: "usermanagementapp-f9c8a",
  storageBucket: "usermanagementapp-f9c8a.appspot.com",
  messagingSenderId: "873613849408",
  appId: "1:873613849408:web:55f0adf2579ebc43c940a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

