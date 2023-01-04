import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClLoXtL0ZfbN2BKo7FHQ7BuzwWvioiHSI",
  authDomain: "react-netflix-clone-116ef.firebaseapp.com",
  projectId: "react-netflix-clone-116ef",
  storageBucket: "react-netflix-clone-116ef.appspot.com",
  messagingSenderId: "292734147998",
  appId: "1:292734147998:web:71e08880553599d9be0a8f",
  measurementId: "G-E4CXRS6172"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);