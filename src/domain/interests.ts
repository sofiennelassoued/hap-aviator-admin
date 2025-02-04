import { INTERESTS_DATABASE_COLLECTION } from "@/constants";
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

const createInterestMetadata = async (metadata: any) => {
  return addDoc(collection(database, INTERESTS_DATABASE_COLLECTION), metadata);
};

const deleteInterest = async (id: string) => {
  return deleteDoc(doc(database, INTERESTS_DATABASE_COLLECTION, id));
};

const getInterestMetadata = async (id: string) => {
  const ref = doc(database, INTERESTS_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getInterests = async () => {
  const snapshot = await getDocs(
    collection(database, INTERESTS_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data.sort((a, b) => a.position - b.position);
};
export {
  createInterestMetadata,
  deleteInterest,
  getInterests,
  getInterestMetadata,
};
