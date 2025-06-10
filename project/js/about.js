document.addEventListener('DOMContentLoaded', function() {
  // Эффект печатающегося текста
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    "Путешествия, которые вдохновляют",
    "Истории, которые объединяют",
    "Моменты, которые остаются с вами"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeWriter, 300);
    } else {
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeWriter, speed);
    }
  }
  
  // Интерактивный текст
  const interactiveTexts = document.querySelectorAll('.interactive-text');
  interactiveTexts.forEach(text => {
    const variants = text.dataset.text.split('|');
    let currentIndex = 0;
    
    text.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % variants.length;
      text.textContent = variants[currentIndex];
      text.style.animation = 'none';
      void text.offsetWidth; // Trigger reflow
      text.style.animation = 'text-pop 0.4s ease';
    });
  });
  
  // Анимация чисел
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateNumbers() {
    statNumbers.forEach(number => {
      const target = parseInt(number.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          clearInterval(timer);
          number.textContent = target;
        } else {
          number.textContent = Math.floor(current);
        }
      }, 16);
    });
  }
  
  // Запуск анимаций
  setTimeout(typeWriter, 1000);
  setTimeout(animateNumbers, 1500);
  
  // Добавляем анимацию при скролле
  const teamCards = document.querySelectorAll('.team-card');
  
  function checkScroll() {
    teamCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Инициализация
  teamCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.5s ease ${index * 0.2}s`;
  });
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Проверить при загрузке
  
  // ============= forEach ДЛЯ ОТЗЫВОВ =============
  const reviewsData = [
    {
      text: "Этот блог полностью изменил мой подход к путешествиям. Теперь я вижу не просто достопримечательности, а живые истории!",
      author: "Анна К.",
      role: "Читатель 2 года",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      text: "Спасибо за уникальные маршруты! Благодаря вам открыл для себя места, о которых не пишут в путеводителях.",
      author: "Дмитрий С.",
      role: "Путешественник",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      text: "Каждая статья - как маленькое путешествие. Читаю ваш блог с чашкой кофе и мечтаю о новых приключениях!",
      author: "Елена М.",
      role: "Постоянный подписчик",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg"
    }
  ];

  // Используем forEach для отзывов (массив)
  function renderReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = '';
    
    reviewsData.forEach((review, index) => {
      const reviewCard = document.createElement('div');
      reviewCard.className = 'review-card';
      reviewCard.innerHTML = `
        <div class="review-text">${review.text}</div>
        <div class="review-author">
          <img src="${review.avatar}" alt="${review.author}" class="review-avatar">
          <div class="author-info">
            <h4>${review.author}</h4>
            <p>${review.role}</p>
          </div>
        </div>
      `;
      
      reviewCard.style.opacity = '0';
      reviewCard.style.transform = 'translateY(20px)';
      reviewCard.style.transition = `all 0.5s ease ${index * 0.1}s`;
      
      reviewsContainer.appendChild(reviewCard);
      
      setTimeout(() => {
        reviewCard.style.opacity = '1';
        reviewCard.style.transform = 'translateY(0)';
      }, 100);
    });
  }

  // ============= for...in ДЛЯ ПРИНЦИПОВ =============
  const principlesData = {
    authenticity: {
      title: "Аутентичность",
      description: "Мы показываем реальные места без прикрас, с их историей и духом"
    },
    depth: {
      title: "Глубина",
      description: "Исследуем не только популярные места, но и скрытые жемчужины"
    },
    respect: {
      title: "Уважение",
      description: "С уважением относимся к культуре и традициям посещаемых мест"
    },
    inspiration: {
      title: "Вдохновение",
      description: "Наша цель - вдохновить вас на собственные путешествия"
    }
  };

  // Используем for...in для принципов (объект)
  function renderPrinciples() {
    const container = document.getElementById('principlesContainer');
    container.innerHTML = '';
    
    let index = 0;
    
    for (const key in principlesData) {
      if (principlesData.hasOwnProperty(key)) {
        const principle = principlesData[key];
        const principleCard = document.createElement('div');
        principleCard.className = 'principle-card';
        principleCard.innerHTML = `
          <div class="principle-number">0${index + 1}</div>
          <h3 class="principle-title">${principle.title}</h3>
          <p class="principle-description">${principle.description}</p>
        `;
        
        principleCard.style.opacity = '0';
        principleCard.style.transform = 'translateY(20px)';
        principleCard.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        container.appendChild(principleCard);
        
        setTimeout(() => {
          principleCard.style.opacity = '1';
          principleCard.style.transform = 'translateY(0)';
        }, 100);
        
        index++;
      }
    }
  }

  // Инициализация всех компонентов
  setTimeout(typeWriter, 1000);
  setTimeout(animateNumbers, 1500);
  window.addEventListener('scroll', checkScroll);
  checkScroll();
  
  renderReviews();  // Инициализация forEach
  renderPrinciples(); // Инициализация for...in
});