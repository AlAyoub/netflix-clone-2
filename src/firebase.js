import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVLcN3OfyWOMHH4zBH7JWzCxDULJVSNks",
    authDomain: "netflix-clone-2-18909.firebaseapp.com",
    projectId: "netflix-clone-2-18909",
    storageBucket: "netflix-clone-2-18909.appspot.com",
    messagingSenderId: "130367858771",
    appId: "1:130367858771:web:f8bab93a24e2a71c143ea6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;