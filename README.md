# AA's Yardmen Website

This is a static website for **AA’s Yardmen**, a landscaping and gardening service based in Glasgow’s East End. The site is built using **HTML**, **CSS**, **Bootstrap**, **Leaflet.js**, and other front-end technologies, and it is designed to be mobile-first and responsive. The website is hosted on **GitHub Pages**.

## What Has Been Done

### Key Features:
1. **Homepage Design**:
   - A hero section with a background image, introductory text, and branding for AA's Yardmen.
   - A clean, modern design using **Bootstrap 5** for responsiveness across all devices.
   
2. **Service Section**:
   - A section showcasing key services (e.g., **Lawn Care**, **Hedge Trimming**, **Rubbish Removal**).
   - Each service is represented with a card, containing an image and a brief description.
   
3. **Interactive Map**:
   - A map displaying the service area in Glasgow’s **East End**.
   - Uses **Leaflet.js** and **OpenStreetMap** for interactive, zoomable maps.
   - Includes a marker for AA’s Yardmen with a popup description.

4. **Footer**:
   - A footer with contact information (email), and copyright details.

## Requirements

The website is a static site, meaning no server-side processing is required. The following are required to run the site properly:

1. **GitHub Pages Hosting**:
   - To host the site, you need to set up a repository on GitHub and enable **GitHub Pages** in the repository settings.

2. **Internet Connection**:
   - Since the website relies on **external libraries** like Bootstrap, Font Awesome, and Leaflet.js, an internet connection is required to load these resources.

3. **Images**:
   - Replace placeholder images in the **Service Section** and **Hero Section** with actual images that reflect the services offered.

4. **Map Configuration**:
   - The map is centered on **East End of Glasgow**. You may want to customize the map's location or zoom level as AA's Yardmen expands its service area.

5. **Form Handling (Optional)**:
   - For customer inquiries or bookings, a form can be integrated with services like **Formspree** or **Google Forms**.

## TODO Task List

1. **Update Content**:
   - Replace placeholder images with real images of the team’s work.
   - Update the **hero section** with a suitable image and slogan.
   - Modify the **service descriptions** to accurately reflect AA’s Yardmen’s offerings.

2. **Service Form**:
   - Implement a **contact form** that collects customer information (name, phone number, service needed, etc.).
   - Consider integrating with **Formspree** or another email form service to collect submissions.

3. **Map Customization**:
   - If the service area changes, update the map’s coordinates or zoom level.
   - Add additional markers for other service locations if necessary.

4. **SEO Optimization**:
   - Add SEO meta tags and relevant keywords to improve search engine visibility.
   - Implement **alt text** for images to improve accessibility.

5. **Mobile Optimization**:
   - Review the mobile design and adjust any elements to ensure the layout works well on all devices.

6. **Performance**:
   - Consider optimizing images for faster loading times.
   - Minimize the number of HTTP requests by combining CSS and JavaScript files.

7. **Social Media Integration**:
   - Add links or icons to AA’s Yardmen’s **social media accounts** (e.g., Facebook, Instagram, Twitter).
   - Optionally, include a social media feed or display customer testimonials from social media.

## How to Deploy

1. **Create a GitHub Repository**:
   - Create a new repository on GitHub (e.g., `aasyardmen.com`).

2. **Upload Files**:
   - Push the `index.html` and any other required files (e.g., images, CSS, JS) to the repository.

3. **Enable GitHub Pages**:
   - In your repository, go to **Settings** > **Pages**.
   - Under the **Source** section, select the branch (usually `main`) and folder (usually `/root`).
   - Your website will be live on `https://<your-username>.github.io/<repository-name>`.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
