/* import { readData } from '../lib/firestore.js'; */
// Función que imprime los post
// Esta función se llama en el TemplateTimeLine
import { auth } from '../lib/auth.js';
import { deletePost } from '../lib/firestore.js';

export const postCallback = (posts) => {
  const postMain = document.querySelector('#containerPost');
  postMain.innerHTML = '';
  const postContent = (element) => {
    console.log(element); 
    const postUser = document.createElement('div');
    postUser.className = 'allPost';
    postUser.innerHTML += `
    <div class ='name'> ${element.userName} </div>
     <div class='post'>
      <div class="feedPost"> 
      ${element.artist}
      ${element.category}
      ${element.date}
      ${element.description}
      ${element.links}
      ${element.location}
      </div>
     </div>
     <div class='reactions'>
       <div class='btnLike'>
        <img class='img' src='./resources/like.png'> 
        </div>
        <div class='btnRecom'>
        <img class='img' src='./resources/comment.png'>
        </div>
     </div>
    </div>
    `
  // Se compara usuario que creó post sea igual al de login para que se muestre opción de eliminar post
    if (element.userId === auth.currentUser.uid)
    {
      postUser.innerHTML+=`<button class="btn-Delete" id="btn-delete" value=${element.id} > Eliminar </button>`
    }
    ;
    postMain.appendChild(postUser);
  };
  posts.forEach(postContent);
  
// se llama a función para borrar publicación
const btnDelete = postMain.querySelectorAll('.btn-Delete');
//busca solo el valor del btn
console.log(btnDelete);
btnDelete.forEach((item) => {
  const idPost = item.value;
  item.addEventListener('click', () => deletePost(idPost));
}); 

  return postMain;
};

