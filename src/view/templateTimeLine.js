// import función para muro??
import { exit } from '../lib/index.js';

export const timeLine = () => {
  const quarterPage = document.createElement('div');
  quarterPage.className = 'third-page';
  quarterPage.id = 'thirdPage';

  // header
  const header = document.createElement('header');
  quarterPage.appendChild(header);

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = 'resources/logo.png';
  header.appendChild(logo);

  // nav
  const nav = document.createElement('nav');
  nav.className = 'wall-nav';
  nav.innerHTML = `<ul class = 'options'>
   <li> <a href='#1'> <img src ='resources/profile.png' id='profile'> </a>
    <ul>
      <li> <a href='#1'> <img src ='resources/edit.png' class = 'minIcon' id='edit'>  Editar perfil </a> </li>
      <li> <a href='#1'> <img src ='resources/sign-out.png' class = 'minIcon'> Cerrar sesión </a> </li>
    </ul>
    </li>
    <li> <a href='#1'> <img src ='resources/search.png' class = 'icon'> </a> </li> 
    <li> <a href='#1'> <img src ='resources/calendar.png' class = 'icon'> </a> </li> 
    </ul>

    <button id='logOut'> <img src ='resources/sign-out.png' class = 'minIcon'> </button>

     `;
  quarterPage.appendChild(nav);

  // section 4 - Página para crear un publicación
  const section4 = document.createElement('section');
  section4.className = 'post';
  section4.id = 'post';

  // main
  const main = document.createElement('main');
  main.className = 'containerPost';
  main.id = 'containerPost';
  section4.innerHTML = `<p> acá va el div con la info de publicación </p> 

  <a href='#/post'> <button id="btnPublish"> <img src = 'resources/post.png'> </button> </a>`;
  quarterPage.appendChild(section4);

  const logOut = nav.querySelector('#logOut');
  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    exit();
  });

  return quarterPage;
};
