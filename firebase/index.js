import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
 apiKey: "AIzaSyBVoc6nh4Z3XoDlBKVoTfAZfsoONNfEXJk",
  authDomain: "final-2-115da.firebaseapp.com",
  projectId: "final-2-115da",
  storageBucket: "final-2-115da.appspot.com",
  messagingSenderId: "336853037785",
  appId: "1:336853037785:web:a9464cd680a711dcb204c8"
};

const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);
const firestoreInstance = getFirestore(app);

export { authInstance, firestoreInstance, onAuthStateChanged };