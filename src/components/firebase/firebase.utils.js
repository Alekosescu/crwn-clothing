import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAuNYOgrMVHnWtrMD5H81O0eN6LlBXm_ew",
  authDomain: "crwn-db-60c1a.firebaseapp.com",
  projectId: "crwn-db-60c1a",
  storageBucket: "crwn-db-60c1a.appspot.com",
  messagingSenderId: "771015851482",
  appId: "1:771015851482:web:cded91342ab16431bb14e3",
  measurementId: "G-9XL4E811B7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
