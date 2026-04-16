# Vasile Hij — Personal Portfolio

Personal portfolio site for Vasile Hij, Python Django developer. A Digital Wire Labs (DWL) company site.

Live at [vasilehij.com](https://www.vasilehij.com)

## Stack

- HTML5, CSS3, vanilla JavaScript
- Nginx (local dev via Docker)
- AWS Amplify (CI/CD + hosting)
- AWS Route 53 (DNS)
- Formspree (contact form)

## Features

- Light / dark mode toggle with localStorage persistence (dark by default)
- Responsive layout — desktop nav collapses to hamburger menu on mobile
- Tech stack displayed as categorised cards
- Contact form powered by Formspree
- Scroll-to-top / scroll-to-bottom button
- No cookies, no tracking, no personal data collected
- SEO meta tags + Open Graph + robots.txt + sitemap.xml

## Local development

```bash
docker compose up
```

Open `http://localhost:8080`. Edit files locally and reload the browser to see changes. Nginx is configured with no-cache headers so changes are visible immediately on reload.

## Deployment

CI/CD is handled by AWS Amplify watching the `main` branch. Pushing to `main` triggers an automatic deploy. DNS is managed via AWS Route 53.

