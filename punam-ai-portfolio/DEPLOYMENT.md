# Deploy to the existing Cloudflare Worker

This project is configured for the existing Worker:

```text
punamadhikari-com-np
```

Your custom domain can remain connected to that Worker. Replacing the code does not require creating a new Worker or reconnecting the domain.

## Option A — GitHub + automatic Cloudflare deployment

1. Extract the ZIP file.
2. Open the extracted `punam-ai-portfolio` folder.
3. Copy **all files inside it** into the root of your GitHub repository:

   ```text
   Punam918/punamadhikari.com.np
   ```

4. Commit and push to the `main` branch.
5. In Cloudflare, open **Workers & Pages → punamadhikari-com-np → Settings → Builds**.
6. Confirm:

   ```text
   Production branch: main
   Root directory: /
   Build command: leave empty
   Deploy command: npm run deploy
   ```

   Cloudflare normally installs `package.json` dependencies automatically. If your build configuration requires an explicit install command, use `npm install` as the build command.

7. Save the build settings and trigger a new deployment.
8. First test the Workers address:

   ```text
   https://punamadhikari-com-np.punama-0918.workers.dev
   ```

9. Then test the custom domain:

   ```text
   https://punamadhikari.com.np
   ```

## Option B — Deploy from your computer

```bash
npm install
npx wrangler login
npm run deploy
```

## Important DNS note

A successful code deployment cannot repair an `NXDOMAIN` error. If the `workers.dev` address works but `punamadhikari.com.np` still returns `DNS_PROBE_FINISHED_NXDOMAIN`, the remaining problem is the public `.np` nameserver delegation or DNS propagation. Keep the assigned nameservers unchanged:

```text
arnold.ns.cloudflare.com
leia.ns.cloudflare.com
```

Do not replace the Worker DNS record with an A or CNAME record.

## Updating the résumé

Replace this file and keep the filename unchanged:

```text
public/assets/Punam_cv.pdf
```
