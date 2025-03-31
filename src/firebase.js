import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    deleteDoc,
    doc,
    arrayUnion,
    updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCYgF12GgmAlLD3emmDJgPvqQhoqo1kO9M',
    authDomain: 'pet-chat-67a08.firebaseapp.com',
    databaseURL:
        'https://pet-chat-67a08-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'pet-chat-67a08',
    storageBucket: 'pet-chat-67a08.firebasestorage.app',
    messagingSenderId: '894902788354',
    appId: '1:894902788354:web:3f596d0bf60db52bef621b',
    measurementId: 'G-9RNNKJDJED',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todoCollection = collection(db, 'todos');

export {
    db,
    todoCollection,
    addDoc,
    getDoc,
    deleteDoc,
    doc,
    arrayUnion,
    updateDoc,
};
