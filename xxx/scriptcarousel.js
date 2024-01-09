const carouselItems = document.querySelectorAll('[data-carousel-item]');
const carouselIndicators = document.querySelectorAll('[data-carousel-slide-to]');
const carouselPrev = document.querySelector('[data-carousel-prev]');
const carouselNext = document.querySelector('[data-carousel-next]');

let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  carouselIndicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.setAttribute('aria-current', 'true');
    } else {
      indicator.setAttribute('aria-current', 'false');
    }
  });
}

carouselPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
});

carouselNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
});

carouselIndicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});