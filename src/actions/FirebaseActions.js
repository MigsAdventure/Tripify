import firebase from 'firebase';
import { firebaseAuth, firebaseDb } from '../firebase';
import store from '../store';

let userRef = null;
const usersRef = firebaseDb.ref('users');

export function createNewTrip(trip) {
  userRef.child('saved').push(trip);
  return {
    type: 'CREATE_NEW_TRIP',
  };
}

function setUserData(userData) {
  return {
    type: 'SET_USER_DATA',
    payload: userData,
  };
}

function setUserRef(uid) {
  userRef = usersRef.child(uid);
  // console.log('uid: ', uid);
  // console.log('userRef: ', userRef);
  userRef.once('value', (snap) => {
    // console.log('snap.val(): ', snap.val());
    if (!snap.val()) {
      // console.log('CREATING NEW USER');
      userRef.set({
        saved: false,
        current: false,
        previous: false,
      });
    }
  });

  store.dispatch((dispatch) => {
    // userRef.off();
    userRef.on('value', (snap) => {
      // console.log('SETTING USER DATA');
      dispatch(setUserData(snap.val()));
    }, (err) => {
      console.log('ERROR: ', err);
    });
  });
}

function signInSuccess(result) {
  setUserRef(result.user.uid);
  // console.log('SIGN IN SUCCESS: ', result);
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: result.user,
  };
}

function initAuthSuccess(user) {
  setUserRef(user.uid);
  // console.log('INIT AUTH: ', user);
  return {
    type: 'INIT_AUTH_SUCCESS',
    payload: user,
  };
}

function signInError(err) {
  return {
    type: 'SIGN_IN_ERROR',
    payload: err,
  };
}

function initAuthError(err) {
  return {
    type: 'INIT_AUTH_ERROR',
    payload: err,
  };
}

function signOutSuccess() {
  userRef.off();
  userRef = null;
  return {
    type: 'SIGN_OUT_SUCCESS',
  };
}

function authenticate(provider) {
  return (dispatch) => {
    firebaseAuth.signInWithPopup(provider)
    .then(result => dispatch(signInSuccess(result)))
    .catch(err => dispatch(signInError(err)));
  };
}

export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return authenticate(provider);
}

export function signOut() {
  return (dispatch) => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsub = firebaseAuth.onAuthStateChanged(
      (user) => {
        if (user) {
          dispatch(initAuthSuccess(user));
        }
        unsub();
        resolve();
      },
      (error) => {
        dispatch(initAuthError(error));
        reject(error);
      }
     );
  });
}
