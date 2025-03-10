import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// const firebaseConfig ={
//     apiKey: 'YOUR_API_KEY',
//     authDomain: 'YOUR_AUTH_DOMAIN',
//     projectId: 'YOUR_PROJECT_ID',
//     storageBucket: 'YOUR_STORAGE_BUCKET',
//     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//     appId: 'YOUR_APP_ID'

// }

const firebaseConfig = {
    apiKey: "AIzaSyCwwwrUCLJtYn5ok4f0i73B2q0gxsjhkuA",
    authDomain: "blog-f5d10.firebaseapp.com",
    projectId: "blog-f5d10",
    storageBucket: "blog-f5d10.firebasestorage.app",
    messagingSenderId: "355885995349",
    appId: "1:355885995349:web:6237d3affdf5283f39cbdc",
    measurementId: "G-MDHLLF2SWT"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)