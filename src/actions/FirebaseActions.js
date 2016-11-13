import firebase from 'firebase';
import { firebaseAuth } from '../firebase';


function signInSuccess(result) {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: result.user,
  };
}

function initAuthSuccess(user) {
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
