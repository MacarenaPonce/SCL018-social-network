// import { userRegister } from '../index.js';

export const createCount = () => {
  const secondPage = document.createElement('div');
  secondPage.className = 'second-page';
  secondPage.id = 'secondPage';

  // header
  const header = document.createElement('header');
  secondPage.appendChild(header);

  const logo = document.createElement('img');
  logo.className = 'title1';
  logo.src = 'resources/logo.png';
  header.appendChild(logo);

  // section 2 - Página para crear cuenta
  const section2 = document.createElement('section');
  section2.className = 'createCount';
  section2.id = 'createCount';
  section2.innerHTML = `<input type='text' id='createName'  placeholder='Nombre de usuario'/>
      <input type='email' id='mailRegister' placeholder='Email' />
      <input type='password' id='passwordRegister' placeholder='password' value='password'/>
  
      <input type='checkbox' id='conditions' value='check'/> <p> Acepto términos y condiciones </p>
  
      <button id = 'btnRegister' class= 'button'> Registrar </button>
  
      ¿Ya tienes una cuenta? <a href='#/login'> Inicia sesión </a> `;

  secondPage.appendChild(section2);

  /* document.querySelector('#btnRegister').addEventListener('click', () => {
    userRegister();
  }); */

  return secondPage;
};
