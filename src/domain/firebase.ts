// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_CONFIG } from "../constants/firebase.config";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth();
const database = getFirestore(app);

export { auth, database };
