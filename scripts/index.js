/*  Author: Sebastian Aguirre Duque
 E-mail: sadw621@gmail.com */

import {personajes} from './avatars.js';

let leftBottom = document.getElementById('left-button');
let rightBottom = document.getElementById('right-button');
let nextImgAvatar = document.getElementById('avatar-img');
let nombreAvatar = document.getElementById('avatar-name');
let backBotton = document.getElementById('back-button');

let contenedorVistaInfo = document.querySelector('#avatar-container-desc');
contenedorVistaInfo.classList.add('hidden');

let iterador = 0;
localStorage.setItem('iterador', iterador);
localStorage.setItem('nextImgAvatar', personajes[iterador].image);
localStorage.setItem('nombreAvatar', personajes[iterador].name);


rightBottom.addEventListener('click', rightBtn);

function rightBtn() {

  iterador = iterador + 1;

  let nameAvatar;
  let imageAvatar;

  nameAvatar = personajes[iterador].name;
  imageAvatar = personajes[iterador].image;

  nextImgAvatar.setAttribute('src', imageAvatar);
  nombreAvatar.textContent = nameAvatar;

  if (iterador == personajes.length - 1) {
    rightBottom.classList.replace('right-bttn', 'right-bttn-disabled');
  } else if (iterador == 1) {
    leftBottom.classList.replace('left-bttn-disabled', 'left-bttn');
  }

  localStorage.setItem('iterador', iterador);
  localStorage.setItem('nextImgAvatar', imageAvatar);
  localStorage.setItem('nombreAvatar', nameAvatar);
}



leftBottom.addEventListener('click', leftBtn);

function leftBtn() {

  iterador = iterador - 1;

  let nameAvatar;
  let imageAvatar;

  nameAvatar = personajes[iterador].name;
  imageAvatar = personajes[iterador].image;

  nextImgAvatar.setAttribute('src', imageAvatar);
  nombreAvatar.textContent = nameAvatar;

  if (iterador == personajes.length - 2) {
    rightBottom.classList.replace('right-bttn-disabled', 'right-bttn');
  } else if (iterador == 0) {
    leftBottom.classList.replace('left-bttn', 'left-bttn-disabled');
  }

  localStorage.setItem('iterador', iterador);
  localStorage.setItem('nextImgAvatar', imageAvatar);
  localStorage.setItem('nombreAvatar', nameAvatar);
}

nombreAvatar.addEventListener('click', nameBtn);

function nameBtn() {

  contenedorVistaInfo.classList.remove('hidden');
  let contenedorVistaAvatar = document.getElementById('avatar-section');
  contenedorVistaAvatar.classList.add('hidden');


  let imageOfAvartar = document.getElementById('avatar-img2');
  let infoOfAvatar = document.getElementById('avatar-description');
  let nameOfAvatar = document.getElementById('avatar-name2');



  let name = localStorage.getItem('nombreAvatar');
  let image = localStorage.getItem('nextImgAvatar');
  let infoAvatar;
  infoAvatar = personajes[iterador].info;

  imageOfAvartar.setAttribute('src', image);
  nameOfAvatar.textContent = name;
  infoOfAvatar.textContent = infoAvatar;


}

backBotton.addEventListener('click', backBtn);

function backBtn() {

  let contenedorVistaAvatar = document.getElementById('avatar-section');
  contenedorVistaAvatar.classList.remove('hidden');
  contenedorVistaInfo.classList.add('hidden');

  let name = localStorage.getItem('nombreAvatar');
  let image = localStorage.getItem('nextImgAvatar');

  nextImgAvatar.setAttribute('src', image);
  nombreAvatar.textContent = name;
}
