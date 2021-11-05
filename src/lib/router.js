import { homeLogin } from './view/templateLogin.js';
import { createCount } from './view/templateCreateCount.js';

const showTemplete = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  
  switch (hash) {
    case '#/login':
        containerRoot.appendChild(homeLogin());
            break;
        case '#/count':
            containerRoot.appendChild(createCount());
            break;
        default:
            containerRoot.innerHTML = `<h2> no found </h2>`
    }
}

export const changeRoute = (hash) => {
  if (hash === '#/count') {
    return showTemplete(hash);
} else if (hash === '#/login') {
    return showTemplete(hash);
} else {
  return showTemplete(hash);
    }
}