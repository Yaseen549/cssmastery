# GEMINI.md — Agent System Context & Directives

This project is the **Complete CSS Learning Platform (`CSSMaster`)**, an educational ecosystem covering Cascading Style Sheets from beginner to advanced mastery.

## Key Directives for AI Assistants
1. **Never use TypeScript:** Strictly write standard modern JavaScript (`.js`, `.jsx`).
2. **Never leave empty placeholders:** Do not create dummy lessons, truncated summaries, or "TODO" items. Every lesson must have full depth, code, syntax, tables, and quizzes.
3. **Respect Sibling Projects:** Do not modify `../HTML` or `../Website-CProgramming`.
4. **Follow the CSS Blue Design System:** Use the designated Blue design tokens (`brand-50` through `brand-950`), clean application shell layout matching the sibling HTML platform (`DocShell`, `Header.jsx`, `Sidebar.jsx`), and dual light/dark mode support.
5. **Secure Execution Engine:** User-authored code in `/playground` must run in isolated client-side iframes with `sandbox="allow-scripts"` only, strict Content Security Policy (`connect-src 'none'`), explicit Mode B Run/Stop lifecycle, and zero server execution.
6. **Always Test:** Verify code compiles cleanly with `npm run build` across all static routes.
