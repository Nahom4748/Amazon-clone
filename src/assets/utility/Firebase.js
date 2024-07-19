import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIOw_WdR_a9uiTTOWgVeZbFKe7Fm9JDls",
  authDomain: "clone-c30f4.firebaseapp.com",
  projectId: "clone-c30f4",
  storageBucket: "clone-c30f4.appspot.com",
  messagingSenderId: "826808445203",
  appId: "1:826808445203:web:806522f418e1ec7f1992e6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
