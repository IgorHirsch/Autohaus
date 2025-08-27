// scripts/modalProbefahrt.js
document.addEventListener("DOMContentLoaded", function () {
  // Alle Probefahrt-Buttons
  document.querySelectorAll("[data-probefahrt-open]").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("probefahrt-modal").style.display = "flex";
    });
  });

  // Schließen-Button im Modal
  document.querySelectorAll(".probefahrt-modal__close").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("probefahrt-modal").style.display = "none";
    });
  });
});
