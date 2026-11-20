export const theCascadeAlgorithmLesson = {
  slug: 'the-cascade-algorithm',
  number: '13',
  title: 'The Cascade Algorithm',
  category: 'Cascade, Specificity & Inheritance',
  subtitle: 'How browsers resolve styling conflicts across User Agent, User, and Author origins',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Heart of CSS',
      type: 'text',
      lead: 'The "C" in CSS stands for Cascade. The Cascade is the formal algorithm browsers use to resolve conflicts when multiple CSS rules target the same element with competing property declarations.',
      paragraphs: [
        'Without a defined conflict resolution algorithm, the web would be chaotic. The Cascade ensures that every property on every element resolves to exactly ONE computed value.',
      ],
    },
    {
      id: 'cascade-stages',
      title: 'The 6 Stages of the Cascade Algorithm (W3C Specification)',
      type: 'table',
      table: {
        caption: 'The Cascade Priority Ladder (Highest to Lowest)',
        headers: ['Priority', 'Cascade Criteria', 'Explanation of Precedence'],
        rows: [
          ['1 (Highest)', 'Transition declarations', 'Active CSS transition property values take top priority during animation.'],
          ['2', '!important by Origin', 'User Agent !important > User !important > Author !important.'],
          ['3', 'Animation declarations', 'Active CSS keyframe animation property values.'],
          ['4', 'Normal Author Origin & Layers', 'Author styles grouped and ordered by Cascade Layers (@layer).'],
          ['5', 'Specificity Formula', 'If origin and layer are identical, the rule with higher Specificity wins.'],
          ['6 (Tie-breaker)', 'Order of Appearance', 'If everything else is equal, the LAST declaration declared in the source code wins.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Cascade in Action: Source Order & Specificity',
      type: 'code-example',
      codeTitle: 'cascade-demo.css',
      codeLang: 'css',
      code: `/* Rule 1: Specificity (0, 0, 1, 0) */
.btn {
  background-color: #3b82f6; /* Blue */
  color: white;
}

/* Rule 2: Specificity (0, 0, 1, 0) - IDENTICAL SPECIFICITY */
/* Since it appears later in source order, Orange OVERRIDES Blue! */
.btn-accent {
  background-color: #f97316; /* Orange */
}

/* Rule 3: Specificity (0, 1, 0, 0) - ID wins over classes */
#special-action {
  background-color: #10b981; /* Green */
}`,
      demo: {
        title: 'Cascade Resolution Result',
        html: `<div style="font-family: sans-serif; display: flex; gap: 12px; align-items: center;">
  <div style="background: #f97316; color: white; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: bold;">
    .btn.btn-accent -> Orange Wins (Source Order)
  </div>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes',
      type: 'list',
      items: [
        'Believing the class order inside the HTML class="" attribute matters: <div class="btn-accent btn"> still evaluates based on stylesheet order, not HTML attribute order!',
        'Relying on !important as a sledgehammer: Abusing !important breaks the cascade and leads to unmaintainable stylesheets.',
      ],
      callout: {
        type: 'warning',
        title: 'HTML Class Attribute Order is Irrelevant',
        content: 'Writing class="active button" vs class="button active" has ZERO effect on CSS cascade resolution. What matters is which class appears later in your CSS file.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'The cascade resolves conflicts via: Origin & Importance -> Layers -> Specificity -> Source Order.',
        'When specificity is tied, the rule written last in the stylesheet wins.',
        'HTML class attribute order does not determine precedence.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Predict the Winning Color',
      task: 'Given: p { color: red; } and p { color: blue; }, which color will render? What if the first rule has !important?',
      hint: 'Without !important, source order wins (blue). With !important, red wins.',
    },
  ],
  quiz: [
    {
      question: 'When two conflicting CSS rules have the exact same origin, layer, and specificity, how does the browser choose the winner?',
      options: [
        'The rule with shorter selector length wins',
        'The rule that appears latest (last) in source order wins',
        'The first rule always wins',
        'The browser picks randomly',
      ],
      correctAnswer: 1,
      explanation: 'Order of Appearance (source order) serves as the ultimate tie-breaker when specificity and origins are identical.',
    },
    {
      question: 'Does the order of classes inside the HTML "class" attribute affect which CSS rule takes precedence?',
      options: [
        'Yes, the first class listed in HTML always wins',
        'Yes, the last class listed in HTML wins',
        'No, cascade precedence is determined solely by stylesheet order and specificity',
        'Only on mobile browsers',
      ],
      correctAnswer: 2,
      explanation: 'HTML class attribute tokens are an unordered set; their sequence in HTML has zero effect on CSS cascade order.',
    },
    {
      question: 'Which of the following has higher cascade priority than standard author CSS rules?',
      options: [
        'User agent default styles',
        'Active CSS keyframe animation declarations',
        'Comments',
        'Universal selector rules',
      ],
      correctAnswer: 1,
      explanation: 'Active animations take precedence over standard normal author declarations in the W3C cascade ladder.',
    },
  ],
};
