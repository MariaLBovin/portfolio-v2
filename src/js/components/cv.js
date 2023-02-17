/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import { CV } from './arrays/cvarray';

const cvPlacement = document.querySelector('.cv-container');

function printCV() {
  for (let i = 0; i < CV.length; i++) {
    cvPlacement.innerHTML += `
          <div class=cv-wrapper>
            <div class="divs${[i]} left-divs">
              <h2 class="workplace">${CV[i].place}</h2>
              <span class="employment-time">${CV[i].time}</span>
            </div>
            <div id=right-div${[i]} class="divs${[i]} right-divs hidden">
              <h2 class="title">${CV[i].title}</h2>
              <p class="description">${CV[i].desc}</p>
            </div>
          </div>`;
  }
}
printCV();

const firstJob = document.querySelector('#right-div0');
firstJob.classList.add('visible');

function displayWorkText(e) {
  const rightDivs = document.querySelectorAll('.right-divs');
  const displayedDiv = e.currentTarget.classList[0];

  rightDivs.forEach((div) => {
    div.classList.contains(displayedDiv)
      ? div.classList.remove('hidden')
      : div.classList.add('hidden');
  });

  firstJob.classList.remove('visible');
}

document.querySelectorAll('.left-divs').forEach((div) => {
  div.addEventListener('click', displayWorkText);
});
