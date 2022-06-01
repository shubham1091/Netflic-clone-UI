// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZXbwSqU_W9LKOiULRqSqk0Q3kbijxe1c",
    authDomain: "netflix-clone-3909d.firebaseapp.com",
    projectId: "netflix-clone-3909d",
    storageBucket: "netflix-clone-3909d.appspot.com",
    messagingSenderId: "740684758846",
    appId: "1:740684758846:web:df791dcf605d561fba366f",
    measurementId: "G-9H0YEXVVL9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;