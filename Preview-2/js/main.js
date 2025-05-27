document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Gallery Lightbox
  const galleryBtns = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  if (galleryBtns && lightbox && lightboxImg && lightboxClose) {
    galleryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        lightboxImg.src = btn.querySelector('img').src.replace('w=400', 'w=1200');
        lightboxImg.alt = btn.querySelector('img').alt;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
      });
    });
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImg.src = '';
    });
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        lightboxImg.src = '';
      }
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq').forEach(faq => {
    const btn = faq.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const open = faq.classList.toggle('faq-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      faq.querySelector('i').classList.toggle('fa-chevron-up', open);
      faq.querySelector('i').classList.toggle('fa-chevron-down', !open);
    });
  });
});
