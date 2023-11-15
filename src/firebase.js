import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfOJQvkc_dK-0DQ0FeKPhiO-qtxKe0A-0",
  authDomain: "dashboard-19acd.firebaseapp.com",
  projectId: "dashboard-19acd",
  storageBucket: "dashboard-19acd.appspot.com",
  messagingSenderId: "104345654200",
  appId: "1:104345654200:web:d17ff0fa6461c39b7d354d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const createUserWithEmailAndPassword = createUserWithEmailAndPasswordFirebase;

export { auth, database, createUserWithEmailAndPassword };
