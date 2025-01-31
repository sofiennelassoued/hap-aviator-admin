import { REGIONS_DATABASE_COLLECTION } from "@/constants";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  type DocumentData,
} from "firebase/firestore";
import { database } from "./firebase";

const createRegionMetadata = async (metadata: any) => {
  return addDoc(collection(database, REGIONS_DATABASE_COLLECTION), metadata);
};

const deleteRegion = async (id: string) => {
  return deleteDoc(doc(database, REGIONS_DATABASE_COLLECTION, id));
};

const getRegionMetadata = async (id: string) => {
  const ref = doc(database, REGIONS_DATABASE_COLLECTION, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    throw new Error("No such document!");
  }
  return snapshot.data();
};

const getRegions = async (countryId: string) => {
  const q = await query(
    collection(database, REGIONS_DATABASE_COLLECTION),
    where("countryId", "==", countryId)
  );
  const snapshot = await getDocs(q);
  const data: DocumentData[] = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data.sort((a, b) => a.position - b.position);
};
export { createRegionMetadata, deleteRegion, getRegionMetadata, getRegions };
