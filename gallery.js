const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const totalSlides = document.querySelectorAll('.card1').length;
    const visibleCards = 3;
    let index = 0;

    function updateSlider() {
      const cardWidth = 340; // 300px width + 40px margin
      sliderWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
      if (index < totalSlides - visibleCards) {
        index++;
        updateSlider();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    });

    updateSlider();
