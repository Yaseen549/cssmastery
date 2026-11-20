export const cssSyntaxAndRulesLesson = {
  slug: 'css-syntax-and-rules',
  number: '03',
  title: 'CSS Syntax & Rules',
  category: 'CSS Fundamentals',
  subtitle: 'Mastering selectors, declarations, property keys, value tokens, delimiters, and case sensitivity',
  badge: 'Beginner',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Grammar of CSS',
      type: 'text',
      lead: 'Every CSS stylesheet is composed of standard statements called rulesets (or rules). Mastering CSS grammar ensures your stylesheets remain clean, predictable, and error-free.',
      paragraphs: [
        'A CSS rule tells the browser two fundamental things: WHAT to style (the selector) and HOW to style it (the declaration block). While the grammar is straightforward, subtle syntax nuances like case sensitivity, string quoting, and punctuation delimiters dictate whether rules parse cleanly or get discarded.',
      ],
    },
    {
      id: 'learning-objectives',
      title: 'Learning Objectives',
      type: 'list',
      items: [
        'Dissect every structural component of a CSS ruleset.',
        'Master the delimiter rules: colons (:), semicolons (;), and braces ({ }).',
        'Understand case sensitivity in selectors, properties, and values.',
        'Learn whitespace tolerance and code formatting standards.',
      ],
    },
    {
      id: 'formal-syntax',
      title: 'Formal Rule Definition',
      type: 'syntax',
      syntax: 'selector [, selector]* { property: value; [property: value;]* }',
      syntaxNote: 'Multiple selectors can be grouped with commas. Multiple declarations inside the block must be delimited by semicolons.',
    },
    {
      id: 'delimiters-table',
      title: 'CSS Punctuation & Delimiter Rules',
      type: 'table',
      table: {
        caption: 'Punctuation Tokens in CSS',
        headers: ['Symbol', 'Name', 'Exact Purpose', 'Error If Omitted'],
        rows: [
          ['{ }', 'Curly Braces', 'Encloses the declaration block', 'Parsing breaks; rules discarded.'],
          [':', 'Colon', 'Separates property name from its value', 'Property is treated as invalid syntax.'],
          [';', 'Semicolon', 'Terminates a declaration statement', 'Next declaration merges into value and fails.'],
          [',', 'Comma', 'Separates items in selector lists or multi-values', 'Parser treats terms as combinators or fails.'],
          ['/* */', 'Comment block', 'Surrounds non-executing documentation', 'Code triggers syntax errors.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Declarations & Grouped Selectors',
      type: 'code-example',
      codeTitle: 'syntax-rules.css',
      codeLang: 'css',
      code: `/* Grouped Selectors Sharing Declarations */
h1, h2, h3 {
  font-family: system-ui, sans-serif;
  color: #18181b;
  letter-spacing: -0.02em;
}

/* Multi-value properties: margin shorthand (top right bottom left) */
.article-container {
  margin: 16px 24px 32px 24px;
  padding: 20px;
  background-color: #fafafa;
  border: 1px solid #e4e4e7;
}`,
      demo: {
        title: 'Grouped Typographic Output',
        html: `<div style="font-family: system-ui, sans-serif; padding: 16px; border: 1px solid #fed7aa; border-radius: 12px; background: #fff7ed;">
  <h2 style="margin: 0; color: #c2410c; font-size: 18px; letter-spacing: -0.02em;">Article Heading</h2>
  <p style="margin: 6px 0 0; color: #7c2d12; font-size: 13px;">This block demonstrates consistent typography applied via structured CSS rules.</p>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Syntax Pitfalls',
      type: 'list',
      items: [
        'Using equals (=) instead of colon (:): Writing font-size = 16px is invalid and ignored.',
        'Putting a space between numbers and units: 10 px or 2 rem is invalid syntax; write 10px and 2rem.',
        'Using double slashes (//) for comments: // is not valid in standard CSS and breaks parsing of adjacent rules.',
      ],
      callout: {
        type: 'important',
        title: 'No Double-Slash Comments',
        content: 'Standard CSS does NOT support // line comments. Only /* comment */ syntax is valid in standard CSS files.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'A CSS rule binds selectors to declaration blocks.',
        'Colons separate properties from values; semicolons terminate declarations.',
        'Units must be glued directly to numbers without spaces (16px, not 16 px).',
      ],
    },
  ],
  exercises: [
    {
      title: 'Syntax Debugging',
      task: 'Fix the syntax errors in this snippet: .card { background = white; font-size: 14 px // Card bg }',
      hint: 'Replace =, remove space before px, and change comment syntax to /* */.',
    },
  ],
  quiz: [
    {
      question: 'Which character must separate a CSS property from its value?',
      options: ['A colon (:)', 'An equals sign (=)', 'A semicolon (;)', 'A hyphen (-)'],
      correctAnswer: 0,
      explanation: 'In CSS, properties and values are strictly separated by a colon (:).',
    },
    {
      question: 'Which of the following value declarations is syntactically INVALID in standard CSS?',
      options: ['margin: 10px;', 'margin: 10 px;', 'margin: 0;', 'margin: 1.5rem;'],
      correctAnswer: 1,
      explanation: 'A space between a numerical magnitude and its unit (10 px) violates CSS syntax rules and is discarded by the parser.',
    },
    {
      question: 'How do you write a comment in standard vanilla CSS?',
      options: ['// This is a comment', '<!-- This is a comment -->', '/* This is a comment */', '# This is a comment'],
      correctAnswer: 2,
      explanation: 'Only /* ... */ is valid comment syntax in standard CSS.',
    },
  ],
};
