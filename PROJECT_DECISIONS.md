# PROJECT_DECISIONS.md — Complete CSS Learning Platform

This document logs all architectural, design, and technical decisions made during the project.

### Decision 1: Pure Modern JavaScript (No TypeScript)
- **Rationale:** Strict parity with existing sibling platforms (`HTML` and `Website-CProgramming`). Prevents transpilation discrepancies, eliminates unnecessary build steps, and keeps developer ergonomics aligned across the entire programming languages suite.

### Decision 2: Warm Amber / Orange / Coral Brand Palette
- **Rationale:** Honors the visual identity of the sister platforms authored by Yaseen, creating an integrated, high-end family feel across HTML, C, and CSS. The CSS logo features cascading curly braces `{ }`, rule declaration colon `:`, and selector indicators to represent CSS identity.

### Decision 3: Server-Side Shiki Code Highlighting
- **Rationale:** Highlighting code at build time with Shiki (`github-dark` theme) avoids shipping heavy client-side syntax highlighters (e.g. Prism or Monaco) on reading pages, ensuring instant page loads and zero bundle bloat.

### Decision 4: Sandboxed `<iframe>` for Interactive Playground
- **Rationale:** Running user-authored HTML and CSS in a sandboxed iframe (`sandbox="allow-scripts"`) safely isolates rendering from the parent application DOM while providing real-time visual feedback and responsiveness testing.

### Decision 5: Client-Side `localStorage` Progress Persistence
- **Rationale:** Allows learners to track lesson completion, bookmark topics, and record quiz scores locally without requiring accounts, logins, or cloud database dependencies.
