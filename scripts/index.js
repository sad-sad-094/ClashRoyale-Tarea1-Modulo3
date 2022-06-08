/*  Author: Sebastian Aguirre Duque
 E-mail: sadw621@gmail.com */


const personajes = [
  {
    name: 'Gólem',
    info: 'Es lento, pero persistente y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3.',
    image: './images/golem.png',
  },
  {
    name: 'Pekka',
    info: 'Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Solo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe.',
    image: './images/Pekka.webp',
  },
  {
    name: 'Caballero',
    info: 'Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos y con el barril de duendes, además es también común en mazos de Bait junto a la Valquiria.',
    image: './images/caballero.png',
  },
  {
    name: 'Bruja Nocturna',
    info: 'Es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha.',
    image: './images/bruja.png',
  },
  {
    name: 'Los Pillos',
    info: 'Está formada por dos "niñas pillas" y un "niño pillo", el cual tiene la función de defender a sus amigas mientras estas lanzan "chicles" a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo.',
    image: './images/los-pillos.png',
  },
  {
    name: 'Sneaky Gobblings',
    info: 'Es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior.',
    image: './images/goblin.webp',
  },
  {
    name: 'Arquero',
    info: 'Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5.',
    image: './images/arquero.png',
  },
  {
    name: 'Montapuercos',
    info: 'Es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel Oscuro.',
    image: './images/montaPuercos.webp',
  },
  {
    name: 'Minero',
    info: 'Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal.',
    image: './images/Miner_info.webp',
  },
  {
    name: 'Príncipe',
    info: 'Es una tropa muy fuerte, además de que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo.',
    image: './images/principe.png',
  },
];


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
