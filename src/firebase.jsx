// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw8hzPCmx6Xys5rEW-N839ak_I0lo0mgM",
  authDomain: "financial-literacy-f9739.firebaseapp.com",
  projectId: "financial-literacy-f9739",
  storageBucket: "financial-literacy-f9739.appspot.com",
  messagingSenderId: "1026654059787",
  appId: "1:1026654059787:web:e1e450c552b53b9160760e",
  measurementId: "G-QJVB89V2FD"
};

let app;

if(!getApps().length){
    app = initializeApp(firebaseConfig);
}else{
    app = app();
}

// Initialize Firebase
//export const app;
export const auth = getAuth();
export const storage = getStorage();
