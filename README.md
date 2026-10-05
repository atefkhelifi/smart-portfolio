# Smart Portfolio — Atef Khelifi

A bilingual (FR / EN) animated portfolio for a fullstack engineer. Dark-first design,
glassmorphism, scroll-driven motion, and one content file per language.

## Stack

| Layer     | Choice                                              |
| --------- | --------------------------------------------------- |
| Framework | Angular 18 (standalone components, signals)         |
| Styling   | Tailwind CSS 3 + SCSS, CSS custom-property tokens   |
| Motion    | Angular Animations, GSAP + ScrollTrigger, AOS       |
| i18n      | Signal-based service, no router/query-param coupling |
| Fonts     | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |

## Getting started

```bash
npm install
npm start          # dev server on http://localhost:4200
npm run build      # production build into dist/
npm test           # unit tests (Karma + ChromeHeadless, one-shot)
npm run test:watch # unit tests in watch mode
```

## Content & languages

Content is split into one self-contained bundle per language:

```
src/app/core/i18n/
├─ portfolio-content.ts   TypeScript interfaces (the contract)
├─ content.fr.ts          French — the default language
└─ content.en.ts          English — must implement the same interface
```

`I18nService` exposes:

- `lang()` — `'fr' | 'en'` signal (stored in `localStorage`, default French,
  falls back to the browser language on a first visit)
- `content()` — computed bundle for the current language
- `set(lang)` / `toggle()`

Switching language also updates `<html lang>`, the document title and the
`description` / `og:` meta tags. The navbar has a FR | EN segmented control.

> Adding a language means adding one file plus one entry in the service — the
> interfaces in `portfolio-content.ts` guarantee you cannot forget a string.

To update your CV details, edit **both** content files.

## Project structure

```
src/app
├─ app.component.*      shell: navbar, router outlet, footer, back-to-top
├─ app.config.ts        animations, router, view transitions
├─ app.routes.ts        lazy home route
├─ core
│  ├─ i18n/             content bundles + language service
│  └─ services/         theme (light/dark) + animation (AOS/GSAP) services
├─ layout               navbar, footer
├─ pages/home           composes every section
├─ sections             hero, about, skills, experience, projects,
│                       services, contact
└─ shared
   ├─ animations/       reusable Angular animation triggers
   ├─ back-to-top/      scroll-progress ring
   ├─ directives/       appTilt, appCountUp, appMagnetic
   ├─ icon/             inline SVG icon set
   └─ section-heading/  reusable animated heading
```

## Motion system

- **AOS** — declarative one-shot reveals via `data-aos="fade-up"`, initialised once
  in `AnimationService.initScrollReveal()`.
- **GSAP + ScrollTrigger** — hero entrance timeline (`heroIntro`) and scroll-linked
  parallax on decorative elements (`data-parallax`).
- **Angular Animations** — `listStagger` replays a staggered entrance on the project
  grid whenever the category filter changes.
- **Micro-interactions** — `appTilt` (3D pointer tilt + spotlight), `appMagnetic`
  (buttons that follow the cursor), `appCountUp` (number roll-ups), plus staggered
  skill-chip reveals driven by an `IntersectionObserver`.

Every animation short-circuits when the visitor prefers reduced motion.
The hero typewriter restarts cleanly when the language changes.

## Projects

Ten project cards, split across six filterable categories:

- **Six public GitHub projects** with working *Source* links:
  microservices-project, Blog-frontend, E-Commerce-frontend, Messenger-clone-front,
  doctor-app and medical-specialist-detector-api.
- **Four professional projects** from the CV, which are internal products and therefore
  show a "code not public" note instead of a link.

Categories are kept in a **stable order across languages** so `ProjectsComponent` can
filter by index. A category *string* would break the filter the moment the language
changed. If you add a project, add it at the same position in both content files.

## Assets

`public/assets/resume.pdf` is the downloadable CV, linked from the hero and
served at `/assets/resume.pdf`. Drop a new PDF there to update it.

### Favicon

The icon is a gradient "A" monogram on a dark rounded tile, matching the site's
design tokens (tile `#1a1d33` → `#07080e`, mark `#9d7bff` → `#22d3ee`).

| File                      | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| `public/favicon.svg`      | **Source of truth** — vector, used by modern browsers |
| `public/favicon.ico`      | 4 embedded sizes (16/32/48/64) for older browsers    |
| `public/apple-touch-icon.png` | 180×180, full-bleed square for iOS home screens   |

To change the mark, edit `favicon.svg` and re-export the `.ico` and `.png`.
The `.ico` is a standard multi-entry container (32-bit RGBA with alpha), and
the touch icon is intentionally square — iOS applies its own corner mask, so
baking rounded corners into it would leave transparent notches.

## Before you publish

These items were inferred rather than taken verbatim from the CV — please confirm:

- **GitHub.** `atefkhelifi` is confirmed — the profile resolves and the portfolio's public
  projects are sourced from it. **LinkedIn** is `atef-khelifi`, still unverified.
- **Location.** Listed as "Tunisie" / "Tunisia", inferred from the `+216` phone prefix.
- **Availability badge** and the **stats row** (years, company count, technology count)
  are derived from the CV dates and skills list, not stated in it.
- **Project images.** Cards use a generated gradient banner per category; there are no
  screenshots from any public repository yet.

## Theming

Design tokens live in `src/styles.scss` as CSS custom properties (`--accent`, `--bg`,
`--surface`, `--muted`, …). `ThemeService` toggles the `light`/`dark` class on `<html>`
and persists the choice. To rebrand, change `--accent` / `--accent-cyan` in `:root` and
the matching palette in `tailwind.config.js`.
