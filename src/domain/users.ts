import { USERS_DATABASE_COLLECTION } from "@/constants";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
  type DocumentData,
} from "firebase/firestore";
import { database } from "./firebase";

const getUserMetadata = async (id: string) => {
  const ref = doc(database, USERS_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const updateUserPoints = async (id: string, points: number) => {
  const ref = doc(database, USERS_DATABASE_COLLECTION, id);
  return updateDoc(ref, {
    points,
    updatedAt: serverTimestamp(),
  });
};

const updateUserHearts = async (id: string, hearts: number) => {
  const ref = doc(database, USERS_DATABASE_COLLECTION, id);
  return updateDoc(ref, {
    hearts,
    updatedAt: serverTimestamp(),
  });
};

const getUsers = async () => {
  const snapshot = await getDocs(
    collection(database, USERS_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
export { getUserMetadata, getUsers, updateUserHearts, updateUserPoints };

