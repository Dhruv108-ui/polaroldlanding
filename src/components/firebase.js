import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyANDtzcy5SnnaCID5s-yYULZFCAsnSGvFo",
  authDomain: "polar-c35be.firebaseapp.com",
  projectId: "polar-c35be",
  storageBucket: "polar-c35be.appspot.com",
  messagingSenderId: "488643586241",
  appId: "1:488643586241:web:2cd43f4312a07a5bdf4c40",
  measurementId: "G-6PG39W8M4X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)
const database = getFirestore(app);

export { auth,storage,database };
