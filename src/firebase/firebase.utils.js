import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyB-ziEtBgkK25AlPJnoHXotgn4BJVzPlT8",
    authDomain: "netflix-clone-bfe2c.firebaseapp.com",
    projectId: "netflix-clone-bfe2c",
    storageBucket: "netflix-clone-bfe2c.appspot.com",
    messagingSenderId: "193540039996",
    appId: "1:193540039996:web:a4f066316082c76f64ea39"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: "select_account"})


  export const signInWithGoogle = () => auth.signInWithPopup(provider)

export {
    firebase
}