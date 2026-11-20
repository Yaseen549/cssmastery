---
name: layout-system
description: >-
  Multi-column application architecture, sidebar docking, mobile drawers, responsive breakpoints,
  and independent scrolling geometry.
---

# Layout System Skill

This skill defines the multi-column layout structure, responsive breakpoint rules, and viewport adaptability.

## Viewport Topology

### Desktop (xl: >= 1280px & 2xl: >= 1536px)
```
┌────────────────────────────────────────────────────────────────────────┐
│ WindowToolbar (h-14, sticky top, logo, search Ctrl+K, theme toggle)    │
├───────────────┬─────────────────────────────────┬──────────────────────┤
│ Sidebar       │ Reading Room (flex-1)           │ Right Workbench      │
│ (w-64 xl:w-72)│ (max-w-4xl, independent scroll) │ (w-80 2xl:w-[420px]) │
│ (overflow-y)  │ Breadcrumbs -> H1 -> Content    │ Live Demo + TOC tabs │
└───────────────┴─────────────────────────────────┴──────────────────────┘
```

### Tablet (md: 768px - 1279px)
- Sidebar collapses into an accessible slide-out mobile drawer triggered from the toolbar hamburger button.
- Right workbench docks below the lesson sections or collapses into inline interactive preview cards.

### Mobile (< 768px)
- Window outer margin contracts (`p-2.5 sm:p-4`).
- Toolbar simplifies to compact logo and hamburger icon.
- Navigation handled by full-height mobile drawer.
- Reading room occupies full width with comfortable horizontal padding (`px-4`).

## Independent Scroll Implementation
In `MacWindow.jsx` and page layouts:
- The outer application card uses `h-screen max-h-screen overflow-hidden flex flex-col`.
- Columns consume `flex-1 min-h-0 overflow-y-auto` with smooth `-webkit-overflow-scrolling: touch`.
- Prevents annoying page jump when scrolling through long lessons.
