// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHhbNztRLi2XWUMU7BWlTxjTubElTplg",
  authDomain: "coffee-store-c803f.firebaseapp.com",
  projectId: "coffee-store-c803f",
  storageBucket: "coffee-store-c803f.firebasestorage.app",
  messagingSenderId: "80257872911",
  appId: "1:80257872911:web:93ebc7fd3df5ce02c5df7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);