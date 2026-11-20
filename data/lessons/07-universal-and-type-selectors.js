export const universalAndTypeSelectorsLesson = {
  slug: 'universal-and-type-selectors',
  number: '07',
  title: 'Universal & Type Selectors',
  category: 'Selectors Mastery',
  subtitle: 'Targeting the entire DOM with * and matching HTML elements directly by tag name',
  badge: 'Beginner',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Core Purpose',
      type: 'text',
      lead: 'Selectors are the targeting engine of CSS. The Universal Selector (*) and Type Selectors form the foundational bedrock of pattern matching in HTML documents.',
      paragraphs: [
        'A Type Selector (also known as an Element Selector) matches all elements in the document that share a specific HTML tag name (e.g. p, h1, button, section).',
        'The Universal Selector (*) matches any element of any type whatsoever. It acts as a wildcard, targeting every single element node in the matched scope.',
      ],
    },
    {
      id: 'syntax-and-specificity',
      title: 'Formal Syntax & Specificity Contribution',
      type: 'syntax',
      syntax: '* { /* Universal */ } \nelement { /* Type Selector */ }',
      syntaxNote: 'The Universal Selector (*) contributes (0, 0, 0, 0) specificity. A Type Selector contributes (0, 0, 0, 1) specificity.',
    },
    {
      id: 'code-example',
      title: 'Universal & Type Selector Patterns',
      type: 'code-example',
      codeTitle: 'type-selectors.css',
      codeLang: 'css',
      code: `/* Universal Selector: Baseline box model reset (0,0,0,0 specificity) */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Type Selectors: Styling semantic HTML tags directly (0,0,0,1 specificity) */
h1 {
  font-size: 2rem;
  color: #18181b;
  line-height: 1.25;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  color: #52525b;
}

button {
  cursor: pointer;
  background-color: #f97316;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
}`,
      demo: {
        title: 'Type Selector Typography',
        html: `<div style="font-family: system-ui, sans-serif; padding: 16px; border: 1px solid #e4e4e7; border-radius: 12px; background: white;">
  <h2 style="margin: 0; color: #18181b; font-size: 18px;">Section Heading (h2)</h2>
  <p style="margin: 8px 0 12px; color: #52525b; font-size: 13px; line-height: 1.5;">This paragraph is styled globally via the type selector.</p>
  <button style="background: #f97316; color: white; border: none; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: bold; cursor: pointer;">Action Button</button>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Best Practices',
      type: 'list',
      items: [
        'Overusing the universal selector for color or font styling: Setting * { color: red; } overrides natural inheritance and creates unwanted styling cascades.',
        'Over-styling type selectors in large teams: Styling div, span, or p with heavy borders or margins can break third-party widgets and modular components.',
        'Believing the universal selector has high priority: * has ZERO specificity; even a single tag selector (0,0,0,1) or class overrides it.',
      ],
      callout: {
        type: 'best-practice',
        title: 'Best Practice',
        content: 'Use Type Selectors to establish baseline typographic rhythm (headings, body copy, links) in base layers, and use classes for reusable UI components.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Universal selector (*) targets all elements with (0,0,0,0) specificity.',
        'Type selectors target HTML tag names directly with (0,0,0,1) specificity.',
        'Type selectors are ideal for base typography resets, but classes should be favored for modular components.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Global Link Styling',
      task: 'Write a type selector rule that removes the underline from all <a> tags and sets their color to #f97316.',
      hint: 'Target a { text-decoration: none; color: #f97316; }',
    },
  ],
  quiz: [
    {
      question: 'What is the specificity weight of the universal selector (*)?',
      options: ['(0, 1, 0, 0)', '(0, 0, 1, 0)', '(0, 0, 0, 1)', '(0, 0, 0, 0)'],
      correctAnswer: 3,
      explanation: 'The universal selector (*) has exactly (0, 0, 0, 0) specificity, meaning any other selector will override its declarations.',
    },
    {
      question: 'Which of the following is a valid Type Selector?',
      options: ['.card', '#main-header', 'article', '[type="text"]'],
      correctAnswer: 2,
      explanation: '"article" matches the HTML <article> element directly by its tag name, making it a Type Selector.',
    },
    {
      question: 'If "p { color: blue; }" and "* { color: red; }" compete for a paragraph, what color will the paragraph be?',
      options: ['Red', 'Blue', 'Purple', 'Black'],
      correctAnswer: 1,
      explanation: 'The Type Selector "p" has specificity (0,0,0,1), which overrides the universal selector "*" with specificity (0,0,0,0).',
    },
  ],
};
