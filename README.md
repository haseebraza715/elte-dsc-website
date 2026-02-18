## Data Science Club Website

Landing site for the ELTE Data Science Club, highlighting who we are, events, projects, members, and resources. Built with Vite + React + Tailwind CSS v4; home sections (Welcome, About, Members, Contact) are lazy-loaded for faster initial paint.

### Quick Start
- Install: `npm install`
- Dev: `npm run dev` (default 5173; adjust `server.port` in `vite.config.js`)
- Build: `npm run build`

### Design System

The site uses a dark theme with the following design tokens defined in `src/index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-base` | `#09090B` | Page background |
| `--color-bg-surface` | `#131316` | Cards, elevated surfaces |
| `--color-accent` | `#6366F1` | Primary accent (indigo) |
| `--color-accent-hover` | `#818CF8` | Hover state accent |
| `--color-text-primary` | `#FAFAFA` | Headings, primary text |
| `--color-text-secondary` | `#A1A1AA` | Body text |
| `--color-text-muted` | `#52525B` | Subtle text |

**Typography**: Syne (display/headings) + DM Sans (body), loaded via Google Fonts.

**Key CSS classes**: `.glass-card`, `.glass-nav`, `.btn-premium`, `.btn-secondary`, `.text-gradient`, `.section-label`, `.section-container`.

### Project Structure

```
src/
  components/     # Reusable UI components
    Header.jsx      # Fixed navigation with mobile overlay
    Footer.jsx      # Site footer
    Welcome.jsx     # Hero section
    About.jsx       # About section
    Members.jsx     # Team members grid
    Contact.jsx     # Contact info + CTA
    Events.jsx      # 9-week program timeline + gallery
    Projects.jsx    # Project cards
    Resources.jsx   # Learning resources by level
    WeeklyChallenges.jsx  # Upcoming challenges placeholder
    SEO.jsx         # Meta tags per page
    ScrollToTop.jsx # Scroll reset on route change
  pages/          # Route-level page wrappers
    Home.jsx        # / (Welcome + About + Members + Contact)
    Events.jsx      # /event
    Projects.jsx    # /project
    Resources.jsx   # /resources
    Members.jsx     # /members
    Challenges.jsx  # /challenges
  content/        # JSON data files for site content
  images/         # Member photos and gallery images
  index.css       # Design system, global styles, animations
  App.jsx         # Router, layout shell, lazy loading
```

### Navigation
- Hash links (`/#about`, `/#contact`) smooth-scroll to sections on the home page.
- Route changes reset scroll to top to avoid landing mid-page when switching screens.
- Sub-pages (`/event`, `/project`, `/resources`, `/challenges`, `/members`) each render a single section component.

### Spacing Convention
- `.section-container` handles horizontal padding and max-width only (no vertical padding).
- Each `<section>` controls its own vertical padding via Tailwind classes.
- Sub-page first sections use `pt-32` (128px) to clear the fixed header.
- Home page mid-sections use `py-24 sm:py-32` for consistent rhythm.

### Tech Stack
- React 18 + Vite 7
- React Router v6 for routing + hash handling
- Tailwind CSS v4 with `@theme` directive for design tokens
