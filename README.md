## Data Science Club Web App

Landing site for the ELTE Data Science Club, highlighting who we are, events, projects, members, and resources. Built with Vite + React and utility-first styling; home sections (Welcome, About, Contact) are lazy-loaded for faster initial paint.

### Quick Start
- Install: `npm install`
- Dev: `npm run dev` (default 5173; adjust `server.port` in `vite.config.js`)
- Build: `npm run build`

### Navigation
- Hash links (`/#about`, `/#contact`) smooth-scroll to sections on the home page.
- Route changes reset scroll to top to avoid landing mid-page when switching screens.

### Tech Stack
- React + Vite
- React Router for routing + hash handling
- Tailwind-style utility classes for styling
