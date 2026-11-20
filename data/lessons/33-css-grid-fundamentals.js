export const cssGridFundamentalsLesson = {
  slug: 'css-grid-fundamentals',
  number: '33',
  title: 'CSS Grid Architecture & Tracks',
  category: 'CSS Grid Architecture',
  subtitle: 'Two-dimensional layout, grid containers, explicit vs implicit tracks, and the fr unit',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: True 2D Grid Layout',
      type: 'text',
      lead: 'CSS Grid Layout is the most powerful layout system available in CSS. Unlike Flexbox (which is primarily one-dimensional), Grid is a true two-dimensional layout engine.',
      paragraphs: [
        'With Grid, you can align content along columns AND rows simultaneously, design complex magazine and dashboard matrices, and position elements anywhere across intersecting grid lines.',
      ],
    },
    {
      id: 'grid-terminology',
      title: 'The Core Vocabulary of CSS Grid',
      type: 'table',
      table: {
        caption: 'CSS Grid Structural Terminology',
        headers: ['Term', 'Definition', 'Analogy'],
        rows: [
          ['Grid Container', 'The parent element declared with display: grid.', 'The entire blueprint or chessboard.'],
          ['Grid Track', 'The space between two adjacent grid lines (a row or column).', 'A single column or row strip.'],
          ['Grid Line', 'The dividing horizontal or vertical lines that define the grid (1-based index).', 'The grid rulers.'],
          ['Grid Cell', 'The intersection of one row and one column (smallest single unit).', 'A single square on a chessboard.'],
          ['Grid Area', 'The rectangular space bounded by 4 grid lines containing any number of cells.', 'A designated layout zone (e.g. "header", "sidebar").'],
          ['fr (Fractional Unit)', 'Represents a fraction of the available remaining space in the grid.', 'Dynamic proportional sharing (1fr, 2fr).'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Basic 3-Column Grid with fr Units',
      type: 'code-example',
      codeTitle: 'grid-basic.css',
      codeLang: 'css',
      code: `/* 3-Column Equal Grid with fractional units (fr) */
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  grid-template-rows: auto;
  gap: 16px; /* Row and column gutters */
}

/* Card item inside grid */
.grid-card {
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}`,
      demo: {
        title: '3-Column Grid Output',
        html: `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; font-family: sans-serif;">
  <div style="background: #fff7ed; border: 1px solid #fed7aa; padding: 14px; border-radius: 8px; text-align: center; color: #ea580c; font-weight: bold; font-size: 12px;">Track 1 (1fr)</div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; padding: 14px; border-radius: 8px; text-align: center; color: #ea580c; font-weight: bold; font-size: 12px;">Track 2 (1fr)</div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; padding: 14px; border-radius: 8px; text-align: center; color: #ea580c; font-weight: bold; font-size: 12px;">Track 3 (1fr)</div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'CSS Grid is 2-dimensional (handles rows and columns at the same time).',
        'fr represents fractional free space; repeat() avoids redundant track declarations.',
        'Use grid for whole-page layouts and matrices; use flexbox for 1D micro-components.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Sidebar and Main Grid',
      task: 'Define a 2-column grid where the sidebar is fixed at 250px and the main content expands to fill all remaining space.',
      hint: 'grid-template-columns: 250px 1fr;',
    },
  ],
  quiz: [
    {
      question: 'What is the primary difference between CSS Flexbox and CSS Grid?',
      options: [
        'Grid is only for tables',
        'Flexbox is 1-dimensional (row OR column), while Grid is 2-dimensional (rows AND columns simultaneously)',
        'Flexbox requires JavaScript',
        'Grid does not support gap',
      ],
      correctAnswer: 1,
      explanation: 'Flexbox aligns along one axis at a time, while CSS Grid aligns across intersecting rows and columns.',
    },
    {
      question: 'What does the "fr" unit represent in CSS Grid?',
      options: [
        'Frame rate',
        'A fraction of the remaining free space in the grid container',
        'Font resolution',
        'Fixed ratio',
      ],
      correctAnswer: 1,
      explanation: 'fr stands for Fractional unit, distributing available leftover space proportionally.',
    },
    {
      question: 'In "grid-template-columns: repeat(4, 1fr);", how many equal columns are created?',
      options: ['1', '4', '16', 'Unlimited'],
      correctAnswer: 1,
      explanation: 'repeat(4, 1fr) is shorthand for "1fr 1fr 1fr 1fr", creating 4 equal-width columns.',
    },
  ],
};
