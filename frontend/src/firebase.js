import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; //para el chat

const firebaseConfig = {
  apiKey: "AIzaSyCWcH3UgD9BiHtWQ_PUQKEEMXQoDXknKEc",
  authDomain: "konecta-ae85f.firebaseapp.com",
  projectId: "konecta-ae85f",
  storageBucket: "konecta-ae85f.appspot.com",
  messagingSenderId: "902240274162",
  appId: "1:902240274162:web:1d58bdb447e2a84bd5f26b",
  measurementId: "G-XVW2T9J4CR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app); //para la base de datos de los mensajes del chat
