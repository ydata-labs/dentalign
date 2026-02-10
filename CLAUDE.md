# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Dentalijn** is a Next.js dental clinic website with TypeScript, deployed on **Cloudflare Workers** using OpenNext for full SSR support. The site is bilingual (Dutch/English) focused on dental services in Maasmechelen, Belgium.

## Build & Development Commands

```bash
# Development
pnpm dev              # Start dev server at http://localhost:3000

# Build & deployment
pnpm build            # Build Next.js application
pnpm preview          # Build and preview with Cloudflare Workers locally
pnpm deploy           # Build and deploy to Cloudflare Workers

# Code quality
pnpm lint             # Run ESLint
pnpm typecheck        # Run TypeScript type checking
```

**Package manager:** `pnpm` (not npm/yarn)

## Architecture

### Cloudflare Workers Deployment

- Runtime configured via `wrangler.toml`
- Custom image loader at `image-loader.ts` for Cloudflare image optimization
- Environment variables defined in `wrangler.toml` for production

### Component Architecture

**Layout System:**
- [Layout.tsx](components/layout/Layout.tsx) wraps all pages with Header, Footer, and BackToTop
- Uses dynamic imports with `ssr: false` for client-only features (Bootstrap, animations)
- AOS (Animate On Scroll) initialized in useEffect
- Mobile menu state managed via body class `mobile-menu-active`

**Page Composition Pattern:**
- Pages in `app/` compose sections from `components/sections/`
- Generic sections: `components/sections/[Section].tsx`
- Page-specific variants: `components/sections/[page-name]/[Section].tsx`

**Client-Side Initialization:**
- [ClientOnly](components/elements/ClientOnly.tsx) wrapper ensures DOM manipulation happens after hydration
- Bootstrap components loaded dynamically via `util/useBootstrap.ts`
- Animation hooks in `util/` (useRevealAnimation, useTextAnimation, etc.)

### Environment Configuration

All environment variables centralized in [util/config.ts](util/config.ts) with `NEXT_PUBLIC_` prefix:
- Contact info (phone, email, address, WhatsApp)
- Social media links
- EmailJS configuration for contact forms
- SEO verification codes (optional)

Production values are set in `wrangler.toml`.

### Styling

Global styles imported in [app/layout.tsx](app/layout.tsx):
- Bootstrap 5 CSS
- AOS animations
- Font Awesome icons
- Custom styles in `/public/assets/css/`

Font: Figtree (Google Fonts) weights 400, 500, 600, 700

## Form Handling

Contact forms in:
- [components/sections/Contact.tsx](components/sections/Contact.tsx) - Homepage
- [components/sections/contact/Section1.tsx](components/sections/contact/Section1.tsx) - Contact page

Forms use EmailJS with loading states, validation, success/error alerts, and auto-reset after 5 seconds.

## SEO

- Structured data component: [components/seo/StructuredData.tsx](components/seo/StructuredData.tsx)
- Dynamic sitemap: [app/sitemap.ts](app/sitemap.ts)
- Dynamic robots.txt: [app/robots.ts](app/robots.ts)
- Metadata in page files with location-focused titles (Maasmechelen)

See [SEO-IMPROVEMENTS.md](SEO-IMPROVEMENTS.md) for complete SEO documentation.

## Known Issues

### Hydration Warnings
- `suppressHydrationWarning` on `<html>` and `<body>` tags handles browser extension interference
- Animation components wrapped in `ClientOnly` to prevent server/client mismatches

