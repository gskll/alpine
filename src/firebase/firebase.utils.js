import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwGYGPr2DzO9Gb15Nb3emDw2ttbODt8ZI",
  authDomain: "alpine-db.firebaseapp.com",
  projectId: "alpine-db",
  storageBucket: "alpine-db.appspot.com",
  messagingSenderId: "907150989798",
  appId: "1:907150989798:web:7ecd5bc73295b101d39e27",
  measurementId: "G-F01LRB9ZH5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
