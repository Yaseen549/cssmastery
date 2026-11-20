export const marginCollapsingLesson = {
  slug: 'margin-collapsing',
  number: '22',
  title: 'Margin Collapsing Mechanics',
  category: 'The CSS Box Model',
  subtitle: 'When vertical margins merge, the 3 collapsing scenarios, and how to prevent it with BFC',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Disappearing Margin Mystery',
      type: 'text',
      lead: 'Margin collapsing is a fundamental layout behavior where adjacent vertical margins (top and bottom) combine into a single margin instead of summing together.',
      paragraphs: [
        'If an <h1> has margin-bottom: 30px and the following paragraph has margin-top: 20px, the space between them is NOT 50px. The margins collapse into 30px (the larger of the two).',
        'Crucially: Margin collapsing ONLY occurs vertically (block direction). Horizontal margins (left and right) NEVER collapse.',
      ],
    },
    {
      id: 'three-scenarios',
      title: 'The 3 Margin Collapsing Scenarios',
      type: 'table',
      table: {
        caption: 'The 3 Scenarios Where Margins Collapse',
        headers: ['Scenario', 'Description', 'How to Prevent It'],
        rows: [
          ['1. Adjacent Siblings', 'The bottom margin of an element touches the top margin of the next sibling.', 'Separate with padding, border, or use flexbox/grid gap.'],
          ['2. Parent and First/Last Child', 'A child top margin leaks outside the parent if the parent has no padding or border.', 'Add padding-top: 1px, border-top: 1px, or display: flow-root on parent.'],
          ['3. Empty Blocks', 'An element with height: 0, no padding, and no border has its own top and bottom margins collapse together.', 'Add min-height, border, or padding.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Preventing Parent-Child Collapse with flow-root',
      type: 'code-example',
      codeTitle: 'margin-collapsing.css',
      codeLang: 'css',
      code: `/* Without flow-root, the h1 margin-top escapes the parent box! */
.parent-broken {
  background-color: #fee2e2;
  /* Missing border or padding causes child margin to collapse outward */
}

/* THE MODERN SOLUTION: display: flow-root establishes a new Block Formatting Context (BFC) */
.parent-fixed {
  display: flow-root;
  background-color: #dcfce7;
}

.child-heading {
  margin-top: 30px;
  color: #166534;
}`,
      demo: {
        title: 'Margin Collapsing Comparison',
        html: `<div style="font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px;">
  <div style="border: 2px solid #ef4444; background: #fef2f2; border-radius: 8px;">
    <div style="margin: 20px; background: white; padding: 8px; border-radius: 4px; font-size: 12px; color: #991b1b;">
      Parent collapses with child margin unless protected!
    </div>
  </div>
  <div style="display: flow-root; border: 2px solid #22c55e; background: #f0fdf4; border-radius: 8px;">
    <div style="margin: 20px; background: white; padding: 8px; border-radius: 4px; font-size: 12px; color: #166534;">
      display: flow-root safely contains all child margins!
    </div>
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Only vertical margins collapse; horizontal margins never collapse.',
        'When margins collapse, the largest single margin wins.',
        'Use display: flow-root on parent containers to prevent child margins from leaking out.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Fix Leaking Header Margin',
      task: 'Apply display: flow-root to a container div to prevent its first child <h1> top margin from bleeding out into the page body.',
      hint: '.container { display: flow-root; }',
    },
  ],
  quiz: [
    {
      question: 'If element A has margin-bottom: 40px and sibling element B has margin-top: 25px, what is the distance between them?',
      options: ['65px', '40px', '25px', '15px'],
      correctAnswer: 1,
      explanation: 'Vertical margins collapse to the maximum single value: 40px.',
    },
    {
      question: 'Do horizontal margins (margin-left and margin-right) ever collapse in standard CSS?',
      options: [
        'Yes, always',
        'No, margin collapsing only occurs in the vertical (block) axis',
        'Only in tables',
        'Only in Flexbox',
      ],
      correctAnswer: 1,
      explanation: 'Margin collapsing is strictly a vertical block-direction layout rule.',
    },
    {
      question: 'Which modern CSS property and value prevents parent-child margin collapsing cleanly without hacky borders?',
      options: [
        'overflow: visible',
        'display: flow-root',
        'clear: both',
        'float: none',
      ],
      correctAnswer: 1,
      explanation: 'display: flow-root creates a new Block Formatting Context (BFC), containing all internal margins without clipping overflow.',
    },
  ],
};
