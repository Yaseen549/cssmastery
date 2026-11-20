export const gridTemplateColumnsAndMinmaxLesson = {
  slug: 'grid-template-columns-and-minmax',
  number: '34',
  title: 'Responsive Grid Tracks (minmax, auto-fit, auto-fill)',
  category: 'CSS Grid Architecture',
  subtitle: 'Building responsive card grids that adapt smoothly without media queries',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Media-Query-Free Responsiveness',
      type: 'text',
      lead: 'One of the greatest achievements of modern CSS Grid is the ability to construct fully responsive, multi-column card grids without writing a single @media query breakpoint.',
      paragraphs: [
        'By combining repeat(), auto-fit (or auto-fill), and the minmax() function, CSS Grid automatically calculates the optimal number of columns that can fit into the container width, wrapping cards naturally as the viewport resizes.',
      ],
    },
    {
      id: 'the-holy-grail-oneliner',
      title: 'The Legendary One-Line Responsive Grid',
      type: 'syntax',
      syntax: 'grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));',
      syntaxNote: 'auto-fit creates as many columns as possible (min 250px wide) and stretches them (1fr) to fill any remaining space.',
    },
    {
      id: 'auto-fit-vs-auto-fill',
      title: 'auto-fit vs auto-fill: The Key Difference',
      type: 'table',
      table: {
        caption: 'auto-fit vs auto-fill Behavior',
        headers: ['Keyword', 'Track Behavior When Few Items Exist', 'Visual Result'],
        rows: [
          ['auto-fit', 'Collapses empty tracks to 0px, allowing existing items to stretch across the full row.', 'Items expand to fill empty row space gracefully (BEST FOR CARD GRIDS).'],
          ['auto-fill', 'Preserves empty phantom tracks as if items occupied them.', 'Items stay at their minimum size, leaving blank empty columns to the right.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Auto-Responsive Card Grid',
      type: 'code-example',
      codeTitle: 'auto-grid.css',
      codeLang: 'css',
      code: `/* Fully responsive card grid: No media queries needed! */
.responsive-deck {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.deck-card {
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}`,
      demo: {
        title: 'Auto-Fitting Grid Preview',
        html: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; font-family: sans-serif;">
  <div style="background: white; border: 1px solid #fed7aa; padding: 12px; border-radius: 8px; font-size: 11px; text-align: center;">Card A (min 130px)</div>
  <div style="background: white; border: 1px solid #fed7aa; padding: 12px; border-radius: 8px; font-size: 11px; text-align: center;">Card B (min 130px)</div>
  <div style="background: white; border: 1px solid #fed7aa; padding: 12px; border-radius: 8px; font-size: 11px; text-align: center;">Card C (min 130px)</div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'repeat(auto-fit, minmax(min, 1fr)) creates automatic responsive layouts.',
        'auto-fit expands items to fill leftover row space.',
        'minmax() sets an absolute floor and a fluid fractional ceiling.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Responsive Gallery Grid',
      task: 'Write a grid rule for an image gallery where each picture is at least 180px wide and expands to 1fr.',
      hint: 'grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));',
    },
  ],
  quiz: [
    {
      question: 'In "repeat(auto-fit, minmax(200px, 1fr))", what does auto-fit do when there are only 2 items on a 1000px wide screen?',
      options: [
        'Leaves 3 empty columns on the right',
        'Stretches the 2 items to 500px each to occupy the full container width',
        'Crashes the browser',
        'Forces the items to stay at 200px',
      ],
      correctAnswer: 1,
      explanation: 'auto-fit collapses unused empty tracks, allowing the existing items to share the remaining fractional space.',
    },
    {
      question: 'What is the function of minmax(MIN, MAX) in CSS Grid?',
      options: [
        'Limits animation duration',
        'Defines a size range that can never shrink below MIN and never expand past MAX',
        'Calculates margins',
        'Sets media query ranges',
      ],
      correctAnswer: 1,
      explanation: 'minmax() bounds track dimensions between a lower floor and an upper ceiling.',
    },
    {
      question: 'Do you need @media queries to make repeat(auto-fit, minmax(250px, 1fr)) wrap onto multiple rows on mobile?',
      options: [
        'Yes, always',
        'No, Grid automatically recalculates and wraps tracks when container space shrinks',
        'Only on iOS Safari',
        'Only in Flexbox',
      ],
      correctAnswer: 1,
      explanation: 'CSS Grid automatically drops column counts when the container becomes narrower than the minimum threshold.',
    },
  ],
};
