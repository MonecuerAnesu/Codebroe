import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQLEtLSvrQNSIPEwVmczGJszNxp-LoeQo",
  authDomain: "facegram-cd45c.firebaseapp.com",
  projectId: "facegram-cd45c",
  storageBucket: "facegram-cd45c.appspot.com",
  messagingSenderId: "285741026630",
  appId: "1:285741026630:web:41c069c8b7554218bf6947",
  measurementId: "G-6DGHYGD77H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);