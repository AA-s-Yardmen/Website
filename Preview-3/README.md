# AA’s Yardmen Ltd – Modern Mobile-First Website

**Live Demo:** _[GitHub Pages link here]_  
**Figma Prototype:** _[Figma design placeholder – link here]_

## Features

- Single-page site (Bootstrap 5, semantic HTML)
- Sticky navbar with smooth scroll anchor links
- Sticky mobile CTAs (“Book Now”, “Call Now”)
- Static hero with external background image and logo
- About, Services (cards with external icons), Testimonials (Bootstrap carousel), Contact form (FormSubmit.co), Map (Leaflet.js), Footer
- Lazy-loaded images, scroll-triggered fade-in animations
- Responsive and SEO-friendly
- 100% free APIs and assets

## Free APIs & Services Used

| Feature         | API/Service         | Notes/Limitations                  |
|-----------------|--------------------|------------------------------------|
| Map             | Leaflet.js + OSM   | Free, no API key                   |
| Contact form    | FormSubmit.co      | Free, no backend needed            |
| Icons           | Icons8             | Free for web use                   |

## Deployment (GitHub Pages)

1. **Clone this repo** or [download as ZIP](https://github.com/your-repo-url).
2. **Deploy to GitHub Pages:**  
   - Push to your `main` branch.
   - In repo settings, set Pages source to `/ (root)`.
   - Your site will be live at `https://yourusername.github.io/your-repo/`.
3. **Auto-deploy:**  
   - Add `.github/workflows/gh-pages.yml` (see below) for CI/CD.
4. **Custom Domain:**  
   - Add a `CNAME` file with your domain and configure DNS as per [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Example GitHub Actions Workflow

```yaml
# filepath: .github/workflows/gh-pages.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - uses: actions/deploy-pages@v4
```

## Thank You Page

Create a `thank-you.html` in the root for the FormSubmit `_next` redirect.  
Example:

```html
<!-- filepath: thank-you.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Thank You – AA’s Yardmen Ltd</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <div class="container text-center py-5">
    <img src="https://i.ibb.co/Xv7nsMD/att-hl-TQ0zk9nj-HQ5-B-l8l6-Qs-rw-Thb-Vu-Ra-PWQp2lix-9-Hg-png.jpg1705014365"
         alt="AA’s Yardmen Ltd logo" loading="lazy"
         class="mb-3" style="max-width:120px;width:100%;height:auto;">
    <h1>Thank you for your message!</h1>
    <p>We’ll be in touch soon.</p>
    <a href="index.html" class="btn btn-success mt-3">Return to Home</a>
  </div>
</body>
</html>
```

## Contact Form Integration

This site uses [FormSubmit.co](https://formsubmit.co/) for the contact form.  
No backend or third-party JS is required—form submissions are sent directly to your email.

- The form action is set to `https://formsubmit.co/your-email@example.com`.
- The form includes:
  - `<input type="hidden" name="_captcha" value="false">` to disable CAPTCHA.
  - `<input type="hidden" name="_next" value="https://your-domain.com/thank-you.html">` to redirect users to a custom thank-you page after submission.

**To customize the redirect:**  
Change the `_next` input value to your own thank-you page URL.

Example:
```html
<input type="hidden" name="_next" value="https://your-domain.com/thank-you.html">
```

See [FormSubmit documentation](https://formsubmit.co/docs) for more options.

## Branding & Logo

- The logo is used in the navbar, hero section, favicon, and thank-you page.
- Logo URL: `https://i.ibb.co/Xv7nsMD/att-hl-TQ0zk9nj-HQ5-B-l8l6-Qs-rw-Thb-Vu-Ra-PWQp2lix-9-Hg-png.jpg1705014365`
- To replace the logo, update the `<img src="...">` in `index.html` and `thank-you.html`.

## License

MIT.  
All APIs and assets used are 100% free and externally hosted.

<!-- Figma design placeholder – link here -->
