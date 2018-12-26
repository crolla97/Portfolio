var slider = document.getElementById('intro');
var hello = document.querySelector('h2');
var info = document.querySelector('.info');
var right = document.querySelector('.right');
var bottom = document.querySelector('.bottom');

window.onscroll = function() {
  if (window.pageYOffset > 1 ) {
    slider.style.width = '100%';
    hello.style.left = '75%';
    right.style.display = 'block';
    bottom.style.display = 'block';
    info.style.display = 'block';

  } else {
    slider.style.width = '50vw';
    hello.style.left = '58%';
    info.style.display = 'none';
  }
};
function navBtn(x) {
  p = document.getElementById('responsive_nav');

  x.classList.toggle("change");
  if (p.style.width === "0%") {
    p.style.width = "85%";
  } else {
    p.style.width = "0%";
  }
};

  var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 1400
  };

  var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    delay: 800
  };
  ScrollReveal().reveal('.intro-text', slideLeft);
  ScrollReveal().reveal('h3', slideUp);
  ScrollReveal().reveal('#about-text', slideUp);
  ScrollReveal().reveal('.container', {
    delay: 1000
  });
