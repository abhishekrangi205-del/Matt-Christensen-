# Implementation Plan — Metadata & Social Previews

**Project:** Home Haven — Parikshit Patel, Selling Sudbury  
**Focus:** Replace generic/bolt URL previews with a real website snapshot and implement complete, robust metadata (including social).

**Implementation completed.** `index.html` has been updated with full metadata; `public/og-image.png` is the social preview image. If your production domain is not `parikshitpatel.vercel.app`, replace that domain in `index.html` for `og:url`, `og:image`, `twitter:image`, `canonical`, and the JSON-LD `url`.

---

## Current State

- **Open Graph image:** Points to `https://lovable.dev/opengraph-image-p98pqg.png` (generic/bolt preview).
- **Twitter image:** Same external URL; `twitter:site` is `@lovable` (placeholder).
- **Existing:** Title, description, author, `og:title`, `og:description`, `og:type`, `canonical` are already set and aligned with “Selling Sudbury” / Greater Sudbury.

---

## Goal

1. **Social preview image:** Use a snapshot of the actual website (or a branded image derived from it) instead of the bolt/generic preview.
2. **Metadata:** Have a single, authoritative checklist so all important meta tags and social tags are complete and correct.

---

## Part 1 — Social Preview Image (Snapshot of the Website)

### 1.1 What “Snapshot” Means

- **Option A — Live screenshot:** Capture the real homepage (e.g. hero + “Selling Sudbury”) using a screenshot tool or service.
- **Option B — Designed OG image:** Create a 1200×630 image that matches the site (logo, slogan “Selling Sudbury”, brand colours) so it looks like “our” site even if not a pixel-perfect screenshot.
- **Option C — Hybrid:** Use a screenshot as base and overlay logo/slogan for consistency across devices.

Recommendation: Prefer **Option A or C** if the goal is “snapshot of our website”; use **Option B** if you want maximum control over text/readability in thumbnails.

### 1.2 Technical Requirements

- **Dimensions:** 1200×630 px (Open Graph / Facebook standard). Twitter supports the same for `summary_large_image`.
- **Aspect ratio:** 1.91:1.
- **Format:** PNG or JPG; keep file size reasonable (e.g. &lt; 1 MB) for fast loading in link previews.
- **Content:** No critical text near edges (some platforms crop). “Selling Sudbury” and branding should be clearly visible in the centre/safe area.

### 1.3 How to Obtain the Snapshot

- **Manual:** Deploy the site (e.g. Vercel), open the homepage, use browser DevTools device mode or a screenshot tool to capture at 1200×630 (or crop to that).
- **Automated:** Use a screenshot service (e.g. Vercel OG Image Generation, Puppeteer/Playwright, or a third-party API) to generate `og-image.png` (or similar) on build or on demand.
- **Design tool:** Create a 1200×630 canvas in Figma/Canva with hero background, logo, and “Selling Sudbury” text; export as PNG.

### 1.4 Where to Host the Image

- **Recommended:** Put the file in the project’s `public/` folder (e.g. `public/og-image.png`) so the site serves it. Then use an absolute URL in meta tags:
  - Production: `https://<your-vercel-domain>/og-image.png`
  - Ensure `index.html` (and any future entry points) use this URL for `og:image` and `twitter:image` so link previews show “our” snapshot instead of the bolt preview.

### 1.5 Implementation Steps (Non-Code Checklist)

- [ ] Decide: live screenshot vs designed image vs hybrid.
- [ ] Generate the image at 1200×630; ensure “Selling Sudbury” and branding are clear.
- [ ] Save as `og-image.png` (or agreed name) in `public/`.
- [ ] Deploy so the image is available at `https://<production-domain>/og-image.png`.
- [ ] Update `index.html`: set `og:image` and `twitter:image` to that production URL (no placeholder or lovable.dev URL).
- [ ] Validate with Facebook Sharing Debugger and Twitter Card Validator; fix any caching or redirect issues.

---

## Part 2 — Complete, Robust Metadata (Including Social)

### 2.1 Document & SEO Basics

- [ ] **Title:** Already set; keep under ~60 characters. Current: “Parikshit Patel | Selling Sudbury — Real Estate in Greater Sudbury”.
- [ ] **Meta description:** Already set; keep under ~155 characters. Reuse or refine for clarity and keywords (e.g. “Greater Sudbury”, “real estate”, “buying”, “selling”).
- [ ] **Author:** Already “Parikshit Patel”. Optional: add `meta name="copyright"` if desired.
- [ ] **Robots:** Add `meta name="robots" content="index, follow"` unless you have a reason to restrict (e.g. noindex for staging).
- [ ] **Canonical:** Already set to `/`. For single-page app, ensure it stays correct in production (e.g. no duplicate with/without trailing slash).
- [ ] **Language:** Already `lang="en"`. Add `og:locale` (e.g. `en_CA` for Canada) and optional `og:locale:alternate` if you add other languages later.

### 2.2 Open Graph (Facebook, LinkedIn, etc.)

- [ ] **og:title** — Already set; match or derive from `<title>`.
- [ ] **og:description** — Already set; match or derive from meta description.
- [ ] **og:type** — Already `website`.
- [ ] **og:image** — Replace with production URL of the new snapshot/OG image (Part 1).
- [ ] **og:image:width** — Optional: `1200`.
- [ ] **og:image:height** — Optional: `630`.
- [ ] **og:url** — Set to the production canonical URL (e.g. `https://<domain>/`).
- [ ] **og:site_name** — e.g. “Parikshit Patel Real Estate” or “Selling Sudbury”.
- [ ] **og:locale** — e.g. `en_CA` (Canada).
- [ ] **fb:app_id** — Optional; only if you use a Facebook app for insights.

### 2.3 Twitter Card

- [ ] **twitter:card** — Already `summary_large_image`; keep for large preview.
- [ ] **twitter:site** — Replace `@lovable` with the real Twitter/X handle (e.g. `@parikshitpatel` or the business handle), or remove if no account.
- [ ] **twitter:creator** — Optional: agent’s personal handle.
- [ ] **twitter:title** — Align with `og:title` (or omit; Twitter falls back to og:title).
- [ ] **twitter:description** — Align with `og:description` (or omit; Twitter falls back to og:description).
- [ ] **twitter:image** — Same production URL as `og:image` (the new snapshot).
- [ ] **twitter:image:alt** — Short alt text for the preview image (accessibility and some clients).

### 2.4 Additional Meta (Optional but Recommended)

- [ ] **theme-color** — e.g. brand/accent colour for mobile browser chrome.
- [ ] **format-detection** — Optional: `telephone=no` if you don’t want numbers auto-linked in some clients.
- [ ] **Favicon / app icons:** Ensure `favicon.ico` and optional `apple-touch-icon` exist in `public/` and are referenced in `<head>` so bookmarks and PWA-style usage look correct.

### 2.5 Structured Data (Optional)

- [ ] **JSON-LD:** Consider adding a `WebSite` or `LocalBusiness` / `RealEstateAgent` schema so search engines understand the business and region (Greater Sudbury). Can be added as a `<script type="application/ld+json">` in `index.html` or injected by the app.

### 2.6 Implementation Steps (Non-Code Checklist)

- [ ] Audit `index.html` against the list above; add any missing tags.
- [ ] Replace all placeholder/generic values (lovable.dev image, @lovable) with production URLs and real handles.
- [ ] Use one canonical production URL for `og:url`, canonical, and image URLs.
- [ ] Test with: Facebook Sharing Debugger, Twitter Card Validator, LinkedIn Post Inspector, and a generic “meta tag checker” for completeness.
- [ ] Document the chosen production URL and image path in `final implementations/README.md` or this file so future updates stay consistent.

---

## Part 3 — Summary Checklist

| Item | Status / Action |
|------|------------------|
| Social preview image is a real snapshot (or branded image) of the site | Replace lovable.dev image with `public/` asset and production URL |
| `og:image` and `twitter:image` point to that image | Update in `index.html` |
| `twitter:site` is real handle or removed | Replace `@lovable` |
| Title, description, author, canonical | Already set; verify and keep |
| `og:url`, `og:site_name`, `og:locale` | Add if missing |
| `twitter:image:alt` | Add for accessibility |
| `robots`, `theme-color`, favicon | Add as needed |
| Validate on Facebook, Twitter, LinkedIn | After deployment |

---

## File to Update

- **`index.html`** — All meta tags and optional JSON-LD live here (single-page app). No code changes required elsewhere for basic metadata; only ensure the production domain is used when going live.

---

*Last updated: March 2025*
