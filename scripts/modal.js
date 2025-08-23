function bookingModalFixClose() {
  const elements = document.querySelectorAll(".booking-modal__close");
  for (const element of elements) {
    element.addEventListener("click", function () {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      setTimeout(function () {
        window.scrollTo({ top: scrollY, left: scrollX });
      }, 1);
      // Modal ausblenden
      document.getElementById("booking-modal")?.classList.remove("is-active");
    });
  }

  // Kontakt-Link suchen und Modal anzeigen
  const kontaktLink = Array.from(document.querySelectorAll("a")).find(
    (a) => a.textContent.trim().toLowerCase() === "kontakt"
  );
  const modal = document.getElementById("booking-modal");
  if (kontaktLink && modal) {
    kontaktLink.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("is-active");
    });
  }
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(bookingModalFixClose, 1);
} else {
  document.addEventListener("DOMContentLoaded", bookingModalFixClose, false);
}
