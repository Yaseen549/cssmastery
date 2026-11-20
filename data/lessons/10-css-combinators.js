export const cssCombinatorsLesson = {
  slug: 'css-combinators',
  number: '10',
  title: 'CSS Combinators',
  category: 'Selectors Mastery',
  subtitle: 'Descendant (space), child (>), adjacent sibling (+), and general sibling (~) relationships',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Expressing DOM Relationships',
      type: 'text',
      lead: 'CSS Combinators explain the spatial and hierarchical relationships between two or more selectors.',
      paragraphs: [
        'Rather than styling elements in isolation, combinators let you declare rules based on parent-child containment, nesting depth, and sibling proximity within the HTML tree structure.',
      ],
    },
    {
      id: 'combinators-table',
      title: 'The 4 CSS Combinators',
      type: 'table',
      table: {
        caption: 'CSS Combinators Summary',
        headers: ['Combinator', 'Symbol', 'Relationship Name', 'Matching Behavior'],
        rows: [
          ['Descendant', '(space)', 'Descendant Combinator', 'Matches all matching elements nested ANYWHERE inside the parent (children, grandchildren, etc.).'],
          ['Child', '>', 'Child Combinator', 'Matches only DIRECT, immediate first-level children of the parent element.'],
          ['Adjacent Sibling', '+', 'Next Sibling Combinator', 'Matches an element that IMMEDIATELY follows the target element and shares the same parent.'],
          ['General Sibling', '~', 'Subsequent Sibling Combinator', 'Matches ANY matching element that follows the target element and shares the same parent.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Code Demonstrations of All 4 Combinators',
      type: 'code-example',
      codeTitle: 'combinators.css',
      codeLang: 'css',
      code: `/* 1. Descendant: all <li> inside .menu, even nested sub-menus */
.menu li {
  color: #3f3f46;
}

/* 2. Direct Child: only immediate <li>, leaves sub-menus alone */
.menu > li {
  border-bottom: 1px solid #e4e4e7;
  padding: 8px 0;
}

/* 3. Adjacent Sibling: only the first <p> immediately after an <h1> */
h1 + p {
  font-size: 1.25rem;
  font-weight: 500;
  color: #ea580c; /* Lead intro paragraph */
}

/* 4. General Sibling: all sibling <div> elements following an <h2> */
h2 ~ div {
  margin-left: 16px;
}`,
      demo: {
        title: 'Sibling & Child Styling',
        html: `<div style="font-family: system-ui, sans-serif; padding: 16px; border: 1px solid #fed7aa; border-radius: 12px; background: #fff7ed;">
  <h3 style="margin: 0; color: #9a3412;">Document Title (h3)</h3>
  <p style="margin: 6px 0 0; color: #ea580c; font-weight: bold; font-size: 14px;">h3 + p (Immediately adjacent sibling lead paragraph)</p>
  <p style="margin: 6px 0 0; color: #7c2d12; font-size: 13px;">Subsequent standard paragraph in body.</p>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes',
      type: 'list',
      items: [
        'Accidentally using descendant (space) instead of direct child (>): Causes styles to leak down into nested components, dropdowns, and submenus.',
        'Forgetting that siblings must share the SAME immediate parent: Sibling combinators (+ and ~) will never match elements residing inside different container tags.',
        'Assuming + works backwards: CSS combinators only look DOWN or FORWARD in the document stream. They cannot select preceding siblings.',
      ],
      callout: {
        type: 'important',
        title: 'Combinators Look Forward Only',
        content: 'Adjacent (+) and General (~) sibling combinators only match elements that appear AFTER the selector in the DOM tree, never before it.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Space matches all descendants; > matches immediate children only.',
        '+ matches the immediately succeeding sibling; ~ matches all following siblings.',
        'Use > to prevent unintended styling leakage into nested child structures.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Lead Paragraph Styling',
      task: 'Write a rule using the adjacent sibling combinator to add a top margin of 20px to any <p> directly following an <h2>.',
      hint: 'h2 + p { margin-top: 20px; }',
    },
  ],
  quiz: [
    {
      question: 'Which combinator matches ONLY immediate first-generation children of an element?',
      options: ['Space ( )', 'Greater than (>)', 'Plus (+)', 'Tilde (~)'],
      correctAnswer: 1,
      explanation: 'The child combinator (>) restricts matching to immediate direct children only.',
    },
    {
      question: 'Given "h2 + p", which paragraph is selected?',
      options: [
        'All paragraphs on the page',
        'All paragraphs inside the h2 element',
        'Only the paragraph that appears immediately after the h2',
        'Any paragraph preceded by another paragraph',
      ],
      correctAnswer: 2,
      explanation: 'The adjacent sibling combinator (+) targets only the single matching element immediately following the target.',
    },
    {
      question: 'Can CSS sibling combinators (+ or ~) select elements that appear BEFORE the reference element in HTML?',
      options: [
        'Yes, always',
        'No, standard combinators only match elements that follow later in the DOM',
        'Only when using flexbox',
        'Only in WebKit browsers',
      ],
      correctAnswer: 1,
      explanation: 'CSS source order flows downward; sibling combinators strictly match following siblings.',
    },
  ],
};
