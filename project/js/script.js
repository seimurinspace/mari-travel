document.addEventListener('DOMContentLoaded', function() {
  // Слайдер
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const slideInterval = 4000; // 5 секунд
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Автопереключение
  let intervalId = setInterval(nextSlide, slideInterval);
  
  // Пауза при наведении
  slider.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
  });
  
  slider.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, slideInterval);
  });
  
  // Инициализация
  showSlide(0);
  
  // Можно добавить кнопки "Вперёд/Назад" при необходимости
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const overlay = document.getElementById('searchOverlay');
  const searchSection = document.querySelector('.search-section');

  // Активация при фокусе или клике
  searchInput.addEventListener('focus', () => {
    overlay.classList.add('active');
    searchSection.classList.add('active');
  });

  // Деактивация при клике на overlay
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    searchSection.classList.remove('active');
    searchInput.blur();
  });

  // Для кнопки поиска
  searchButton.addEventListener('click', () => {
    // Ваш код поиска...
  });
});