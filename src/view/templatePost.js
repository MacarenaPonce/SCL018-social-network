// import función para crear una publicación

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

  // nav
  const nav = document.createElement('nav');
  thirdPage.appendChild(nav);

  const text = document.createElement('title');
  text.className = 'title';
  text.innerHTML = ' <h1> Publicar </h1> ';
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
       
    
       <a href='#/timeLine' <button id = 'btnPost' class= 'button'> Publicar </button> </a>`;

  thirdPage.appendChild(section3);

  /* section3.querySelector('#btnRegister').addEventListener('click', () => {
    userRegister();
  }); */

  return thirdPage;
};
