// import { homeLogin } from './view/templateLogin.js';

import { routes } from './lib/router.js';
import { authChanged } from './lib/index.js';

window.addEventListener('load', () => {
  routes(window.location.hash);
  authChanged();
});

window.addEventListener('hashchange', () => {
  routes(window.location.hash);
});
