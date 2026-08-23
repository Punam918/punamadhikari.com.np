# Punam Adhikari — AI Engineer Portfolio

A custom, responsive portfolio designed for Punam Adhikari. The visual direction combines a soft editorial style with an AI-lab feel: blush, lavender, warm cream, restrained animation, and technical project detail.

## Included

- Responsive one-page portfolio
- Light and dark themes
- Mobile navigation
- Experience timeline
- Filterable AI project gallery
- Skills, education, recognition, and contact sections
- Downloadable résumé
- SEO, Open Graph metadata, JSON-LD, sitemap, robots.txt, favicon, and 404 page
- Cloudflare Workers static-assets configuration
- No framework and no runtime dependencies in the browser

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

Most content lives in `public/index.html`.

- Name, headline, bio, experience, projects: edit `public/index.html`
- Colors and layout: edit the variables at the top of `public/assets/styles.css`
- Interactions: edit `public/assets/script.js`
- CV: replace `public/assets/Punam_cv.pdf` with a newer PDF using the same filename
- Social links: search for `github.com/Punam918`, `linkedin.com/in/punam-adhikari-a29617231`, `leetcode.com/u/punamadhikari422`, and `punamadhikari422@gmail.com`

## Notes

The portfolio uses an original monogram-based hero visual, so it looks complete without a portrait photo. No publication section is included; the site emphasizes engineering work, model results, systems, and deployments. LinkedIn, LeetCode, GitHub, and résumé credential links are already connected.
