# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Espresso Academy** website - a Next.js 16 application showcasing espresso machine models and their tutorial content. Built with the App Router architecture, TypeScript, React 19, and Tailwind CSS 4.

## Development Commands

**Start development server:**
```bash
npm run dev
```
The app runs at http://localhost:3000 with hot-reload enabled.

**Build for production:**
```bash
npm run build
```

**Start production server:**
```bash
npm start
```
Must run `npm run build` first.

**Lint code:**
```bash
npm run lint
```

## Architecture

### Next.js App Router Structure

**Pages:**
- `app/layout.tsx` - Root layout defining HTML structure, fonts (Geist Sans & Geist Mono), and metadata
- `app/page.tsx` - Homepage (Client Component) with machine models grid and mobile navigation
- `app/models/[slug]/page.tsx` - Dynamic model detail pages (Client Component) showing tutorials for each machine
- `app/globals.css` - Global styles with Tailwind CSS imports and custom color variables

**Components:**
- `components/Footer.tsx` - Reusable footer component with three columns (About, Links, Social Media)

**Data:**
- `lib/models.ts` - TypeScript data structure containing:
  - Machine models (6 espresso machines: X580 D, E30, M50LT Black, 2601 Pro, K95L, Colet)
  - Tutorial data for each model (placeholder YouTube links)
  - Helper functions: `getModelBySlug()`, `getAllModelSlugs()`

**Assets:**
- `public/images/` - Contains 6 espresso machine product images (PNG/WebP format)

### Styling & Design

**Color Scheme:**
- Background: `#f5f1e8` (warm cream/beige)
- Foreground: `#2d2416` (dark brown text)
- Card background: `#ffffff` (white)
- Primary button: `#c4a574` (tan/gold)
- Button hover: `#b39464` (darker tan)
- Footer background: `#3d2817` (dark brown)
- Border: `#e5dfd0` (light beige)

**Tailwind CSS:**
- Tailwind CSS 4 with PostCSS integration
- Custom color variables defined in `globals.css` and exposed via `@theme` directive
- Fully responsive design using Tailwind breakpoints (mobile-first)
- Grid layouts: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

### Client Components

Both main pages use `"use client"` directive for interactive features:
- **Homepage (`app/page.tsx`)**: Mobile menu toggle state
- **Model pages (`app/models/[slug]/page.tsx`)**: Mobile menu toggle state
- Uses React `useState` hook for menu state management
- Uses React `use()` hook for unwrapping params Promise in model pages

### Mobile Navigation

**Features:**
- Hamburger menu button (☰) appears on mobile (< md breakpoint)
- Toggles to X icon when menu is open
- Slide-down menu with vertical navigation links
- Menu closes automatically when clicking a link
- Desktop: Horizontal navigation (always visible)
- Fully responsive using Tailwind `md:` breakpoint

### TypeScript Configuration

- Path alias `@/*` maps to root directory for clean imports
- Strict mode enabled
- Module resolution set to "bundler" for Next.js compatibility
- Type-safe interfaces for Machine Models and Tutorials

### Linting

- Uses flat ESLint config (`eslint.config.mjs`)
- Next.js recommended configs for TypeScript and Core Web Vitals
- Build artifacts (`.next/`, `out/`, `build/`) are ignored

## Key Conventions

- TypeScript strict mode is enforced
- React 19 syntax with `react-jsx` transform
- Font optimization handled by `next/font/google` for Geist fonts
- Image optimization via `next/image` component with responsive sizes
- Client components required for interactive features (mobile menu)
- Reusable components (Footer) for consistency across pages

## Content Management

To update tutorial content:
1. Edit `lib/models.ts`
2. Update `youtubeUrl` fields with actual YouTube video links
3. Add/remove tutorial objects from the `tutorials` array
4. Customize tutorial titles, categories, durations, and difficulty levels

To add new machine models:
1. Add product image to `public/images/`
2. Add new model object to `machineModels` array in `lib/models.ts`
3. Include model details (id, name, slug, image path, tutorials)
4. Dynamic routes will automatically generate pages for new models
