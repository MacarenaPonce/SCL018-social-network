<<<<<<< HEAD
import { initi}
=======
import { collection, addDoc, getFirestore, getDocs } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
import { app } from '../lib/firebaseConfig.js';

const db = getFirestore(app);

export const createPost = async (artistValue, categoryValue, dateValue, descriptionValue, urlValue, locationValue) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, 'Post'), {
    artist: artistValue,
    category: categoryValue,
    date: dateValue,
    description: descriptionValue,
    links: urlValue,
    location: locationValue,
    // userName:
  });
  console.log('Document written with ID: ', docRef.id);
  return docRef;
};

export const readData = async () => {
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data());
  });
};
>>>>>>> main
