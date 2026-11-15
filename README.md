# Sweet Horizon Bakery

A small bakery website built with React, TypeScript, Vite and Tailwind CSS. Six pages, a warm colour palette and Framer Motion transitions between pages.

Live: https://bovery-max.github.io/PatisserieWebsite/

![Home page](docs/screenshot.png)

## Pages

- `/` – Home
- `/cakes`, `/desserts`, `/cookies-pastries` – product pages
- `/contact` and `/location`

Routing is done with React Router; icons are from Lucide.

## Running locally

Node.js 18 or newer.

```bash
git clone https://github.com/Bovery-Max/PatisserieWebsite.git
cd PatisserieWebsite
npm install
npm run dev        # http://localhost:5173
```

`npm run build` writes the production bundle to `dist/`, `npm run preview` serves it.

## Structure

```
src/components     Navigation, Footer, ui/ (Button, Card)
src/pages          one file per page
src/App.tsx        routes
```
