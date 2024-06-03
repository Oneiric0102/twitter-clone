import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASPc9riaEq3c_TA41bM9yT4DYqLzn-PO0",
  authDomain: "twitter-clone-c9157.firebaseapp.com",
  projectId: "twitter-clone-c9157",
  storageBucket: "twitter-clone-c9157.appspot.com",
  messagingSenderId: "337648322109",
  appId: "1:337648322109:web:fe3df46a705e7852274c54",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
