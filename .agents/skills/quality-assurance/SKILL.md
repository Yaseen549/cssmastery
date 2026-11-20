---
name: quality-assurance
description: >-
  Testing runbooks, build verification, broken-link detection, and responsive layout
  checklists before code commits.
---

# Quality Assurance Skill

This skill defines the verification gates, automated testing procedures, and release criteria for all code and educational modules.

## Verification Runbook

### 1. Build & Compilation Verification
Run production static compilation before declaring any phase complete:
```bash
npm run build
```
- Zero Next.js build errors.
- Zero Shiki syntax highlighting failures.
- Zero missing route parameters in `generateStaticParams()`.

### 2. File & Format Compliance
- Zero `.ts` or `.tsx` files in the repository.
- Strictly valid modern JavaScript (`.js`, `.jsx`).
- No placeholder strings ("TODO", "Lorem ipsum", "Coming soon").

### 3. Route & Link Integrity
- Verify all registered lesson slugs in `data/topics.js` map to valid lesson files in `data/lessons/`.
- Verify next/previous navigation pointers resolve cleanly without dead ends.
- Test deep anchor links within table of contents.

### 4. Layout & Device Audit
- Verify 320px mobile viewport (no horizontal overflow, drawer opens smoothly).
- Verify 768px tablet viewport.
- Verify 1440px desktop viewport (MacWindow centered, 3 columns visible).
- Verify 1920px+ ultrawide viewport.
- Verify dual-mode theme toggle (no flashing white background in dark mode).

### 5. LocalStorage & Client State Audit
- Verify lesson completion checkboxes save state.
- Verify progress bar reflects stored data.
- Verify search modal filters and navigates to correct URLs.
