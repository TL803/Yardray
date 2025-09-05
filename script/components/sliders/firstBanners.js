  document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.bannerSwiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      effect: 'fade', // плавное переключение
      fadeEffect: {
        crossFade: true
      },
      speed: 800,
      allowTouchMove: true, // разрешить свайп
    });
  });