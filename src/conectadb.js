import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBwvfFy9Z2TwjGYNIYO16NurQtyHseX23o",
    authDomain: "livraria2-7dec3.firebaseapp.com",
    projectId: "livraria2-7dec3",
    storageBucket: "livraria2-7dec3.appspot.com",
    messagingSenderId: "45358104797",
    appId: "1:45358104797:web:2ac72164547b7d4452db34"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);