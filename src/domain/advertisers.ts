import { ADVERTISERS_DATABASE_COLLECTION } from "@/constants";
import { createUserWithEmailAndPassword as firebase_createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  type DocumentData,
} from "firebase/firestore";
import { auth, database } from "./firebase";

const createAdvertiserIdentity = async (email: string, password: string) => {
  return firebase_createUserWithEmailAndPassword(auth, email, password);
};

const createAdvertiserMetadata = async (id: string, metadata: any) => {
  return setDoc(doc(database, ADVERTISERS_DATABASE_COLLECTION, id), metadata);
};

const getAdvertiserMetadata = async (uid: string) => {
  const ref = doc(database, ADVERTISERS_DATABASE_COLLECTION, uid);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getAdvertisers = async () => {
  const snapshot = await getDocs(
    collection(database, ADVERTISERS_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
export {
  createAdvertiserIdentity,
  createAdvertiserMetadata,
  getAdvertiserMetadata,
  getAdvertisers,
};
