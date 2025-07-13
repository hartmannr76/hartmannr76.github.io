const hamburger = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('nav-active');
  hamburger.classList.toggle('open');
});

const track = document.querySelector('.carousel-track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: 320, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -320, behavior: 'smooth' });
});
