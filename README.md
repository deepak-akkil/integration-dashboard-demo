# Integration Dashboard

A deliberately small, dependency-free static dashboard for validating GitHub source publication and delivery through Vercel and Netlify.

## Files
- `index.html`: accessible page structure and explicitly synthetic demo metrics.
- `styles.css`: responsive layout.
- `app.js`: browser hostname, UTC clock and refresh action. These are client-side information, not provider telemetry.
- `netlify.toml`: publish repository root with no build command.
- `vercel.json`: static output at repository root, no framework.

## Local use
Open `index.html` in a browser. No package installation, build, credentials, API calls, analytics or external assets are required.

## Hosting
Import this repository into Vercel (framework: Other, output directory: `.`) and Netlify (no build command, publish directory: `.`). Platform deployment URLs and verification evidence are reported separately after deployment; configuration files alone do not prove that either host is live.

## Smoke test
Check that HTML, `styles.css` and `app.js` return HTTP 200. In a browser, check that the hostname appears, the UTC clock advances, and the refresh button changes the status message. Narrow screens should stack the metric cards vertically. Demo figures are synthetic and do not measure integrations.

Release marker: `integration-demo-v1`.
