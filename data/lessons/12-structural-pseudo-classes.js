export const structuralPseudoClassesLesson = {
  slug: 'structural-pseudo-classes',
  number: '12',
  title: 'Structural Pseudo-Classes',
  category: 'Selectors Mastery',
  subtitle: 'Mastering :nth-child(An+B), :nth-of-type, :first-child, :last-child, and the modern of syntax',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Structural Selection',
      type: 'text',
      lead: 'Structural pseudo-classes allow you to style elements based on their exact position, index, or count within a parent element.',
      paragraphs: [
        'From zebra-striped data tables and alternating grid cards to selecting every 3rd list item, structural pseudo-classes eliminate the need to manually assign class names like "even", "odd", or "last" in your HTML templates.',
      ],
    },
    {
      id: 'an-plus-b-formula',
      title: 'The An + B Mathematical Formula',
      type: 'table',
      table: {
        caption: 'Understanding the :nth-child(An+B) Formula',
        headers: ['Expression', 'Meaning', 'Matched Indices (1-based)', 'Practical Application'],
        rows: [
          [':nth-child(2)', 'Specific index', '2 only', 'Targeting the second item in a list.'],
          [':nth-child(odd)', 'Every odd item', '1, 3, 5, 7, ...', 'Zebra-striped table rows.'],
          [':nth-child(even)', 'Every even item', '2, 4, 6, 8, ...', 'Alternating colored rows.'],
          [':nth-child(3n)', 'Multiples of 3', '3, 6, 9, 12, ...', 'Every 3rd column in a 3-column layout.'],
          [':nth-child(3n + 1)', 'Every 3rd starting at 1', '1, 4, 7, 10, ...', 'First column in a 3-column grid.'],
          [':nth-child(-n + 3)', 'First 3 items only', '1, 2, 3', 'Highlighting the top 3 leaderboard ranks.'],
          [':nth-child(n + 4)', 'All items from 4 onwards', '4, 5, 6, ...', 'Collapsing items after the first 3.'],
        ],
      },
    },
    {
      id: 'nth-child-vs-nth-of-type',
      title: 'nth-child vs nth-of-type Distinction',
      type: 'text',
      paragraphs: [
        ':nth-child counts ALL siblings regardless of their tag name. If you write p:nth-child(2), it matches the second child of the parent ONLY IF that second child is a <p>. If the second child is an <h2>, nothing matches!',
        ':nth-of-type counts only siblings that share the same tag name. p:nth-of-type(2) skips all headings, divs, and images and targets the second <p> element with certainty.',
      ],
      callout: {
        type: 'important',
        title: 'Indices are 1-Based!',
        content: 'Unlike programming languages like C, JavaScript, or Python where array indexes start at 0, CSS structural pseudo-classes are strictly 1-based. The first element is :nth-child(1), not 0.',
      },
    },
    {
      id: 'code-example',
      title: 'Zebra Striping and Leaderboard Ranking',
      type: 'code-example',
      codeTitle: 'structural-selectors.css',
      codeLang: 'css',
      code: `/* Zebra stripe table rows */
tbody tr:nth-child(even) {
  background-color: #f9fafb;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

/* First and Last item styling */
.list-item:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.list-item:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom: none;
}

/* Modern of S: :nth-child(2 of .featured) */
.card:nth-child(1 of .featured) {
  border: 2px solid #f97316;
}`,
      demo: {
        title: 'Zebra-Striped List Preview',
        html: `<div style="font-family: system-ui, sans-serif; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; max-width: 320px;">
  <div style="padding: 10px 14px; background: #ffffff; font-size: 13px; border-bottom: 1px solid #f4f4f5;">1. Row One (Odd)</div>
  <div style="padding: 10px 14px; background: #fff7ed; font-size: 13px; border-bottom: 1px solid #f4f4f5; color: #c2410c; font-weight: 500;">2. Row Two (Even - Striped)</div>
  <div style="padding: 10px 14px; background: #ffffff; font-size: 13px; border-bottom: 1px solid #f4f4f5;">3. Row Three (Odd)</div>
  <div style="padding: 10px 14px; background: #fff7ed; font-size: 13px; color: #c2410c; font-weight: 500;">4. Row Four (Even - Striped)</div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'CSS indexes are 1-based (first child is 1).',
        ':nth-child counts all siblings; :nth-of-type filters by element tag name first.',
        'Use An+B to express repeating periodic cycles (e.g. 2n, 3n+1, -n+3).',
      ],
    },
  ],
  exercises: [
    {
      title: 'Target the First 5 Items',
      task: 'Write a structural selector rule using the negative n formula that styles only the first 5 <li> elements in a list.',
      hint: 'li:nth-child(-n + 5)',
    },
  ],
  quiz: [
    {
      question: 'What is the starting index of :nth-child in CSS?',
      options: ['0', '1', '-1', 'Depends on the browser'],
      correctAnswer: 1,
      explanation: 'CSS structural selectors are 1-based. The first child element is :nth-child(1).',
    },
    {
      question: 'How do you select only the first 3 items in a list using :nth-child?',
      options: [
        ':nth-child(3)',
        ':nth-child(n + 3)',
        ':nth-child(-n + 3)',
        ':nth-child(3n)',
      ],
      correctAnswer: 2,
      explanation: 'The formula -n + 3 matches when n=0 (3), n=1 (2), and n=2 (1), targeting precisely the first three elements.',
    },
    {
      question: 'What is the difference between "div:nth-child(1)" and "div:nth-of-type(1)"?',
      options: [
        'There is no difference',
        ':nth-child(1) matches only if the div is the first child of the parent; :nth-of-type(1) matches the first div even if an h1 precedes it',
        ':nth-of-type only works on text elements',
        ':nth-child does not work in Chrome',
      ],
      correctAnswer: 1,
      explanation: ':nth-of-type isolates matching to elements with the specified tag name, ignoring other sibling tags.',
    },
  ],
};
