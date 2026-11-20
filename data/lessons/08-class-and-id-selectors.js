export const classAndIdSelectorsLesson = {
  slug: 'class-and-id-selectors',
  number: '08',
  title: 'Class & ID Selectors',
  category: 'Selectors Mastery',
  subtitle: 'Targeting via .class and #id: specificity differences, reusability rules, and naming best practices',
  badge: 'Beginner',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Core Differences',
      type: 'text',
      lead: 'Class (.class) and ID (#id) selectors allow developers to target specific elements with precision, distinguishing components that share the same HTML tag.',
      paragraphs: [
        'While they appear superficially similar, their specificity weights, reusability rules, and DOM roles are radically different. Mastering when to use a class versus an ID is one of the most critical principles in maintainable CSS architecture.',
      ],
    },
    {
      id: 'comparison-table',
      title: 'Class vs ID Comparison',
      type: 'table',
      table: {
        caption: 'Comparison of Class and ID Selectors',
        headers: ['Feature', 'Class Selector (.name)', 'ID Selector (#name)', 'Impact on Architecture'],
        rows: [
          ['CSS Syntax Prefix', 'Dot (.) -> .card', 'Hash (#) -> #hero', 'Distinguishes selector category in CSS parser.'],
          ['HTML Attribute', 'class="card primary"', 'id="hero"', 'HTML elements can have multiple classes, but only one ID.'],
          ['Reusability', 'Multiple elements per page', 'Must be UNIQUE per page', 'IDs cannot be reused on duplicate components.'],
          ['Specificity Weight', '(0, 0, 1, 0) — Low & manageable', '(0, 1, 0, 0) — Very high', 'IDs are difficult to override without !important.'],
          ['JavaScript & Anchors', 'Used for styling & querying', 'Targeted by URL hashes (#id) & form labels', 'IDs establish anchor jump targets and accessible relationships.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Class Composition vs ID Specificity',
      type: 'code-example',
      codeTitle: 'classes-and-ids.css',
      codeLang: 'css',
      code: `/* Reusable Component Classes (0,0,1,0 specificity) */
.btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s ease;
}

/* Modifier Classes */
.btn-primary {
  background-color: #f97316;
  color: #ffffff;
}

.btn-secondary {
  background-color: #f4f4f5;
  color: #18181b;
  border-color: #e4e4e7;
}

/* ID Selector (0,1,0,0 specificity - use sparingly in CSS!) */
#checkout-submit {
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35);
}`,
      demo: {
        title: 'Multi-Class Component Buttons',
        html: `<div style="display: flex; gap: 12px; align-items: center; font-family: sans-serif;">
  <button style="background: #f97316; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);">
    Primary (.btn-primary)
  </button>
  <button style="background: #f4f4f5; color: #18181b; border: 1px solid #e4e4e7; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: bold; cursor: pointer;">
    Secondary (.btn-secondary)
  </button>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Architecture Gotchas',
      type: 'list',
      items: [
        'Using ID selectors for routine styling: Because an ID has (0,1,0,0) specificity, overriding it requires another ID, higher specificity chains, or !important.',
        'Duplicating IDs in HTML: Having two elements with id="nav" is invalid HTML and breaks both accessibility (ARIA) and JavaScript querySelector.',
        'Starting class names with digits: .1st-button is invalid in CSS. Class names must start with a letter, underscore (_), or hyphen (-).',
      ],
      callout: {
        type: 'warning',
        title: 'Avoid Styling with IDs',
        content: 'Industry best practice is to style strictly with classes (.card) and reserve IDs (#modal-title) for accessibility attributes (aria-labelledby) and JavaScript anchors.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Classes (.name) are reusable across infinite elements and carry manageable (0,0,1,0) specificity.',
        'IDs (#name) must be unique per document and carry massive (0,1,0,0) specificity.',
        'Favor classes for scalable, maintainable design systems.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Class Modifier Pattern',
      task: 'Create a base class .badge and two modifier classes .badge-success (green) and .badge-warning (amber).',
      hint: 'Apply common padding and border-radius on .badge, and specific colors on the modifiers.',
    },
  ],
  quiz: [
    {
      question: 'What is the specificity value of an ID selector (#hero)?',
      options: ['(0, 0, 0, 1)', '(0, 0, 1, 0)', '(0, 1, 0, 0)', '(1, 0, 0, 0)'],
      correctAnswer: 2,
      explanation: 'An ID selector contributes to the second column of the specificity tuple: (0, 1, 0, 0).',
    },
    {
      question: 'How many times can a specific ID attribute value (e.g. id="sidebar") appear on a single HTML page?',
      options: [
        'As many times as needed',
        'Exactly once per document',
        'Once per section',
        'Up to 10 times',
      ],
      correctAnswer: 1,
      explanation: 'According to W3C standards, an ID must be unique within the entire document.',
    },
    {
      question: 'Why do modern CSS architectures (like BEM and utility frameworks) advise against styling with IDs?',
      options: [
        'IDs do not support background colors',
        'IDs have high specificity that makes overriding styles difficult without !important',
        'Browsers parse IDs slower than classes',
        'IDs cannot be used with media queries',
      ],
      correctAnswer: 1,
      explanation: 'The high specificity of IDs creates "specificity wars", making component composition and overrides difficult.',
    },
  ],
};
