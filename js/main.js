// Smooth scroll for anchor links with navbar offset, skip empty hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return; // Ignore empty hash links
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      // Get navbar height
      const navbar = document.querySelector('.navbar');
      const offset = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;
      window.scrollTo({ top, behavior: 'smooth' });

      // Collapse navbar on mobile after click
      const navCollapse = document.getElementById('mainNav');
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        bsCollapse.hide();
      }
    }
  });
});

// Highlight active nav link on scroll (skip if section missing)
document.addEventListener('scroll', function() {
  const sections = ['services', 'gallery', 'testimonials', 'contact', 'faq', 'about', 'how-it-works', 'reviews', 'projects'];
  let current = '';
  const scrollPos = window.scrollY + (document.querySelector('.navbar')?.offsetHeight || 0) + 10;
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) current = id;
  }
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
});

// FAQ smooth scroll (defensive)
document.querySelectorAll('a[href="#faq"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const faq = document.getElementById('faq');
    if (faq) {
      e.preventDefault();
      faq.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Autofill service in booking modal
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const serviceType = document.getElementById('serviceType');
    if (serviceType) {
      serviceType.value = this.getAttribute('data-service');
    }
  });
});

// Booking form submission (real, via Formspree) with Google Calendar link and Toast
document.getElementById('bookingForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = this;
  const data = {
    serviceType: form.serviceType.value,
    customerName: form.customerName.value,
    customerAddress: form.customerAddress.value,
    customerDate: form.customerDate.value,
    customerNotes: form.customerNotes.value
  };
  // Replace with your Formspree endpoint:
  const endpoint = "https://formspree.io/f/yourformid";
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      if (modal) modal.hide();
      setTimeout(() => {
        // Show Bootstrap Toast instead of alert
        const toastEl = document.getElementById('bookingToast');
        if (toastEl) {
          const toast = new bootstrap.Toast(toastEl);
          // Set Google Calendar link
          const calLink = document.getElementById('addToCalendar');
          if (calLink) {
            const date = data.customerDate.replace(/-/g, '');
            calLink.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(data.serviceType)}+with+AA+Yardmen&dates=${date}T100000Z/${date}T110000Z&details=${encodeURIComponent('Address: ' + data.customerAddress + '\nNotes: ' + data.customerNotes)}`;
          }
          toast.show();
        }
      }, 400);
      form.reset();
    } else {
      alert('Sorry, there was a problem submitting your booking. Please try again.');
    }
  } catch (err) {
    alert('Network error. Please try again later.');
  }
});

// Animated stats
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stat-number').forEach(el => {
    let end = el.getAttribute('data-count');
    let isPercent = end.includes('%');
    let isFloat = end.includes('.');
    end = parseFloat(end);
    let start = 0;
    let duration = 1200;
    let startTime = null;
    function animateStat(ts) {
      if (!startTime) startTime = ts;
      let progress = Math.min((ts - startTime) / duration, 1);
      let value = isFloat ? (start + (end - start) * progress).toFixed(1) : Math.floor(start + (end - start) * progress);
      el.textContent = value + (isPercent ? '%' : '');
      if (progress < 1) requestAnimationFrame(animateStat);
    }
    requestAnimationFrame(animateStat);
  });
});

// Before/After slider
document.querySelectorAll('.before-after-slider').forEach(slider => {
  const before = slider.querySelector('.before-img');
  const after = slider.querySelector('.after-img');
  const range = slider.querySelector('.slider-range');
  if (before && after && range) {
    range.addEventListener('input', function() {
      after.style.clipPath = `inset(0 ${100 - this.value}% 0 0)`;
    });
  }
});

// Auto-play testimonial carousel
const testimonialCarousel = document.getElementById('testimonialCarousel');
if (testimonialCarousel) {
  const carousel = new bootstrap.Carousel(testimonialCarousel, { interval: 5000, ride: 'carousel' });
}

// Initialize AOS (Animate On Scroll) if present
if (window.AOS) {
  AOS.init();
}

// Weather Widget (Open-Meteo API, no key needed)
document.addEventListener('DOMContentLoaded', () => {
  const weatherContent = document.getElementById('weatherContent');
  if (weatherContent) {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=55.8674&longitude=-4.1222&current_weather=true')
      .then(res => res.json())
      .then(data => {
        const w = data.current_weather;
        let desc = "Clear";
        if (w.weathercode >= 2 && w.weathercode < 50) desc = "Cloudy";
        if (w.weathercode >= 50 && w.weathercode < 70) desc = "Rain";
        if (w.weathercode >= 70) desc = "Snow";
        weatherContent.innerHTML = `
          <div class="temp">${w.temperature}&deg;C</div>
          <div class="desc">${desc}, Wind ${w.windspeed} km/h</div>
        `;
      })
      .catch(() => {
        weatherContent.innerHTML = `<div class="text-danger">Weather unavailable.</div>`;
      });
  }
});

// Price Calculator
document.getElementById('calculatorForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const service = document.getElementById('calcService').value;
  const size = document.getElementById('calcSize').value;
  let price = 0;
  if (service === 'garden') price = { small: 25, medium: 40, large: 60 }[size];
  if (service === 'window') price = { small: 20, medium: 30, large: 45 }[size];
  if (service === 'pressure') price = { small: 30, medium: 50, large: 75 }[size];
  document.getElementById('priceResult').textContent = `Estimated Price: £${price}`;
});

// Defensive: Only initialize map if container exists and not already initialized
document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('leafletMap');
  if (mapContainer && window.L && !mapContainer._leaflet_id) {
    var map = L.map('leafletMap', { scrollWheelZoom: false, zoomControl: true }).setView([55.86739054658849, -4.122231786419321], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.circle([55.86739054658849, -4.122231786419321], {
      color: '#198754',
      fillColor: '#198754',
      fillOpacity: 0.15,
      radius: 2000
    }).addTo(map);
  }
});