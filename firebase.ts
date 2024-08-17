import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxNpt3pipqGnwXRXQYKylmRnSH5-YpItU",
  authDomain: "chat-with-pdf-bd382.firebaseapp.com",
  projectId: "chat-with-pdf-bd382",
  storageBucket: "chat-with-pdf-bd382.appspot.com",
  messagingSenderId: "333558686823",
  appId: "1:333558686823:web:8c94733e76f9488ddee0c2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
