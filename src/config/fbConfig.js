import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
  apiKey: 'AIzaSyCoFJcs4UJq0rgRo7SLSfhc_YDZ9RgPS7k',
  authDomain: 'manage-project-39975.firebaseapp.com',
  databaseURL: 'https://manage-project-39975.firebaseio.com',
  projectId: 'manage-project-39975',
  storageBucket: '',
  messagingSenderId: '64185886887',
  appId: '1:64185886887:web:e4fbb6be24698b7b'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
