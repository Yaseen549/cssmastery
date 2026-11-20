export const inheritanceAndDefaultsLesson = {
  slug: 'inheritance-and-defaults',
  number: '15',
  title: 'Inheritance & Global Keywords',
  category: 'Cascade, Specificity & Inheritance',
  subtitle: 'Inherited vs non-inherited properties, and the keywords: inherit, initial, unset, revert, revert-layer',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Passing Styles Down the Tree',
      type: 'text',
      lead: 'Inheritance in CSS allows child elements in the DOM tree to automatically receive property values specified on their ancestors.',
      paragraphs: [
        'Not all CSS properties are inherited. Properties that affect typography (color, font-family, line-height) naturally cascade down to children, while properties that affect box geometry (border, margin, padding, width) are intentionally non-inherited to prevent catastrophic layout duplication.',
      ],
    },
    {
      id: 'inherited-table',
      title: 'Inherited vs Non-Inherited Properties',
      type: 'table',
      table: {
        caption: 'Common Inherited vs Non-Inherited Properties',
        headers: ['Property Category', 'Inherited by Default?', 'Common Examples', 'Why Designed This Way?'],
        rows: [
          ['Typography & Text', 'YES', 'color, font-family, font-size, line-height, text-align', 'Ensures consistent reading typography without restyling every child tag.'],
          ['List Styles', 'YES', 'list-style, list-style-type', 'Maintains list appearance across nested <li> elements.'],
          ['Box Model & Spacing', 'NO', 'margin, padding, border, width, height', 'If padding inherited, every child element would create an unwanted recursive box!'],
          ['Backgrounds & Borders', 'NO', 'background-color, background-image, border-radius', 'Children should sit on top of parent backgrounds, not duplicate them.'],
          ['Layout & Positioning', 'NO', 'display, position, top, flex, grid, z-index', 'Layout contexts must be isolated to avoid nested chaos.'],
        ],
      },
    },
    {
      id: 'global-keywords',
      title: 'The 5 Universal CSS Keywords',
      type: 'table',
      table: {
        caption: 'Universal Keywords Applicable to ALL Properties',
        headers: ['Keyword', 'Exact Behavior', 'Computed Value Result'],
        rows: [
          ['inherit', 'Forces the element to take the computed value of its parent.', 'Matches parent value.'],
          ['initial', 'Resets property to the official W3C specification initial default.', 'Matches official spec (e.g. color: black).'],
          ['unset', 'Acts as inherit if property naturally inherits; otherwise acts as initial.', 'Smart dynamic reset.'],
          ['revert', 'Rolls back property to the User Agent (browser default) stylesheet.', 'Browser native default.'],
          ['revert-layer', 'Rolls back property to the previous Cascade Layer (@layer).', 'Value from preceding layer.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Global Keywords in Practice',
      type: 'code-example',
      codeTitle: 'inheritance.css',
      codeLang: 'css',
      code: `/* Parent card sets typographic baseline */
.article-card {
  color: #18181b;
  font-family: system-ui, sans-serif;
  border: 1px solid #e4e4e7;
  padding: 24px;
}

/* Force <a> link to inherit parent color instead of browser blue */
.article-card a {
  color: inherit;
  text-decoration: underline;
}

/* Reset button to clean unstyled text */
.clean-btn {
  all: unset;
  cursor: pointer;
  color: #f97316;
  font-weight: bold;
}`,
      demo: {
        title: 'Inherited Color in Action',
        html: `<div style="font-family: system-ui, sans-serif; color: #ea580c; border: 1px solid #fed7aa; background: #fff7ed; padding: 16px; border-radius: 8px;">
  <h4 style="margin: 0; color: inherit;">Parent Card Title (color: #ea580c)</h4>
  <p style="margin: 6px 0 0; font-size: 13px; color: inherit;">
    Child paragraph inherits color naturally from parent card.
  </p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Text properties inherit by default; box model properties do not.',
        'Use inherit to force children to adopt parent colors and fonts.',
        'all: unset provides a complete reset for unstyling native buttons and inputs.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Inherit Link Color',
      task: 'Write a rule making all links inside a footer inherit the footer text color rather than displaying browser default blue.',
      hint: 'footer a { color: inherit; }',
    },
  ],
  quiz: [
    {
      question: 'Which of the following properties is INHERITED by default in CSS?',
      options: ['padding', 'background-color', 'font-family', 'border'],
      correctAnswer: 2,
      explanation: 'font-family is a typographic property and naturally inherits from parent to child elements.',
    },
    {
      question: 'What does the keyword "inherit" do when assigned to a property?',
      options: [
        'Resets property to browser UA defaults',
        'Explicitly forces the element to take the computed value of its parent element',
        'Deletes the element from the DOM',
        'Applies high specificity',
      ],
      correctAnswer: 1,
      explanation: 'inherit forces an element to take its parent element calculated value for that property.',
    },
    {
      question: 'What does "all: unset" do to an HTML button element?',
      options: [
        'Hides the button from the page',
        'Strips all browser default button borders, backgrounds, and padding, treating it like a plain inline span',
        'Turns the button into a link',
        'Throws a CSS error',
      ],
      correctAnswer: 1,
      explanation: 'all: unset removes all browser user-agent styling, leaving a blank unstyled text container.',
    },
  ],
};
