// Import the functions you need from the SDKs you need
import  firebase  from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getAuth} from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compaat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUUBJSznUBZwCMoRpIdjj-Hqo1TP9wYY4",
  authDomain: "e-clone-64975.firebaseapp.com",
  projectId: "e-clone-64975",
  storageBucket: "e-clone-64975.firebasestorage.app",
  messagingSenderId: "1067097693834",
  appId: "1:1067097693834:web:f4599239d60b4d95961773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=app.firestore()