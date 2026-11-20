export const flexboxAlignmentAndGapLesson = {
  slug: 'flexbox-alignment-and-gap',
  number: '31',
  title: 'Flexbox Alignment & Spacing',
  category: 'Modern Flexbox',
  subtitle: 'justify-content, align-items, align-content, flex-wrap, and modern gap properties',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Precision Spacing & Wrapping',
      type: 'text',
      lead: 'Mastering flex alignment properties gives you complete control over how empty space is distributed inside your layouts.',
      paragraphs: [
        'With justify-content, align-items, and flex-wrap, you can design fluid headers, responsive multi-line tag lists, and self-aligning components without fragile margin hacks.',
      ],
    },
    {
      id: 'justify-content-table',
      title: 'justify-content Values (Main Axis Alignment)',
      type: 'table',
      table: {
        caption: 'justify-content Options',
        headers: ['Value', 'Visual Distribution Pattern', 'Ideal UI Use Case'],
        rows: [
          ['flex-start', 'Items packed tightly against the start of main axis.', 'Standard left-aligned lists.'],
          ['center', 'Items packed tightly in the center of the axis.', 'Centered call-to-action blocks.'],
          ['flex-end', 'Items packed tightly against the end of main axis.', 'Right-aligned pagination or actions.'],
          ['space-between', 'First item at start, last item at end; remaining space distributed evenly between.', 'Navbar logos and navigation links.'],
          ['space-around', 'Items have equal space on both sides (half-space at edges).', 'Icon toolbars.'],
          ['space-evenly', 'Space between any two items AND edges is identical.', 'Even card distribution.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Responsive Flex Wrap with Gap',
      type: 'code-example',
      codeTitle: 'flex-wrap.css',
      codeLang: 'css',
      code: `/* Multi-line wrapping badge collection */
.badge-container {
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap onto new lines */
  gap: 12px; /* Consistent row and column gutter */
  align-items: center;
}

.badge {
  background-color: #fed7aa;
  color: #7c2d12;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}`,
      demo: {
        title: 'Wrapped Flex Badges with Gap',
        html: `<div style="display: flex; flex-wrap: wrap; gap: 8px; font-family: sans-serif; max-width: 300px;">
  <span style="background: #fed7aa; color: #7c2d12; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: bold;">HTML5</span>
  <span style="background: #fed7aa; color: #7c2d12; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: bold;">CSS3</span>
  <span style="background: #fed7aa; color: #7c2d12; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: bold;">Flexbox</span>
  <span style="background: #fed7aa; color: #7c2d12; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: bold;">Grid 2.0</span>
  <span style="background: #fed7aa; color: #7c2d12; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: bold;">Subgrid</span>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Use justify-content for main axis space distribution (space-between, center, etc.).',
        'Use flex-wrap: wrap to prevent flex items from shrinking into oblivion on mobile.',
        'The gap property cleanly replaces legacy margin-right hacks.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Space-Between Navbar',
      task: 'Structure a navbar with brand logo on the far left and navigation links on the far right using justify-content.',
      hint: 'display: flex; justify-content: space-between; align-items: center;',
    },
  ],
  quiz: [
    {
      question: 'Which justify-content value places the first item at the start edge, the last item at the end edge, and distributes remaining space evenly?',
      options: ['space-around', 'space-between', 'space-evenly', 'center'],
      correctAnswer: 1,
      explanation: 'space-between anchors the outer items against the container edges with equal gaps in between.',
    },
    {
      question: 'By default, what happens when flex items exceed the container width if flex-wrap is not specified?',
      options: [
        'They wrap to the next line',
        'They stay on one single line (nowrap) and shrink or overflow the container',
        'The container expands automatically',
        'Items disappear',
      ],
      correctAnswer: 1,
      explanation: 'The initial default is flex-wrap: nowrap, forcing all items to fit onto one line unless overridden with wrap.',
    },
    {
      question: 'What is the modern CSS property used to create spacing between flex items without applying margins to child elements?',
      options: ['margin-between', 'spacing', 'gap', 'gutter'],
      correctAnswer: 2,
      explanation: 'gap (or row-gap and column-gap) provides clean, native spacing between flex and grid items.',
    },
  ],
};
