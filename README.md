# AA Yardmen Website

Live Demo: [https://aayardmen.github.io/Website/](https://aayardmen.github.io/Website/)

## Overview

Mobile-first static website for AA's Yardmen, a professional garden and window cleaning service in Glasgow's East End.  
Features online booking, real-time weather, interactive map, TikTok/social media, and price calculator.

## Features

- Mobile-first, responsive Bootstrap 5 design
- Service booking modal and SMS/WhatsApp integration
- Real-time weather widget (Open-Meteo API)
- Interactive Leaflet map with fallback
- TikTok project highlights (sandboxed, with fallback)
- Price calculator
- SEO and accessibility best practices
- Fast loading with lazy images and fallbacks

## Setup

1. Clone/download this repo.
2. Place all files in your `Website/` folder.
3. Add your images to `assets/images/` or use the provided placeholders.
4. Deploy to GitHub Pages (set root to `/Website/`).

## To-Do

- [ ] Replace placeholder images with real photos in `assets/images/`
- [ ] Add more TikTok project videos
- [ ] Update Formspree/contact form endpoint
- [ ] Add more FAQs and testimonials
- [ ] Monitor TikTok embed reliability
- [ ] Improve Lighthouse scores (Performance/SEO/Accessibility)
- [ ] Add Google Analytics or Plausible
- [ ] Review and update service prices quarterly

## Troubleshooting

- **Images not loading:** Make sure filenames match and are in `assets/images/`. Placeholders are used if missing.
- **TikTok videos not showing:** TikTok may block embeds or be slow. Fallback links are provided.
- **Permissions policy warnings:** These are silenced via `<meta http-equiv="Permissions-Policy">`.
- **Weather widget not loading:** Check Open-Meteo API status.
- **Map not loading:** Fallback message and Google Maps link are shown if Leaflet fails.

## Credits

- Bootstrap, Leaflet, Swiper, AOS, TikTok, Open-Meteo, Sienna Widget
- Design & code: Jason Smith / AA's Yardmen

---
