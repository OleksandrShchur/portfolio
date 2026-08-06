# Oleksandr Shchur — Portfolio

A modern, futuristic personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Showcases skills, experience, education, and certifications with a violet-themed dark UI optimized for GitHub Pages.

**Live site:** [https://oleksandrshchur.github.io/portfolio/](https://oleksandrshchur.github.io/portfolio/)

## Tech Stack

- React 18+ with TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) (note the `/portfolio/` base path).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint & format

```bash
npm run lint
npm run format
```

## Featured Projects

Project cards are defined in `src/data/projects.ts` and linked to public GitHub repos:

| Project | Highlights |
|---------|------------|
| [AskIfBot](https://github.com/OleksandrShchur/FindIFBot) | Telegram moderation bot for «Франківськ Питає» (.NET 9, EF Core, Serilog, CI) — [live channel](https://t.me/ask_frankivsk) |
| [MebelOnline](https://github.com/OleksandrShchur/MebelOnline) | Furniture e-commerce API + React/MUI SPA (ASP.NET Core 9, EF Core, OpenAPI) |
| [MebelLanding](https://github.com/OleksandrShchur/MebelLanding) | Furniture landing page with magazine-style page-flip viewer (React 19, Tailwind, Framer Motion) |
| [EventsExpress](https://github.com/OleksandrShchur/EventsExpress) | Event discovery platform — SoftServe internship contribution |
| [RecordBook](https://github.com/OleksandrShchur/VisitorsTracker) | University attendance record book (ASP.NET Core SPA, JWT + Google auth) |
| [AccuWebScraper](https://github.com/OleksandrShchur/AccuWebScraper) | Scheduled scraper with Telegram delivery + React 19 dashboard (HtmlAgilityPack, Docker) |

## Content Updates

All copy lives in `src/data/` — update these files without touching UI components:

| File | Content |
|------|---------|
| `profile.ts` | Name, contact, summary, stats |
| `skills.ts` | Skill categories |
| `experience.ts` | Work history timeline |
| `education.ts` | Degrees |
| `certifications.ts` | Cert badges |
| `projects.ts` | Project cards (title, description, tech stack, links) |
| `navigation.ts` | Nav links |

## Assets

### Profile photo

Add your headshot to:

- `public/images/profile.webp` (preferred)
- `public/images/profile.png` (fallback)

Until those files exist, a styled SVG placeholder is shown automatically.

### CV

Place your PDF at `public/cv.pdf`. Download buttons in the Hero, Navbar, and Footer link to `/portfolio/cv.pdf`.

## Deployment (GitHub Pages)

The repo is configured for **project pages** at `https://oleksandrshchur.github.io/portfolio/`:

1. `vite.config.ts` sets `base: '/portfolio/'`
2. `.github/workflows/deploy.yml` builds and deploys on push to `main` or `master`
3. Enable GitHub Pages: **Settings → Pages → Source: GitHub Actions**

For a **user/organization site** (`username.github.io`), change `base` in `vite.config.ts` to `'/'` and update asset paths in `src/data/profile.ts`.

## Project Structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer, SectionWrapper, ScrollProgress
│   ├── sections/   Hero, About, Skills, Experience, etc.
│   └── ui/         Button, Badge, Timeline, GlassCard, etc.
├── data/           Content modules
├── hooks/          Scroll spy, reduced motion
└── utils/          Helpers (scroll, clipboard, CV download)
```

## License

See [LICENSE](LICENSE).
