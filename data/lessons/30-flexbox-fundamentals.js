export const flexboxFundamentalsLesson = {
  slug: 'flexbox-fundamentals',
  number: '30',
  title: 'Flexbox Architecture & Axes',
  category: 'Modern Flexbox',
  subtitle: 'Flex containers, flex items, main axis, cross axis, and writing-mode directionality',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The 1D Layout Revolution',
      type: 'text',
      lead: 'The Flexible Box Layout Module (Flexbox) provides a powerful, predictable way to arrange, align, and distribute space among items in a container, even when their sizes are unknown or dynamic.',
      paragraphs: [
        'Before Flexbox, developers relied on floats, table layouts, and negative margin hacks. Flexbox introduced a clean one-dimensional layout system that handles horizontal or vertical alignment effortlessly.',
      ],
    },
    {
      id: 'flex-axes-concept',
      title: 'The Dual Axes Concept: Main Axis vs Cross Axis',
      type: 'table',
      table: {
        caption: 'The Two Axes of Flexbox',
        headers: ['Axis', 'Established By', 'Alignment Property', 'Default Direction'],
        rows: [
          ['Main Axis', 'flex-direction (row, column, row-reverse, column-reverse)', 'justify-content', 'Horizontal (left to right in LTR languages).'],
          ['Cross Axis', 'Runs perpendicular (90 degrees) to the Main Axis', 'align-items / align-content', 'Vertical (top to bottom).'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Basic Flexbox Architecture',
      type: 'code-example',
      codeTitle: 'flexbox.css',
      codeLang: 'css',
      code: `/* Establish Flex Container */
.flex-container {
  display: flex;
  flex-direction: row; /* Main axis runs horizontally */
  justify-content: space-between; /* Space out items along main axis */
  align-items: center; /* Center items along cross axis */
  gap: 16px; /* Modern spacing between items */
  padding: 16px;
  background-color: #f4f4f5;
  border-radius: 12px;
}

/* Flex Items automatically adapt without floats */
.flex-item {
  background-color: #f97316;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
}`,
      demo: {
        title: 'Flexbox Horizontal Distribution',
        html: `<div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; background: #fff7ed; border: 1px solid #fed7aa; padding: 14px; border-radius: 10px; font-family: sans-serif;">
  <div style="background: #ea580c; color: white; padding: 8px 14px; border-radius: 6px; font-size: 12px; font-weight: bold;">Item 1</div>
  <div style="background: #f97316; color: white; padding: 8px 14px; border-radius: 6px; font-size: 12px; font-weight: bold;">Item 2 (Centered)</div>
  <div style="background: #ea580c; color: white; padding: 8px 14px; border-radius: 6px; font-size: 12px; font-weight: bold;">Item 3</div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'display: flex creates a flex container; immediate children become flex items.',
        'The main axis is controlled by flex-direction; the cross axis runs perpendicular.',
        'justify-content aligns on the main axis; align-items aligns on the cross axis.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Centering Trick',
      task: 'Write the 3 CSS declarations on a container that perfectly centers a child box both horizontally and vertically.',
      hint: 'display: flex; justify-content: center; align-items: center;',
    },
  ],
  quiz: [
    {
      question: 'When "flex-direction: column" is set on a flex container, what direction does the Main Axis run?',
      options: [
        'Horizontally (left to right)',
        'Vertically (top to bottom)',
        'Diagonally',
        'In reverse',
      ],
      correctAnswer: 1,
      explanation: 'flex-direction: column flips the main axis to run vertically from top to bottom.',
    },
    {
      question: 'Which property aligns flex items along the CROSS AXIS?',
      options: ['justify-content', 'align-items', 'flex-grow', 'flex-basis'],
      correctAnswer: 1,
      explanation: 'align-items aligns items along the cross axis, perpendicular to the main axis.',
    },
    {
      question: 'What happens to the children of an element when you declare "display: flex"?',
      options: [
        'They are deleted',
        'Direct first-level children immediately become flex items',
        'They convert to block elements',
        'They stack behind each other',
      ],
      correctAnswer: 1,
      explanation: 'Declaring display: flex establishes a flex formatting context for immediate child elements.',
    },
  ],
};
