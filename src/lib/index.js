// Import the functions you need from the SDKs you need
// 17-11 cambios

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

import { app } from './firebaseConfig.js';

// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore();

// send Email verification
export const sendEmail = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      alert('Hemos enviado un correo de verificación para validar tu cuenta');
    });
};

// element profile user
export const profileInit = (user) => {
  const userInfo = document.querySelector('#userInfo');
  userInfo.innerHTML = `Hola ${user.displayName || 'Usuario'} <img id= profilePhoto src=${user.photoURL || '../resources/logo.png'} >`;
  window.location.hash = '#/timeLine';
};

// registrarse en la app
export const userRegister = () => {
  // según buenas prácticas, estas 2 lineas deben estar en template
  const email = document.getElementById('mailRegister').value;
  const password = document.getElementById('passwordRegister').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // ...
      alert('Registro exitoso, ahora puedes iniciar sesión');
      console.log('usuario creado', user);
      // sendEmail();
      window.location.hash = '#/login';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
      console.log(errorCode + errorMessage);
    });
};

// iniciar sesión con correo
export const userLogin = () => {
  // según buenas prácticas, estas 2 lineas deben estar en template
  const email1 = document.getElementById('mailLogin').value;
  const password1 = document.getElementById('passwordLogin').value;
  signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = '#/timeLine';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode + errorMessage);
      window.location.hash = '#/login';
    });
};

// iniciar sesión con google
export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/timeLine';
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

//  auth changed
export const authChanged = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('usuario logueado', user.displayName);
      profileInit(user);
      // ...
    } else {
      console.log('user is signed out');
      window.location.hash = '#/login';
    }
  });
};

// cerrar sesión
export const exit = () => {
  signOut(auth).then(() => {
    alert('Sesión cerrada con éxito, vuelve pronto');
    window.location.hash = '#/login';
  }).catch((error) => {
    alert(error);
  });
};
