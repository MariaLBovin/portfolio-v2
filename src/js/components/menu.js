const menuBox = document.querySelector('.headerbox');
const menu = document.querySelector('#topmenu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

function scollMenu() {
  let largeMenuScrollPos = window.pageYOffset;
  if (window.matchMedia('(max-width: 744px)').matches) {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (largeMenuScrollPos > currentScrollPos) {
        menu.style.top = '0';
      } else {
        menu.style.top = '-50px';
      }
      largeMenuScrollPos = currentScrollPos;
    };
  } else {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (largeMenuScrollPos > currentScrollPos) {
        menuBox.style.top = '0';
      } else {
        menuBox.style.top = '-50px';
      }
      largeMenuScrollPos = currentScrollPos;
    };
  }
}
scollMenu();
