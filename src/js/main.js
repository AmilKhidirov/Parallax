window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxBackground = document.querySelector('.header');
    parallaxBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});






window.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY;
    const parallaxBackground = document.querySelector('.sec1');
    parallaxBackground.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});







const parallax = document.querySelectorAll('.sec2');
window.addEventListener('scroll', function() {
    for (let i = 0; i < parallax.length; i++) {
        let offset = window.pageYOffset;
        parallax[i].style.backgroundPositionY = offset * 0.05 + 'px';
    }
});
  