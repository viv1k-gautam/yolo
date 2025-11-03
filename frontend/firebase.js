// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "yolo-eb027.firebaseapp.com",
  projectId: "yolo-eb027",
  storageBucket: "yolo-eb027.firebasestorage.app",
  messagingSenderId: "398379272739",
  appId: "1:398379272739:web:f594db141b3caa8f76ff96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth}