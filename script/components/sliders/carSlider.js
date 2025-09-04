  const slider = document.getElementById('slider');
  const bullets = document.querySelectorAll('.bullet');
  const slides = document.querySelectorAll('.slide');
  const slideCount = slides.length;
  let currentIndex = 0;
  const intervalTime = 5000;

  // Функция перехода к слайду
  function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;

    // Обновляем стили bullets
    bullets.forEach((bullet, i) => {
      bullet.classList.toggle('bg-white', i !== index);
      bullet.classList.toggle('bg-gray-400', i === index);
      bullet.classList.toggle('border-gray-300', i !== index);
      bullet.classList.toggle('border-gray-400', i === index);
    });
    currentIndex = index;
  }

  // Устанавливаем первый bullet как активный
  bullets[0].classList.add('bg-gray-400', 'border-gray-400');

  // Клик по bullet
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      goToSlide(index);
      resetInterval();
    });
  });

  // Автоматическое переключение
  let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }, intervalTime);

  // Перезапуск таймера после клика
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
    }, intervalTime);
  }

  // Инициализация
  goToSlide(0);