---
name: typography-system
description: >-
  Typography scales, font family hierarchy, monospace syntax readability, and responsive
  line-height ergonomics for technical documentation.
---

# Typography System Skill

This skill establishes the typographic hierarchy, font selection, and reading comfort parameters.

## Font Stacks
1. **Body & Interface Typography (`font-sans`):**
   ```css
   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
   ```
   Provides native, razor-sharp font rendering across macOS, Windows, Linux, iOS, and Android without external web-font loading lag.

2. **Code & Syntax Typography (`font-mono`):**
   ```css
   font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   ```
   Features unambiguous glyph distinctions (0 vs O, 1 vs l vs I) and tabular figures for aligned code indentation.

## Type Scale & Hierarchy
- **Page Display (Hero):** `text-4xl sm:text-5xl lg:text-6xl`, `font-extrabold`, `tracking-tight`
- **Topic Title (H1):** `text-3xl sm:text-4xl`, `font-extrabold`, `tracking-tight`
- **Section Heading (H2):** `text-xl sm:text-2xl`, `font-bold`, `tracking-tight`
- **Subsection Heading (H3):** `text-base sm:text-lg`, `font-semibold`
- **Body Prose:** `text-sm sm:text-base`, `leading-relaxed` (1.625 line height for optimal eye scanning)
- **Code Blocks & Syntax:** `text-xs sm:text-sm`, `leading-relaxed`
- **Meta Badges & Pills:** `text-[10px] sm:text-xs`, `font-bold`, `tracking-wider`, `uppercase`

## Reading Width Constraint
All long-form educational prose is constrained to `max-w-4xl` (approximately 75–80 characters per line) to prevent eye fatigue on wide screens.
