# WORKBENCH_RULES.md — Interactive Demonstration & Playground Architecture

This document governs the interactive demonstration panels in the Right Workbench and the Standalone `/playground` CSS Lab.

## 1. Right Workbench Architectural Constraints
- **Placement:** Desktop screens (>= 1280px) display the sticky right workbench (`w-80 2xl:w-[420px]`).
- **Modes:** Dual-tab switching between **Live Demo** and **On This Page** (TOC scroll-spy).
- **Isolation:** Every demo must execute inside a sandboxed `<iframe>` with `sandbox=""` or minimal required preview sandbox and a strict CSP.
- **Cross-Linking:** Every demo sandbox provides a 1-click **"Experiment in Playground"** link to load the topic in `/playground`.

## 2. Standalone Playground Architecture & Directives
> **MANDATE:**
> The CSS Playground supports HTML and CSS only. User-authored JavaScript execution is not supported. Never introduce JavaScript execution functionality into the playground.

- **Tabs:** Strictly two tabs: `styles.css` (active by default) and `index.html`.
- **Zero Scripting:** User `<script>` tags are stripped via regex, and inline event handlers (`onclick`, etc.) are neutralized to `data-blocked-event="true"`.
- **Sandboxing:** The preview `<iframe>` is configured with `sandbox=""` (omitting `allow-scripts` entirely), natively disabling all browser JavaScript engines in the child browsing context.
- **CSP:** Strict Content Security Policy injected into the head:
  `default-src 'none'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; media-src data: blob:; connect-src 'none'; object-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none';`.
- **No Console:** The playground has no console drawer, no log interception (`console.log/warn/error`), and no `postMessage` telemetry.
- **Storage & Export:** Projects are persisted in `localStorage` under `{ id, title, updatedAt, html, css }`. Export options include copying HTML/CSS/bundle and downloading `index.html`, `styles.css`, or full `.html`.
