import { homeLogin } from '../view/templateLogin.js';
import { createCount } from '../view/templateCreateCount.js';
import { post } from '../view/templatePost.js';
import { timeLine } from '../view/templateTimeLine.js';

/* const showTemplete = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

<<<<<<< HEAD
   switch (hash) {
=======
  switch (hash) {
>>>>>>> 4e8de47 (arreglos slint)
    case '#/login':
      containerRoot.appendChild(homeLogin());
      break;
    case '#/count':
      containerRoot.appendChild(createCount());
      break;
<<<<<<< HEAD
    case '#/post':
      containerRoot.appendChild(post());
      break;
    case '#/timeLine':
      containerRoot.appendChild(timeLine());
      break;
=======
>>>>>>> 4e8de47 (arreglos slint)
    default:
      containerRoot.innerHTML = '`<h2> no found </h2>`';
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/count') {
    return showTemplete(hash);
  } else if (hash === '#/login') {
<<<<<<< HEAD
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
}; */

export const routes = (hash) => {
  const rootContainer = document.getElementById('root');
  rootContainer.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    rootContainer.appendChild(homeLogin());
  } else if (hash === '#/login') {
    rootContainer.appendChild(homeLogin());
  } else if (hash === '#/count') {
    rootContainer.appendChild(createCount());
  } else if (hash === '#/timeLine') {
    rootContainer.appendChild(timeLine());
  } else if (hash === '#/post') {
    rootContainer.appendChild(post());
  }
=======
    return showTemplete(hash);
  } else {
    return showTemplete(hash);
  }
>>>>>>> 4e8de47 (arreglos slint)
};
