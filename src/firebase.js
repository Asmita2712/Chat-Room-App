import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAx2remKVll7cDZahreLvp0SwLCU_gLbTI",
    authDomain: "chatroomapp-bf0bb.firebaseapp.com",
    projectId: "chatroomapp-bf0bb",
    storageBucket: "chatroomapp-bf0bb.appspot.com",
    messagingSenderId: "492066009419",
    appId: "1:492066009419:web:179a40a7c0d25133d438ce",
    measurementId: "G-R16VNPKZ3B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;