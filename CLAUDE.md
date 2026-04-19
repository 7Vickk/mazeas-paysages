# CLAUDE.md

Ce fichier fournit des instructions à Claude Code (claude.ai/code) pour travailler dans ce dépôt.

## Présentation du projet

MAZEAS Paysages est une SPA client-side uniquement (sans backend) pour une entreprise de paysagisme française. Tout le contenu est codé en dur dans les fichiers de composants — pas de CMS, pas de base de données, pas d'API.

## Commandes

```bash
npm install       # Installer les dépendances
npm run dev       # Lancer le serveur de développement Vite (localhost:5173, hot reload)
npm run build     # Build de production → dist/
npm run preview   # Prévisualiser le build de production en local
```

Aucun test, script de lint ou vérification de types n'est configuré.

## Architecture

**Stack** : React 18 + Vite 5 + Tailwind CSS 3 + React Router 6 + React Helmet Async

**Structure** :
- `src/pages/` — un fichier par route (`Home`, `Services`, `Realisations`, `APropos`, `Contact`)
- `src/components/` — composants de mise en page partagés (`Header`, `Footer`)
- `src/App.jsx` — définition du routeur (toutes les routes sont ici)
- `index.html` — contient les données structurées JSON-LD LocalBusiness et les liens de préchargement Google Fonts ; les meta SEO sont également gérées par page via React Helmet dans chaque composant de page

**Modèle de contenu** : Toutes les données métier (services, réalisations, stats, valeurs) sont définies sous forme de tableaux JS directement dans chaque composant de page. Il n'y a pas de couche de données partagée.

**Gestion du formulaire** : Le formulaire de contact dans `Contact.jsx` utilise l'état React côté client et une validation locale ; la soumission ouvre un lien `mailto:` — pas de backend de formulaire.

## Conventions de style

Tailwind est étendu dans `tailwind.config.js` avec :
- Une palette verte personnalisée accessible via `vert-{50…950}` (ex. `bg-vert-500`, `text-vert-900`)
- Des classes de composants personnalisées définies dans `src/index.css` : `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.section`, `.container`, `.card`, `.section-tag`
- Polices : Montserrat pour les titres, Open Sans pour le corps (chargées via `index.html`)

Utiliser la palette `vert-*` et les classes de composants existantes avant d'ajouter de nouvelles utilitaires Tailwind.

## SEO & Accessibilité

Chaque page définit son propre `<title>`, sa description `<meta>` et ses balises Open Graph via `<Helmet>` de `react-helmet-async`. Le domaine canonique est `https://mazeas-paysages.fr`.

Les SVGs inline utilisent `aria-hidden="true"` quand ils sont décoratifs. Les éléments interactifs utilisent `aria-label`. Le HTML sémantique (`header`, `nav`, `main`, `footer`, `section`, `article`, `address`) est utilisé partout.

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
