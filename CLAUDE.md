# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Dentalign**, a Next.js-based dental clinic website built with TypeScript. The project is configured for static site generation (SSG) with static export output. The site is bilingual (Dutch/English) focused on dental services including orthodontics, cosmetic dentistry, and dental implants.

## Build & Development Commands

```bash
# Development server
pnpm dev          # Start dev server at http://localhost:3000

# Build & deployment
pnpm build        # Build static site (outputs to ./out directory)
pnpm start        # Preview production build

# Code quality
pnpm lint         # Run ESLint
```

**Note:** This project uses `pnpm` as the package manager. The project is configured for static export (`output: "export"` in next.config.mjs) with output directory set to `./out`.

## Architecture

### Static Export Configuration

The Next.js project is configured for static site generation:
- **Output directory:** `./out` (configured via `distDir` in next.config.mjs)
- **Output mode:** Static export (`output: "export"`)
- This means no server-side runtime features (API routes, ISR, middleware)

### Project Structure

```
app/                     # Next.js App Router pages
├── layout.tsx          # Root layout with SEO metadata and global styles
├── page.tsx            # Homepage composition
├── about/              # About page
├── service/            # Services page
├── contact/            # Contact page
├── team/               # Team page
└── [other-pages]/      # Additional route pages

components/
├── layout/             # Layout components (Header, Footer, MobileMenu)
├── sections/           # Page sections (Banner, Services, Team, etc.)
│   ├── [page-name]/   # Page-specific section variants
│   └── *.tsx          # Shared/reusable sections
└── elements/           # Reusable UI components (BackToTop, Pagination, etc.)

util/
├── config.ts           # Environment variable exports (contact info, social links)
├── useBootstrap.ts     # Bootstrap JS initialization
├── useAccordion.ts     # Accordion functionality
├── data-bg.ts          # Data background attribute handler
└── use*.ts             # Animation hooks (reveal, text animations)

public/assets/
├── css/                # Stylesheets (Bootstrap, AOS, custom styles)
└── img/                # Static images
```

### Component Architecture

**Layout System:**
- `components/layout/Layout.tsx` is the main layout wrapper that orchestrates all client-side functionality
- Initializes AOS (Animate On Scroll), animation hooks, and Bootstrap components
- Handles mobile menu state and scroll behavior
- All pages use this layout component which includes Header, Footer, and BackToTop

**Page Composition:**
- Pages in `app/` directory compose sections from `components/sections/`
- Each page imports only the sections it needs (see `app/page.tsx` for example)
- Sections are self-contained and can be reused across pages

**Section Variants:**
- Generic sections: `components/sections/[Section].tsx` (e.g., Banner.tsx, Services.tsx)
- Page-specific sections: `components/sections/[page-name]/[Section].tsx` (e.g., about/, service/, contact/)

### Environment Configuration

Environment variables are centralized in `util/config.ts` and prefixed with `NEXT_PUBLIC_` for client-side access:

```typescript
// Contact information
NEXT_PUBLIC_PHONE
NEXT_PUBLIC_EMAIL
NEXT_PUBLIC_ADDRESS

// Social media links
NEXT_PUBLIC_FACEBOOK
NEXT_PUBLIC_LINKEDIN
NEXT_PUBLIC_INSTAGRAM
NEXT_PUBLIC_YOUTUBE
NEXT_PUBLIC_TWITTER
NEXT_PUBLIC_PINTEREST
NEXT_PUBLIC_GOOGLE_PLUS
NEXT_PUBLIC_BLOGSPOT
NEXT_PUBLIC_WHATSAPP
```

Copy `env-example` to `.env.local` and fill in values before development.

### Client-Side Features

The Layout component (`components/layout/Layout.tsx`) initializes multiple client-side features:
- **AOS:** Scroll animations via aos package
- **Bootstrap:** Dynamically loaded bootstrap components (tooltips, dropdowns, etc.)
- **Custom animations:** Text reveal animations and accordion behaviors via custom hooks
- **Data backgrounds:** Background images set via data attributes

All animation hooks are located in `util/` and automatically run on component mount.

### Styling

Global styles are imported in `app/layout.tsx`:
- Bootstrap CSS
- AOS animations
- Font Awesome icons
- Custom styles from `/public/assets/css/`

Font: Figtree (Google Fonts) with weights 400, 500, 600, 700

### SEO Structure

- Metadata configured in `app/layout.tsx` for site-wide defaults
- Individual pages override metadata for page-specific SEO
- OpenGraph and Twitter card metadata included
- Bilingual support (nl_BE primary, en_US alternate)
- Canonical URLs and language alternates configured

### TypeScript Configuration

- Path alias `@/*` maps to root directory
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (Next.js App Router)
