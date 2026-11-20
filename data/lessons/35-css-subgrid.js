export const cssSubgridLesson = {
  slug: 'css-subgrid',
  number: '35',
  title: 'CSS Subgrid',
  category: 'CSS Grid Architecture',
  subtitle: 'Aligning nested card components directly with parent grid track columns and rows',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Nested Alignment Problem',
      type: 'text',
      lead: 'In standard CSS Grid, child elements can be grid items, but their grandchild elements are completely detached from the parent grid tracks.',
      paragraphs: [
        'This created a classic web design flaw: in a row of 3 cards, if Card 1 had a 3-line heading, Card 2 had a 1-line heading, and Card 3 had a 2-line heading, the buttons at the bottom of the cards were misaligned!',
        'CSS Subgrid solves this by allowing nested child components to directly inherit and participate in the parent grid tracks.',
      ],
    },
    {
      id: 'subgrid-syntax',
      title: 'Subgrid Syntax Definition',
      type: 'syntax',
      syntax: 'grid-template-rows: subgrid;\n/* or */\ngrid-template-columns: subgrid;',
      syntaxNote: 'Declared on a child grid item to inherit the parent grid row or column tracks.',
    },
    {
      id: 'code-example',
      title: 'Perfect Card Alignment with Subgrid',
      type: 'code-example',
      codeTitle: 'subgrid-cards.css',
      codeLang: 'css',
      code: `/* Parent Grid Deck */
.card-deck {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Card child item spans 3 parent row tracks */
.card {
  grid-row: span 3; /* Spans 3 tracks: header, body, footer */
  display: grid;
  grid-template-rows: subgrid; /* INHERITS parent row tracks! */
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  padding: 16px;
}

/* Result: Across all 3 cards, all titles, bodies, and buttons 
   align along identical pixel-perfect horizontal lines! */`,
      demo: {
        title: 'Subgrid Aligned Row Preview',
        html: `<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; font-family: sans-serif;">
  <div style="border: 1px solid #fed7aa; background: #fff7ed; padding: 12px; border-radius: 8px; display: flex; flex-direction: column; justify-content: space-between;">
    <h4 style="margin: 0; color: #c2410c; font-size: 13px;">Tall Title (Takes 2 lines of text)</h4>
    <button style="margin-top: 12px; background: #f97316; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 11px;">Aligned Button</button>
  </div>
  <div style="border: 1px solid #fed7aa; background: #fff7ed; padding: 12px; border-radius: 8px; display: flex; flex-direction: column; justify-content: space-between;">
    <h4 style="margin: 0; color: #c2410c; font-size: 13px;">Short Title</h4>
    <button style="margin-top: 12px; background: #f97316; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 11px;">Aligned Button</button>
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Subgrid allows nested grid elements to share the parent grid track sizing.',
        'Eliminates uneven button and heading alignment in multi-card decks.',
        '100% supported across modern web browsers (Chrome 117+, Safari 16+, Firefox 71+).',
      ],
    },
  ],
  exercises: [
    {
      title: 'Card Subgrid Row Span',
      task: 'Declare a card that spans 4 parent rows and inherits its row definitions using subgrid.',
      hint: 'grid-row: span 4; grid-template-rows: subgrid;',
    },
  ],
  quiz: [
    {
      question: 'What is the primary problem CSS Subgrid was invented to solve?',
      options: [
        'Making grids faster',
        'Allowing nested children inside a grid item to align with the parent grid tracks',
        'Replacing media queries',
        'Generating animations',
      ],
      correctAnswer: 1,
      explanation: 'Subgrid allows nested child elements to align directly with the row or column lines of their grandparent grid.',
    },
    {
      question: 'How do you declare a subgrid on a child grid item?',
      options: [
        'display: subgrid;',
        'grid-template-columns: subgrid; (or grid-template-rows: subgrid;)',
        'subgrid: true;',
        'parent-grid: inherit;',
      ],
      correctAnswer: 1,
      explanation: 'Subgrid is declared on the grid-template-columns or grid-template-rows property of a display: grid element.',
    },
    {
      question: 'Can an element inherit subgrid rows while defining its own independent columns?',
      options: [
        'Yes, you can subgrid one dimension and define custom tracks in the other',
        'No, subgrid must always be both rows and columns',
        'Only on mobile devices',
        'Only in tables',
      ],
      correctAnswer: 0,
      explanation: 'You can set grid-template-rows: subgrid while declaring independent grid-template-columns: 1fr 2fr.',
    },
  ],
};
