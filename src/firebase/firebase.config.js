// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChGMeDXW1V5wJ6rqbSTk02MNLylA74w0I",
  authDomain: "unicraft-d2783.firebaseapp.com",
  projectId: "unicraft-d2783",
  storageBucket: "unicraft-d2783.appspot.com",
  messagingSenderId: "541503544911",
  appId: "1:541503544911:web:7cf89c2a5fd26d4ef6d43a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);