// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

import { app } from './firebaseConfig.js';

// const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore();

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
      console.log('usuario creado');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
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
      // ...
      console.log('acceso autorizado');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

// iniciar sesión con google
export const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log('sesión iniciada');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage);
    });
};

/* cerrar sesión
export const signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
}); */
