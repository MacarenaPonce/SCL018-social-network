import { homeLogin } from './lib/view/templateLogin.js';
import { changeRoute } from './lib/router.js';

document.getElementById('root').appendChild(homeLogin());

const init = () => {
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);
