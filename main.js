'use strict';

const viewContainer = document.querySelector('.view-container');
const arrow = document.querySelector('.arrow');
const viewMore = document.querySelector('.view-more');
const aboutDescription = document.querySelector('.about-description');
const showDescription = document.querySelector('.show-description');
const hideView = document.querySelector('.hide-view');

const sectionAbout = document.querySelector('.about');
const sectionWork = document.querySelector('.work');
const sectionContacts = document.querySelector('.contacts');

viewContainer.addEventListener('mouseover', () => {
  arrow.style.display = 'none';
  viewContainer.style.width = '20%';
  viewMore.style.display = 'inline-block';
})

viewContainer.addEventListener('mouseleave', () => {
  arrow.style.display = 'block';
  viewMore.style.display = 'none';
  viewContainer.style.width = '50px';
})

viewMore.addEventListener('click', () => {
  showDescription.classList.toggle('show-description');
})

window.addEventListener('resize', () => {
  if(window.innerWidth < 600) {
    viewMore.addEventListener('click', () => {
      hideView.style.display = 'none';
    })
  }
})
