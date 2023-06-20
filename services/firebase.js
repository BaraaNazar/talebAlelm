// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
