# AGENTS.md — Complete CSS Learning Platform
## Architectural Guidelines, Engineering Standards & Development Directives

This document defines the architectural conventions, design tokens, UI parity standards, and engineering rules for the **Complete CSS Learning Platform**. All developers and AI agents working in this repository must adhere strictly to these rules.

---

## 1. Core Principles & Non-Negotiable Directives

1. **Strict JavaScript Standard (No TypeScript):**
   - Strictly write standard Modern JavaScript (`.js`, `.jsx`).
   - Do **NOT** create `.ts` or `.tsx` files under any circumstances.
2. **Zero Placeholder Content:**
   - Every single lesson must be complete, technically rigorous, and pedagogically sound.
   - Zero "TODO", zero "coming soon", zero truncated lists, and zero summarizing.
   - Every lesson must follow the mandatory 18-part lesson structure.
3. **UI Parity with HTML Platform with CSS Blue Brand Identity:**
   - Layout architecture matches the proven clean design of the sibling HTML platform (`Header.jsx`, `DocShell.jsx`, `Sidebar.jsx`, sticky `h-14` header with `max-w-7xl mx-auto`).
   - Brand identity: **Crisp CSS Blue** (`#3B82F6` / `#2563EB`) replacing the warm orange of HTML.
   - Header navigation sequence: `CSS Logo | Home | Learn CSS | Reference | Visualizers | Playground | Search | Theme`.
4. **Interactive Workbench & Dedicated HTML/CSS /playground:**
   - Visual CSS requires interactive demos in every lesson's right workbench.
   - **Playground Mandate:** The CSS Playground supports HTML and CSS only. User-authored JavaScript execution is not supported. Never introduce JavaScript execution functionality into the playground.
   - Standalone `/playground` provides a fast, isolated coding environment featuring two dedicated tabs (`styles.css` and `index.html`).
   - Strict security: Native `sandbox=""` (zero script permissions), strict Content Security Policy (`default-src 'none'`, `connect-src 'none'`), script stripping, inline event neutralization, and 100% client-side compilation.
5. **No External Backend / 100% Client-Side Independence:**
   - Next.js (App Router) static site generation (`generateStaticParams`).
   - Highlighting performed server-side with **Shiki** (`github-dark` theme).
   - Learning progress, bookmarks, and saved playgrounds persisted in browser `localStorage`.
6. **Protection of Sibling Projects:**
   - Never modify, overwrite, or delete files in `../HTML` or `../Website-CProgramming`.

---

## 2. Design Tokens & Color Palette

### Primary Brand Palette (CSS Blue & Cyan Accents)
| Token | Hex | Tailwind Utility | Primary Usage |
|---|---|---|---|
| `brand-50` | `#EFF6FF` | `bg-brand-50`, `text-brand-50` | Soft blue highlights, active navigation background |
| `brand-100` | `#DBEAFE` | `bg-brand-100` | Hover states on light pills |
| `brand-200` | `#BFDBFE` | `border-brand-200` | Card borders, badge outlines |
| `brand-300` | `#93C5FD` | `border-brand-300` | Focus rings, elevated borders |
| `brand-400` | `#60A5FA` | `text-brand-400` | Dark-mode icons, secondary emphasis |
| `brand-500` | `#3B82F6` | `bg-brand-500`, `text-brand-500` | **Primary CSS Blue** (buttons, active pills, logo) |
| `brand-600` | `#2563EB` | `bg-brand-600`, `text-brand-600` | Hover states, active links, primary emphasis |
| `brand-700` | `#1D4ED8` | `text-brand-700` | High-contrast heading accents |
| `brand-800` | `#1E40AF` | `text-brand-800` | Dark contrast text |
| `brand-900` | `#1E3A8A` | `text-brand-900` | Deep contrast text |
| `brand-950` | `#172554` | `bg-brand-950` | Dark mode active badge background |

### Surface Neutrals
- **Light Canvas Background:** `#F8FAFC` (Slate 50)
- **Light Surface:** `#FFFFFF` (Pure White)
- **Light Borders:** `#E2E8F0` (Slate 200)
- **Dark Canvas Background:** `#0B1120` (Slate 950 / Deep Blue Canvas)
- **Dark Surface:** `#111827` (Gray 900)
- **Dark Elevated Surface:** `#1E293B` (Slate 800)
- **Dark Borders:** `#334155` (Slate 700)
