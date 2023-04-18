// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqviQpCz9XD_tFsUC6iFt1dgiwlaxmb-E",
  authDomain: "pixelart-ai.firebaseapp.com",
  projectId: "pixelart-ai",
  storageBucket: "pixelart-ai.appspot.com",
  messagingSenderId: "725616617607",
  appId: "1:725616617607:web:b89d3bbd17e99b9419f022",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
