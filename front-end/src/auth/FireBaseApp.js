import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA0q6TCZcn8-eUlnQhnVz_oO89OYuvFGxY",
    authDomain: "harmony-260817.firebaseapp.com",
    databaseURL: "https://harmony-260817.firebaseio.com",
    projectId: "harmony-260817",
    storageBucket: "harmony-260817.appspot.com",
    messagingSenderId: "37357002744",
    appId: "1:37357002744:web:280cf35f3955638431000d",
    measurementId: "G-RNBCQKYDF7"
  };

const app = firebase.initializeApp(firebaseConfig)
//var auth = app.auth()
export default app