import { homeLogin } from '../view/templateLogin.js';
import { createCount } from '../view/templateCreateCount.js';
import { post } from '../view/templatePost.js';
import { timeLine } from '../view/templateTimeLine.js';

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
    case '#/post':
      containerRoot.appendChild(post());
      break;
    case '#/timeLine':
      containerRoot.appendChild(timeLine());
      break;
    default:
      containerRoot.innerHTML = '`<h2> no found </h2>`';
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/count') {
    return showTemplete(hash);
  } else if (hash === '#/login') {
    return showTemplete(hash);
  }
    else if (hash === '#/post') {
      return showTemplete(hash);
    }
    else if (hash === '#/timeLine') {
      return showTemplete(hash);
    }
     else {
    return showTemplete(hash);
  }
};
