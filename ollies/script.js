// --- START: Hamburger Menu Logic ---
const hamburger = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
  // Toggle the 'nav-active' class to slide the menu in and out
  navContainer.classList.toggle('nav-active');

  // Optional: Add a class to the hamburger for a "cross" animation
  hamburger.classList.toggle('open');
});
// --- END: Hamburger Menu Logic ---
