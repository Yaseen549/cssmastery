export const cssDisplayModesLesson = {
  slug: 'css-display-modes',
  number: '27',
  title: 'CSS Display Modes (block, inline, flex, grid, flow-root)',
  category: 'Display & Positioning',
  subtitle: 'Formatting contexts, outer vs inner display types, and modern flow-root',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Layout Switchboard',
      type: 'text',
      lead: 'The display property is the single most important layout property in CSS. It determines both how an element interacts with its surrounding elements (outer display type) and how its children are arranged internally (inner display type).',
      paragraphs: [
        'Historically, display was limited to block, inline, and inline-block. Modern CSS Level 3 redefined display as a dual-value system (outer and inner), unlocking Flexbox, CSS Grid, and Block Formatting Contexts.',
      ],
    },
    {
      id: 'display-modes-table',
      title: 'Common CSS Display Values',
      type: 'table',
      table: {
        caption: 'Comparison of CSS Display Types',
        headers: ['Display Value', 'Line Breaking Behavior', 'Respects Width & Height?', 'Internal Children Context'],
        rows: [
          ['block', 'Starts on a new line; stretches to fill container width.', 'YES (full width/height control).', 'Flow layout (standard document flow).'],
          ['inline', 'Flows within line text; no line breaks.', 'NO (width, height, vertical margins ignored!).', 'Inline phrasing content.'],
          ['inline-block', 'Flows inline like text, but behaves as an independent box.', 'YES (respects width, height, padding, margins).', 'Flow layout.'],
          ['flex', 'Outer block container establishing a flex context.', 'YES.', 'Flex items arranged along Main/Cross axes.'],
          ['grid', 'Outer block container establishing a 2D grid.', 'YES.', 'Grid items placed in rows and columns.'],
          ['flow-root', 'Block container establishing a new BFC.', 'YES.', 'Contains internal floats and prevents margin collapsing.'],
          ['none', 'Element is completely removed from visual rendering tree.', 'N/A (occupies zero space).', 'Children also not rendered.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Display Modes in Practice',
      type: 'code-example',
      codeTitle: 'display.css',
      codeLang: 'css',
      code: `/* Block: Takes entire line width */
.block-element {
  display: block;
  background-color: #f4f4f5;
  padding: 12px;
  margin-bottom: 8px;
}

/* Inline: Sits directly in text flow (width/height ignored) */
.inline-badge {
  display: inline;
  background-color: #fee2e2;
  color: #b91c1c;
  padding: 2px 6px;
}

/* Inline-Block: Sits inline but respects width/height */
.inline-block-pill {
  display: inline-block;
  width: 120px;
  text-align: center;
  background-color: #f97316;
  color: white;
  padding: 6px 12px;
  border-radius: 9999px;
}`,
      demo: {
        title: 'Display Behavior Preview',
        html: `<div style="font-family: system-ui, sans-serif; font-size: 13px; line-height: 1.6;">
  <div style="background: #f4f4f5; padding: 10px; border-radius: 6px; margin-bottom: 8px;">
    <strong>display: block</strong> (Takes full horizontal width)
  </div>
  <p style="margin: 0;">
    Here is standard prose with an <span style="background: #fee2e2; color: #b91c1c; padding: 2px 6px; border-radius: 4px;">inline span</span> and an <span style="display: inline-block; width: 130px; text-align: center; background: #f97316; color: white; border-radius: 9999px; padding: 2px 8px; font-weight: bold;">inline-block pill</span> living in the same line!
  </p>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes',
      type: 'list',
      items: [
        'Setting width: 200px or margin-top: 20px on an inline element (like <span> or <a>) without changing display to block or inline-block. Inline elements ignore width, height, and vertical margins.',
        'Confusing display: none with visibility: hidden. display: none removes the box from layout entirely; visibility: hidden hides pixels but leaves an empty blank box consuming space.',
      ],
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'block elements break onto a new line and expand horizontally.',
        'inline elements flow within text and ignore width and height.',
        'inline-block combines inline text flow with full rectangular box model dimensions.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Button Width Fix',
      task: 'Why does an <a> tag ignore width: 150px? How do you fix it?',
      hint: 'By default <a> is inline. Change it to display: inline-block or display: inline-flex.',
    },
  ],
  quiz: [
    {
      question: 'Which CSS display value allows an element to sit inline within a text paragraph while still respecting custom width and height properties?',
      options: ['display: inline', 'display: inline-block', 'display: block', 'display: flow-root'],
      correctAnswer: 1,
      explanation: 'inline-block combines the inline text-flow behavior with full box model width, height, and padding controls.',
    },
    {
      question: 'What happens to the physical space occupied by an element when you set "display: none;"?',
      options: [
        'The element becomes invisible but still takes up its width and height',
        'The element is completely eliminated from the Render Tree and occupies zero space',
        'The element moves to the top-left corner',
        'It converts to an inline element',
      ],
      correctAnswer: 1,
      explanation: 'display: none removes the element from visual rendering and layout calculations entirely.',
    },
    {
      question: 'Can you set "margin-top: 30px" on a standard <span> with display: inline?',
      options: [
        'Yes, it pushes elements down by 30px',
        'No, vertical margins are completely ignored on standard inline elements',
        'Only if the parent is flexbox',
        'Only on mobile devices',
      ],
      correctAnswer: 1,
      explanation: 'Standard inline elements ignore vertical margins and vertical padding calculations in normal flow.',
    },
  ],
};
