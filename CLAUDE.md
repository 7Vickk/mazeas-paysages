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

---

## Design System — Standards Non Négociables

### Posture créative

Avant chaque tâche UI, se poser ces questions :
- Quel est le **TONE** de cette interface ? (brutal-minimal, luxe, éditorial, organique…)
- Quel est l'élément **INOUBLIABLE** ? Ce que l'utilisateur va retenir dans 1 semaine ?
- Qu'est-ce que 99% des développeurs n'oseraient **PAS** faire ici ?

### Stack de référence

- React + Tailwind (classes utilitaires core uniquement)
- `motion/react` pour les animations React (`import { motion } from "motion/react"`)
- CSS-only animations pour le HTML pur (keyframes, transitions, custom properties)
- `lucide-react` pour les icônes (`import { X } from "lucide-react"`)
- Recharts / D3 pour les dataviz si nécessaire

### Typographie

- **Jamais** : Inter, Roboto, Arial, system-ui en choix par défaut
- **Toujours** : une font display forte + une font de corps raffinée, chargées via `@import` Google Fonts
- Hiérarchie typographique agressive : contraste de taille, de poids, d'espacement

### Couleurs

- CSS variables pour toute la palette (`--color-primary`, `--color-accent`, etc.)
- Palette dominante avec 1-2 accents tranchants — pas de palettes timides équilibrées
- Alterner entre thèmes clairs et sombres selon le contexte

### Motion & Micro-interactions

- Page load : staggered reveals orchestrés (animation-delay progressif)
- Hover states surprenants, pas prévisibles
- Un effet d'entrée bien exécuté > 10 micro-interactions dispersées
- CSS : keyframes nommés, custom properties animées, clip-path transitions

### Composition spatiale

- Asymétrie intentionnelle, grilles brisées, overlaps contrôlés
- Espace négatif généreux OU densité contrôlée — jamais le "juste milieu mou"
- Éléments qui sortent du flux pour créer du rythme

### Backgrounds & Atmosphère

- **Jamais** de fond uni blanc/gris par défaut
- Gradient meshes, noise textures (SVG filter ou CSS), geometric patterns, layered transparencies
- Depth : shadows dramatiques, borders décoratives, effets de profondeur

### Règles de code UI

- Composants React : default export, props avec valeurs par défaut
- **Jamais** `localStorage`/`sessionStorage`
- **Jamais** de balise `<form>` — utiliser `onClick`/`onChange`
- Scripts externes uniquement depuis `cdnjs.cloudflare.com`
- Gestion des états de chargement et d'erreur toujours présente dans les `fetch`
- États complets obligatoires : hover, focus, active, disabled, loading, empty, error
