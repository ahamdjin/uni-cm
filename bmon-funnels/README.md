# BMON Funnels (React)

React/Vite build for the BMON funnel pages:

- Services bundle (`src/bmon-funnel-services-itemized.jsx`)
- Review management (`src/bmon-funnel-review-management.jsx`)
- Contact page (GoHighLevel form + booking embeds) (`src/App.jsx`)

## Run locally

```bash
npm install
npm run dev
```

Use the top nav tabs to toggle between **Services**, **Reviews**, and **Contact**.

## GoHighLevel (GHL) embed output

Build everything and generate paste-ready files:

```bash
npm run build:ghl
```

Outputs:

- `dist/ghl-embed.html` (single full HTML file)
- `dist/ghl-snippet.html` (snippet you can paste into a Custom HTML element)

Note: the app mounts into `#bmon-funnels-root` (it will create this div if missing).
