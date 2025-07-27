// ✅ Reveal elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.addEventListener("DOMContentLoaded", () => {
  // Elements to animate
  const elements = document.querySelectorAll(".about-item, .product-box, .message-box");
  elements.forEach(el => observer.observe(el));

  // ✅ Mobile Menu Toggle
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");
  const navLinkItems = document.querySelectorAll(".nav-link");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // ✅ Close mobile menu when any nav link is clicked
  navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});

// ✅ Scroll-triggered banner image reveal
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

// ✅ Auto Slideshow
const slides = document.querySelectorAll('.banner-slider .slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 3000); // Every 3 seconds

// ✅ Banner Swapper (for banner-container)
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

  img.onload = () => {
    bannerContainer.innerHTML = '';
    bannerContainer.appendChild(img);
  };
}
setInterval(changeBanner, 3000);

// ✅ Fallback slideshow (if using plain .slide elements)
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  Array.from(slides).forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();
