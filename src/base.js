import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const app1 = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const UserLogin = firebase.auth()



{/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCxmr2famdEonorMjnYbjxy_itoIUrrydQ",
    authDomain: "fir-react-25007.firebaseapp.com",
    projectId: "fir-react-25007",
    storageBucket: "fir-react-25007.appspot.com",
    messagingSenderId: "696171049667",
    appId: "1:696171049667:web:d647cb26d727fd5096e876"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script> */}