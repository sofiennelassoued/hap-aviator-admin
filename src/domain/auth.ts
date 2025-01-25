import {
  createUserWithEmailAndPassword as firebase_createUserWithEmailAndPassword,
  onAuthStateChanged as firebase_onAuthStateChanged,
  signInWithEmailAndPassword as firebase_signInWithEmailAndPassword,
  signOut as firebase_signOut,
  type NextOrObserver,
  type User,
} from "firebase/auth";
import { auth } from "./firebase";

const onAuthStateChanged = (callback: NextOrObserver<User>) => {
  return firebase_onAuthStateChanged(auth, callback);
};

const createUserWithEmailAndPassword = (email: string, password: string) => {
  return firebase_createUserWithEmailAndPassword(auth, email, password);
};

const signInWithEmailAndPassword = (email: string, password: string) => {
  return firebase_signInWithEmailAndPassword(auth, email, password);
};

const signOut = () => {
  return firebase_signOut(auth);
};

export {
  auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
  signOut
};

