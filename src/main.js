import { myFunction } from './lib/index.js';
import { homeLogin } from './lib/view/templateLogin.js';
import { changeRoute } from './lib/router.js';
import { createCount } from './lib/view/templateCreateCount.js';

document.getElementById('root').appendChild(homeLogin());

const init = () => {

    window.addEventListener('hashchange', () => {
        myFunction();
        console.log(window.location.hash);
        changeRoute(window.location.hash)
    })
}

window.addEventListener('load', init);
