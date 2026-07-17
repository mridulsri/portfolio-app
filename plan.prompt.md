# Plan: Sunset-themed single-page portfolio

## Context / decisions confirmed with user
- Reuse existing data: src/data/{skills,experiences}.json, name "Mridul Srivastava" from resume.json, summary text copied from ResumeSummary.jsx.
- No projects data exists -> create placeholder src/data/projects.json (3-4 entries).
- Add framer-motion dependency for animations (fade/stagger reveals, mobile menu transition).
- Contact section = static info + social links (mailto + LinkedIn/GitHub icons), no form/backend.
- Fully rewrite broken src/components/Navbar.tsx (currently imports non-existent '../styles', '../constants', and framer-motion which isn't installed - dead/unused code) and stub src/pages/HomePage.jsx (currently just LiveClock). Remove LiveClock demo from HomePage.

## Critical technical constraint
- App uses HashRouter (src/routes/AppRoutes.jsx) with routes "/" and "/resume". Using `<a href="#about">` would be interpreted as a route change (breaks, since no matching Route/catch-all exists). SOLUTION: in-page nav links must use onClick handlers calling `element.scrollIntoView({behavior:'smooth'})` (preventDefault), NOT href="#id". Keep react-router `<Link>` only for the real "/resume" route.
- Tailwind v4 (no tailwind.config.js; config lives in CSS via @import 'tailwindcss' in src/styles/tailwind.css, imported by src/index.css). Manual dark mode toggle requires adding `@custom-variant dark (&:where(.dark, .dark *));` in tailwind.css, then toggle a `dark` class on `<html>`.

## Steps

### Phase 1: Theming foundation (no dependencies between these files, but must land before components use them)
1. `src/styles/tailwind.css` — add `@custom-variant dark (&:where(.dark, .dark *));`; add a Tailwind v4 `@theme` block defining sunset palette tokens (e.g. `--color-sunset-50..900` ranging deep navy/purple -> coral -> orange -> gold) for both light/dark surfaces; add `html { scroll-behavior: smooth; }`.
2. `src/styles/variables.css` — add dark-mode CSS variable overrides (e.g. `.dark { --primary-color: ...; }`) if needed alongside Tailwind theme tokens.
3. `src/hooks/useTheme.js` (new) — hook managing light/dark state: reads localStorage `theme` key, falls back to `window.matchMedia('(prefers-color-scheme: dark)')`, toggles `document.documentElement.classList` `dark`, persists on change. Returns `{ theme, toggleTheme }`.
4. `src/constants/navLinks.js` (new) — array of `{ id, label }` for Hero/About/Skills/Portfolio/Experience/Contact section anchors, shared by Navbar and scrollspy.

### Phase 2: Navbar (depends on Phase 1 steps 3-4)
5. Rewrite `src/components/Navbar.tsx`:
   - Sticky (`fixed top-0 inset-x-0 z-50`), translucent/backdrop-blur background using sunset palette, border-bottom on scroll.
   - Desktop: horizontal nav links (from navLinks.js) with onClick smooth-scroll (no `href="#..."`), active-section underline/highlight via a small IntersectionObserver-based `src/hooks/useActiveSection.js` (new, depends on navLinks ids).
   - Mobile (`sm:hidden`): hamburger icon (react-icons `FaBars`/`FaTimes`) toggling a framer-motion `AnimatePresence` slide/fade menu; closes on link click.
   - Theme toggle button (sun/moon icons) wired to `useTheme()`.
   - Optional "Resume" item uses react-router `Link` to `/resume` (real route navigation, fine with HashRouter).
   - Remove all references to missing `../styles`, `../constants` (old broken imports) and non-existent `styles`/`navLinks` shape.
6. `src/components/index.ts` — no change needed unless exporting new ThemeToggle separately (keeping toggle inline in Navbar is simplest; skip extra file).

### Phase 3: Page sections (depends on Phase 1 data/constants; independent of each other, can be built in parallel)
7. `src/data/projects.json` (new) — 3-4 placeholder entries: `{ title, description, tech: [], image, repoUrl, liveUrl }`.
8. `src/features/home/Hero.jsx` (new) — full-viewport intro: name (resume.json), current role (experiences.json[0].title), short tagline, CTA buttons ("View My Work" -> scroll to Portfolio, "Contact Me" -> scroll to Contact), sunset gradient background, framer-motion entrance animation.
9. `src/features/home/About.jsx` (new) — bio paragraph (reuse ResumeSummary.jsx text), portrait/placeholder image slot, framer-motion fade-in on scroll (`useInView`).
10. `src/features/home/Skills.jsx` (new) — reuse `src/data/skills.json`, render grouped skill categories as cards/badges (pattern from `src/features/resume/ResumeSkills.jsx`), staggered reveal animation.
11. `src/features/home/Portfolio.jsx` (new) — reuse `src/data/projects.json`, responsive card grid, hover elevation, tags for tech stack.
12. `src/features/home/Experience.jsx` (new) — reuse `src/data/experiences.json`, vertical timeline layout (pattern reference: `src/features/resume/ResumeExpGroup.jsx`), each entry animates in on scroll.
13. `src/features/home/Contact.jsx` (new) — mailto link + social icons (LinkedIn/GitHub via react-icons; placeholder URLs clearly marked for user to fill in), simple call-to-action layout.
14. `src/features/home/index.ts` (new) — barrel export for the 6 section components (mirrors `src/components/index.ts` pattern).

### Phase 4: Assembly (depends on Phases 1-3)
15. Rewrite `src/pages/HomePage.jsx` — compose `<Navbar />` + `<main>` containing `<section id="hero" className="scroll-mt-20">...</section>` (and same pattern for about/skills/portfolio/experience/contact) in order Hero → About → Skills → Portfolio → Experience → Contact, plus a minimal footer (copyright + back-to-top). Remove `LiveClock` import/usage.
16. `src/App.jsx` — update wrapper div to theme-aware classes (e.g. `min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`).
17. `index.html` — update `<title>` (e.g. "Mridul Srivastava | Portfolio") and add a meta description.
18. `package.json` — add `framer-motion` dependency; run `npm install`.

## Relevant files
- `src/routes/AppRoutes.jsx` — reference only; confirms HashRouter constraint, no changes needed.
- `src/components/Navbar.tsx` — full rewrite.
- `src/pages/HomePage.jsx` — full rewrite.
- `src/features/resume/ResumeSkills.jsx`, `ResumeExpGroup.jsx`, `ResumeSummary.jsx` — style/data-shape reference templates.
- `src/data/skills.json`, `src/data/experiences.json`, `src/data/resume.json` — existing data sources to reuse.
- `src/styles/tailwind.css`, `src/styles/variables.css` — palette + dark mode variant setup.
- `src/App.jsx`, `index.html`, `package.json` — small supporting edits.

## Verification
1. `npm install` succeeds (framer-motion added), `npm run dev` — manually check smooth in-page scroll for each nav link, sticky nav stays fixed while scrolling, no HashRouter navigation glitches.
2. Resize to mobile width (<640px) — hamburger opens/closes menu, links scroll and close menu.
3. Click theme toggle — verify colors switch, persists after page reload (localStorage), respects system preference on first load.
4. Navigate to `/resume` via nav link — confirm existing ResumePage still renders/functions unaffected.
5. `npm run lint` — no new errors. `npm run build` — production build succeeds.
6. Quick contrast check of sunset palette text/background combos in both light and dark themes.

## Scope boundaries
- Included: Hero/About/Skills/Portfolio/Experience/Contact sections, sticky+responsive Navbar w/ hamburger, dark/light toggle, sunset palette, smooth scroll, placeholder projects data, framer-motion animations.
- Excluded: real project content/images (placeholders only), functional/backend contact form, changes to ResumePage behavior, switching HashRouter->BrowserRouter, SEO/analytics, tests, Education section (not requested), i18n.
