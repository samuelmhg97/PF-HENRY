// Import the functions you need from the SDKs you need
 
import {initializeApp} from "firebase/app";
// import app from "firebase/compat/app";
import {getAuth} from "firebase/auth"
 
// TODO: Add SDKs for Firebase products that you want to use
 
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
const firebaseConfig = {
  apiKey: "AIzaSyD2SccPNjL8I-rqZ63LV23f5JoEwMKOQcg",
  authDomain: "pf-grupo-07---cine.firebaseapp.com",
  projectId: "pf-grupo-07---cine",
  storageBucket: "pf-grupo-07---cine.appspot.com",
  messagingSenderId: "82837606518",
  appId: "1:82837606518:web:e83e9b11cd8fa06f728f57",
  measurementId: "G-QNRLR2C6QY",
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 

