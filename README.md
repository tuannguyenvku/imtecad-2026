# IMTECAD 2026 Website

Next.js static website rebuilt from the public Canva design for Cloudflare Pages.

## Development

```bash
npm install
npm run dev
```

## Cloudflare Pages

Use these build settings:

- Build command: `npm run build`
- Output directory: `out`
- Node.js version: `24`

The site uses `output: "export"` in `next.config.mjs`, so `next build` generates a static `out/` directory.
