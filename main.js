'use script';

const bars = document.querySelector('.bars');
const showMenu = document.querySelector('.hide-menu');
const listContainer = document.querySelector('.bars-container__list');
const viewContainer = document.querySelector('.view-container');
const arrow = document.querySelector('.arrow');
const viewMore = document.querySelector('.view-more');

const sectionAbout = document.querySelector('.about');
const sectionWork = document.querySelector('.work');
const sectionContacts = document.querySelector('.contacts');


bars.addEventListener('click', event => {
  event.currentTarget.classList.toggle('bars-close');
  showMenu.classList.toggle('hide-menu');
})

viewContainer.addEventListener('mouseover', () => {
  arrow.style.display = 'none';
  viewContainer.style.width = '20%';
  viewMore.style.display = 'inline-block';
})

viewContainer.addEventListener('mouseleave', () => {
  arrow.style.display = 'inline-block';
  viewMore.style.display = 'none';
  viewContainer.style.width = '50px';
})

listContainer.addEventListener('click', event => {
  if(event.target.classList.contains('bars-container__list')) {
    console.log(event);
    return;
  }
  event.preventDefault();
  let top;

  switch (event.target.dataset.id) {
    case 'Обо мне':
      top = sectionAbout.offsetTop;
      break;
    case 'Работы':
      top = sectionWork.offsetTop;
      break;
    case 'Контакты':
      top = sectionContacts.offsetTop;
      break;
  }
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
})
