
const cards = document.querySelectorAll('.card')
const navigation = document.querySelector('#navigation')


// 3d cards
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('mousemove', startRotate)
  card.addEventListener('mouseout', stopRotate)
}

function startRotate(event) {
const cardItem = this.querySelector('.card-item')
const halfHeight = cardItem.offsetHeight / 2

cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5+'deg) rotateY(' + (event.offsetX - halfHeight) / 5 + 'deg'
}

function stopRotate(event) {
  const cardItem = this.querySelector('.card-item')
  cardItem.style.transform = 'rotate(0)'
}

// show navigation
window.addEventListener('scroll', function(event) {
  window.scrollY > 200 ? navigation.classList.add('menu__top') : navigation.classList.remove('menu__top')
})
