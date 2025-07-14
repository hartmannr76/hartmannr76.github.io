const hamburger = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('nav-active');
  hamburger.classList.toggle('open');
});


$(document).ready(function(){

$('.adoption-gallery .carousel').slick({
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});