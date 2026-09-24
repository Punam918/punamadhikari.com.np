# Punam Adhikari — AI Engineer Portfolio

A responsive book-style portfolio for Punam Adhikari, with editorial typography, a portrait introduction, numbered chapters, and animated page turns.

## Included

- Ten book spreads: introduction, experience, education, three featured project studies, two project collections, expertise, and contact
- English, German, and French editions with a remembered language preference
- Chapter navigation, page selector, keyboard arrows, touch swipes, and browser history
- Reduced-motion support and accessible page announcements
- Dedicated CiteMind-AI-RAGOps, DevPilot, and VerityLake pages
- Downloadable English, German, and French CVs matching the selected language, plus linked credentials
- SEO, Open Graph metadata, JSON-LD, sitemap, robots.txt, favicon, and 404 page
- Cloudflare Workers static-assets configuration
- No framework or build step; the small icon set is embedded as inline SVG

## Project structure

```text
punam-ai-portfolio/
├── public/
│   ├── assets/
│   │   ├── favicon.svg
│   │   ├── og-image.png
│   │   ├── Punam_cv.pdf
│   │   ├── script.js
│   │   └── styles.css
│   ├── 404.html
│   ├── _headers
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── .gitignore
├── DEPLOYMENT.md
├── LICENSE
├── package.json
├── README.md
└── wrangler.jsonc
```

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Wrangler will print a local URL, normally `http://localhost:8787`.

For a dependency-free preview, you can also run:

```bash
python3 -m http.server 8000 --directory public
```

Then open `http://localhost:8000`.

## Run with Docker Compose

Requirements: Docker Desktop or Docker Engine with the Compose plugin.

```bash
npm run docker:build
npm run docker:up
```

Open `http://localhost:8080`. The Compose service serves the same files in
`public/` through Nginx, which is useful for a production-style local preview.

To use another host port, set `PORT` before starting it:

```bash
PORT=3000 npm run docker:up
```

Stop the container with:

```bash
npm run docker:down
```

## Deploy

```bash
npm install
npm run deploy
```

The Worker name is already set to `punamadhikari-com-np`, matching the existing Cloudflare Worker. See `DEPLOYMENT.md` for GitHub and Cloudflare dashboard steps.

## Easy edits

Localized content lives in the `editions` object in `public/assets/script.js`.

- Bio, experience, education, projects, and interface translations: edit all three entries (`en`, `de`, `fr`) in `public/assets/script.js`
- Metadata and static page structure: edit `public/index.html`
- Colors and layout: edit the variables at the top of `public/assets/styles.css`
- Interactions: edit `public/assets/script.js`
- CV: English source is `public/assets/Punam_cv.pdf`; German and French sources and generation instructions are in `cv/`
- Social links: edit `github`, `linkedin`, and `email` in `public/assets/script.js`

## Notes

The portfolio uses the existing portrait and original English CV, with German and French CV translations. Project names, technology names, and official credential names are preserved across translations. Google Fonts provide DM Sans and Libre Caslon Display, with system-font fallbacks. Featured projects without confirmed public repository URLs do not link to invented destinations.
