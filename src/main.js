// import { homeLogin } from './view/templateLogin.js';

import { routes } from './lib/router.js';
import { authChanged } from './lib/index.js';
import { readData } from './lib/firestore.js';

window.addEventListener('load', () => {
  routes(window.location.hash);
  authChanged();
  readData();
});

window.addEventListener('hashchange', () => {
  routes(window.location.hash);
  authChanged();
});
