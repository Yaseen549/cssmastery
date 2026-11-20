export const cssPositioningLesson = {
  slug: 'css-positioning',
  number: '28',
  title: 'CSS Positioning (static, relative, absolute, fixed, sticky)',
  category: 'Display & Positioning',
  subtitle: 'Containing blocks, coordinate offsets (top, right, bottom, left), and sticky scroll headers',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Escaping Normal Document Flow',
      type: 'text',
      lead: 'The position property determines how an element is positioned within its parent and whether it participates in the normal document flow or is extracted into an independent coordinate plane.',
      paragraphs: [
        'By combining the 5 position values with coordinate offsets (top, right, bottom, left) and z-index, developers can construct floating tooltips, sticky navigation headers, modal backdrops, and complex UI overlays.',
      ],
    },
    {
      id: 'position-values-table',
      title: 'The 5 Positioning Schemes',
      type: 'table',
      table: {
        caption: 'The 5 CSS Position Schemes',
        headers: ['Position Value', 'In Normal Flow?', 'Positioned Relative To', 'Common Use Case'],
        rows: [
          ['static (Default)', 'YES', 'Normal document flow coordinates.', 'Default standard document flow.'],
          ['relative', 'YES', 'Its OWN original normal flow position.', 'Nudge an element slightly, or act as an anchor parent for absolute children!'],
          ['absolute', 'NO (Removed from flow)', 'Nearest ancestor with position != static (Containing Block).', 'Floating badges, dropdown menus, modal close buttons.'],
          ['fixed', 'NO (Removed from flow)', 'The Viewport (Screen frame). Stays pinned during scroll.', 'Global sticky top navigation, back-to-top floating buttons.'],
          ['sticky', 'Hybrid (Flow -> Fixed)', 'Scrolls in normal flow until reaching a threshold offset, then sticks.', 'Sticky table headers, sidebar navigation TOCs.'],
        ],
      },
    },
    {
      id: 'relative-parent-pattern',
      title: 'The Golden Pattern: Relative Parent, Absolute Child',
      type: 'text',
      paragraphs: [
        'An absolute element searches up the DOM tree for the nearest ancestor with any position other than static. If none is found, it positions against the root viewport.',
        'To position a badge inside a card, simply add position: relative to the card container!',
      ],
      callout: {
        type: 'important',
        title: 'Sticky Elements Need a Threshold Offset',
        content: 'position: sticky does nothing unless you declare at least one coordinate offset, such as top: 0! It also cannot scroll if any parent container has overflow: hidden.',
      },
    },
    {
      id: 'code-example',
      title: 'Relative Parent & Absolute Badge',
      type: 'code-example',
      codeTitle: 'positioning.css',
      codeLang: 'css',
      code: `/* Relative Parent Anchor Container */
.product-card {
  position: relative;
  width: 260px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
}

/* Absolute Child: Anchored to top-right of .product-card */
.sale-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #f97316;
  color: #ffffff;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(249, 115, 22, 0.4);
}`,
      demo: {
        title: 'Absolute Badge on Relative Card',
        html: `<div style="font-family: system-ui, sans-serif; display: flex; justify-content: center; padding: 16px;">
  <div style="position: relative; width: 220px; padding: 20px; background: white; border: 1px solid #fed7aa; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <span style="position: absolute; top: -10px; right: -10px; background: #f97316; color: white; padding: 4px 10px; font-size: 11px; font-weight: bold; border-radius: 9999px; box-shadow: 0 4px 10px rgba(249,115,22,0.4);">
      HOT SALE
    </span>
    <h4 style="margin: 0; color: #18181b; font-size: 15px;">Product Card</h4>
    <p style="margin: 6px 0 0; font-size: 12px; color: #71717a;">Anchored via position: relative parent.</p>
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'relative stays in flow and acts as an anchor for absolute children.',
        'absolute removes elements from flow and coordinates against the nearest positioned parent.',
        'sticky switches from normal flow to pinned scrolling at a specified threshold (e.g. top: 0).',
      ],
    },
  ],
  exercises: [
    {
      title: 'Pin an Absolute Close Button',
      task: 'Position an "X" button exactly 12px from the top and 12px from the right inside a modal dialog container.',
      hint: 'Container needs position: relative; button needs position: absolute; top: 12px; right: 12px;',
    },
  ],
  quiz: [
    {
      question: 'What is the default initial value of the position property in CSS?',
      options: ['relative', 'absolute', 'static', 'fixed'],
      correctAnswer: 2,
      explanation: 'All HTML elements default to position: static in standard normal flow.',
    },
    {
      question: 'To anchor an absolute element to its parent container, what position value must be applied to the parent?',
      options: [
        'position: static',
        'Any position other than static (most commonly position: relative)',
        'position: fixed',
        'display: flex',
      ],
      correctAnswer: 1,
      explanation: 'An element with position: absolute looks up the tree for the nearest positioned ancestor (position != static).',
    },
    {
      question: 'Why might a "position: sticky; top: 0;" header fail to stick when scrolling?',
      options: [
        'Sticky is unsupported in modern CSS',
        'A parent element in the ancestor tree has "overflow: hidden" or no height constraint',
        'Sticky requires z-index: 9999',
        'Headers cannot use sticky',
      ],
      correctAnswer: 1,
      explanation: 'Any ancestor with overflow: hidden, auto, or scroll cancels sticky scrolling behavior.',
    },
  ],
};
