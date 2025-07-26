// Show elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.addEventListener("DOMContentLoaded", () => {
  // Target all animated elements
  const elements = document.querySelectorAll(".about-item, .product-box, .message-box");

  elements.forEach((el) => {
    observer.observe(el);
  });
});
const bannerImages = document.querySelectorAll(".banner-gallery img");

window.addEventListener("scroll", () => {
  bannerImages.forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.style.opacity = "1";
      img.style.transform = "translateY(0)";
    }
  });
});
const slides = document.querySelectorAll('.banner-slider .slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Optional: Add left/right controls if needed
