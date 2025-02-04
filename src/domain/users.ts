import { USERS_DATABASE_COLLECTION } from "@/constants";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  type DocumentData
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
export { getUserMetadata, getUsers };
