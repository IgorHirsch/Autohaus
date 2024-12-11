const swiper = new Swiper(".swiper-container", {
  loop: false, // Endlose Schleife
  slidesPerView: 1, // Nur ein Slide gleichzeitig anzeigen
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
