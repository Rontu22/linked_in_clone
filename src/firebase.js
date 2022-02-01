import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVRAHLGtjwJRgr9Oj2TiWSgprwp_CTiZc",
  authDomain: "linkedin-clone-bf20a.firebaseapp.com",
  projectId: "linkedin-clone-bf20a",
  storageBucket: "linkedin-clone-bf20a.appspot.com",
  messagingSenderId: "348610624109",
  appId: "1:348610624109:web:17a43a81e27d8bfb9bdd64",
  measurementId: "G-RTSS5HZ9TQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
