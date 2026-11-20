export const cssArchitectureAndBemLesson = {
  slug: 'css-architecture-and-bem',
  number: '47',
  title: 'CSS Architecture & BEM Methodology',
  category: 'Advanced Architecture & Performance',
  subtitle: 'Block Element Modifier (BEM) naming conventions, utility-first CSS, and CSS Modules',
  badge: 'Advanced',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Scaling CSS for Large Applications',
      type: 'text',
      lead: 'Writing CSS for a 1-page website is easy. Writing CSS that scales cleanly across 50 developers and 500 components requires a formal architectural methodology.',
      paragraphs: [
        'Without a defined architectural convention, stylesheets degenerate into "append-only CSS": developers fear deleting or editing old rules, leading to massive bloat, specificity wars, and unexpected side effects across unrelated pages.',
      ],
    },
    {
      id: 'bem-methodology',
      title: 'The BEM Methodology (Block, Element, Modifier)',
      type: 'table',
      table: {
        caption: 'BEM Naming Structure',
        headers: ['Component', 'Naming Syntax', 'Role', 'Example'],
        rows: [
          ['Block', '.block', 'A standalone entity that is meaningful on its own.', '.card, .navbar, .btn'],
          ['Element', '.block__element', 'A dependent part of a block that has no standalone meaning (double underscore).', '.card__title, .card__body, .navbar__link'],
          ['Modifier', '.block--modifier or .block__element--modifier', 'A flag on a block or element that changes appearance or behavior (double hyphen).', '.card--featured, .btn--primary, .btn--disabled'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'BEM in Practice',
      type: 'code-example',
      codeTitle: 'bem-component.css',
      codeLang: 'css',
      code: `/* Block */
.pricing-card {
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  padding: 24px;
}

/* Modifier on Block */
.pricing-card--popular {
  border-color: #f97316;
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.2);
}

/* Element */
.pricing-card__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

/* Element */
.pricing-card__button {
  width: 100%;
  padding: 10px;
  background: #f97316;
  color: white;
  border-radius: 6px;
}`,
      demo: {
        title: 'BEM Structured Card',
        html: `<div style="font-family: sans-serif; border: 2px solid #f97316; background: #fff7ed; padding: 16px; border-radius: 10px; max-width: 260px;">
  <span style="font-size: 10px; font-weight: bold; color: #ea580c; text-transform: uppercase;">.pricing-card--popular</span>
  <h4 style="margin: 4px 0 8px; color: #7c2d12;">.pricing-card__title</h4>
  <button style="width: 100%; background: #f97316; color: white; border: none; padding: 6px; border-radius: 6px; font-size: 11px; font-weight: bold;">
    .pricing-card__button
  </button>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'BEM uses double underscores (__element) and double hyphens (--modifier).',
        'Guarantees flat (0,0,1,0) specificity across components.',
        'Prevents accidental styling leakage across different page areas.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Write a BEM Form Group',
      task: 'Structure a BEM component for a form group with label, input, and error modifier.',
      hint: '.form-group, .form-group__label, .form-group__input, .form-group__input--error',
    },
  ],
  quiz: [
    {
      question: 'In BEM naming conventions, how is an Element separated from its parent Block?',
      options: [
        'With a single hyphen (-)',
        'With a double underscore (__)',
        'With a dot (.)',
        'With a slash (/)',
      ],
      correctAnswer: 1,
      explanation: 'In BEM, double underscores denote an element belonging to a block, like .card__title.',
    },
    {
      question: 'What is the primary specificity benefit of following BEM?',
      options: [
        'It eliminates specificity wars by keeping every selector at a flat (0, 0, 1, 0) class specificity',
        'It makes selectors have ID specificity',
        'It disables inheritance',
        'It automatically minifies code',
      ],
      correctAnswer: 0,
      explanation: 'Because BEM avoids nesting (.block .element), all selectors carry the exact same single class specificity.',
    },
    {
      question: 'Which of the following represents a BEM Modifier on a button block?',
      options: ['.btn-header', '.btn__text', '.btn--primary', '.btn_action'],
      correctAnswer: 2,
      explanation: 'Double hyphens (--primary) denote a modifier in BEM.',
    },
  ],
};
