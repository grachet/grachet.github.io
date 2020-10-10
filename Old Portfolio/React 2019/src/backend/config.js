import * as firebase from 'firebase';

export const FirebaseConfig = {
  apiKey: "AIzaSyD0RpM8wAISsohyEiOPuEcysJTkzz2w4Ok",
  authDomain: "guillaume-rachet.firebaseapp.com",
  databaseURL: "https://guillaume-rachet.firebaseio.com",
  projectId: "guillaume-rachet",
  storageBucket: "guillaume-rachet.appspot.com",
  messagingSenderId: "669290638647"
};

firebase.initializeApp(FirebaseConfig);

export const database = firebase.database();
export const databaseRef = firebase.database().ref();
export const messageRef = databaseRef.child("messages");

