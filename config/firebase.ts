// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_QE6fmtfA-YjBHRNa9YiVI_3aGkM9_rg",
  authDomain: "whatsapp-clone-46120.firebaseapp.com",
  projectId: "whatsapp-clone-46120",
  storageBucket: "whatsapp-clone-46120.appspot.com",
  messagingSenderId: "942209747900",
  appId: "1:942209747900:web:3a9dc2c051fdceca3179b9"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {db, auth, provider}