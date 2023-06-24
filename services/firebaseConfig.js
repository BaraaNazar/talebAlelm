import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB2fCcbxd6m5LG43c51psnkfIcezySUr-o',
  authDomain: 'taleb-alelm.firebaseapp.com',
  projectId: 'taleb-alelm',
  storageBucket: 'taleb-alelm.appspot.com',
  messagingSenderId: '825081613473',
  appId: '1:825081613473:web:ac1e29114d4e2073ca74e0',
  measurementId: 'G-PNV1S563S4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
