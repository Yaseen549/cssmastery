---
name: css-expert
description: >-
  Comprehensive guide and domain authority on modern CSS specifications, browser rendering engines,
  cascade algorithms, specificity, layout mathematics, and standards-compliant syntax.
  Use when authoring CSS curriculum lessons, verifying technical accuracy, or diagnosing layout behaviors.
---

# CSS Expert Skill

This skill acts as the technical authority on the Cascading Style Sheets (CSS) language specifications, browser layout rendering engines (Blink, Gecko, WebKit), and modern WHATWG/W3C standards.

## Purpose & Scope
Apply this skill whenever:
- Designing technical explanations of CSS mechanisms (cascade, inheritance, specificity, box model, formatting contexts).
- Verifying property specifications, initial values, computed values, and syntax validity.
- Explaining the browser layout rendering pipeline (Parse -> Style Resolution -> Layout -> Paint -> Composite).
- Designing progressive enhancement and fallback strategies for modern CSS features.

## Rules & Technical Constraints
1. **Never conflate specification levels:** Clearly distinguish CSS 2.1 rock-solid baseline, CSS3 modules, modern Level 4/5 draft features, and Houdini low-level APIs.
2. **Formulaic Specificity:** Always represent specificity as a 4-component tuple `(inline, ID, class/attribute/pseudo-class, element/pseudo-element)`. Never sum them as base-10 digits (e.g., 10 classes do NOT override an ID).
3. **Values & Calculations:** Always explain the progression: *Specified Value* -> *Computed Value* -> *Used Value* -> *Actual Value*.
4. **Browser Compatibility:** Provide verified CanIUse / MDN compatibility notes. Never invent browser support claims.

## Workflow: Technical Topic Evaluation
1. **Specification Lookup:** Verify definition in W3C/WHATWG specifications.
2. **Core Algorithm Explanation:**
   - How does the layout engine calculate geometry?
   - What is the containing block?
   - What formatting context is established (`BFC`, `IFC`, `Flex`, `Grid`)?
3. **Syntax Breakdown:** Document formal syntax using CSS Value Definition Syntax (brackets, pipes, multipliers).
4. **Edge Cases & Quirks:** Document margin collapsing conditions, stacking context triggers, and subpixel rounding differences.

## Good vs Bad Practices
- **Good:** "A block formatting context is established by `display: flow-root`, preventing margin collapsing without hidden overflow side effects."
- **Bad:** "Just add `overflow: hidden` to fix float problems." (Outdated, introduces unwanted clipping).
- **Good:** "`:is()` takes the specificity of its most specific argument, while `:where()` always contributes `(0,0,0,0)`."
- **Bad:** "`:is()` and `:where()` are basically the same selector list."

## Quality Checklist
- [ ] Initial value and inherited status specified.
- [ ] Applicable element types documented.
- [ ] Percentages reference explicitly stated (e.g., relative to container width vs height).
- [ ] Safe fallbacks provided for modern features (e.g. `oklch()`, `@container`, `subgrid`).
