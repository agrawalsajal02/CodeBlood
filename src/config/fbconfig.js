import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA5TBr6Lww_x8B_Q3vZtZv5dQjpuhGRMXk",
    authDomain: "codeblood-ac5c2.firebaseapp.com",
    databaseURL: "https://codeblood-ac5c2.firebaseio.com",
    projectId: "codeblood-ac5c2",
    storageBucket: "codeblood-ac5c2.appspot.com",
    messagingSenderId: "278909300377",
    appId: "1:278909300377:web:18f0309848d7bf4bd81208",
    measurementId: "G-E8Y8GGF2NH"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;
