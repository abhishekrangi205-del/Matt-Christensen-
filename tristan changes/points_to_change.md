# Change Points for Tristan Ritchie

This document outlines the locations and types of changes required to rebrand the "Selling Sudbury / Parikshit Patel" application for **Tristan Ritchie**.

## 1. Metadata & SEO
Changes required in `index.html` to update page titles, descriptions, and schema data.

- [x] **File**: `index.html`
    - [x] Update `<title>` (line 6)
    - [x] Update `<meta name="description">` (line 7)
    - [x] Update `<meta name="author">` (line 8)
    - [x] Update `<meta name="copyright">` (line 9)
    - [x] Update Open Graph tags (`og:title`, `og:description`, `og:site_name`) (lines 14-21)
    - [x] Update Twitter tags (lines 26-27)
    - [x] Update JSON-LD schema (lines 40-53)

## 2. Branding & Content
The client's name and location appear in several components.

- [x] **File**: `src/components/Navigation.tsx`
    - Update logo/brand name.
- [x] **File**: `src/components/HeroSection.tsx`
    - Update main heading and subtext.
- [x] **File**: `src/components/AboutSection.tsx`
    - Update bio and profile text.
- [x] **File**: `src/components/ContactSection.tsx`
    - Update contact details and location.
- [x] **File**: `src/components/Footer.tsx`
    - Update copyright and branding.
- [x] **File**: `src/components/Testimonials.tsx`
    - Update occurrences of the agent's name.
- [x] **File**: `src/components/PropertySearch.tsx`
    - Update search context (if location specific). (Verified: no name change needed)

## 3. Visual Identity (Theme)
Update the primary color scheme and fonts.

- [x] **File**: `src/index.css`
    - [x] Update CSS variables for colors (Lines 18-35). New theme: Midnight Sapphire.
    - [x] Update Fonts (Lines 1, 97, 102). (Kept current modern pairing as it works well with the new palette)
- [x] **File**: `tailwind.config.ts`
    - [x] Review any hardcoded theme extensions if any. (Verified: no changes needed)
- [x] **File**: `index.html`
    - [x] Update `<meta name="theme-color">` (line 11).

## 4. Assets
Replace image files in the `public` folder.

- [ ] **favicon.ico**: Update to new branding.
- [ ] **og-image.png**: Create new social share image.
- [ ] **parikshit-patel-about.png**: Replace with Tristan Ritchie's profile photo.
