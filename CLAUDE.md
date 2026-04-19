# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MAZEAS Paysages is a client-side-only SPA (no backend) for a French landscaping business. All content is hardcoded in component files — there is no CMS, database, or API.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start Vite dev server (localhost:5173, hot reload)
npm run build     # Production build → dist/
npm run preview   # Serve production build locally
```

There are no tests, linting scripts, or type checking configured.

## Architecture

**Stack**: React 18 + Vite 5 + Tailwind CSS 3 + React Router 6 + React Helmet Async

**Structure**:
- `src/pages/` — one file per route (`Home`, `Services`, `Realisations`, `APropos`, `Contact`)
- `src/components/` — shared layout components (`Header`, `Footer`)
- `src/App.jsx` — router definition (all routes live here)
- `index.html` — contains JSON-LD LocalBusiness structured data and Google Fonts preload links; SEO meta is also managed per-page via React Helmet in each page component

**Content model**: All business data (services, portfolio items, stats, values) is defined as JS arrays directly inside each page component. There is no shared data layer.

**Form handling**: The contact form in `Contact.jsx` uses client-side state and validation; submission opens a `mailto:` link — there is no form backend.

## Styling Conventions

Tailwind is extended in `tailwind.config.js` with:
- A custom green palette accessed via `vert-{50…950}` (e.g., `bg-vert-500`, `text-vert-900`)
- Custom component classes defined in `src/index.css`: `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.section`, `.container`, `.card`, `.section-tag`
- Fonts: Montserrat for headings, Open Sans for body (loaded via `index.html`)

Use the `vert-*` color scale and existing component classes before adding new Tailwind utilities.

## SEO & Accessibility

Each page sets its own `<title>`, `<meta>` description, and Open Graph tags via `<Helmet>` from `react-helmet-async`. The canonical domain is `https://mazeas-paysages.fr`.

Inline SVGs use `aria-hidden="true"` when decorative. Interactive elements use `aria-label`. Semantic HTML (`header`, `nav`, `main`, `footer`, `section`, `article`, `address`) is used throughout.
