// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVeeOHU5Na_Lv99YUcYtkr9XJdQeYcKoQ",
  authDomain: "code-1138f.firebaseapp.com",
  projectId: "code-1138f",
  storageBucket: "code-1138f.firebasestorage.app",
  messagingSenderId: "580292933900",
  appId: "1:580292933900:web:bd2a9dc23be468d613f129",
  measurementId: "G-BYG79QKVYM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
