export const modernLogicalPseudoClassesLesson = {
  slug: 'modern-logical-pseudo-classes',
  number: '11',
  title: 'Modern Logical Pseudo-Classes (:is, :where, :not, :has)',
  category: 'Selectors Mastery',
  subtitle: 'The game-changing selector suite: forgiveness lists, zero specificity with :where, and the parent selector :has()',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Modern Selector Revolution',
      type: 'text',
      lead: 'The modern pseudo-classes :is(), :where(), :not(), and :has() have fundamentally transformed how CSS is written in 2026.',
      paragraphs: [
        'For decades, CSS lacked the ability to style a parent based on its children, lacked selector grouping without multiplying specificity, and crashed entire rulesets if a single vendor prefix failed. These four logical pseudo-classes solved all of those problems.',
      ],
    },
    {
      id: 'comparison-table',
      title: 'The 4 Modern Pseudo-Classes Compared',
      type: 'table',
      table: {
        caption: 'Characteristics of :is, :where, :not, and :has',
        headers: ['Pseudo-Class', 'Core Function', 'Specificity Formula', 'Forgiving List?'],
        rows: [
          [':is(...)', 'Matches any selector in the argument list', 'Takes the specificity of its MOST specific argument', 'Yes (invalid selectors do not break rule).'],
          [':where(...)', 'Matches any selector in the argument list', 'ALWAYS CONTRIBUTES (0, 0, 0, 0) — Zero specificity!', 'Yes (forgiving list).'],
          [':not(...)', 'Negation: matches elements NOT matching argument', 'Takes the specificity of its argument', 'Yes in modern CSS.'],
          [':has(...)', 'Relational selector: "Parent Selector" targeting based on children/siblings', 'Takes the specificity of its most specific argument', 'Yes.'],
        ],
      },
    },
    {
      id: 'parent-selector-has',
      title: 'The Holy Grail: The :has() Parent Selector',
      type: 'text',
      paragraphs: [
        'Before :has(), styling a card differently when it contained an image or styling a form group when its input was invalid required JavaScript classes.',
        ':has() allows CSS to look down into child elements or forward into siblings and style the ancestor accordingly. It is officially supported across 100% of modern browsers.',
      ],
      callout: {
        type: 'best-practice',
        title: 'Zero Specificity with :where()',
        content: 'Use :where() when writing design system base defaults. Because it has (0,0,0,0) specificity, consumers can override it with a single class without fighting specificity wars!',
      },
    },
    {
      id: 'code-example',
      title: 'Code Demonstrations of Modern Selectors',
      type: 'code-example',
      codeTitle: 'modern-selectors.css',
      codeLang: 'css',
      code: `/* 1. Grouping without duplication using :is() */
:is(header, main, footer) :is(h1, h2, h3) {
  color: #18181b;
  margin-bottom: 0.5rem;
}

/* 2. Zero-specificity reset using :where() */
:where(a) {
  color: #f97316;
  text-decoration: underline;
}

/* 3. Negation: all buttons EXCEPT disabled ones */
button:not(:disabled):hover {
  transform: translateY(-2px);
  background-color: #ea580c;
}

/* 4. THE PARENT SELECTOR: Style card if it contains an image */
.card:has(img) {
  grid-template-columns: 120px 1fr;
  padding: 0;
}

/* Style form label if input inside is focused */
.form-field:has(input:focus) {
  border-color: #f97316;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2);
}`,
      demo: {
        title: 'Live :has() and :not() Demonstration',
        html: `<div style="display: flex; flex-direction: column; gap: 12px; font-family: sans-serif;">
  <div style="border: 2px solid #f97316; border-radius: 10px; padding: 12px; background: #fff7ed;">
    <span style="font-size: 11px; font-weight: bold; color: #ea580c;">.card:has(input:checked)</span>
    <label style="display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 13px; cursor: pointer;">
      <input type="checkbox" checked style="accent-color: #f97316;">
      <span>Parent card dynamically highlighted via :has()</span>
    </label>
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        ':is() compresses long selector chains and adopts highest argument specificity.',
        ':where() is identical to :is() but guarantees zero (0,0,0,0) specificity.',
        ':not() negates conditions cleanly.',
        ':has() acts as the long-awaited parent and relational selector.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Style Cards with Badges',
      task: 'Write a rule using :has() that adds a gold border to any .article-card that contains an element with class .premium-badge.',
      hint: '.article-card:has(.premium-badge) { border-color: gold; }',
    },
  ],
  quiz: [
    {
      question: 'What is the specificity contribution of the :where() pseudo-class?',
      options: [
        '(0, 0, 1, 0)',
        '(0, 0, 0, 0) — It contributes exactly zero specificity',
        'The specificity of its most specific argument',
        'Equal to an ID selector',
      ],
      correctAnswer: 1,
      explanation: ':where() is unique in CSS: it has absolutely zero specificity, making rules trivial to override.',
    },
    {
      question: 'What does the selector "form:has(input:invalid)" target?',
      options: [
        'The invalid input inside the form',
        'The <form> element itself if any input inside it is currently invalid',
        'All valid form elements',
        'Only submitted forms',
      ],
      correctAnswer: 1,
      explanation: ':has() styles the subject (the form) based on whether the condition inside it matches.',
    },
    {
      question: 'How does :is() differ from :where()?',
      options: [
        ':is() only works with IDs',
        ':is() takes the specificity of its most specific argument, while :where() specificity is always 0',
        ':where() does not support class names',
        ':is() is deprecated',
      ],
      correctAnswer: 1,
      explanation: 'Both group selectors forgivingly, but :is() adopts the highest argument specificity while :where() stays at zero.',
    },
  ],
};
