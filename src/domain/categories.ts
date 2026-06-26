import { CATEGORIES_DATABASE_COLLECTION } from "@/constants";
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

const createCategoryMetadata = async (metadata: any) => {
  return addDoc(collection(database, CATEGORIES_DATABASE_COLLECTION), metadata);
};

const deleteCategory = async (id: string) => {
  return deleteDoc(doc(database, CATEGORIES_DATABASE_COLLECTION, id));
};

const getCategoryMetadata = async (id: string) => {
  const ref = doc(database, CATEGORIES_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getCategories = async () => {
  const snapshot = await getDocs(
    collection(database, CATEGORIES_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data.sort((a, b) => a.position - b.position);
};
export {
  createCategoryMetadata,
  deleteCategory,
  getCategories,
  getCategoryMetadata,
};
