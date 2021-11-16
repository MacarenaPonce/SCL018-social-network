// import { homeLogin } from './view/templateLogin.js';

import { routes } from './lib/router.js';
import { authChanged } from './lib/index.js';

window.addEventListener('load', () => {
  // onAuth();
  routes(window.location.hash);
});

window.addEventListener('hashchange', () => {
  routes(window.location.hash);
});

window.addEventListener('load', () => {
  authChanged();
});
