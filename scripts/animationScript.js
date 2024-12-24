document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".motivation__text-heading, .motivation__text"
  );

  const observerOptions = {
    root: null, // Das sichtbare Fenster
    threshold: 0.1, // Auslösung, wenn 10% des Elements sichtbar sind
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Text sichtbar machen
        entry.target.classList.add("visible");
      } else {
        // Text nach oben verschwinden lassen
        entry.target.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  elements.forEach((el) => observer.observe(el)); // Beobachte jedes Ziel-Element
});
