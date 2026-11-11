// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbKW8vFvG6i55_zBlLivfGKUXYo_eyhgg",
  authDomain: "mad-week-8.firebaseapp.com",
  projectId: "mad-week-8",
  appId: "1:597232687861:web:d103618304644ec40283bc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);