import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
  type DocumentData,
} from "firebase/firestore";
import { OFFER_VALIDATIONS_DATABASE_COLLECTION } from "../constants";
import { auth, database } from "./firebase";

export type OfferValidationFilter = {
  statuses: ("pending" | "validated" | "expired")[];
  offerId?: string;
};

const generateId = (length: number) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

const createOfferValidation = async (payload: any) => {
  const id = `${generateId(4)}-${generateId(5)}`;
  return setDoc(
    doc(database, OFFER_VALIDATIONS_DATABASE_COLLECTION, id),
    payload
  );
};

const deleteOfferValidation = async (id: string) => {
  return deleteDoc(doc(database, OFFER_VALIDATIONS_DATABASE_COLLECTION, id));
};

const getOfferValidationMetadata = async (id: string) => {
  const ref = doc(database, OFFER_VALIDATIONS_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getOfferValidations = async (
  filter: OfferValidationFilter = { statuses: ["pending"] }
) => {
  if (!auth.currentUser) {
    throw new Error("No current user");
  }
  let q;
  if (filter.offerId) {
    q = await query(
      collection(database, OFFER_VALIDATIONS_DATABASE_COLLECTION),
      where("userId", "==", auth.currentUser.uid),
      where("status", "in", filter.statuses),
      where("offerId", "==", filter.offerId),
      orderBy("createdAt", "desc")
    );
  } else {
    q = await query(
      collection(database, OFFER_VALIDATIONS_DATABASE_COLLECTION),
      where("userId", "==", auth.currentUser.uid),
      where("status", "in", filter.statuses),
      orderBy("createdAt", "desc")
    );
  }
  const data: DocumentData[] = [];
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export {
  createOfferValidation,
  deleteOfferValidation,
  getOfferValidationMetadata,
  getOfferValidations,
};
