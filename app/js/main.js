document.addEventListener('DOMContentLoaded', function(){
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    effect: 'coverflowEffect',
    spaceBetween: 30,
    freeMode: true,
    //Coverflow effect
    coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});