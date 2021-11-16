import { collection, addDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
import { app } from '../lib/firebaseConfig.js';

const db = getFirestore(app);
export const createPost = async (artist, category, date, description, links, location, url) => {
// Add a new document with a generated id.
  const docRef = await addDoc(collection(db, 'Post'), {
    artist: artist,
    category: category,
    date: date,
    description: description,
    links: url,
    location: location,
    // userName:
  });
  console.log('Document written with ID: ', docRef.id);
  return docRef.id;
};
