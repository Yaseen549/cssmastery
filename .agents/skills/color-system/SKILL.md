---
name: color-system
description: >-
  Semantic color token system, dual-mode contrast rules, and palette specifications
  harmonizing with the warm amber/orange suite while providing CSS-specific accent clarity.
---

# Color System Skill

This skill documents the semantic color tokens, surface hierarchy, and contrast compliance for light and dark themes.

## Brand Palette Specification (Warm Amber / Orange / Coral)
Harmonizes with the sibling `HTML` and `Website-CProgramming` platforms while presenting CSS-specific clarity:

| Token | Hex | Tailwind Class | Primary Usage |
|---|---|---|---|
| `brand-50` | `#FFF7ED` | `bg-brand-50`, `text-brand-50` | Active pills, soft callout surfaces |
| `brand-100` | `#FFEDD5` | `bg-brand-100` | Pill hover state on light theme |
| `brand-200` | `#FED7AA` | `border-brand-200` | Badge outlines, subtle dividers |
| `brand-300` | `#FDBA74` | `border-brand-300` | Focus rings, elevated card borders |
| `brand-400` | `#FB923C` | `text-brand-400` | Dark-mode icons, secondary emphasis |
| `brand-500` | `#F97316` | `bg-brand-500`, `text-brand-500` | Primary brand orange, buttons, active dots |
| `brand-600` | `#EA580C` | `bg-brand-600`, `text-brand-600` | Hover states, active links, primary headers |
| `brand-700` | `#C2410C` | `text-brand-700` | High-contrast heading accents on light canvas |
| `brand-800` | `#9A3412` | `text-brand-800` | Dark contrast text |
| `brand-900` | `#7C2D12` | `text-brand-900` | Deep contrast text |
| `brand-950` | `#431407` | `bg-brand-950` | Dark mode active badge background |

## Surface Neutrals
- **Light Theme:**
  - Canvas: `#FAFAF9` (Stone Canvas)
  - Card Surface: `#FFFFFF` (Pure White)
  - Text Primary: `#18181B` (Zinc 900)
  - Text Muted: `#71717A` (Zinc 500)
  - Borders: `#E4E4E7` (Zinc 200)
- **Dark Theme:**
  - Canvas: `#18181B` (Zinc 900)
  - Card Surface: `#27272A` (Zinc 800)
  - Text Primary: `#F4F4F5` (Zinc 100)
  - Text Muted: `#A1A1AA` (Zinc 400)
  - Borders: `#3F3F46` (Zinc 700)

## Contrast & Accessibility Rules
- All body prose must meet WCAG AA minimum 4.5:1 contrast against its background.
- Interactive controls must have a visible focus outline (`ring-2 ring-brand-500`).
- Never rely solely on color to convey state (pair with icons or textual badges).
