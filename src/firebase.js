import firebase from 'firebase';

// INIT FIREBASE
const config = {
  apiKey: 'AIzaSyCaWpX2l-1xUmYGXzWPTyYONs08LiwHLao',
  authDomain: 'tripify-a5149.firebaseapp.com',
  databaseURL: 'https://tripify-a5149.firebaseio.com',
  storageBucket: 'tripify-a5149.appspot.com',
  messagingSenderId: '895071215351'
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database();
export const firebaseAuth = firebaseApp.auth();
