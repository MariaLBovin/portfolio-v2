/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { selectedWork } from './arrays/jobarray';

const imagePlacement = document.querySelector('.swiper-placement');
const workPlacement = document.querySelector('.swiper-wrapper-large');

function displayImages() {
  for (let i = 0; i < selectedWork.length; i++) {
    // const swiper = `swiper-slide${i}`;
    imagePlacement.innerHTML += `<div class="swiper-slide swiper-slide-thumb">
        <img class="work-img" id="img-${i}" src="${selectedWork[i].image[0].src}" alt="${selectedWork[i].image[0].alt}" tabindex = 0>`;
  }
}
displayImages();

function displayWork() {
  for (let i = 0; i < selectedWork.length; i++) {
    // const swiper = `swiper-slide${i}`;
    workPlacement.innerHTML += `<div class="swiper-slide swiper-slide-large">
        <div class=img>
        <img class="work-img" id="img-${i}" src="${selectedWork[i].image[0].src}" alt="${selectedWork[i].image[0].alt}" max-width="auto" height="auto" tabindex = 0>
        </div>
        <div class="text-block">
        <p class="category">${selectedWork[i].category}</p>
        <h2>${selectedWork[i].company}</h2>
        <p>${selectedWork[i].description}</p>
        <a href="${selectedWork[i].projektlink}">Titta på projeketet</a>
        </div>`;
  }
}
displayWork();

const slider = new Swiper('.swiper-large', {
  slidesPerView: 1,
  loopedSlides: 3,
  loop: true,
});

const thumbs = new Swiper('.swiper-thumbnail', {
  slidesPerView: 1,
  loopedSlides: 3,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    744: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  thumbs: {
    swiper: slider,
  },
});
