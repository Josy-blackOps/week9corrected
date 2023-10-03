import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjBhr0wDtDrs4n4uDtYO0hRazkgWdL8sw",
  authDomain: "draft-data-driven-full-stack.firebaseapp.com",
  projectId: "draft-data-driven-full-stack",
  storageBucket: "draft-data-driven-full-stack.appspot.com",
  messagingSenderId: "976459760303",
  appId: "1:976459760303:web:e65f004860c95e46c84a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };