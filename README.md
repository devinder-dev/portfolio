# Devinder Singh — Portfolio

My personal developer portfolio. I'm a fullstack developer and student at Chas Academy in Stockholm — currently working part-time building AI and automation features, and open to junior developer roles now and LIA (internship) from November 2026.

**Live:** [portfolio-two-virid-66.vercel.app](https://portfolio-two-virid-66.vercel.app)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Language | TypeScript 5 (strict mode) |
| Contact form | EmailJS |
| Testing | Vitest + React Testing Library |
| CI/CD | GitHub Actions |
| Deployment | Vercel |

## Features

- Dark/light theme with localStorage persistence (dark by default)
- Scroll-spy navbar that highlights the active section
- Scroll-triggered fade-up animations via a reusable `FadeUp` wrapper
- Project cards with status badges (completed / ongoing / upcoming) driven by a single data file
- Contact form wired to EmailJS — no backend needed
- Fully static build, so the whole site is prerendered

## Getting Started

```bash
git clone https://github.com/devinder-dev/portfolio.git
cd portfolio
npm install
```

Create a `.env.local` in the project root (needed for the contact form):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run lint` | ESLint over `src/` and `app/` |
| `npm test` | Run the Vitest suite |
| `npm run build` | Production build |

## CI/CD

Every push to `main` runs the GitHub Actions pipeline: type check (`tsc --noEmit`) → lint → tests → build. If all four pass, Vercel deploys automatically.
