const track = document.querySelector('.news-track');
const slides = Array.from(track.children);
const navs = document.querySelectorAll('.carousel-nav'); // tous les groupes nav
let currentIndex = 0;

// Crée les ronds dans chaque groupe de navigation
navs.forEach(nav => {
  const dotsContainer = nav.querySelector('.dots');

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // flèches
  nav.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  nav.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // mettre à jour les points dans tous les groupes
  navs.forEach(nav => {
    nav.querySelectorAll('.dots button').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

