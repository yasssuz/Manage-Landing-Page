const mobileToggler = document.querySelector('.header__mobile-toggler');

mobileToggler.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobileToggler.classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
  document.querySelector('.header__navigation').classList.toggle('active');
  document.querySelector('html').classList.toggle('no-scrow');
}
