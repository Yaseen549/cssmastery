# DESIGN_TOKENS.md — Design Tokens & Styling Standards

The Complete CSS Learning Platform uses a distinctive, modern **CSS Blue brand palette** harmonizing with the architectural shell of the sibling HTML platform while establishing an authoritative visual identity for CSS.

---

## 1. Primary Brand Palette (CSS Blue & Cyan Accents)

| Token | Hex Value | Tailwind Utility | Primary Usage |
| :--- | :--- | :--- | :--- |
| `brand-50` | `#EFF6FF` | `bg-brand-50`, `text-brand-50` | Soft blue highlights, active navigation background |
| `brand-100` | `#DBEAFE` | `bg-brand-100` | Hover states on light pills |
| `brand-200` | `#BFDBFE` | `border-brand-200` | Card borders, badge outlines, divider lines |
| `brand-300` | `#93C5FD` | `border-brand-300` | Focus rings, elevated card borders |
| `brand-400` | `#60A5FA` | `text-brand-400` | Dark-mode icons, secondary emphasis |
| `brand-500` | `#3B82F6` | `bg-brand-500`, `text-brand-500` | **Primary CSS Blue** (buttons, active pills, logo badge) |
| `brand-600` | `#2563EB` | `bg-brand-600`, `text-brand-600` | Hover states, active links, primary emphasis |
| `brand-700` | `#1D4ED8` | `text-brand-700` | High-contrast heading accents |
| `brand-800` | `#1E40AF` | `text-brand-800` | Dark contrast text |
| `brand-900` | `#1E3A8A` | `text-brand-900` | Deep contrast text |
| `brand-950` | `#172554` | `bg-brand-950` | Dark mode active badge background |

---

## 2. Surface & Layout Tokens

### Light Theme
- **Canvas Background:** `#F8FAFC` (Slate 50)
- **Card Surface:** `#FFFFFF` (Pure White)
- **Borders:** `#E2E8F0` (Slate 200)
- **Primary Text:** `#0F172A` (Slate 900)
- **Secondary Text:** `#64748B` (Slate 500)
- **Active Navigation:** Blue tinted background (`bg-brand-50 text-brand-700`)

### Dark Theme
- **Canvas Background:** `#0B1120` (Deep Blue Slate 950)
- **Card Surface:** `#111827` (Gray 900)
- **Elevated Surface:** `#1E293B` (Slate 800)
- **Borders:** `#334155` (Slate 700)
- **Primary Text:** `#F8FAFC` (Slate 50)
- **Secondary Text:** `#94A3B8` (Slate 400)
- **Active Navigation:** Subtle blue background (`bg-brand-950/70 text-brand-300`)
