---
name: accessibility
description: >-
  Accessibility standards, ARIA landmark roles, keyboard navigation, focus management,
  and color contrast validation adhering to WCAG 2.1 AA.
---

# Accessibility Skill

This skill enforces universal access, assistive technology compatibility, and keyboard navigation.

## Mandatory Directives
1. **Semantic HTML Landmarks:**
   - `<nav aria-label="Breadcrumb">`
   - `<nav aria-label="Main Navigation">`
   - `<main id="reading-canvas">`
   - `<aside aria-label="Demonstration Workbench">`
   - `<footer role="contentinfo">`
2. **Keyboard Navigation & Focus Management:**
   - Global command palette search triggered by `Ctrl+K` and `Cmd+K`.
   - Modals and mobile drawers trap focus and close on `Escape`.
   - All interactive elements (`<button>`, `<a>`, `<input>`) have visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand-500`).
3. **Contrast Compliance:**
   - Minimum 4.5:1 contrast for normal prose against both light and dark backgrounds.
   - Minimum 3:1 contrast for user interface controls and large headings.
4. **Reduced Motion Support:**
   - Respect `@media (prefers-reduced-motion: reduce)` in animations and transitions.
   - Interactive demos with continuous motion must provide a pause/stop toggle.
5. **Screen Reader Text:**
   - Icon-only buttons must include `aria-label` (e.g. `aria-label="Copy code to clipboard"`).
