// Import the functions you need from the SDKs you need
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

import { app } from './firebaseConfig.js';

// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
let currentUser;

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
      currentUser = user;

      // ...
      alert('Registro exitoso, ahora puedes iniciar sesión');
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
      currentUser = user;
      // ...
      // alert('acceso autorizado', currentUser.displayName);
      // console.log('acceso autorizado');
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
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      currentUser = user;
      // alert('Bienvenide', currentUser.displayName);
      // console.log('Bienvenide', currentUser.displayName);
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
      const currentUser = user;
      const uid = user.uid;
      console.log('usuario logueado', currentUser);
      alert('Bienvenide', currentUser.displayName);
      profileInit();
      // ...
    } else {
      console.log('user is signed out');
      window.location.hash = '#/login';
    }
  });
};

// element profile user
export const profileInit = () => {
  const userInfo = document.getElementById('userInfo');
  userInfo.innerHTML = `<img scr = '${currentUser.photoURL}' width= '32'/>
    <span> ${currentUser.displayName} </span>`;
};

// cerrar sesión

export const exit = () => {
  signOut(auth).then(() => {
    window.location.hash = '#/login';
    alert('Sesión cerrada con éxito, vuelve pronto');
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};
