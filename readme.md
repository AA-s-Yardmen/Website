# AA's Yardmen Ltd - Website Documentation

## Overview
Modern, responsive website for AA's Yardmen Ltd, a professional garden maintenance and exterior cleaning service in Glasgow.

## Technologies Used
- HTML5
- CSS3
- Bootstrap 5.3.2
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts (Inter)
- Leaflet.js for mapping
- Open-Meteo API for weather data

## Key Features

### Design Elements
- Responsive layout using Bootstrap grid system
- Custom gradient branding (#43e97b to #38f9d7)
- Glassmorphism effects on cards
- Animated transitions using animate.css
- Custom shadows and rounded corners
- Mobile-first approach

### Interactive Components
1. **TikTok Video Gallery**
   - Carousel-based video showcase
   - Auto-pause on slide change
   - Responsive embed containers
   - Navigation controls

2. **Weather Widget**
   - Real-time weather data for Scottish cities
   - Dynamic updates using Open-Meteo API
   - Error handling for API failures

3. **Interactive Map**
   - Coverage area visualization
   - Custom markers and styling
   - Responsive design

4. **Contact Integration**
   - WhatsApp direct messaging
   - Click-to-call functionality
   - Email integration
   - Social media links

### Performance Optimizations
- Lazy loading for images and iframes
- Minified CSS/JS resources
- Optimized asset loading
- Service Worker for offline capability

## Files Structure
```
AA-Yardmen/
├── index.html          # Main website
├── 404.html           # Custom error page
├── manifest.json      # PWA configuration
├── robots.txt         # Search engine directives
├── CNAME             # Custom domain configuration
└── service-worker.js  # Offline functionality
```

## Future Improvements

### Functionality
1. **Booking System**
   - Online appointment scheduling
   - Service package selection
   - Integrated payment system

2. **Content Management**
   - Admin dashboard
   - Blog section for gardening tips
   - Portfolio management

3. **User Experience**
   - Dark mode support
   - Language localization
   - Accessibility improvements
   - Cookie consent management

4. **Performance**
   - Image optimization pipeline
   - CDN integration
   - Caching strategies
   - Core Web Vitals optimization

### Marketing Features
1. **SEO Enhancements**
   - Schema markup
   - XML sitemap
   - Meta tags optimization
   - Local SEO improvements

2. **Social Proof**
   - Review integration (Google, Yell)
   - Before/after gallery
   - Customer testimonial videos
   - Project case studies

3. **Lead Generation**
   - Newsletter signup
   - Service checklist downloads
   - Seasonal promotion system
   - Referral program

### Technical Debt
- Implement CSS preprocessor (SASS)
- Add TypeScript for better code maintainability
- Set up automated testing
- Implement CI/CD pipeline

## Development Setup
1. Clone repository
2. No build process required - static HTML
3. Use local server for development
4. Test service worker in production mode

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact
For technical support or inquiries:
- Email: info@aasyardmen.co.uk
- Phone: 07516 487733

## License
Copyright © 2024 AA's Yardmen Ltd. All rights reserved.
