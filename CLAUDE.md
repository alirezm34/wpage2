# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Aussie Rate Insights** — a static informational site about Australian term deposits, fixed income, and savings rates. Deployed on Vercel.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

**Pages (App Router):**
- `/` — main single-page article with hero, content grid (article + aside), and contact section
- `/privacy` — Privacy Policy
- `/terms` — Terms of Use
- `robots.ts` / `sitemap.ts` — SEO metadata routes

**Components** (`components/`):
- `Header` — sticky nav with anchor links (`/#guide`, `/#insights`, `/#about`, `/#contact`)
- `Footer` — disclaimer, Privacy/Terms links
- `NewsletterForm` — client component; currently only client-side state (no backend integration)
- `CookieConsent` — client component; stores acceptance in `localStorage` under key `ari_cookie_consent`

## Styling Conventions

Styling uses a hybrid approach — **do not introduce a third approach**:
1. **CSS custom properties** defined in `globals.css` for design tokens (`--navy`, `--accent`, `--bg`, `--surface`, `--border`, `--text`, `--text-muted`, `--text-light`, etc.)
2. **Global utility classes** in `globals.css`: `.wrap` (max-width container), `.card`, `.card-muted`, `.pill`
3. **Inline styles** for component-specific layout and sizing (the dominant pattern in this codebase)
4. Tailwind is imported but minimally used — prefer inline styles + CSS variables to match existing patterns

**Fonts:** `var(--font-display)` = Cormorant Garamond (headings/display), `var(--font-body)` = Nunito Sans (body text). Loaded from Google Fonts in `globals.css`.

## Pending / Stubbed Integrations

- **Meta Pixel** — script is in `layout.tsx` but `fbq('init', ...)` calls are commented out; replace `YOUR_PIXEL_ID` to activate
- **Newsletter form** — `NewsletterForm.tsx` submits locally only; needs a real endpoint (e.g. Mailchimp, ConvertKit)
- **Facebook domain verification** — commented out in `layout.tsx` `metadata.other`

## SEO

`metadataBase` is `https://aussierateinsights.com`. All OG/Twitter metadata, sitemap, and robots config target this domain. Update `sitemap.ts` when adding new pages.
