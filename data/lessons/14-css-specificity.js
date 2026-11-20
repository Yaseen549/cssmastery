export const cssSpecificityLesson = {
  slug: 'css-specificity',
  number: '14',
  title: 'CSS Specificity Formula',
  category: 'Cascade, Specificity & Inheritance',
  subtitle: 'Calculating the 4-component specificity tuple (inline, ID, class, element) without base-10 math errors',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Specificity Mechanics',
      type: 'text',
      lead: 'Specificity is the scoring algorithm browsers use to determine which CSS rule applies when multiple selectors match the exact same element.',
      paragraphs: [
        'A common myth among developers is that specificity is a single number (e.g., "110 points"). In reality, specificity is a 4-component tuple: (a, b, c, d). A single selector with higher category rank ALWAYS beats infinite selectors of a lower category.',
      ],
    },
    {
      id: 'four-tier-tuple',
      title: 'The 4-Component Specificity Tuple: (a, b, c, d)',
      type: 'table',
      table: {
        caption: 'The 4 Specificity Columns',
        headers: ['Column', 'Category', 'What Contributes to This Column', 'Score Weight'],
        rows: [
          ['a (Highest)', 'Inline Styles', 'style="..." attributes applied directly on HTML tags', '(1, 0, 0, 0)'],
          ['b', 'IDs', 'ID selectors like #header, #modal, #nav', '(0, 1, 0, 0)'],
          ['c', 'Classes, Attributes & Pseudo-Classes', '.btn, [type="text"], :hover, :nth-child(2), :focus', '(0, 0, 1, 0)'],
          ['d (Lowest)', 'Elements & Pseudo-Elements', 'p, h1, div, button, ::before, ::after, ::marker', '(0, 0, 0, 1)'],
        ],
      },
    },
    {
      id: 'calculation-breakdown',
      title: 'Comparison & Scoring Examples',
      type: 'table',
      table: {
        caption: 'Specificity Tuple Calculations',
        headers: ['Selector', 'Tuple (a, b, c, d)', 'Breakdown of Matches', 'Winner Against Competitor'],
        rows: [
          ['nav ul li a', '(0, 0, 0, 4)', '4 elements (nav, ul, li, a)', 'Loses to .nav-link'],
          ['.nav-link', '(0, 0, 1, 0)', '1 class (.nav-link)', 'Beats 100 stacked element selectors!'],
          ['#main-nav .nav-link', '(0, 1, 1, 0)', '1 ID (#main-nav) + 1 class (.nav-link)', 'Beats any combination of classes without an ID.'],
          ['ul.menu li.active a:hover', '(0, 0, 3, 3)', '3 classes/pseudo-classes (.menu, .active, :hover) + 3 elements (ul, li, a)', 'Loses to #header a'],
          ['style="color: red;"', '(1, 0, 0, 0)', 'Inline style attribute on DOM element', 'Beats all stylesheet selectors without !important.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Specificity Battle Demonstration',
      type: 'code-example',
      codeTitle: 'specificity.css',
      codeLang: 'css',
      code: `/* Specificity: (0, 0, 0, 1) -> Element */
p {
  color: #71717a; /* Zinc gray */
}

/* Specificity: (0, 0, 1, 0) -> Class (WINS over element!) */
.highlight-text {
  color: #f97316; /* Brand Orange */
}

/* Specificity: (0, 1, 0, 0) -> ID (WINS over class!) */
#hero-paragraph {
  color: #10b981; /* Emerald Green */
}`,
      demo: {
        title: 'Computed Specificity Winner',
        html: `<div style="font-family: sans-serif; padding: 16px; border: 1px solid #e4e4e7; border-radius: 12px; background: white;">
  <p style="margin: 0; font-size: 14px; font-weight: bold; color: #10b981;">
    #hero-paragraph wins (0, 1, 0, 0) over .highlight-text (0, 0, 1, 0)!
  </p>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Specificity Wars',
      type: 'list',
      items: [
        'Thinking 10 classes equal 1 ID: In CSS, column "b" always trumps column "c". 100 classes will NEVER override a single ID.',
        'The Universal Selector (*), combinators (+, >, ~), and :where() contribute ZERO (0, 0, 0, 0) to specificity.',
        ':not() and :is() take the specificity of their most specific argument, but the wrapper itself adds 0.',
      ],
      callout: {
        type: 'tip',
        title: 'Maintain Flat Specificity',
        content: 'Aim for a flat specificity profile (single classes like .card, .btn) across your codebase. Flat specificity makes component styling modular and easy to override.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Specificity is a 4-component tuple: (inline, ID, class/pseudo-class/attribute, element/pseudo-element).',
        'Higher columns always beat lower columns, regardless of quantity.',
        'Keep selector chains short to prevent unmaintainable specificity wars.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Calculate Specificity',
      task: 'Compute the 4-component specificity tuple for: body.dark-mode #sidebar .nav-item a:hover',
      hint: 'Inline: 0, IDs: 1 (#sidebar), Classes/Attrs/Pseudos: 3 (.dark-mode, .nav-item, :hover), Elements: 2 (body, a). Tuple: (0, 1, 3, 2).',
    },
  ],
  quiz: [
    {
      question: 'Which selector wins between "#nav" and "header div nav ul li.active a"?',
      options: [
        'header div nav ul li.active a because it has 6 elements and 1 class',
        '#nav because 1 ID (0,1,0,0) beats any combination of classes and elements (0,0,1,6)',
        'They are equal and tie-broken by source order',
        'The longer selector always wins',
      ],
      correctAnswer: 1,
      explanation: 'A single ID has (0,1,0,0) specificity, which automatically defeats any selector with 0 IDs, regardless of how many classes or elements are chained.',
    },
    {
      question: 'What is the specificity contribution of the universal selector (*)?',
      options: ['(0, 0, 0, 1)', '(0, 0, 1, 0)', '(0, 0, 0, 0)', '(1, 0, 0, 0)'],
      correctAnswer: 2,
      explanation: 'The universal selector (*) has zero specificity (0, 0, 0, 0).',
    },
    {
      question: 'What specificity score does an inline style attribute (style="...") carry?',
      options: ['(0, 1, 0, 0)', '(1, 0, 0, 0)', '(0, 0, 1, 0)', '(10, 0, 0, 0)'],
      correctAnswer: 1,
      explanation: 'Inline styles sit in the highest column "a" of the tuple: (1, 0, 0, 0).',
    },
  ],
};
