import { userRegister } from '../lib/auth.js';

export const createAccount = () => {
  const secondPage = document.createElement('div');
  secondPage.className = 'second-page';
  secondPage.id = 'secondPage';

  secondPage.innerHTML = `<header> 
  <img src= 'resources/logo.png' class= 'title1'>
   </header> 
   <section class= 'createAccount' id= 'createAccount'> 
   <input type='text' id='createName' class = 'input' placeholder='Nombre de usuario'/>
      <input type='email' id='mailRegister' class = 'input'  placeholder='Email' />
      <input type='password' id='passwordRegister' class = 'input' placeholder='password'/>
  
      <p class = 'info'>  <input type='checkbox' class = 'info' class= 'disabled' id='conditions' value='check'/> Acepto términos y condiciones </p>
  
      <button id = 'btnRegister' class= 'button'> Registrar </button>
  
     <p class= 'info'> ¿Ya tienes una cuenta? <a href='#/login'> Inicia sesión </a> </p>
   </section>
   `;

  secondPage.querySelector('#btnRegister').addEventListener('click', () => {
    const email = secondPage.querySelector('#mailRegister').value;
    const password = secondPage.querySelector('#passwordRegister').value;
    const name = secondPage.querySelector('#createName').value;
    userRegister(email, password, name);
  });

  return secondPage;
};
