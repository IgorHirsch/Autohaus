// Dynamisches Logo-Element
const dynamicLogo = document.getElementById("dynamic-logo");

// Alle Links mit `data-image` Attribut
const megaLinks = document.querySelectorAll(".mega-links a");

// Hinzufügen von Event-Listenern für Mouseenter und Mouseleave
megaLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const newImage = link.getAttribute("src");
    if (newImage) {
      dynamicLogo.src = newImage; // Ändern des Logos
    }
  });

  link.addEventListener("mouseleave", () => {
    dynamicLogo.src = "images/marken/cupra/cupra-logo_copper-343x330.png"; // Standardlogo zurücksetzen
  });
});
