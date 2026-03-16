# Mobile Design Steps: Horizontal Layouts

This document outlines new steps for creating a more horizontal-focused mobile navigation and browsing experience.

## 1. Implement Horizontal Carousels for Listings

On mobile devices, vertical scrolling can become tedious when browsing multiple properties or items. We should transition listing sections to a side-to-side swiping interaction pattern.

### Changes to Implement:
- Use the Shadcn UI `Carousel` component (powered by Embla).
- Apply it to the **Featured Properties** or real estate listings section.
- Instead of stacking property cards in a single vertical column (`grid-cols-1`) on mobile, wrap them in a `CarouselItem`.
- Set the `Carousel` to `align: "start"` or `align: "center"` depending on the visual preference.
- Ensure the property cards have a fixed width or specific flexible basis (e.g., `basis-[85%]`) so that the next card "peeks" onto the screen, hinting to the user that they can swipe horizontally.

## 2. Horizontal Scroll Containers (Alternative Approach)

If a full carousel is too complex or heavy for a specific feature, use native CSS horizontal scrolling.

### Changes to Implement:
- Create a container with `flex flex-row overflow-x-auto snap-x snap-mandatory`.
- Apply `snap-center` or `snap-start` to the child elements.
- Hide the scrollbar visually using utility classes for a cleaner look (`scrollbar-hide` or `[&::-webkit-scrollbar]:hidden`).
- Ensure adequate touch padding `px-4` or `px-6` at the start and end of the scrolling container.
