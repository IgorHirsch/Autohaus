// Wähle das Menü-Element, das Mega-Menu und das Blur-Overlay aus
const menuItem = document.querySelector('.nav-links li.has-mega'); // Passe ggf. die Klasse an!
const megaBox = document.querySelector('.mega-box');
const blurOverlay = document.querySelector('.blur-overlay');

// Mega-Menu und Overlay beim Hover anzeigen
menuItem.addEventListener('mouseenter', () => {
  megaBox.style.opacity = '1';
  megaBox.style.visibility = 'visible';
  blurOverlay.classList.add('active');
});

// Mega-Menu und Overlay beim Verlassen ausblenden
menuItem.addEventListener('mouseleave', () => {
  megaBox.style.opacity = '0';
  megaBox.style.visibility = 'hidden';
  blurOverlay.classList.remove('active');
});