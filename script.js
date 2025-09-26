const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  let slideInterval;

  function showSlide(n) {
    if(slides.length === 0) return;

    slideIndex = n;

    if(slideIndex >= slides.length) slideIndex = 0;
    if(slideIndex < 0) slideIndex = slides.length - 1;

    // Show current slide
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    // Reset all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = "dot";
    }

    const total = dots.length;

    // Calculate 5 visible dots
    const farLeftIndex = (slideIndex - 2 + total) % total;
    const leftIndex = (slideIndex - 1 + total) % total;
    const centerIndex = slideIndex;
    const rightIndex = (slideIndex + 1) % total;
    const farRightIndex = (slideIndex + 2) % total;

    dots[farLeftIndex].classList.add("far-left");
    dots[leftIndex].classList.add("left");
    dots[centerIndex].classList.add("center");
    dots[rightIndex].classList.add("right");
    dots[farRightIndex].classList.add("far-right");
  }

  function plusSlides(n){
    showSlide(slideIndex + n);
    resetInterval();
  }

  function currentSlide(n){
    showSlide(n);
    resetInterval();
  }

  function startInterval() {
    slideInterval = setInterval(() => {
      plusSlides(1);
    }, 4000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;

  showSlide(0);
  startInterval();
});
