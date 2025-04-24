import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkY5Wz1-cRTc_8CVAGFHJgsINDKoSjUfo",
  authDomain: "thrive-app-a58e2.firebaseapp.com",
  projectId: "thrive-app-a58e2",
  storageBucket: "thrive-app-a58e2.firebasestorage.app",
  messagingSenderId: "1014635338476",
  appId: "1:1014635338476:ios:9cbf1f93bb1036bf71a3c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
