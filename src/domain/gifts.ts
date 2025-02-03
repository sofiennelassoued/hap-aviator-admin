import {
  GIFTS_DATABASE_COLLECTION
} from "@/constants";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  type DocumentData
} from "firebase/firestore";
import { database } from "./firebase";

const createGift = async (id: string, metadata: any) => {
  return setDoc(doc(database, GIFTS_DATABASE_COLLECTION, id), metadata);
};

const deleteGift = async (id: string) => {
  return deleteDoc(doc(database, GIFTS_DATABASE_COLLECTION, id));
};

const getGiftMetadata = async (id: string) => {
  const ref = doc(database, GIFTS_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getGifts = async () => {
  const snapshot = await getDocs(
    collection(database, GIFTS_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export { createGift, deleteGift, getGiftMetadata, getGifts };

