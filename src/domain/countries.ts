import { COUNTRIES_DATABASE_COLLECTION } from "@/constants";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  type DocumentData,
} from "firebase/firestore";
import { database } from "./firebase";

const createCountryMetadata = async (id: string, metadata: any) => {
  return setDoc(doc(database, COUNTRIES_DATABASE_COLLECTION, id), metadata);
};

const deleteCountry = async (id: string) => {
  return deleteDoc(doc(database, COUNTRIES_DATABASE_COLLECTION, id));
};

const getCountryMetadata = async (id: string) => {
  const ref = doc(database, COUNTRIES_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getCountries = async () => {
  const snapshot = await getDocs(
    collection(database, COUNTRIES_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data.sort((a, b) => a.position - b.position);
};
export {
  createCountryMetadata,
  deleteCountry,
  getCountries,
  getCountryMetadata,
};
