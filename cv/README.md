# Localized CVs

The website's CV downloads are the supplied English and German PDFs in `public/assets/`: `Punam_Adhikari_CV_2026.pdf` and `Punam_Adhikari_2026_Resume_Deutsch.pdf`. The website selects the matching file when the language changes.

`translations.json` and `generate.cjs` are a separate optional CV-generation workflow; their output filenames are not used by the website.

To regenerate with Node.js and Google Chrome installed:

```bash
npm install --prefix /tmp/portfolio-check @playwright/test
NODE_PATH=/tmp/portfolio-check/node_modules node cv/generate.cjs
```

Set `CHROME_PATH` if Chrome is installed elsewhere. Run the command from the project root. Outputs are `public/assets/Punam_cv_de.pdf` and `public/assets/Punam_cv_fr.pdf`.
