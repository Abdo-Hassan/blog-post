import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
let firebaseConfig = {
  apiKey: 'AIzaSyB2zOkgTULjz_ywJ0jhCaqeVqGEHPUNV6c',
  authDomain: 'blog-post-5f45b.firebaseapp.com',
  databaseURL: 'https://blog-post-5f45b.firebaseio.com',
  projectId: 'blog-post-5f45b',
  storageBucket: 'blog-post-5f45b.appspot.com',
  messagingSenderId: '834666339375',
  appId: '1:834666339375:web:ed2cb99ca578c597a97ada'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
