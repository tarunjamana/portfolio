# tarunjamana.dev

Personal portfolio, built as a work sample: scroll-driven, animated, accessible, and
performance-measured — the same craft it describes.

**Live:** [tarunjamana.dev](https://tarunjamana.dev)

## Highlights

- Motion built with GSAP + ScrollTrigger, smooth-scrolled via Lenis, with a house easing
  curve applied consistently across every tween and CSS transition.
- A real, working reduced-motion system: honors the OS `prefers-reduced-motion` setting
  independently of a first-class footer toggle, backed by a blanket CSS kill-switch and
  per-effect GSAP checks.
- WCAG AA-verified contrast on every text/background pair (computed, not eyeballed),
  full keyboard operability, and a skip-to-content link.
- [`/work/clp`](https://tarunjamana.dev/work/clp) — a fictional-brand concept landing page
  (TIMBRE) demonstrating a fully separate brand skin — its own tokens, fonts, and easing
  curve — built on the same engineering foundation as the frame.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · GSAP · Lenis · Framer Motion ·
Vercel Analytics

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
```
