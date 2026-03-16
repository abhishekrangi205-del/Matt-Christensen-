# Frontend Implementation Plan — Home Haven

Track progress on all frontend improvements. Check off items as you complete them.

---

## 1. Visual Identity & Branding

- [x] Replace hero placeholder with real hero image (agent photo, local skyline, or lifestyle shot)
- [x] Add gradient or overlay on hero image for text readability if needed
- [x] Increase global border radius (e.g. 0.25rem–0.375rem) for cards, buttons, inputs
- [x] Add accent underlines or bars on nav link hover and section titles
- [x] Add light/dark theme toggle in nav and wire to existing dark CSS variables

---

## 2. Hero Section

- [x] Add one-line trust badge (e.g. “Licensed Realtor • X years in [Area]”)
- [x] Add primary CTA button (e.g. “Schedule a consultation”) that scrolls to Contact
- [x] Add “Scroll to explore” or chevron at bottom of hero

---

## 3. Property Search

- [x] Improve empty state: add filter chips/dropdowns (price, beds, type) as UI-only
- [ ] Add “Featured” or “Sample listings” static cards, or “Tell us what you’re looking for” CTA
- [x] Add visible focus ring (accent) on search input
- [x] Add short line above/below search about off-market opportunities

---

## 4. Services Cards

- [x] Add subtle stagger or shadow on middle card for large screens
- [ ] Add “Learn more” link on cards that scrolls to Contact or services detail
- [x] Consider custom or alternate icon set for stronger branding

---

## 5. About Section

- [ ] Replace “Professional Headshot” placeholder with real or stock image
- [ ] Add optional horizontal accent under “About” label
- [x] Add optional stats row (years experience, transactions, areas served)

---

## 6. Testimonials

- [x] Add prev/next arrows for testimonial carousel
- [x] Add dot indicators for current testimonial
- [x] Add quote mark graphic or large opening quote in accent/muted
- [x] Add optional avatar placeholders or location/transaction type per quote

---

## 7. Contact Section

- [x] Add visible labels and aria attributes for form accessibility
- [ ] Add “We’ll respond within 24 hours” or similar reassurance line
- [x] Add contact details (email, phone) or hours in two-column layout on larger screens
- [ ] Add loading state on submit button (e.g. “Sending…” / spinner)

---

## 8. Footer

- [x] Make Contact and Follow links point to #contact and real/placeholder social URLs
- [x] Add muted background or stronger top border for visual separation
- [ ] Replace example email/phone with real or “Email me” / “Call me” links

---

## 9. Navigation

- [x] Highlight active section in nav based on scroll position
- [x] Animate mobile menu open/close (height or opacity)
- [x] Ensure focus trap in mobile menu and restore focus on close
- [ ] Consider solid accent style for “Schedule a Consultation” CTA on desktop

---

## 10. Global Polish

- [x] Ensure smooth scroll behavior for all anchor links
- [x] Add prefers-reduced-motion support (reduce or disable Framer Motion)
- [x] Ensure visible focus rings (accent) on all interactive elements
- [x] Set unique page title and meta description for sharing/bookmarks

---

## Quick Wins Summary

- [ ] Hero CTA button
- [ ] Testimonials prev/next + dots
- [ ] Light/dark theme toggle
- [ ] Hero and About real or stock images
- [ ] Slightly larger border radius + focus rings
- [ ] prefers-reduced-motion for animations
- [ ] Active nav state on scroll

---

*Last updated: March 2025*
