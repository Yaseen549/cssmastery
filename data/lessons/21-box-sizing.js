export const boxSizingLesson = {
  slug: 'box-sizing',
  number: '21',
  title: 'Box Sizing (content-box vs border-box)',
  category: 'The CSS Box Model',
  subtitle: 'Why border-box revolutionized web layout and how to implement the universal box-sizing reset',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Sizing Dilemma',
      type: 'text',
      lead: 'The box-sizing property defines how the browser calculates the total physical width and height of an HTML element.',
      paragraphs: [
        'Under the historical default (content-box), declaring width: 200px does NOT mean your element is 200px wide. Any padding and border you add are added ON TOP of the width, causing boxes to expand unexpectedly and break column layouts.',
      ],
    },
    {
      id: 'comparison-table',
      title: 'content-box vs border-box Mathematical Comparison',
      type: 'table',
      table: {
        caption: 'Dimension Math: width: 200px; padding: 20px; border: 5px;',
        headers: ['Model', 'Width Formula', 'Calculation', 'Final Rendered Width'],
        rows: [
          ['content-box (Legacy Default)', 'width + padding-left + padding-right + border-left + border-right', '200 + 20 + 20 + 5 + 5', '250px (EXPANDED OUTWARD!)'],
          ['border-box (Modern Standard)', 'width includes padding and border internally', '200px total (content shrinks to 150px)', '200px (EXACTLY AS DECLARED!)'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'The Universal border-box Reset',
      type: 'code-example',
      codeTitle: 'box-sizing.css',
      codeLang: 'css',
      code: `/* The Industry-Standard Universal Box-Sizing Reset */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* Now, width: 50% means exactly half the screen, even with padding! */
.column {
  width: 50%;
  padding: 24px;
  border-right: 2px solid #e4e4e7;
}`,
      demo: {
        title: 'Side-by-Side Sizing Comparison',
        html: `<div style="font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 14px;">
  <div>
    <span style="font-size: 11px; font-weight: bold; color: #dc2626;">content-box (200px declared + 40px padding = 240px wide!)</span>
    <div style="box-sizing: content-box; width: 200px; padding: 20px; background: #fee2e2; border: 2px solid #ef4444; border-radius: 6px; font-size: 12px; margin-top: 4px;">
      Expanded to 244px
    </div>
  </div>
  <div>
    <span style="font-size: 11px; font-weight: bold; color: #059669;">border-box (200px declared = exactly 200px wide!)</span>
    <div style="box-sizing: border-box; width: 200px; padding: 20px; background: #dcfce7; border: 2px solid #22c55e; border-radius: 6px; font-size: 12px; margin-top: 4px;">
      Exact 200px Total
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
        'content-box adds padding and borders outside the declared width.',
        'border-box absorbs padding and borders inside the declared width.',
        'Always implement the universal border-box reset in your project CSS.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Two Column Layout',
      task: 'Create two 50% width columns with 20px padding that sit side-by-side without wrapping onto a new line.',
      hint: 'Ensure both columns use box-sizing: border-box.',
    },
  ],
  quiz: [
    {
      question: 'What is the default initial value of "box-sizing" in web browsers according to CSS specifications?',
      options: ['border-box', 'content-box', 'padding-box', 'margin-box'],
      correctAnswer: 1,
      explanation: 'The historical default defined in the specification is content-box.',
    },
    {
      question: 'Under "box-sizing: border-box", if an element has width: 300px, padding: 25px, and border: 5px, what is its final rendered width?',
      options: ['360px', '300px', '240px', '330px'],
      correctAnswer: 1,
      explanation: 'With border-box, the declared width (300px) is the final outer border-to-border width.',
    },
    {
      question: 'Why do two 50% width columns with padding: 10px break and drop to the next line under content-box?',
      options: [
        '50% width is unsupported',
        'Each column becomes 50% + 20px, causing the combined width to exceed 100%',
        'Float is broken',
        'Padding creates margins',
      ],
      correctAnswer: 1,
      explanation: 'Under content-box, padding adds 20px to each column, pushing the total width to 100% + 40px.',
    },
  ],
};
