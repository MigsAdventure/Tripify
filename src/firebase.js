import firebase from 'firebase';

// INIT FIREBASE
// const config = {
//   apiKey: 'AIzaSyCaWpX2l-1xUmYGXzWPTyYONs08LiwHLao',
//   authDomain: 'tripify-a5149.firebaseapp.com',
//   databaseURL: 'https://tripify-a5149.firebaseio.com',
//   storageBucket: 'tripify-a5149.appspot.com',
//   messagingSenderId: '895071215351',
// };
const config = {
  apiKey: 'AIzaSyAiPaxx9QsCHft6xnKSfPOtKgEMXgrgIY0',
  authDomain: 'test-app-7a5c0.firebaseapp.com',
  databaseURL: 'https://test-app-7a5c0.firebaseio.com',
  storageBucket: 'test-app-7a5c0.appspot.com',
  messagingSenderId: '803419720138',
};


export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database();
export const firebaseAuth = firebaseApp.auth();
