# Implementation Plan: Midnight Aurora Theme

We are transforming the application to the "Midnight Aurora" aesthetic. This is a deep, immersive dark mode with violet/cyan electric gradients.

## 1. Design Tokens & Configuration
**Objective**: Redefine the core color palette in Tailwind and CSS variables.

-   **Backgrounds**:
    -   `bg-main`: `#0B1120` (Obsidian/Deep Navy)
    -   `bg-card`: `#1E293B` (Slate 800)
    -   `bg-card-hover`: `#334155` (Slate 700)
-   **Text**:
    -   `text-main`: `#F8FAFC` (Slate 50)
    -   `text-muted`: `#94A3B8` (Slate 400)
-   **Accents**:
    -   `accent-primary`: `#8B5CF6` (Violet 500)
    -   `accent-secondary`: `#06B6D4` (Cyan 500)
    -   `accent-glow`: `#8B5CF6` (with opacity)
-   **Borders**:
    -   `border-color`: `#1E293B` (Slate 800)

## 2. Core Styles Update
**Objective**: Apply global defaults so the app is dark by default.

-   Update `tailwind.config.js` with new colors.
-   Update `src/index.css` to set `background-color` and `color` on the `body` tag.
-   Fix mobile text rendering issues (remove `color: inherit` overrides that might break dark mode contrast).

## 3. Layout Component Refactor
**Objective**: Update the main shell of the application.

-   **App.jsx**: Remove light mode gradients (`from-slate-50`, `via-white`). Replace with `bg-[#0B1120]` and a subtle background glow if needed.
-   **Header.jsx**: Switch to a dark, glassmorphic header (dark semi-transparent background, white text).
-   **Footer.jsx**: Update to match the dark theme.

## 4. Page & Component Polish
**Objective**: Fix individually hardcoded colors in key components.

-   **Home Page (Welcome.jsx)**:
    -   Update Hero section text to white.
    -   Update buttons to use the Violet->Cyan gradient.
    -   Fix any `bg-white` cards to be `bg-slate-800`.
-   **Cards (Projects, Challenges, Members)**:
    -   Ensure cards have dark backgrounds (`bg-slate-800`) and appropriate borders.
    -   Update text contrast.

## 5. Mobile Consistency (Turbo)
-   Ensure the theme looks exactly the same on mobile by verifying media queries in `index.css`.
