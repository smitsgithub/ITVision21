ScrollReveal().reveal('.card', {
    delay: 500,
    distance: '50%',
    easing: 'ease-in',
    origin: 'bottom'
});

anime({
    targets: '.card',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 100},
      {value: 1, easing: 'easeInOutQuad', duration: 300}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});

document.addEventListener("DOMContentLoaded", function(event) { 
    anime({
        targets: '.card',
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 100},
          {value: 1, easing: 'easeInOutQuad', duration: 500}
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
    });
});