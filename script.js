const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    navLinks.classList.toggle('active');  // Toggle the 'active' class
}

// Fade in pastor section when scrolled into view
document.addEventListener('DOMContentLoaded', () => {
  const pastorSection = document.querySelector('.pastor-section');

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
