import { firebase } from '@firebase/app'; 
import '@firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyA4ZpXcNjwvY061rrpluP9GWDpat1p6cIQ",
  authDomain: "storytellingapp-43bb0.firebaseapp.com",
  projectId: "storytellingapp-43bb0",
  storageBucket: "storytellingapp-43bb0.appspot.com",
  messagingSenderId: "355322073024",
  appId: "1:355322073024:web:87f1fa71ebe79d89c0c225"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

