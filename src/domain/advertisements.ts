import { ADVERTISEMENTS_DATABASE_COLLECTION } from "@/constants";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  type DocumentData,
} from "firebase/firestore";
import { database } from "./firebase";

const createAdvertisement = async (id: string, metadata: any) => {
  return setDoc(doc(database, ADVERTISEMENTS_DATABASE_COLLECTION, id), metadata);
};

const deleteAdvertisement = async (id: string) => {
  return deleteDoc(doc(database, ADVERTISEMENTS_DATABASE_COLLECTION, id));
};

const getAdvertisementMetadata = async (uid: string) => {
  const ref = doc(database, ADVERTISEMENTS_DATABASE_COLLECTION, uid);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getAdvertisements = async () => {
  const snapshot = await getDocs(
    collection(database, ADVERTISEMENTS_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

const getAdvertisementsByPartner = async (partnerId: string) => {
  const q = await query(
    collection(database, ADVERTISEMENTS_DATABASE_COLLECTION),
    where("partnerId", "==", partnerId)
  );
  const snapshot = await getDocs(q);
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
export {
  createAdvertisement,
  getAdvertisementMetadata,
  getAdvertisements,
  deleteAdvertisement,
  getAdvertisementsByPartner,
};
