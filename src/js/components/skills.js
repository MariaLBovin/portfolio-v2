/* eslint-disable no-plusplus */
import skills from './arrays/skillsarray';

const skillsPlacement = document.querySelector('.skills');

function printSkillsToHTML() {
  for (let i = 0; i < skills.length; i++) {
    skillsPlacement.innerHTML += `
        <p class="skills-text"><span class="material-icons done">done</span> ${skills[i].skills}</p><br>
        `;
  }
}
printSkillsToHTML();
