// import función para muro??
import { exit } from '../lib/index.js';

export const timeLine = () => {
  const quarterPage = document.createElement('div');
  quarterPage.className = 'third-page';
  quarterPage.id = 'thirdPage';

  // header
  const header = document.createElement('header');
  header.id = 'headerTimeLine';
  quarterPage.appendChild(header);

  const profileNav = document.createElement('nav');
  profileNav.id = 'userInfo';
  header.appendChild(profileNav);

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = 'resources/logo.png';
  header.appendChild(logo);

  // options nav
  const nav = document.createElement('nav');
  nav.className = 'wall-nav';
  nav.innerHTML = `
  <span class='nav-bar' id='btnMenu'> <i class= 'fas fa-bars'> </i> Menú </span>
    <nav class='main-nav'>
      <ul class='menu' id='menu'>
        <li class='menu-item container-submenu'> <a href='#' class='menu-link submenu-btn'> <img src = ./resources/profile.png class = 'icon1'> Perfil </a>
          <ul class= 'submenu'>
            <li class='menu-item'> <a href='#' class='menu-link'>  <img src = ./resources/edit.png class = 'icon1'> Editar perfil </a> </li>
            <li class='menu-item menu-link' id = 'logOut'> <img src = ./resources/sign-out.png class = 'icon'> Cerrar sesión </li>
            </ul>
        </li>
        <li class='menu-item'><a href='#' class='menu-link'> <img src = ./resources/search.png class = 'icon1'> Buscar </a><li>
        <li class='menu-item'><a href='#' class='menu-link'> <img src = ./resources/calendar.png class = 'icon1'> Calendario </a><li>
        </ul>
      </nav>

     `;
  header.appendChild(nav);

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

  const logOut = header.querySelector('#logOut');
  logOut.addEventListener('click', () => {
    exit();
  });

  /* const btnMenu = header.querySelector('#btnMenu');
  const menu = header.querySelector('#menu');
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
  }); */

  return quarterPage;
};
