import  firebase from 'firebase/compat/app' 
import {initializeApp} from 'firebase/app'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { getFirestore, doc, setDoc, addDoc} from 'firebase/firestore';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-z_xkjwaeJVoeYFzX5dQsd9qDi3FjdeY",
    authDomain: "mj-olx-clone.firebaseapp.com",
    projectId: "mj-olx-clone",
    storageBucket: "mj-olx-clone.appspot.com",
    messagingSenderId: "1096402295316",
    appId: "1:1096402295316:web:45e80c02779b404b28e501"
  };
  export default initializeApp(firebaseConfig)
