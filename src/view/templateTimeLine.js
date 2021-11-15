// import función para muro??

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
    <li class='link' > 
      <i class='fas fa-users'></i> <img src ='resources/profile.png'>
    <div class='submenu' id='profileMenu'>
      <a href='#'> <img src ='resources/edit.png' class = 'minIcon'>  Editar perfil </a>
      <a href='#'> <img src ='resources/sign-out.png' id = 'logOut' class = 'minIcon'> Cerrar sesión </a>
    </div>
    </li>
    <li class='link'>
   <img src ='resources/search.png' class = 'icon'>
    </li>
    <li class= 'link'>
    <img src ='resources/calendar.png' class = 'icon'> 
    </li>
    </ul>

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

  /* section4.querySelector('#logOut').addEventListener('click', () => {
      signOut();
    }); */

  return quarterPage;
};
