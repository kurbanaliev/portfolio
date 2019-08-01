'use strict';

// 3d cards
var cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.addEventListener('mousemove', startRotate);
  card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
  var cardItem = this.querySelector('.card-item');
  var halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 5 + 'deg';
}

function stopRotate(event) {
  var cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}