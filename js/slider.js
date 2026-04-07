document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("testimonialSlider");
  const dotsContainer = document.getElementById("sliderDots");
  if (!slider || !dotsContainer) return;

  const slides = Array.from(slider.querySelectorAll(".testimonial-slide"));
  let currentIndex = 0;

  function renderDots() {
    dotsContainer.innerHTML = slides
      .map((_, index) => `<button class="slider-dot ${index === currentIndex ? "is-active" : ""}" data-index="${index}" aria-label="Go to testimonial ${index + 1}"></button>`)
      .join("");

    dotsContainer.querySelectorAll(".slider-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        currentIndex = Number(dot.dataset.index);
        updateSlider();
      });
    });
  }

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === currentIndex);
    });
    renderDots();
  }

  updateSlider();
  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }, 4200);
});
