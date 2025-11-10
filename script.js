// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-xmark');
  icon.classList.toggle('fa-bars');
});

// Smooth scroll & close menu on click
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinks.classList.remove('active');
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme switching
const themeButtons = document.querySelectorAll('[data-set-theme]');
const themeCycle = document.getElementById('themeCycle'); // in footer

const themes = ['light', 'dark', 'warm'];
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);

function setTheme(t) {
  document.body.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
}

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => setTheme(btn.dataset.setTheme));
});

themeCycle?.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  const next = themes[(themes.indexOf(current) + 1) % themes.length];
  setTheme(next);
});
