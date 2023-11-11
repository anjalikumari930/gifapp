// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs ,where,query ,deleteDoc, doc } from 'firebase/firestore';

import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJgzwTu9QE3BHL5Wx-eLgAXLHdlYMjLDQ",
  authDomain: "gifapp-442ff.firebaseapp.com",
  projectId: "gifapp-442ff",
  storageBucket: "gifapp-442ff.appspot.com",
  messagingSenderId: "840567610936",
  appId: "1:840567610936:web:e24daf36ac23eb320a50cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

 const signUpWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed up:', user);
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};


export {
  auth,
  signUpWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  doc
};