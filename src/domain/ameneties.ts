import { AMENETIES_DATABASE_COLLECTION } from "@/constants";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  type DocumentData,
} from "firebase/firestore";
import { database } from "./firebase";

const createAmenetyMetadata = async (metadata: any) => {
  return addDoc(collection(database, AMENETIES_DATABASE_COLLECTION), metadata);
};

const deleteAmenety = async (id: string) => {
  return deleteDoc(doc(database, AMENETIES_DATABASE_COLLECTION, id));
};

const getAmenetyMetadata = async (id: string) => {
  const ref = doc(database, AMENETIES_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getAmeneties = async () => {
  const snapshot = await getDocs(
    collection(database, AMENETIES_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data.sort((a, b) => a.position - b.position);
};
export {
  createAmenetyMetadata,
  deleteAmenety,
  getAmeneties,
  getAmenetyMetadata,
};
