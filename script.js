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
const bannerContainer = document.querySelector('.banner-container');
const images = [
  'assets/images/banner1.jpg',
  'assets/images/banner2.jpg',
  'assets/images/banner3.jpg'
];

let current = 0;

function changeBanner() {
  current = (current + 1) % images.length;
  const img = document.createElement('img');
  img.src = images[current];
  img.alt = `Banner ${current + 1}`;
  img.className = 'banner-image';

  // Replace old banner with new one
  img.onload = () => {
    bannerContainer.innerHTML = '';
    bannerContainer.appendChild(img);
  };
}

setInterval(changeBanner, 3000); // Change every 3 seconds
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
