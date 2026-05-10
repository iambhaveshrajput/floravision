# FloraVision 🌿

A plant e-commerce storefront built with React and Vite. The UI leans into a deep-green dark theme and covers the typical landing-page flow — hero banner, trending picks, top-selling plants, customer reviews, and a footer.

Live demo → **https://floravision-two.vercel.app/**

---

## Tech used

- React 19
- Vite 8
- Tailwind CSS 3
- lucide-react (icons)

---

## Getting started

### Prerequisites

Make sure you have **Node.js 18+** installed. You can check with:

```bash
node -v
```

### 1. Clone the repo

```bash
git clone https://github.com/iambhaveshrajput/floravision.git
cd floravision
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Vite will start on `http://localhost:5173` by default. Any file changes hot-reload automatically.

---

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the local dev server |
| `npm run build` | Builds the production bundle into `dist/` |
| `npm run preview` | Serves the production build locally for a final check |
| `npm run lint` | Runs ESLint across the source files |

---

## Project layout

```
floravision/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/          # Static images (hero, etc.)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── TopSellingPlants.jsx
│   │   ├── O2Plants.jsx
│   │   ├── CustomerReviews.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── plants.js    # All plant listings live here
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

> Want to add or edit plants? Everything is in `src/data/plants.js` — just update the arrays there.

---

## Deploying to Vercel

The project is already set up to deploy with zero config. Push to GitHub and import the repo on [vercel.com](https://vercel.com). Vercel will detect Vite automatically and use the right build settings.

If you prefer to deploy manually via the CLI:

```bash
npm i -g vercel
vercel
```

---

## Customising the theme

Colours and typography are defined in `tailwind.config.js` under `theme.extend`. The palette uses a dark-green base (`#1a2416`) with accent greens and muted text tones — tweak those values and the whole site updates.

---

## License

MIT
