---
name: ui-design
description: >-
  Design guidelines for creating a premium educational website interface matching the
  Mac-window architecture, comfortable reading rhythm, visual hierarchy, and developer aesthetics.
---

# UI Design Skill

This skill defines the visual presentation, spatial geometry, and component layout standards for the CSS Learning Platform.

## Core Visual Architecture
The platform implements an expansive desktop-grade workspace container:
- **Wallpaper Canvas:** Fluid fixed backdrop gradient (`amber-600` to `orange-500` to `rose-600`) with ambient blurred glow orbs (`blur-3xl`).
- **Floating Application Window:** Centered card (`max-w-[1740px]`, `rounded-2xl md:rounded-3xl`, `shadow-2xl`).
- **Surface Elevation:**
  - Light mode: Pure white (`#FFFFFF`) card on stone canvas (`#FAFAF9`), zinc borders (`#E4E4E7`).
  - Dark mode: Zinc-800 (`#27272A`) card on zinc-900 canvas (`#18181B`), zinc-700 borders (`#3F3F46`).
- **Independent 3/4-Column Scrolling:**
  - Left navigation sidebar (`w-64 xl:w-72`) scrolls independently.
  - Center reading room (`flex-1 max-w-4xl xl:max-w-5xl`) scrolls independently.
  - Right demonstration workbench (`w-80 2xl:w-[420px]`) holds sticky preview or TOC.

## Design Rules & Constraints
1. **Never use generic mobile-first single-column desktop layouts.** Respect large monitors with expansive multi-column workspaces.
2. **Predictable Navigation:** The top toolbar stays pinned, providing quick access to search (`Ctrl+K`), home, topics, playground, and theme toggle.
3. **Rhythm & Whitespace:** Use Tailwind spacing scale increments (`p-4`, `p-6`, `p-8`) with consistent typographic leading (`leading-relaxed`).
4. **Developer Focused:** Clean monospace labels for syntax, tags, and properties.

## Verification Checklist
- [ ] No horizontal document scrollbar on desktop or mobile.
- [ ] Mac window frame remains centered with comfortable padding on high-res displays.
- [ ] Touch targets on mobile are at least 44x44px.
- [ ] Visual hierarchy clearly distinguishes H1, H2, H3, and code blocks.
