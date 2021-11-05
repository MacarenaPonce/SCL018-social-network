export const template = () => {
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
  section1.innerHTML = ` <input type='text' id='name'  placeholder='Nombre de usuario'/>
        <input type='email' id='email' placeholder='Email' />
        <input type='password' id='password' placeholder='password' value='password'/>
        </p> Olvidé mi contraseña </p>
    
        <button id = 'go' class= 'button'> Ingresar </button>
    
        <p> O ingresa con </p>
    
        <img src = 'resources/google.png' class = 'google'>
    
        <p> ¿No tienes  una cuenta? crea una cuenta </p> `;
  firstPage.appendChild(section1);

  // section 2 - Página para crear cuenta
  const section2 = document.createElement('section');
  section2.className = 'createCount';
  section2.id = 'createCount';
  section2.innerHTML = `<input type='text' id='createName'  placeholder='Nombre de usuario'/>
        <input type='email' id='createEmail' placeholder='Email' />
        <input type='password' id='createPassword' placeholder='password' value='password'/>
    
        <input type='checkbox' id='conditions' value='check'/> <p> Acepto términos y condiciones </p>
    
        <button id = 'register' class= 'button'> Registrar </button>
    
        <p> ¿Ya tienes una cuenta? Inicia sesión </p> `;
  firstPage.appendChild(section2);

  return firstPage;
};
