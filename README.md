# AA Yardmen Website
Version 1.0.0

## Project Overview
Website for AA Yardmen, a professional garden and window cleaning service in Glasgow's East End. The site features service booking, real-time weather updates, interactive service area mapping, and social media integration.

## Features
- Online service booking system
- Real-time weather integration
- Interactive service area map
- Social media feeds integration
- WhatsApp business integration
- Responsive design for mobile/tablet/desktop
- Service price calculator

## Technical Stack
- HTML5, CSS3, JavaScript
- Bootstrap 5.3
- Third-party integrations:
  - Leaflet for maps
  - WhatsApp Widget
  - TikTok Feed
  - Weather Widget
- Node.js v16+ for development
- Git for version control
- Hosting: Netlify/Vercel
- SSL certification via Let's Encrypt

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)
- Mobile browsers (iOS 13+, Android 9+)

## Project Structure
```
AA-Yardmen/
├── assets/          # Images and static files
├── css/            # Stylesheets
├── js/             # JavaScript files
│   ├── config.js   # Central configuration
│   ├── main.js     # Core functionality
│   └── features/   # Feature-specific modules
└── index.html      # Main entry point
```

## Development Setup
1. Clone repository
```bash
git clone https://github.com/username/AA-Yardmen.git
cd AA-Yardmen
```
2. Update API keys in `js/config.js`
3. Install dependencies
```bash
npm install
```
4. Run local server
```bash
npm run dev
```

## Testing
- Run unit tests: `npm test`
- Browser testing: `npm run test:e2e`
- Lighthouse scores should maintain:
  - Performance: >90
  - Accessibility: >95
  - SEO: >90

## Deployment
1. Build the project
```bash
npm run build
```
2. Deploy to hosting service
3. Verify all API integrations are working

## Maintenance Notes
- Update service prices in `config.js` (quarterly review)
- Service area changes in map configuration (`js/features/map-config.js`)
- Social media links in footer (`index.html`)
- Weather widget API key needs renewal annually (expires: [DATE])
- Regular checks:
  - WhatsApp widget connectivity
  - TikTok feed updates
  - Map markers accuracy
  - SSL certificate renewal
- Additional checks:
  - Monthly Google Analytics review
  - Quarterly SEO optimization
  - Content updates (pricing, services)
  - Image optimization
  - API usage monitoring

## Documentation
- API Documentation: `/docs/api.md`
- Design System: `/docs/design-system.md`
- Content Guidelines: `/docs/content-guidelines.md`

## Contact
For questions about the codebase:
- Original Developer: Jason Smith
- Technical Support: support@aayardmen.co.uk
- Company Contact: 07516 487733
- Working Hours: Mon-Fri, 9:00-17:00 GMT
