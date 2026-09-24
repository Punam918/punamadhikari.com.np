const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('@playwright/test');

const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const bullets = values => `<ul>${values.map(v => `<li>${escape(v)}</li>`).join('')}</ul>`;
const entry = item => `<article><div class="entry-head"><h3>${escape(item.title)}</h3><span>${escape(item.date)}</span></div><div class="entry-meta"><span>${escape(item.company)}</span><span>${escape(item.location)}</span></div>${item.bullets ? bullets(item.bullets) : ''}</article>`;
const css = `
@page { size:A4; margin:14mm 16mm 16mm; }
* { box-sizing:border-box; }
body { margin:0; font:10pt/1.32 Arial,sans-serif; color:#202727; }
header { border-bottom:1.5pt solid #294b41; padding-bottom:9pt; margin-bottom:12pt; }
h1 { font-size:26pt; font-weight:600; margin:0 0 5pt; color:#294b41; }
header p { font-size:9pt; margin:3pt 0; }
a { color:inherit; text-decoration:none; }
.sheet { break-after:page; }
.sheet:last-child { break-after:auto; }
.continuation { display:flex; justify-content:space-between; padding-bottom:7pt; border-bottom:1pt solid #c7d1cc; color:#465b52; font-size:9pt; margin-bottom:12pt; }
h2 { font-size:13pt; color:#294b41; border-bottom:.6pt solid #c7d1cc; padding-bottom:4pt; margin:12pt 0 7pt; break-after:avoid; }
h3 { font-size:10.4pt; margin:0; font-weight:700; }
p { margin:0 0 7pt; }
article { margin-bottom:7pt; break-inside:avoid; }
.entry-head,.entry-meta { display:flex; justify-content:space-between; gap:12pt; }
.entry-head>span { white-space:nowrap; font-size:9pt; }
.entry-meta { color:#526058; font-size:9.4pt; margin:2pt 0 3pt; }
ul { margin:4pt 0 0; padding-left:13pt; }
li { padding-left:1pt; margin-bottom:2.5pt; }
.stack { font-size:9pt; color:#526058; margin:2pt 0 4pt; }
.details p { margin-bottom:8pt; }
.cert { margin-bottom:10pt; break-inside:avoid; }
.cert h3 { margin-bottom:3pt; }
`;

(async () => {
  const translations = JSON.parse(await fs.readFile(path.join(__dirname,'translations.json'),'utf8'));
  const browser = await chromium.launch({executablePath:process.env.CHROME_PATH || '/usr/bin/google-chrome',args:['--no-sandbox']});
  try {
    for (const [lang,t] of Object.entries(translations)) {
      const heading = index => `<h2>${escape(t.headings[index])}</h2>`;
      const continuation = `<div class="continuation"><strong>Punam Adhikari</strong><span>${escape(t.title)}</span></div>`;
      const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>Punam Adhikari | ${escape(t.title)}</title><style>${css}</style></head><body>
        <section class="sheet"><header><h1>Punam Adhikari</h1><p>9741804593 · <a href="mailto:punamadhikari422@gmail.com">punamadhikari422@gmail.com</a></p><p><a href="https://github.com/Punam918">GitHub</a> · <a href="https://www.linkedin.com/in/punam-adhikari-a29617231/">LinkedIn</a> · <a href="https://leetcode.com/">LeetCode</a></p></header>
        ${heading(0)}<p>${escape(t.summary)}</p>${heading(1)}${t.jobs.map(entry).join('')}</section>
        <section class="sheet">${continuation}${heading(3)}${t.projects.map(p => `<article><div class="entry-head"><h3>${escape(p.title)}</h3>${p.url ? `<a href="${escape(p.url)}">GitHub</a>` : ''}</div><p class="stack">${escape(p.stack)}</p>${bullets(p.bullets)}</article>`).join('')}</section>
        <section class="sheet">${continuation}${heading(2)}${t.education.map(entry).join('')}${heading(4)}<div class="details">${t.skills.map(s => `<p><strong>${escape(s[0])} :</strong> ${escape(s[1])}</p>`).join('')}</div>${heading(5)}${t.certifications.map(c => `<article class="cert"><h3>${escape(c[0])}</h3><p>${escape(c[1])}</p></article>`).join('')}</section>
        </body></html>`;
      const page = await browser.newPage({viewport:{width:673,height:1100}});
      await page.setContent(html);
      await page.emulateMedia({media:'print'});
      const heights = await page.locator('.sheet').evaluateAll(nodes => nodes.map(node => node.getBoundingClientRect().height));
      if (heights.some(height => height > 1008)) throw new Error(`${lang}: A4 content overflow: ${heights}`);
      const destination = path.resolve(__dirname,`../public/assets/Punam_cv_${lang}.pdf`);
      await page.pdf({path:destination,format:'A4',preferCSSPageSize:true,printBackground:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:'<div style="font:8px Arial;width:100%;text-align:center;color:#657169">Punam Adhikari · <span class="pageNumber"></span> / <span class="totalPages"></span></div>',tagged:true,outline:true});
      console.log(`${lang}: ${destination}; content heights ${heights.map(Math.round).join(', ')}px`);
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => {console.error(error);process.exitCode=1;});
