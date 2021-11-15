// import { homeLogin } from './view/templateLogin.js';

import { routes } from './lib/router.js';
// import { authChanged } from './lib/index.js';

/* document.getElementById('root').appendChild(homeLogin());

const init = () => {
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init); */

window.addEventListener('load', () => {
  // onAuth();
  routes(window.location.hash);
});

window.addEventListener('hashchange', () => {
  routes(window.location.hash);
});

/* window.addEventListener('load', () => {
  authChanged();
}); */
