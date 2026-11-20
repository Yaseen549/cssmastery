---
name: css-curriculum
description: >-
  Pedagogical framework and structured authoring guide for creating engaging, beginner-to-advanced,
  zero-placeholder CSS lessons. Use when creating or refining topics, exercises, and quizzes.
---

# CSS Curriculum Skill

This skill governs the pedagogical flow, instructional design, and structured breakdown of all educational content in the CSS Learning Platform.

## Purpose & Scope
Apply this skill whenever:
- Creating a new lesson file in `data/lessons/`.
- Structuring lesson sections, progressive disclosure steps, and real-world scenarios.
- Authoring practice challenges, quizzes, and learning objectives.
- Ensuring zero placeholder content, zero fluff, and high educational value.

## The Mandatory 18-Part Lesson Structure
Every topic module must adhere to the 18-part comprehensive pedagogical blueprint:
1. **Introduction:** Real-world hook explaining *why* this CSS concept matters.
2. **Learning Objectives:** 3–4 bulleted outcomes student will achieve.
3. **Beginner-Friendly Explanation:** Plain-language, metaphor-guided overview.
4. **Technical Explanation:** Deep-dive into DOM/CSSOM interactions, layout tree behavior.
5. **Formal Syntax:** Standard W3C value syntax notation.
6. **Property/Value Breakdown Table:** Name, type, default value, options, and descriptions.
7. **Basic Example:** Minimal, clear demonstration of the primary concept.
8. **Intermediate Example:** Combining the property with common real-world layouts.
9. **Advanced Example:** Edge-cases, responsive scaling, or dynamic interactions.
10. **Live Output / Workbench Demo:** Interactive sandbox payload.
11. **Expected Visual Output:** Description of what renders and why.
12. **Common Mistakes & Gotchas:** 2–3 frequent errors junior/senior devs make.
13. **Real-World Applications:** Production UI examples (e.g. Navbars, Cards, Modals).
14. **Browser Compatibility:** Baseline status and fallback tips.
15. **Related Concepts:** Links to adjacent or dependent topics.
16. **Practice Exercises:** Hands-on micro-tasks to test retention.
17. **Knowledge Check:** 3 multiple-choice questions with answers & explanations.
18. **Summary:** 3 key takeaways.

## Rules & Constraints
- **Zero Placeholder Policy:** Never use "Lorem ipsum", "TODO", or dummy filler.
- **Consistent Schemas:** Export an object with `slug`, `number`, `title`, `subtitle`, `category`, `badge`, `sections`, `quiz`, and `exercises`.
- **Progressive Terminology:** Define technical terms before using them in code explanations.

## Quality Checklist
- [ ] All 18 structure items represented in lesson data or associated components.
- [ ] Code examples use semantic HTML markup (not just generic nested `<div>`s).
- [ ] Quiz questions test real understanding, not trivial trivia.
- [ ] Live demo payload contains working, self-contained styles.
