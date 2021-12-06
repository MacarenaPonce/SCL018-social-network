import {
  collection,
  addDoc,
  getFirestore,
  query,
  onSnapshot,
  orderBy, 
  doc,
  deleteDoc } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
import { app } from '../lib/firebaseConfig.js';
import { auth } from '../lib/auth.js';


const db = getFirestore(app);

/* //Acá se crea el post
export const createPost = async (artistValue, categoryValue, dateValue, descriptionValue, urlValue, locationValue) => {
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'Post'), {
      userName: auth.currentUser.displayName,
      // Para obtener el id del usuario que creó el post
      userId: auth.currentUser.uid,
     /*  photo: auth.currentUser.user.photoURL, 
      artist: artistValue,
      category: categoryValue,
      date: dateValue,
      description: descriptionValue,
      links: urlValue,
      location: locationValue,
      datePost: Date(Date.now()),
    });
    console.log(auth.currentUser.uid);
    return docRef;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}; */

export const createPost = async (artistValue, categoryValue, dateValue, descriptionValue, urlValue, locationValue) => {
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'Post'), {
      userName: auth.currentUser.displayName,
      photo: auth.currentUser.photoURL,
      userId: auth.currentUser.uid,
      artist: artistValue,
      category: categoryValue,
      date: dateValue,
      description: descriptionValue,
      links: urlValue,
      location: locationValue,
      datePost: Date(Date.now()),

    });
    return docRef;
  } catch (e) {
    // console.error('Error adding document: ', e);
  }
};

// Función para leer data de la colección de Firebase
export const readData = (nameCollection, callback) => {
  const q = query(collection(db, nameCollection), orderBy('datePost', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
      console.log(doc);
    });
    callback(posts);
    console.log(posts);
  });
};

// Función para borrar post
// 
export const deletePost = async (idPost) => {
 
  const confirm = window.confirm('¿Quieres eliminar esta publicación?');
  if (confirm) {
    await deleteDoc(doc(db, "Post", idPost));
  }
};

