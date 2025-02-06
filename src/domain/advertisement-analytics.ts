import { ADVERTISEMENTS_ANALYTICS_DATABASE_COLLECTION } from "@/constants";
import {
  doc,
  DocumentSnapshot,
  onSnapshot,
  type DocumentData,
} from "firebase/firestore";
import { database } from "./firebase";

const getAdvertisementAnalytics = async (
  id: string,
  callback: (doc: DocumentSnapshot<DocumentData, DocumentData>) => void
) => {
  return onSnapshot(
    doc(database, ADVERTISEMENTS_ANALYTICS_DATABASE_COLLECTION, id),
    callback
  );
};
export { getAdvertisementAnalytics };
