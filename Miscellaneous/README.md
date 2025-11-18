# healthcare 2
local-hospital/
├── index.html        # Homepage
├── about.html        # About the hospital
├── services.html     # Hospital services
├── doctors.html      # Doctors & staff profiles
├── appointments.html # Appointment booking
├── contact.html      # Contact page
├── style.css         # Styling (global design)
├── images/           # Logo & hospital-related images
└── README.md         # Documentation file

 Setup Instructions

1. Clone or download the project files:

git clone https://github.com/your-repo/local-hospital.git
cd local-hospital


2. Open index.html in any browser to view the site.


3. (Optional) Host it using platforms like Netlify, Vercel, or GitHub Pages for online access.

 Technologies Used

HTML5 – For structure

CSS3 – For design and styling

JavaScript (optional) – For interactivity and appointment booking system

World Health Organization, 2019. Digital health. [PDF]. Available at: https://www.who.int/digital_health/report
 (Accessed: 26 September 2025).

Smith, J., 2023. Hospital website development: A case study. [PDF]. Available at: https://www.example.com/report
 (Accessed: 26 September 2025).

National Health Service, 2020. Hospital admissions data 2020. [CSV]. Available at: https://www.nhs.uk/data/hospital-admissions
 (Accessed: 26 September 2025)


 # Healthcare Hospital Website

## Overview
Healthcare Hospital is a responsive, user-friendly website designed for a hospital in Polokwane Medi Clinic. The website provides information about services, departments, and allows users to make enquiries or contact the hospital. The site includes interactive features, dynamic content, SEO optimization, and client-side form validation.


## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Pages](#pages)
4. [Implemented Features](#implemented-features)
5. [Changelog](#changelog)
6. [References](#references)



## Features
- Responsive design suitable for desktop and mobile devices.
- Interactive gallery with lightbox for images.
- Departments section displayed in uniform cards with buttons.
- Contact and enquiry forms with JavaScript validation.
- Floating social media icons (Facebook, WhatsApp, Twitter) with brand colors.
- SEO best practices including meta tags, keywords, alt text, and clean URL structure.
- CSS styling with card layouts, hover effects, and buttons.
- GitHub version control with commits and updates recorded.



## Project Structure


## Pages
- **Home Page**: Overview of hospital, services, and department previews.
- **About Us**: Mission statement, gallery section with lightbox.
- **Services**: Detailed description of hospital services.
- **Departments**: All departments displayed in uniform cards with images and buttons.
- **Enquiry Form**: Allows users to enquire about services, products, volunteering, or sponsorship. Includes JavaScript validation.
- **Contact Form**: Collects user information and message type, validated via JavaScript.
- **Social Media**: Floating icons for Facebook, WhatsApp, and Twitter with brand colors.



## Implemented Features

### 1. CSS Enhancements
- Gallery images in card layout with equal width and height.
- Departments displayed in uniform cards with buttons.
- Hover effects on cards and buttons.
- Contact form styled in card format.

### 2. JavaScript Enhancements
- **Contact Form Validation**: Checks for empty fields and valid email format.
- **Enquiry Form Validation**: Validates inputs dynamically.
- **Gallery Lightbox**: Opens images in a modal when clicked.
- **Social Icons JS**: Detects clicks on social media icons for potential tracking or alert.

### 3. SEO Implementation
- Meta descriptions, keywords, and title tags added to each page.
- Alt text added to all images.
- Clean URL structure followed.
- Mobile-friendly layout.
- Robots.txt and sitemap.xml implemented (if applicable).

### 4. Interactive Elements
- Gallery with lightbox.
- Department cards with buttons.
- Floating social media icons.



## Changelog

| Date       | Changes Made |
|------------|--------------|
| 2025-10-29 | Added Home, About, Services, Departments pages with card layouts and hover effects. |
| 2025-10-29 | Implemented gallery section with lightbox functionality. |
| 2025-10-29 | Added enquiry form with department selection and JavaScript validation. |
| 2025-10-29 | Added contact form with validation and dynamic success/error messages. |
| 2025-10-29 | Implemented floating social media icons (Facebook, WhatsApp, Twitter) with proper colors. |
| 2025-10-29 | Applied SEO best practices: meta tags, alt text, keywords, clean URLs. |
| 2025-10-29 | Updated CSS for card layouts, buttons, hover effects, and responsive design. |
| 2025-10-29 | Committed all files to GitHub repository. |



## References
1. [Font Awesome](https://fontawesome.com/) - For social media icons.
2. [W3Schools](https://www.w3schools.com/) - HTML, CSS, JavaScript tutorials.
3. [MDN Web Docs](https://developer.mozilla.org/) - JavaScript, CSS, HTML references.
4. [Google SEO Guidelines](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)



## 🧩 Interactive Elements

### 1. Accordions
- Implemented collapsible content sections for displaying FAQs or department details.
- Each accordion opens smoothly with CSS transitions and JavaScript toggling.
- Only one section expands at a time for clean user experience.

### 2. Image Lightbox
- Added to the **About Us Gallery**.
- Clicking an image opens it in a centered modal overlay with a dark background.
- The modal can be closed by clicking the close icon or outside the image.

### 3. Google Map Integration
- Embedded Google Map showing the **Healthcare Hospital, Polokwane Medi Clinic** location.
- Map is interactive and responsive, allowing users to zoom and pan.

**Example Code:**
```html
<div class="map-container">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.357172179228!2d29.45082937493162!3d-23.91104217858413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6cb6a8412b9f3%3A0xdde3c3b3fdf6f6df!2sMediclinic%20Polokwane!5e0!3m2!1sen!2sza!4v1705133342648!5m2!1sen!2sza" 
    width="100%" 
    height="350" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
  </iframe>
</div>
