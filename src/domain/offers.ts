import { OFFERS_DATABASE_COLLECTION } from "@/constants";
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

const createOffer = async (id: string, metadata: any) => {
  return setDoc(doc(database, OFFERS_DATABASE_COLLECTION, id), metadata);
};

const deleteOffer = async (id: string) => {
  return deleteDoc(doc(database, OFFERS_DATABASE_COLLECTION, id));
};

const getOfferMetadata = async (uid: string) => {
  const ref = doc(database, OFFERS_DATABASE_COLLECTION, uid);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getOffers = async () => {
  const snapshot = await getDocs(
    collection(database, OFFERS_DATABASE_COLLECTION)
  );
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

const getOffersByPartner = async (partnerId: string) => {
  const q = await query(
    collection(database, OFFERS_DATABASE_COLLECTION),
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
  createOffer,
  getOfferMetadata,
  getOffers,
  deleteOffer,
  getOffersByPartner,
};
