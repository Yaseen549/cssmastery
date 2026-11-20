export const attributeSelectorsLesson = {
  slug: 'attribute-selectors',
  number: '09',
  title: 'Attribute Selectors',
  category: 'Selectors Mastery',
  subtitle: 'Targeting elements by attribute presence, exact value, prefix (^=), suffix ($=), and substring (*=)',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Real-World Utility',
      type: 'text',
      lead: 'Attribute selectors target elements based on the presence, value, or partial value of their HTML attributes. They provide immense power when styling forms, external links, data attributes, and accessible ARIA states.',
      paragraphs: [
        'Attribute selectors carry the same specificity as a standard class selector: (0, 0, 1, 0). They allow you to style elements without polluting HTML with unnecessary utility classes.',
      ],
    },
    {
      id: 'operators-table',
      title: 'The 7 Attribute Selector Operators',
      type: 'table',
      table: {
        caption: 'Attribute Selector Syntax Operators',
        headers: ['Syntax', 'Matching Rule', 'Practical Example', 'Real-World Use Case'],
        rows: [
          ['[attr]', 'Attribute exists (any value)', 'button[disabled]', 'Targeting disabled buttons regardless of value.'],
          ['[attr="val"]', 'Exact string match', 'input[type="checkbox"]', 'Styling checkboxes differently from text inputs.'],
          ['[attr~="val"]', 'Whitespace-separated list contains word', '[class~="primary"]', 'Legacy class matching.'],
          ['[attr|="val"]', 'Exact match or prefix with hyphen', '[lang|="en"]', 'Matches lang="en" and lang="en-US".'],
          ['[attr^="val"]', 'Starts with prefix', 'a[href^="https://"]', 'Styling secure external links with an icon.'],
          ['[attr$="val"]', 'Ends with suffix', 'a[href$=".pdf"]', 'Appending a PDF download icon to PDF links.'],
          ['[attr*="val"]', 'Contains substring anywhere', 'a[href*="github.com"]', 'Targeting links pointing to specific domains.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Production Attribute Selector Examples',
      type: 'code-example',
      codeTitle: 'attribute-styling.css',
      codeLang: 'css',
      code: `/* 1. Style inputs by specific input type */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d4d4d8;
  border-radius: 6px;
}

/* 2. Style disabled state directly from attribute */
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

/* 3. Style external links automatically */
a[href^="https://"]::after {
  content: " ↗";
  font-size: 0.85em;
  color: #f97316;
}

/* 4. Style by data attribute */
[data-status="active"] {
  border-left: 4px solid #10b981;
}`,
      demo: {
        title: 'Attribute Styled Elements',
        html: `<div style="font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px; max-width: 300px;">
  <input type="text" placeholder="input[type='text']" style="padding: 8px 12px; border: 1px solid #d4d4d8; border-radius: 6px; font-size: 13px;">
  <button disabled style="padding: 8px; background: #f97316; color: white; border: none; border-radius: 6px; opacity: 0.5; cursor: not-allowed; font-size: 13px; font-weight: bold;">
    button[disabled]
  </button>
  <div style="border-left: 4px solid #10b981; background: #f0fdf4; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #065f46;">
    [data-status="active"] Card
  </div>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes',
      type: 'list',
      items: [
        'Confusing ^= (starts with) and $= (ends with): Remember ^ points up/start (like regex), and $ represents end.',
        'Case sensitivity in attribute values: While attribute names are case-insensitive, values in [attr="val"] can be case-sensitive in HTML. You can add the i modifier: [href$=".pdf" i] for case-insensitive matching.',
      ],
      callout: {
        type: 'tip',
        title: 'Case-Insensitive Matching',
        content: 'Add an "i" flag before the closing bracket (e.g. a[href$=".pdf" i]) to match both .pdf, .PDF, and .Pdf.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Attribute selectors match elements by existence, exact values, or substring patterns.',
        'They share the same specificity as classes: (0, 0, 1, 0).',
        'Crucial for styling forms, ARIA accessibility states, and data-* attributes.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Target PDF Downloads',
      task: 'Write an attribute selector rule that targets all <a> links ending with ".pdf" and sets their color to red.',
      hint: 'a[href$=".pdf"] { color: red; }',
    },
  ],
  quiz: [
    {
      question: 'Which operator matches an attribute whose value STARTS with a specific string?',
      options: ['$=', '^=', '*=', '~='],
      correctAnswer: 1,
      explanation: '^= matches the beginning (prefix) of the attribute string value.',
    },
    {
      question: 'What is the specificity of the attribute selector [type="checkbox"]?',
      options: ['(0, 0, 0, 1)', '(0, 0, 1, 0)', '(0, 1, 0, 0)', '(0, 0, 0, 0)'],
      correctAnswer: 1,
      explanation: 'Attribute selectors have the exact same specificity as a class or pseudo-class: (0, 0, 1, 0).',
    },
    {
      question: 'How do you make an attribute selector case-insensitive in modern CSS?',
      options: [
        'Use uppercase syntax',
        'Add the "i" modifier before the closing bracket, e.g. [href$=".png" i]',
        'Use the !important flag',
        'Attribute selectors are always case-insensitive',
      ],
      correctAnswer: 1,
      explanation: 'The "i" flag forces case-insensitive value matching, matching both lowercase and uppercase variants.',
    },
  ],
};
