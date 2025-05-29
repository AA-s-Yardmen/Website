// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth < 992) {
          document.querySelector('.navbar-collapse')?.classList.remove('show');
        }
      }
    });
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fadein-section');
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => fadeObs.observe(el));

  // Sticky CTA context-aware label (mobile safe area)
  const cta = document.getElementById('sticky-cta-main');
  const sections = [
    {id:'home', label:'Book Now'},
    {id:'about', label:'Learn More'},
    {id:'services', label:'See Services'},
    {id:'testimonials', label:'Read Reviews'},
    {id:'contact', label:'Get a Quote'},
    {id:'map', label:'View Map'}
  ];
  window.addEventListener('scroll', function() {
    let scrollY = window.scrollY + 100;
    let current = 0;
    sections.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (el && el.offsetTop <= scrollY) current = i;
    });
    if (cta) cta.textContent = sections[current].label;
  });

  // Replace service area map with Google Maps Static API (or embed)
  const mapDiv = document.getElementById('service-heatmap');
  if (mapDiv) {
    mapDiv.innerHTML = `
      <div class="ratio ratio-16x9" style="height:100%;width:100%;">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4472.027692634888!2d-4.1205!3d55.868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845b8e6e7e6b5%3A0x6e2e7e2e7e2e7e2e!2sEasterhouse%2C%20Glasgow!5e0!3m2!1sen!2suk!4v1710000000000"
          width="100%" height="100%" style="border:0; min-height:300px; border-radius:1rem;"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          title="Easterhouse Glasgow Service Area Map"></iframe>
      </div>
      <div class="text-center mt-2 small text-muted">
        <em>Service area: Easterhouse &amp; surrounding Glasgow (Google Maps)</em>
      </div>
    `;
  }

  // Simple form feedback (shows message after submit)
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (form && feedback) {
    form.addEventListener('submit', function() {
      feedback.textContent = "Thank you! Your message has been sent.";
      feedback.className = "text-success mt-2";
    });
  }

  // Button ripple effect
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      circle.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      circle.style.left = (e.clientX - rect.left) + 'px';
      circle.style.top = (e.clientY - rect.top) + 'px';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
});
