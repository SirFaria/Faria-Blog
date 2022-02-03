import { initializeApp } from 'firebase/app';
import "firebase/firestore";
import { collection, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDStoevVEqDBkRMMbbs3aCwM0j9A6m2uqQ",
  authDomain: "faria-blog.firebaseapp.com",
  projectId: "faria-blog",
  storageBucket: "faria-blog.appspot.com",
  messagingSenderId: "599122469183",
  appId: "1:599122469183:web:56c7b832f82e8dbfbab38a"
};

// init firebase
try {
  initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase initialization error', err.stack);
  }
}

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'blogs');



export { colRef };
export { firebaseConfig };
export default db;
