const swiper = new Swiper(".swiper-container", {
  loop: true, // Endlosschleife
  slidesPerView: 1, // Nur ein Bild gleichzeitig anzeigen
  spaceBetween: 10, // Abstand zwischen den Bildern (optional)
  pagination: {
    el: ".swiper-pagination", // Pagination hinzufügen
    clickable: true, // Ermöglicht das Klicken auf die Seitenzahlen
  },
  navigation: {
    nextEl: ".swiper-button-next", // Weiter-Button
    prevEl: ".swiper-button-prev", // Zurück-Button
  },
});
