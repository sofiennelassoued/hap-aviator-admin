// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FIREBASE_CONFIG } from "../constants/firebase.config";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth();
const database = getFirestore(app);
const storage = getStorage();

const generateId = async (name: string) => {
  return doc(collection(database, name)).id;
};
export { auth, database, storage, generateId };
