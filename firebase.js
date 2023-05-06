import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFtY5Ng-wM4YOX2SQ26I4-pDYjeQmZ3w4",
  authDomain: "application-c4506.firebaseapp.com",
  databaseURL: "https://application-c4506-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "application-c4506",
  storageBucket: "application-c4506.appspot.com",
  messagingSenderId: "753250854156",
  appId: "1:753250854156:web:2b64826148218c9d1b5529"
 
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
