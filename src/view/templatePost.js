// import función para crear una publicación
import { createPost } from '../lib/firestore.js';
import { timeLine } from './templateTimeLine.js';

export const post = () => {
  const thirdPage = document.createElement('div');
  thirdPage.className = 'third-page';
  thirdPage.id = 'thirdPage';

  // header
  const header = document.createElement('header');
  thirdPage.appendChild(header);

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = 'resources/logo.png';
  header.appendChild(logo);

  const closePost = document.createElement('img');
  closePost.id = 'close-post';
  closePost.src = 'resources/close.png';
  header.appendChild(closePost);

  // nav
  const nav = document.createElement('nav');
  thirdPage.appendChild(nav);

  const text = document.createElement('span');
  text.className = 'title';
  text.innerHTML = '<h1> Publicar </h1>';
  nav.appendChild(text);

  // section 3 - Página para crear un publicación
  const section3 = document.createElement('section');
  section3.className = 'post';
  section3.id = 'post';
  section3.innerHTML = `<input type='text' id='artist' class = 'input' placeholder='Artista/s'/>
        <input type='text' id='category' class = 'input'  placeholder='Categoría' />
        <input type='date' id='date' class = 'input' placeholder='Fecha'/>
        <input type='text' id='location' class = 'input' placeholder='Ubicación'/>
        <input type='url' id='links' class = 'input' placeholder='Links de interes'/>
        <input type='text' id='description' class = 'input' placeholder= 'Descripción'/>
       
    
      <button id = 'btnPost' class= 'button'> Publicar </button>`;

  thirdPage.appendChild(section3);

  const publish = section3.querySelector('#btnPost');
  publish.addEventListener('click', () => {
    const artist = document.getElementById('artist').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const url = document.getElementById('links').value;
    const description = document.getElementById('description').value;
    createPost(artist, category, date, location, url, description);
  });

  const exitPost = header.querySelector('#close-post');
  exitPost.addEventListener('click', () => {
    window.location.hash = '#/timeLine';
  });

  return thirdPage;
};
