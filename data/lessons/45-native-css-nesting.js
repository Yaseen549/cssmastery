export const nativeCssNestingLesson = {
  slug: 'native-css-nesting',
  number: '45',
  title: 'Native CSS Nesting',
  category: 'Modern & Bleeding-Edge CSS',
  subtitle: 'Sass-style nesting natively in CSS using the & selector, media queries nesting, and specificity rules',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Native Nesting Without Sass',
      type: 'text',
      lead: 'CSS Nesting allows you to write child rules and pseudo-classes directly inside parent rulesets, matching the natural hierarchy of HTML markup.',
      paragraphs: [
        'For nearly 15 years, developers required preprocessors like Sass or Less solely for nesting. Today, CSS Nesting is a native web standard supported across 100% of modern browsers, delivering clean syntax with zero build tool compilation.',
      ],
    },
    {
      id: 'ampersand-rules',
      title: 'The Ampersand (&) Nesting Selector',
      type: 'syntax',
      syntax: '.card {\n  background: white;\n  \n  &:hover {\n    border-color: #f97316;\n  }\n  \n  &.active {\n    box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  }\n  \n  h2 {\n    font-size: 1.25rem;\n  }\n}',
      syntaxNote: 'The & symbol explicitly represents the parent selector. Omitting & before element tags (like h2) creates a descendant combinator automatically.',
    },
    {
      id: 'code-example',
      title: 'Nested Rules & Nested Media Queries',
      type: 'code-example',
      codeTitle: 'nested-styles.css',
      codeLang: 'css',
      code: `/* Clean component encapsulation with native nesting */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #18181b;

  /* Nested pseudo-class */
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  /* Nested child element */
  .nav-item {
    color: #a1a1aa;
    text-decoration: none;

    &:hover {
      color: #f97316;
    }
  }

  /* NESTED MEDIA QUERY! (Scoped right inside component) */
  @media (width >= 768px) {
    padding: 24px 32px;
  }
}`,
      demo: {
        title: 'Nested Component Preview',
        html: `<div style="font-family: sans-serif; background: #18181b; color: white; padding: 14px 20px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
  <span style="font-weight: bold; color: #f97316;">.navbar</span>
  <span style="font-size: 12px; color: #a1a1aa;">& .nav-item (Nested CSS Rule)</span>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Native nesting works in all modern browsers without Sass or preprocessors.',
        '& represents the parent selector for pseudo-classes (:hover) and compound classes (.active).',
        'Media queries can be nested directly inside components.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Nest a Hover State',
      task: 'Nest a :hover state and a nested child <p> inside a .card ruleset using native CSS nesting.',
      hint: '.card { &:hover { ... } p { ... } }',
    },
  ],
  quiz: [
    {
      question: 'What does the ampersand (&) represent in native CSS nesting?',
      options: [
        'The root element',
        'The parent selector',
        'A wildcard selector',
        'An ID selector',
      ],
      correctAnswer: 1,
      explanation: '& references the parent selector in the nesting hierarchy.',
    },
    {
      question: 'Can @media queries be nested directly inside a CSS component using native nesting?',
      options: [
        'Yes, @media queries can be nested inside rulesets natively',
        'No, media queries must always be at top-level',
        'Only in Chrome Canary',
        'Only with Sass installed',
      ],
      correctAnswer: 0,
      explanation: 'Native CSS nesting allows @media queries to be placed directly inside component rulesets.',
    },
    {
      question: 'Is a build tool or Sass compiler required to use CSS nesting in modern 2026 browsers?',
      options: [
        'Yes, browsers cannot parse nesting natively',
        'No, native CSS nesting is fully supported by all modern browser layout engines',
        'Only on Linux',
        'Only for grid layouts',
      ],
      correctAnswer: 1,
      explanation: 'Native CSS nesting is an established web standard supported natively in all modern browser engines.',
    },
  ],
};
