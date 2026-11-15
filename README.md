<div align="center">

<img src="docs/banner.svg" alt="Sweet Horizon Bakery" width="100%" />

<br/><br/>

<p><b>A multi-page bakery website with a warm palette and page-transition animations.</b></p>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />

<br/><br/>

<a href="https://bovery-max.github.io/PatisserieWebsite/"><img src="https://img.shields.io/badge/%E2%96%B6%20Live%20site-GitHub%20Pages-22c55e?style=for-the-badge" alt="Live site" /></a>

<p>
<a href="#-pages">Pages</a> ·
<a href="#-features">Features</a> ·
<a href="#-getting-started">Getting started</a> ·
<a href="#-project-structure">Structure</a>
</p>

</div>

<img src="docs/screenshot.png" alt="Sweet Horizon home page: serif headline over a warm gradient" width="100%" />

## 📄 Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/cakes` | Cakes |
| `/desserts` | Desserts |
| `/cookies-pastries` | Cookies & Pastries |
| `/contact` | Contact |
| `/location` | Location |

## ✨ Features

- 📱 Responsive layout for phone, tablet and desktop
- 🧭 Client-side routing with React Router
- 🎞️ Framer Motion page and element animations
- 🧩 Shared `Button` and `Card` components, Lucide icons
- ⚡ Vite dev server and production build

## 🚀 Getting started

Requires Node.js 18+.

```bash
git clone https://github.com/Bovery-Max/PatisserieWebsite.git
cd PatisserieWebsite
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production bundle in dist/
npm run preview    # serve the build locally
```

## 🗂️ Project structure

```
src/
  components/
    Navigation.tsx
    Footer.tsx
    ui/              Button, Card
  pages/             Home, Cakes, Desserts, CookiesPastries, Contact, Location
  App.tsx            routes
  main.tsx
docs/                README images
index.html
vite.config.ts
tailwind.config.js
```

---

<div align="center">
<sub>Personal portfolio project · <a href="https://github.com/Bovery-Max">Emir Sanal</a> · <a href="https://www.linkedin.com/in/emir-sanal-12432b322/">LinkedIn</a></sub>
</div>
