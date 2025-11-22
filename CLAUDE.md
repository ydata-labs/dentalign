# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Dentalign**, a Next.js-based dental clinic website built with TypeScript. The project is configured for **Server-Side Rendering (SSR)** deployed on **Cloudflare Workers** using OpenNext. The site is bilingual (Dutch/English) focused on dental services including cosmetic dentistry and dental implants.

## Build & Development Commands

```bash
# Development server
pnpm dev          # Start dev server at http://localhost:3000

# Build & deployment
pnpm build        # Build Next.js application
pnpm start        # Preview production build locally
pnpm preview      # Build and preview with Cloudflare Workers
pnpm deploy       # Build and deploy to Cloudflare Workers

# Code quality
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
```

**Note:** This project uses `pnpm` as the package manager. Deployment uses `@opennextjs/cloudflare` to run Next.js on Cloudflare Workers with full SSR support.

## Architecture

### SSR & Cloudflare Workers Configuration

The Next.js project is configured for server-side rendering on Cloudflare Workers:
- **Runtime:** Cloudflare Workers via `@opennextjs/cloudflare`
- **Worker config:** `wrangler.toml` with caching rules for static assets
- **Image optimization:** Custom Cloudflare image loader (`image-loader.ts`)
- **Full SSR support:** API routes, dynamic rendering, and middleware available

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

```bash
# Contact information
NEXT_PUBLIC_PHONE
NEXT_PUBLIC_WHATSAPP
NEXT_PUBLIC_EMAIL
NEXT_PUBLIC_ADDRESS

# Social media links
NEXT_PUBLIC_FACEBOOK
NEXT_PUBLIC_LINKEDIN
NEXT_PUBLIC_INSTAGRAM
NEXT_PUBLIC_YOUTUBE
NEXT_PUBLIC_TWITTER
NEXT_PUBLIC_PINTEREST
NEXT_PUBLIC_GOOGLE_PLUS
NEXT_PUBLIC_BLOGSPOT

# EmailJS configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# SEO verification codes (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
NEXT_PUBLIC_BING_SITE_VERIFICATION
NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
```

The `.env` file is already configured with business information. Copy `env-example` to `.env.local` for local development if needed.

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
- Base styles from `/public/assets/css/style.css`
- **Custom polish styles** from `/public/assets/css/custom-polish.css`

Font: Figtree (Google Fonts) with weights 400, 500, 600, 700

#### Custom UI Polish (custom-polish.css)

Modern enhancements include:
- **Form inputs**: Smooth transitions, focus states with blue glow, validation colors (green/red)
- **Buttons**: Hover lift effect, ripple animation, loading spinner, shadow depth
- **Alerts**: Gradient backgrounds, slide-in animation, icon indicators with badges
- **Cards**: Rounded corners, soft shadows, hover lift effects
- **Links**: Smooth color transitions, slide-right on hover
- **Header**: Backdrop blur when sticky, enhanced shadow
- **Accessibility**: Focus-visible outlines, ARIA-compliant states
- **Responsive**: Mobile-optimized font sizes (16px to prevent iOS zoom)

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

## Form Handling

Contact forms are located in:
- `components/sections/Contact.tsx` - Homepage contact section
- `components/sections/contact/Section1.tsx` - Dedicated contact page

Both forms use EmailJS for email delivery and implement:
- **Loading states**: Button shows "Bezig met verzenden..." during submission
- **Success/error feedback**: Bootstrap alerts display submission status
- **Form validation**: HTML5 validation with custom patterns and minimum lengths
- **Disabled states**: All inputs disabled during submission to prevent double-submission
- **Accessibility**: ARIA labels and busy states for screen readers
- **Auto-reset**: Success messages auto-dismiss after 5 seconds

EmailJS configuration uses environment variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

## SEO Implementation

### Structured Data (Schema.org)
- **Component:** `components/seo/StructuredData.tsx`
- **Types implemented:**
  - Dentist (LocalBusiness)
  - MedicalBusiness with specialties
  - Organization with contact points
  - WebSite schema
  - Service catalog with offerings

### Meta Tags & Social
- **metadataBase:** https://dentalign.be
- **Location-focused:** All titles include "Maasmechelen" for local SEO
- **Open Graph:** Complete implementation with images
- **Twitter Cards:** Large image format
- **Canonical URLs:** Prevent duplicate content
- **Hreflang:** nl-BE (primary), en-US (alternate)

### Search Engine Files
- **robots.ts:** Dynamic robots.txt generation (`app/robots.ts`)
- **sitemap.ts:** Dynamic sitemap with auto-updated lastmod dates (`app/sitemap.ts`)

See `SEO-IMPROVEMENTS.md` for complete SEO documentation and strategy.

## Known Issues & Fixes

### Hydration Warnings
The app uses `suppressHydrationWarning` on `<html>` and `<body>` tags (app/layout.tsx:102,106) to suppress warnings from browser extensions that inject attributes (e.g., password managers, Grammarly).

Animation components are wrapped in `ClientOnly` to ensure DOM manipulations only occur after client-side hydration, preventing server/client mismatches.
