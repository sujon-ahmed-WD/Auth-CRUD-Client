 import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyDi3qmRCUcd4TrSKAyByQjalic6Ysyfilc",
  authDomain: "auth-ceud.firebaseapp.com",
  projectId: "auth-ceud",
  storageBucket: "auth-ceud.appspot.com",
  messagingSenderId: "713780212396",
  appId: "1:713780212396:web:3bec7bc75bd8ba70236509"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
export default app;
