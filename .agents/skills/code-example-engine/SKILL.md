---
name: code-example-engine
description: >-
  Standards for server-side Shiki pre-highlighting, copy-to-clipboard interactivity,
  CSS/HTML demo pairing, and code readability.
---

# Code Example Engine Skill

This skill dictates how CSS and HTML code examples are generated, formatted, pre-highlighted, and made interactive.

## Server-Side Highlighting Pipeline
- Highlighting is executed exclusively on the server using **Shiki** (`lib/shiki.js`) with the `github-dark` theme.
- Produces pre-rendered static HTML with inline styles for zero runtime JavaScript overhead during lesson reading.
- Languages supported: `'css'`, `'html'`, `'javascript'`, and `'shell'`.

## Code Block Component Requirements (`CodeBlock.jsx`)
1. **Header Bar:**
   - Display file name or descriptive label (e.g. `styles.css`, `HTML Markup`).
   - Language pill badge (e.g. `CSS`, `HTML`).
   - One-click copy button with 2-second visual confirmation ("Copied!").
2. **Body:**
   - High-contrast background (`#18181b` / `#09090b`).
   - Horizontal scroll container with custom slim scrollbar.
   - Clean indentation (2 spaces standard).
3. **Copy Hygiene:**
   - The clipboard string must strictly contain raw source code without UI headers or line numbers.

## Paired Code and Preview Pattern
Every code block demonstrating a layout or visual styling must include a paired preview payload consumed by the Right-Side Workbench or in-lesson preview card.
