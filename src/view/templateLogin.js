import { userLogin, loginWithGoogle } from '../lib/auth.js';

export const homeLogin = () => {
  // container principal
  const firstPage = document.createElement('div');
  firstPage.className = 'firstPage';
  firstPage.id = 'container';

  // header
  const header = document.createElement('header');
  firstPage.appendChild(header);

  const logo = document.createElement('img');
  logo.className = 'title1';
  logo.src = 'resources/logo.png';
  header.appendChild(logo);

  // section 1 - Página de login
  const section1 = document.createElement('section');
  section1.className = 'login';
  section1.innerHTML = ` <input type='email' class= 'input' id='mailLogin' placeholder='Email' />
        <input type='password' class= 'input' id='passwordLogin' placeholder='password' value='password'/>
        <p class = 'info'> Olvidé mi contraseña </p>
    
       <a href='#/timeLine'> <button id = 'btnLogin' class= 'button'> Ingresar </button> </a>
    
        <p class = 'info'> O ingresa con </p>
    
        <button id="googleLogin"> <img src = 'resources/google.png' class = 'google'> </button>
    
        <p class='info'> ¿No tienes  una cuenta? <a href='#/count'> Crea una cuenta </a> </p>`;

  firstPage.appendChild(section1);

  section1.querySelector('#btnLogin').addEventListener('click', () => {
    const email1 = section1.querySelector('#mailLogin').value;
    const password1 = section1.querySelector('#passwordLogin').value;
    userLogin(email1, password1);
  });

  section1.querySelector('#googleLogin').addEventListener('click', () => {
    loginWithGoogle();
  });

  return firstPage;
};
