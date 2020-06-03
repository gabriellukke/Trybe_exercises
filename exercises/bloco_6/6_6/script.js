const flipCard = document.querySelector('.flip-card');
const cards = document.querySelector('#cards');
const allCards = [
  'cartas/cinco-de-ouros.png',
  'cartas/nove-de-espadas.png',
  'cartas/quatro-de-paus.png',
  'cartas/sete-de-espadas.png',
  'cartas/sete-de-paus.png',
  'cartas/tres-de-ouros.png'
];
const animations = [
  'rotate',
  'scale'
];

// Random Card
function randomCard () {
  let random = Math.floor(Math.random() * allCards.length);
  return random;
}

// Random Animation
function randomAnimation () {
  let animation = Math.floor(Math.random() * animations.length);
  return animation;
} 

// Add a Card Function
function addCard () {
  flipCard.addEventListener('click', function () {
    const newCard = document.createElement('img');
    newCard.src = allCards[randomCard()];
    cards.appendChild(newCard);
  });
};

// Set Animation
function setAnimation () {
  cards.addEventListener('mouseover', function (e) {
    if (e.target === cards) return null;
    else if (e.target.className != '') return null;
    e.target.classList.add(animations[randomAnimation()]);
    setTimeout(function () {
      e.target.className = '';
    }, 1000);
  });
};

window.onload = function () {

  addCard();
  setAnimation();

}