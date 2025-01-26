import { OFFERS_DATABASE_COLLECTION } from "@/constants";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  type DocumentData,
} from "firebase/firestore";
import { database } from "./firebase";

const createOffer = async (id: string, metadata: any) => {
  return setDoc(doc(database, OFFERS_DATABASE_COLLECTION, id), metadata);
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
export { createOffer, getOfferMetadata, getOffers };
