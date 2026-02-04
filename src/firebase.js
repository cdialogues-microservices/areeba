// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyASb3_21R1Jn0jKTMHZpcECoSY7b5SUaV0",
  authDomain: "areeba-3ddda.firebaseapp.com",
  projectId: "areeba-3ddda",
  storageBucket: "areeba-3ddda.firebasestorage.app",
  messagingSenderId: "640576262949",
  appId: "1:640576262949:web:adb48a3dc0d7468d1480cc",
  measurementId: "G-T6TVPT7GB8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
