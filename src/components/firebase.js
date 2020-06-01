import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

var firebaseConfig = {
  apiKey: "AIzaSyDDuD9VvedFdkSXbKfIGV9aSmWOnk7cQb4",
  authDomain: "react-blog-firebase-43de4.firebaseapp.com",
  databaseURL: "https://react-blog-firebase-43de4.firebaseio.com",
  projectId: "react-blog-firebase-43de4",
  storageBucket: "react-blog-firebase-43de4.appspot.com",
  messagingSenderId: "1020948357847",
  appId: "1:1020948357847:web:6bedc940343de3ad43c692",
  measurementId: "G-MBJ5DW61LV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
