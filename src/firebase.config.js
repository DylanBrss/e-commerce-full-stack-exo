// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkH68SemshUj-9ARGF2rg1apftPJ6TRoc",
    authDomain: "maltimart-df813.firebaseapp.com",
    projectId: "maltimart-df813",
    storageBucket: "maltimart-df813.appspot.com",
    messagingSenderId: "634691491619",
    appId: "1:634691491619:web:4604fddeb284a6fe741e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app