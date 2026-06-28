// ===== NAV SCROLL =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 40 ? '0 4px 24px rgba(0,0,0,0.6)' : 'none';
});

// ===== HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== BARRAS DE HABILIDADE =====
const barraObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.barra-fill').forEach(fill => {
        fill.style.width = fill.dataset.width;
      });
      barraObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const sobreImg = document.querySelector('.sobre-img');
if (sobreImg) barraObserver.observe(sobreImg);
