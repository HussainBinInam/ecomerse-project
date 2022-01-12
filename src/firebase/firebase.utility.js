import firebase from 'firebase/compat/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';
import 'firebase/firestore';
 

const config ={
    apiKey: "AIzaSyBWG7ZsZBJNka7pvHo9NSUKLXAaR47qaKI",
    authDomain: "eccom-db-e169f.firebaseapp.com",
    projectId: "eccom-db-e169f",
    storageBucket: "eccom-db-e169f.appspot.com",
    messagingSenderId: "993226816115",
    appId: "1:993226816115:web:dda28767d27fed9b7f4806",
    measurementId: "G-08B7CCY1BH"
  };
  
  
firebase.initializeApp(config);
  
export const auth = getAuth();
const firebaseApp = firebase.initializeApp(config);
export const Interesting = () => console.log("hmmmmm")

export const firestore = firebase.firestore;

const provider = new GoogleAuthProvider();
provider.setCustomParameters ({prompt: `select_account`})
export const SignInWithGoogle = () =>  signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
}); 
export default firebase;