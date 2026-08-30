# Morvarid — Digital Marketing Portfolio

A fast, accessible, fully responsive personal portfolio for a digital marketing professional.
Built with **React 18 + Vite 5 + React Router 6**, styled with hand-written CSS (no framework),
and set up to deploy to **GitHub Pages** in one push.

---

## Table of contents

1. [What's in the box](#whats-in-the-box)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Local development](#local-development)
5. [Build commands](#build-commands)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)
7. [✏️ Content management — where to change what](#️-content-management--where-to-change-what)
8. [Adding a new project / case study](#adding-a-new-project--case-study)
9. [Changing the colours and fonts](#changing-the-colours-and-fonts)
10. [Images, résumé and file paths](#images-résumé-and-file-paths)
11. [Contact form options](#contact-form-options)
12. [Accessibility notes](#accessibility-notes)
13. [SEO checklist before you launch](#seo-checklist-before-you-launch)
14. [Project structure](#project-structure)
15. [Troubleshooting](#troubleshooting)

---

## What's in the box

| Page | Route | What it does |
| --- | --- | --- |
| Home | `/` | Hero, about, featured projects, skills, tools, education, contact |
| About | `/about` | Full bio, career timeline, specializations, strengths, education, tools |
| Projects | `/projects` | All projects in a filterable card grid |
| Case study | `/projects/:slug` | Reusable, data-driven case-study template |
| 404 | anything else | Custom not-found page |

Also included: sticky responsive nav with a mobile menu, scroll progress bar, back-to-top button,
scroll-reveal animations, page transitions, reduced-motion support, per-page SEO tags, sitemap,
robots.txt, and a GitHub Actions workflow that deploys on every push to `main`.

**All project content is fictional sample data.** Replace it with your own — see below.

---

## Requirements

- **Node.js 18 or newer** (20 LTS recommended) — check with `node -v`
- npm (ships with Node)
- A GitHub account for hosting

---

## Installation

```bash
# 1. Get the code onto your machine
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio

# 2. Install dependencies
npm install
```

---

## Local development

```bash
npm run dev
```

Then open the URL it prints — by default **http://localhost:5173/portfolio/**
(the `/portfolio/` part comes from the `base` setting, see below).

The dev server hot-reloads: save a file and the browser updates instantly.

---

## Build commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally, exactly as it will be deployed |
| `npm run deploy` | Build and push `dist/` to the `gh-pages` branch (manual deploy option) |

Always run `npm run build` before deploying manually, and check `npm run preview` looks right.

---

## Deploying to GitHub Pages

### Step 1 — set your base path (do this once)

Open **`vite.config.js`** and set `BASE` to match where the site will live:

```js
// Site at https://YOUR-USERNAME.github.io/portfolio/
export const BASE = '/portfolio/'

// Site at https://YOUR-USERNAME.github.io/  (repo named YOUR-USERNAME.github.io)
// or on a custom domain:
// export const BASE = '/'
```

If you chose `'/'`, also open **`public/404.html`** and set:

```js
var pathSegmentsToKeep = 0
```

(Leave it at `1` for the `/portfolio/` style URL.)

### Step 2 — push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Step 3 — turn Pages on

In your repository: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

That's it. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every
push to `main`. The first deploy takes a couple of minutes; after that the URL appears under
**Settings → Pages**.

### Alternative — manual deploy

If you'd rather not use Actions:

```bash
npm run deploy
```

then set **Settings → Pages → Source** to **Deploy from a branch → `gh-pages` / root**.

### Why deep links don't 404

GitHub Pages has no server-side router, so refreshing `/projects/bloom-botanics-glow-up` would
normally 404. Two files handle that:

- **`public/404.html`** — GitHub serves this for unknown URLs; it re-encodes the path and bounces
  to `index.html`.
- **the small script in `index.html`** — decodes it and hands the real URL to React Router.

Don't delete either one. Unknown routes still land on the styled 404 page inside the app.

**`public/.nojekyll`** is also required — without it GitHub ignores files starting with `_`.

---

## ✏️ Content management — where to change what

Everything you'll want to edit lives in **`src/data/`**. You never need to touch layout code.
Every editable line is marked with a ✏️ comment.

| What you want to change | File | Field |
| --- | --- | --- |
| **Your name** | `src/data/site.js` | `name`, `initials` |
| **Professional headline** | `src/data/site.js` | `headline` |
| **Hero intro paragraph** | `src/data/site.js` | `intro` |
| **Rotating hero words** | `src/data/site.js` | `rotatingWords` |
| **Location / availability** | `src/data/site.js` | `location`, `availability` |
| **Profile photo** | `src/data/site.js` | `photo`, `photoAlt` |
| **Résumé file** | `src/data/site.js` | `resume` |
| **Email / phone** | `src/data/site.js` | `email`, `phone` |
| **Social links** | `src/data/site.js` | `socials[]` |
| **Hero stat numbers** | `src/data/site.js` | `stats[]` |
| **Navigation menu items** | `src/data/site.js` | `navLinks` |
| **Long biography** | `src/data/about.js` | `bio[]` (one string = one paragraph) |
| **Short home-page blurb** | `src/data/about.js` | `shortBio` |
| **Career timeline** | `src/data/about.js` | `timeline[]` |
| **Education** | `src/data/about.js` | `education[]` |
| **Certifications** | `src/data/about.js` | `certifications[]` |
| **Professional strengths** | `src/data/about.js` | `strengths[]` |
| **Specializations (ticker)** | `src/data/about.js` | `specializations[]` |
| **Services / skill cards** | `src/data/skills.js` | `services[]` |
| **Skill tag groups** | `src/data/skills.js` | `skillGroups[]` |
| **Tools & platforms** | `src/data/tools.js` | `toolCategories[]` |
| **Projects & case studies** | `src/data/projects.js` | `projects[]` |
| **Project categories / filters** | `src/data/projects.js` | `categories[]` |
| **Colours** | `src/styles/tokens.css` | `--pink`, `--green`, `--orange`, … |
| **Fonts** | `src/styles/tokens.css` + `index.html` | `--font-display`, `--font-body` |
| **Site-wide SEO title/description** | `index.html` | `<title>`, `<meta name="description">` |

---

## Adding a new project / case study

1. Open **`src/data/projects.js`**.
2. Scroll to `PROJECT_TEMPLATE` at the bottom and copy the whole object.
3. Paste it as a new item in the `projects` array.
4. Change `slug` to something unique and URL-safe — that becomes the address:
   `/projects/your-slug`.
5. Fill in the fields. **Any field you delete simply disappears from the page** — the case-study
   template only renders sections that have content, so a shorter project still looks finished.
6. Set `featured: true` if you want it on the home page.
7. Make sure `category` matches one of the values in the `categories` array, so the filters work.

The fully written **Bloom Botanics** entry at the top of the file is the reference: it shows how
much detail a strong marketing case study carries (overview, objectives, problem, audience,
research, strategy pillars, phased implementation, channels and tools, creative assets, KPIs,
results, learnings, recommendations, testimonial).

---

## Changing the colours and fonts

### Colours

Open **`src/styles/tokens.css`**. Every colour in the UI is defined at the top:

```css
--pink:      #FF3D81;   /* vivid — fills, borders, big shapes */
--pink-ink:  #C2145D;   /* darkened — safe for TEXT on white  */
--pink-soft: #FFE4EF;   /* tint — chip and badge backgrounds  */
```

Each brand colour has three variants. **Keep that pattern if you swap the palette**, otherwise
text contrast drops below the accessible threshold. A quick way to pick an `-ink` variant: take
your colour and darken it until it passes 4.5:1 against white in a contrast checker.

Everything else (gradients, buttons, chips, accents) derives from these, so changing three values
re-themes the whole site.

### Fonts

1. Pick fonts on [Google Fonts](https://fonts.google.com) and copy the `<link>` tag.
2. Replace the existing font `<link>` in **`index.html`**.
3. Update `--font-display` and `--font-body` in **`src/styles/tokens.css`**.

Keep a real fallback stack after each font name so text still renders while the font loads.

---

## Images, résumé and file paths

All static files live in **`public/`** and are referenced **without a leading slash**:

| File | Put it here | Then set |
| --- | --- | --- |
| Profile photo | `public/images/profile.jpg` | `photo: 'images/profile.jpg'` in `site.js` |
| Project cover | `public/images/bloom-cover.jpg` | `cover.image: 'images/bloom-cover.jpg'` |
| Case-study asset | `public/images/bloom-dashboard.png` | `assets[].image: 'images/bloom-dashboard.png'` |
| Résumé | `public/resume/resume.pdf` | already set — just replace the file |
| Favicon | `public/favicon.svg` | already wired up |
| Social share image | `public/og-image.svg` | already wired up |

The `asset()` helper in `src/utils/paths.js` prefixes the GitHub Pages base path automatically, so
paths keep working in the subdirectory. **Never hardcode `/images/...` with a leading slash** — it
will break after deployment.

**Until you add images, every visual is an original CSS gradient composition** generated by
`src/components/Artwork.jsx`. There is no stock photography anywhere in this project, so there is
nothing to license and nothing to remove.

**Always fill in `alt` text** whenever you add a real image. It's the `alt` / `cover.alt` /
`assets[].alt` field right next to each `image` field.

---

## Contact form options

The form works on GitHub Pages with **no backend**.

**Default — `mailto:`**
Submitting opens the visitor's email client with name, email, company and message pre-filled.
Nothing to configure beyond setting `email` in `src/data/site.js`.

**Optional — a hosted form service**
If you'd rather collect submissions automatically, sign up for [Formspree](https://formspree.io),
[Getform](https://getform.io) or [Basin](https://usebasin.com), then paste your endpoint into
`src/data/site.js`:

```js
FORM_ENDPOINT: 'https://formspree.io/f/xxxxxxx',
```

The form switches to an async POST automatically, the orange helper note disappears, and success
and error states are handled for you. No other changes needed.

---

## Accessibility notes

Built in from the start — please keep these if you edit the code:

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a "Skip to main content" link
- Visible keyboard focus rings on every interactive element (`:focus-visible` in `globals.css`)
- Colour pairs chosen so body text meets **WCAG AA** contrast on white — that's what the `-ink`
  colour variants are for
- `prefers-reduced-motion` fully respected: reveals, the marquee, the word rotator, smooth
  scrolling and page transitions all switch off
- Filter buttons use `aria-pressed`; result counts announced via a live region
- The mobile menu is a real `<button>` with `aria-expanded` / `aria-controls`, closes on Escape
- Alt text on every image; decorative artwork uses `role="img"` with a label
- Links that open a new tab say so to screen readers

Quick check before launch: tab through the whole site without a mouse, and run Lighthouse
(Chrome DevTools → Lighthouse → Accessibility).

---

## SEO checklist before you launch

- [ ] `index.html` — update `<title>`, `<meta name="description">`, `<link rel="canonical">` and
      all `og:` URLs to your real domain
- [ ] `public/robots.txt` — update the sitemap URL
- [ ] `public/sitemap.xml` — update the URLs and add one `<url>` block per project slug
- [ ] `public/og-image.svg` — update the name and headline (or replace with a 1200×630 PNG)
- [ ] Fill in `alt` text on every real image you add
- [ ] Run Lighthouse for Performance / Accessibility / SEO

Per-page titles and descriptions are handled automatically by `src/components/Seo.jsx`.

---

## Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # Auto-deploy to GitHub Pages on push to main
├── public/                        # Static files, copied as-is
│   ├── 404.html                   # GitHub Pages SPA fallback (do not delete)
│   ├── .nojekyll                  # Stops GitHub mangling the build (do not delete)
│   ├── favicon.svg
│   ├── og-image.svg               # Social share card
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/                    # ← put your photos here
│   └── resume/resume.pdf          # ← replace with your résumé
├── src/
│   ├── data/                      # ✏️ ALL YOUR CONTENT LIVES HERE
│   │   ├── site.js                #    name, headline, contact, socials, stats
│   │   ├── about.js               #    bio, timeline, education, certifications
│   │   ├── skills.js              #    services and skill groups
│   │   ├── tools.js               #    marketing + analytics stack
│   │   └── projects.js            #    projects and full case-study content
│   ├── components/
│   │   ├── Artwork.jsx            # Real image, or generated gradient placeholder
│   │   ├── Footer.jsx
│   │   ├── Icon.jsx               # Inline SVG icon set
│   │   ├── Marquee.jsx            # Scrolling specializations ticker
│   │   ├── Navbar.jsx             # Sticky responsive nav + mobile menu
│   │   ├── ProjectCard.jsx
│   │   ├── Reveal.jsx             # Scroll-reveal wrapper (IntersectionObserver)
│   │   ├── ScrollManager.jsx      # Scroll-to-top + hash handling on route change
│   │   ├── ScrollProgress.jsx     # Progress bar + back-to-top button
│   │   ├── SectionHeading.jsx
│   │   ├── Seo.jsx                # Per-page title, description, canonical, OG
│   │   └── sections/              # Reused page sections
│   │       ├── ContactSection.jsx
│   │       ├── EducationSection.jsx
│   │       ├── Services.jsx
│   │       └── ToolsSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx           # Grid + category filters
│   │   ├── ProjectDetail.jsx      # Reusable case-study template
│   │   └── NotFound.jsx
│   ├── styles/
│   │   ├── tokens.css             # 🎨 colours, type scale, spacing, motion
│   │   └── globals.css            # base styles + all UI components
│   ├── utils/paths.js             # Base-path-safe asset URLs
│   ├── App.jsx                    # Routes + layout shell
│   └── main.jsx                   # Entry point + router basename
├── index.html                     # HTML shell, fonts, base SEO, SPA decoder
├── vite.config.js                 # ⚙️ BASE path for GitHub Pages
└── package.json
```

---

## Troubleshooting

**Blank page after deploying**
`BASE` in `vite.config.js` doesn't match your repo name. For `github.com/you/portfolio` it must be
`'/portfolio/'` — with both slashes.

**Images 404 in production but work locally**
You used a leading slash. Write `'images/foo.jpg'`, not `'/images/foo.jpg'`.

**Refreshing a project page gives a GitHub 404**
Check `public/404.html` and `public/.nojekyll` were both deployed, and that `pathSegmentsToKeep`
matches your setup (`1` for a project site, `0` for a user site or custom domain).

**Fonts don't load**
The Google Fonts `<link>` in `index.html` was removed or the font name in `tokens.css` doesn't
match. The site still renders with the fallback stack.

**`npm run dev` fails**
Check `node -v` is 18+, then delete `node_modules` and `package-lock.json` and run `npm install`
again.

---

## Licence

The code is yours to use and modify freely. All visuals are original CSS gradients — no
third-party images, no attribution required. Replace the sample content before publishing.
