export const cssCustomPropertiesVariablesLesson = {
  slug: 'css-custom-properties-variables',
  number: '44',
  title: 'CSS Custom Properties (Variables)',
  category: 'CSS Custom Properties',
  subtitle: 'Declaring and consuming variables with --name and var(), cascade scoping, and dynamic themes',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Native Reactive Variables',
      type: 'text',
      lead: 'CSS Custom Properties (commonly called CSS Variables) allow you to store values and reuse them throughout your stylesheets.',
      paragraphs: [
        'Unlike preprocessor variables (Sass or Less) which compile down to static values at build time, CSS Custom Properties are truly dynamic and live in the browser DOM. They participate in the cascade, inherit down the tree, and can be modified at runtime using JavaScript or media queries.',
      ],
    },
    {
      id: 'syntax-rules',
      title: 'Declaration & Consumption Syntax',
      type: 'syntax',
      syntax: '/* Declaration (must start with --) */\n:root {\n  --brand-color: #f97316;\n}\n\n/* Consumption */\nbutton {\n  background-color: var(--brand-color, #ea580c);\n}',
      syntaxNote: 'Custom properties are case-sensitive (--Brand is different from --brand) and accept a fallback parameter in var(--name, fallback).',
    },
    {
      id: 'code-example',
      title: 'Dynamic Light & Dark Theming with Variables',
      type: 'code-example',
      codeTitle: 'theme-variables.css',
      codeLang: 'css',
      code: `/* Light Theme Default Tokens */
:root {
  --bg-canvas: #ffffff;
  --text-main: #18181b;
  --brand-accent: #f97316;
}

/* Dark Theme Override (Single swap flips the entire UI!) */
[data-theme="dark"] {
  --bg-canvas: #18181b;
  --text-main: #f4f4f5;
  --brand-accent: #fb923c;
}

.card {
  background-color: var(--bg-canvas);
  color: var(--text-main);
  border: 1px solid var(--brand-accent);
}`,
      demo: {
        title: 'Theme Variable Swatch',
        html: `<div style="font-family: sans-serif; background: #18181b; color: #f4f4f5; border: 1px solid #f97316; padding: 14px; border-radius: 10px;">
  <span style="font-size: 11px; font-weight: bold; color: #f97316;">var(--brand-accent) Active</span>
  <p style="margin: 4px 0 0; font-size: 13px;">Dynamic design tokens update instantaneously without recompiling CSS.</p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'CSS variables start with double hyphens (--name).',
        'Consumed using var(--name, fallback).',
        'Inherit naturally down the DOM tree and update dynamically in real time.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Declare a Card Radius Variable',
      task: 'Define a variable --card-radius: 12px; on :root and consume it on a .card class with a fallback of 8px.',
      hint: ':root { --card-radius: 12px; } .card { border-radius: var(--card-radius, 8px); }',
    },
  ],
  quiz: [
    {
      question: 'How must all CSS Custom Property names begin?',
      options: ['With a dollar sign ($)', 'With double hyphens (--)', 'With an @ symbol', 'With var-'],
      correctAnswer: 1,
      explanation: 'All CSS custom property identifiers must start with two dashes, such as --primary-color.',
    },
    {
      question: 'How do you provide a fallback value if a CSS variable is undefined?',
      options: [
        'var(--name || fallback)',
        'var(--name, fallback)',
        'fallback(--name)',
        '--name: default;',
      ],
      correctAnswer: 1,
      explanation: 'The var() function accepts an optional second comma-separated argument as a fallback value.',
    },
    {
      question: 'Are CSS Custom Properties case-sensitive?',
      options: [
        'No, CSS is case-insensitive',
        'Yes, --primaryColor and --primarycolor are completely separate variables',
        'Only in Firefox',
        'Only when using OKLCH',
      ],
      correctAnswer: 1,
      explanation: 'Unlike standard CSS properties, custom properties are strictly case-sensitive.',
    },
  ],
};
