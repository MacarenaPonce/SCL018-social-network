// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  sendEmailVerification,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

import { app } from './firebaseConfig.js';

// const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log(app);
const provider = new GoogleAuthProvider(app);

// send Email verification
export const sendEmail = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
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
      alert('Registro exitoso');
      console.log('usuario creado');
      sendEmail();
      window.location.hash = '#/login';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorCode + errorMessage);
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
      alert('acceso autorizado');
      console.log('acceso autorizado');
      window.location.hash = '#/timeLine';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + errorMessage);
      console.log(errorCode + errorMessage);
      window.location.hash = '#/login';
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
      console.log(user);
      alert('Inicio de sesión exitosa');
      window.location.hash = '#/timeLine';
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

/* auth changed
export const authChanged = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      console.log('usuario logueado');
      // ...
    } else {
      console.log('user is signed out');
      window.location.hash = '#/login';
    }
  });
}; */

// cerrar sesión
export const exit = () => {
  signOut(auth).then(() => {
    window.location.hash = '#/login';
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};
