# KNOWN_ISSUES.md — Complete CSS Learning Platform

This document tracks known issues, technical limitations, and resolutions throughout development.

| ID | Issue Description | Status | Resolution / Mitigation |
|---|---|---|---|
| KI-001 | Modern CSS functions (`oklch()`, `color-mix()`) may not render in older browsers | Mitigated | All curriculum lessons and demos include standard fallback values (`hex` or `rgb`). |
| KI-002 | Shiki highlighter is asynchronous server-side | Addressed | Code blocks are pre-rendered in server components (`topics/[slug]/page.js`) and passed as static HTML. |
| KI-003 | LocalStorage hydration mismatch in Next.js SSR | Addressed | LocalStorage access is gated behind `useEffect` client-side hooks (`useProgress.js`). |
