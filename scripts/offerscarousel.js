const swiper = new Swiper(".swiper-container", {
  loop: true, // Endlosschleife
  slidesPerView: 1, // Abstand zwischen den Bildern (optional)
  pagination: {
    el: ".swiper-pagination", // Pagination hinzufügen
    clickable: true, // Ermöglicht das Klicken auf die Seitenzahlen
  },
  navigation: {
    nextEl: ".swiper-button-next", // Weiter-Button
    prevEl: ".swiper-button-prev", // Zurück-Button
  },
});

window.addEventListener("resize", () => {
  const swiperContainer = document.querySelector(".swiper-container");

  const offersCard = document.querySelector(".offers__container");

  if (window.innerWidth <= 768) {
    // Bei kleineren Bildschirmen nur Swiper anzeigen
    swiperContainer.style.display = "block";
    offersCard.style.display = "none";

    nav.classList.remove("navigation");
  } else {
    // Bei größeren Bildschirmen die Bilder nebeneinander anzeigen
    swiperContainer.style.display = "none";
    offersCard.style.display = "flex";
  }
});

// Initiale Anzeige bei Seitenladen
window.dispatchEvent(new Event("resize"));
