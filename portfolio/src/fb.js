import firebase from 'firebase/app'
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyB2hFrDQhGSTRk89aSxdSJP-20kmiO__5s",
    authDomain: "mywebsite-addy.firebaseapp.com",
    databaseURL: "https://mywebsite-addy.firebaseio.com",
    projectId: "mywebsite-addy",
    storageBucket: "mywebsite-addy.appspot.com",
    messagingSenderId: "284373360548",
    appId: "1:284373360548:web:926455df30413647fdab31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export default db