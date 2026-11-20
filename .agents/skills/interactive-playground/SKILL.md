---
name: interactive-playground
description: >-
  Architecture and implementation guide for the standalone /playground CSS Lab,
  sandboxed iframe execution, real-time style injection, and responsive preview toggles.
---

# Interactive Playground Skill

This skill governs the interactive CSS Lab workspace located at `/playground` and embeddable live demonstration sandboxes.

## Mandatory Directives
> **The CSS Playground supports HTML and CSS only. User-authored JavaScript execution is not supported. Never introduce JavaScript execution functionality into the playground.**

## Core Architecture
- **Sandboxed Execution Boundary:** Live preview executes inside an `<iframe>` configured with:
  ```html
  <iframe sandbox="" srcDoc={bundledHtml} />
  ```
  Native browser sandbox disables all JavaScript execution, form submission, and top-level navigation.
- **Defensive Pre-Processing:**
  - `<script>` tags are completely stripped before rendering.
  - Inline event handlers (`onclick`, `onload`, `onerror`) are converted to `data-blocked-event="true"`.
- **Dual-Pane Editor:**
  - `styles.css` editor tab (primary).
  - `index.html` markup editor tab.
  - Real-time debounced compilation (updates preview within 150ms of typing).
  - Zero console panel overhead, providing 144px more vertical preview space.
- **Responsive Viewport Controls:**
  - Desktop: 100% fluid width.
  - Tablet: Pinned to 768px container.
  - Mobile: Pinned to 375px container.
  - Custom: Interactive slider (320px–1200px).
  - Fullscreen preview toggle.

## Utility Actions
- **Reset:** Restores original code template.
- **Copy:** Quick copy for HTML, CSS, or bundled document.
- **Download:** Exports individual `index.html`, `styles.css`, or combined `.html`.
- **Save / Load:** Local storage persistence for custom experiments.

## Starter Templates (Pure HTML + CSS)
Provide immediate interactive value with pre-configured templates:
1. Modern Flexbox Header & Navigation.
2. Responsive CSS Grid Card Deck.
3. Glassmorphic Modal & Backdrop Filter.
4. Smooth Keyframe Animated CTA Button.
5. Container Query Product Card.
6. Neumorphic Card & Switch.
7. Pure CSS Tooltip System.
8. CSS-Only Dark Mode Toggle.
9. CSS Parallax Scrolling Card.
10. Pure CSS Interactive Accordion (using `<details>` and `<summary>`).
