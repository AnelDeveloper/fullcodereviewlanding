# Qodeshark — Landing Page

Marketing site for [Qodeshark](https://app.qodeshark.com). Pairs with the app at `/Users/anelkujovic/Documents/Projects/codereview`.

## Stack

- Vite + Vue 3 (SFCs)
- Tailwind CSS
- Same vibe-code palette as the app (violet `#8B5CF6` → pink `#EC4899` → cyan `#06B6D4`)
- Light + dark mode (system preference, persisted in `localStorage`)

## Setup

```sh
cd /Users/anelkujovic/Documents/Projects/codereview-landingpage
npm install
npm run dev   # → http://127.0.0.1:5174
```

Or with Valet, this folder will resolve to `http://codereview-landingpage.test` if you've parked `~/Documents/Projects` (note: this is a Vite SPA, not Laravel, so Valet won't proxy it; just use `npm run dev`).

## Deploy

```sh
npm run build
# upload dist/ to your host (Netlify / Vercel / Cloudflare Pages / etc.)
```

All CTAs link to `https://app.qodeshark.com/{login,register}`. If your app domain changes, search and replace `app.qodeshark.com`.

## Sections

- `Navbar.vue` — sticky, glassy, with theme toggle
- `Hero.vue` — headline + animated mock report card preview
- `Features.vue` — Security / Performance / Database / Quality
- `HowItWorks.vue` — 3 steps
- `SampleReport.vue` — example issues with severity, file, fix
- `Pricing.vue` — single $30/check tier
- `FAQ.vue` — accordion
- `CTA.vue` — gradient banner
- `Footer.vue`

## Theming

- `tailwind.config.js` — vibe palette extensions, animations
- `src/composables/useTheme.js` — toggles `<html class="dark">` and persists to localStorage
- `src/style.css` — `.glass`, `.gradient-text`, `.btn-vibe`, `.btn-ghost`, `.brand-mark`, `.vibe-grid-bg` utility classes
