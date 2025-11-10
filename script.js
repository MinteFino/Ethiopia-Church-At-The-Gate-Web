// Responsive hamburger toggle with accessibility
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
  if (!navLinks) return;
  const isActive = navLinks.classList.toggle('active');
  if (hamburger) hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
  // support keyboard (Enter / Space)
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
}

// Close menu when clicking a nav link (mobile)
if (navLinks) {
  navLinks.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'A') {
      // close only on small screens where menu is toggled
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

// If window is resized to desktop, ensure mobile classes are cleared
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Fade in pastor section when scrolled into view
document.addEventListener('DOMContentLoaded', () => {
  const pastorSection = document.querySelector('.pastor-section');
  if (!pastorSection) return;

  function checkVisibility() {
    const rect = pastorSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.85) {
      pastorSection.classList.add('visible');
      window.removeEventListener('scroll', checkVisibility);
    }
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // check on load as well
});



