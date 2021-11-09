import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

import { app } from '../index.html';

const firebaseConfig = {
  apiKey: 'AIzaSyCNLaoS9p3z6_y0V06ggvzw2n6RQwrmt0A',
  authDomain: 'concert-date.firebaseapp.com',
  databaseURL: 'https://concert-date-default-rtdb.firebaseio.com',
  projectId: 'concert-date',
  storageBucket: 'concert-date.appspot.com',
  messagingSenderId: '345481607594',
  appId: '1:345481607594:web:060069248ceb9322ed93d3',
  measurementId: 'G-433Q90N1LX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider(app);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}

// registrarse en la app
export const userRegister = () => {
  document.querySelector('#btnRegister').addEventListener('click', () => {
    // const name = document.getElementById("nameRegister").value;
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
  });
};

// iniciar sesión con correo
export const userLogin = () => {
  document.querySelector('#btnLogin').addEventListener('click', () => {
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

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
