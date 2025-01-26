import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  type UploadTaskSnapshot,
} from "firebase/storage";
import { storage } from "./firebase";

// https://firebase.google.com/docs/storage/web/upload-files#full_example
const upload = (
  url: string,
  file: Blob | Uint8Array | ArrayBuffer,
  callback: (
    error?: string | null,
    snapshot?: UploadTaskSnapshot | null,
    downloadURL?: string
  ) => void
) => {
  const r = ref(storage, url);
  const t = uploadBytesResumable(r, file);
  t.on(
    "state_changed",
    (s) => {
      callback(null, s);
    },
    ({ code }) => {
      callback(code);
    },
    () => {
      getDownloadURL(t.snapshot.ref).then((u) => {
        callback(null, null, u);
      });
    }
  );
};

export { upload };
