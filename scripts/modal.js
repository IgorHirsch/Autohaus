function bookingModalFixClose() {
  // Kontakt-Modal schließen
  const kontaktCloses = document.querySelectorAll(
    "#booking-modal .booking-modal__close"
  );
  for (const element of kontaktCloses) {
    element.addEventListener("click", function () {
      document.getElementById("booking-modal")?.classList.remove("is-active");
    });
  }

  // Kontakt-Link suchen und Modal anzeigen
  const kontaktLink = Array.from(document.querySelectorAll("a")).find(
    (a) => a.textContent.trim().toLowerCase() === "kontakt"
  );
  const kontaktModal = document.getElementById("booking-modal");
  if (kontaktLink && kontaktModal) {
    kontaktLink.addEventListener("click", function (e) {
      e.preventDefault();
      kontaktModal.classList.add("is-active");
    });
  }

  // Probefahrt-Modal öffnen
  document.querySelectorAll(".open-probefahrt-modal").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("probefahrt-modal")?.classList.add("is-active");
    });
  });

  // Probefahrt-Modal schließen
  document
    .querySelectorAll("#probefahrt-modal .booking-modal__close")
    .forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .getElementById("probefahrt-modal")
          ?.classList.remove("is-active");
      });
    });
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(bookingModalFixClose, 1);
} else {
  document.addEventListener("DOMContentLoaded", bookingModalFixClose, false);
}
