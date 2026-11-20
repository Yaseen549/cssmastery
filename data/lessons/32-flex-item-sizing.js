export const flexItemSizingLesson = {
  slug: 'flex-item-sizing',
  number: '32',
  title: 'Flex Item Sizing (flex-grow, flex-shrink, flex-basis)',
  category: 'Modern Flexbox',
  subtitle: 'How available space and overflow are distributed, the flex shorthand, and align-self',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Mechanics of Item Flexibility',
      type: 'text',
      lead: 'Flex items are flexible by definition. The properties flex-grow, flex-shrink, and flex-basis dictate how individual items expand to fill leftover space or shrink to prevent overflow.',
      paragraphs: [
        'Understanding how the flex shorthand calculates dimensions is essential to building professional application toolbars, sidebars, and adaptive inputs.',
      ],
    },
    {
      id: 'flex-trio-table',
      title: 'The Flex Sizing Trio',
      type: 'table',
      table: {
        caption: 'The 3 Flex Sizing Properties',
        headers: ['Property', 'Initial Default', 'Mathematical Role', 'Common Setting'],
        rows: [
          ['flex-grow', '0 (Do not grow)', 'Factor specifying how much available remaining positive space the item absorbs.', 'flex-grow: 1 (grows to fill all available space).'],
          ['flex-shrink', '1 (Can shrink)', 'Factor specifying how much the item shrinks relative to siblings when space is tight.', 'flex-shrink: 0 (PREVENTS item from ever shrinking/squishing!).'],
          ['flex-basis', 'auto', 'The initial starting main-axis dimension before growth or shrinkage is calculated.', '200px, 30%, or auto.'],
          ['flex (Shorthand)', '0 1 auto', 'Combines: flex: <grow> <shrink> <basis>', 'flex: 1 (1 1 0%), flex: auto (1 1 auto).'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Sidebar & Expanding Search Input Layout',
      type: 'code-example',
      codeTitle: 'flex-sizing.css',
      codeLang: 'css',
      code: `/* Classic Application Header Layout */
.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* 1. Fixed icon button: Never shrinks, never grows */
.btn-icon {
  flex: 0 0 40px; /* grow: 0, shrink: 0, basis: 40px */
  height: 40px;
}

/* 2. Expanding Search Input: Absorbs all remaining available space! */
.search-input {
  flex: 1; /* Shorthand for flex: 1 1 0% */
  padding: 8px 14px;
}

/* 3. Individual Override on Cross Axis */
.cta-button {
  align-self: flex-end; /* Overrides container align-items */
}`,
      demo: {
        title: 'Expanding Flex Input Preview',
        html: `<div style="display: flex; gap: 8px; align-items: center; background: white; border: 1px solid #e4e4e7; padding: 10px; border-radius: 8px; font-family: sans-serif;">
  <div style="flex: 0 0 32px; height: 32px; background: #f97316; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">★</div>
  <input type="text" placeholder="flex: 1 (Expands to fill all remaining width)" style="flex: 1; padding: 6px 10px; border: 1px solid #d4d4d8; border-radius: 6px; font-size: 12px;">
  <button style="flex: 0 0 auto; background: #18181b; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold;">Search</button>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'flex: 1 makes an item expand and absorb all remaining available space.',
        'flex-shrink: 0 prevents an element (like an avatar or icon) from being squashed when container shrinks.',
        'align-self allows a single item to override container cross-axis alignment.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Prevent Avatar Squishing',
      task: 'Why do user profile avatars get squished on mobile screens in flex containers? Write the CSS declaration that prevents this.',
      hint: 'flex-shrink: 0;',
    },
  ],
  quiz: [
    {
      question: 'What is the default initial value of "flex-shrink" in CSS?',
      options: ['0', '1', 'auto', 'none'],
      correctAnswer: 1,
      explanation: 'By default, flex-shrink is 1, meaning flex items are allowed to shrink below their basis to avoid overflow.',
    },
    {
      question: 'How do you prevent a flex item from ever shrinking when space is constrained?',
      options: ['flex-shrink: 0;', 'flex-grow: 0;', 'flex-basis: max;', 'shrink: false;'],
      correctAnswer: 0,
      explanation: 'flex-shrink: 0 guarantees the element will never compress below its declared basis or content size.',
    },
    {
      question: 'What does the shorthand "flex: 1;" expand to in standard CSS specifications?',
      options: ['flex: 1 1 auto;', 'flex: 1 1 0%;', 'flex: 1 0 auto;', 'flex: 1 0 0px;'],
      correctAnswer: 1,
      explanation: 'flex: 1 expands to flex-grow: 1, flex-shrink: 1, and flex-basis: 0%.',
    },
  ],
};
