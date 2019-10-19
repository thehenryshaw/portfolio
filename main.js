'use script';

const bars = document.querySelector('.bars');
const showMenu = document.querySelector('.hide-menu');
// const viewContainer = document.querySelector('.view-container');
// const arrow = document.querySelector('.arrow');
// const viewMore = document.querySelector('.view-more');

bars.addEventListener('click', event => {
  event.currentTarget.classList.toggle('bars-close');
  showMenu.classList.toggle('hide-menu');
})

// viewContainer.addEventListener('mouseover', () => {
//   arrow.style.display = 'none';
//   viewMore.style.display = 'block';
// })

// viewContainer.addEventListener('mouseleave', () => {
//   arrow.style.display = 'block';
//   viewMore.style.display = 'none';
// })
