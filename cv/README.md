# Localized CVs

`translations.json` contains German and French translations of `public/assets/Punam_cv.pdf`. Dates, metrics, employers, education, projects, and contact details follow that source PDF. The website and all CV editions use the same professional email address. The original English PDF is unchanged.

The PDFs use an A4 layout with selectable text and working hyperlinks. The website chooses the CV matching its current language.

To regenerate with Node.js and Google Chrome installed:

```bash
npm install --prefix /tmp/portfolio-check @playwright/test
NODE_PATH=/tmp/portfolio-check/node_modules node cv/generate.cjs
```

Set `CHROME_PATH` if Chrome is installed elsewhere. Run the command from the project root. Outputs are `public/assets/Punam_cv_de.pdf` and `public/assets/Punam_cv_fr.pdf`.
