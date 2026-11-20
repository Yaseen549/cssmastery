export const cssBoxModelLesson = {
  slug: 'css-box-model',
  number: '20',
  title: 'The CSS Box Model Anatomy',
  category: 'The CSS Box Model',
  subtitle: 'Content, padding, border, and margin areas: dimension calculation and visual geometry',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Everything is a Box',
      type: 'text',
      lead: 'In CSS, every single element rendered on a web page is treated by the browser engine as a rectangular box. The CSS Box Model defines the structure, layers, and sizing calculations for that box.',
      paragraphs: [
        'Whether an element is a circular avatar, an inline italic word, a modal window, or a full-width header, the layout engine encapsulates it inside 4 concentric geometric rectangular areas.',
      ],
    },
    {
      id: 'box-anatomy',
      title: 'The 4 Concentric Box Layers',
      type: 'table',
      table: {
        caption: 'The 4 Layers of the CSS Box Model',
        headers: ['Layer Area', 'Position', 'Physical Nature', 'Styling Properties'],
        rows: [
          ['1. Content Box', 'Innermost area', 'Holds actual text, images, or child elements.', 'width, height, min-width, max-width.'],
          ['2. Padding Box', 'Surrounds content', 'Transparent buffer breathing room around content. Takes the element background-color.', 'padding, padding-top/right/bottom/left.'],
          ['3. Border Box', 'Surrounds padding', 'The physical border frame around the element.', 'border, border-width, border-style, border-color, border-radius.'],
          ['4. Margin Box', 'Outermost layer', 'Transparent empty space pushing adjacent sibling elements away.', 'margin, margin-inline, margin-block, margin-top/right/bottom/left.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Box Model Demonstration',
      type: 'code-example',
      codeTitle: 'box-model.css',
      codeLang: 'css',
      code: `/* Box Model Demonstration */
.box-demo {
  box-sizing: border-box;
  width: 280px;
  
  /* Padding: Internal breathing room */
  padding: 20px;
  
  /* Border: Outer visual frame */
  border: 4px solid #f97316;
  border-radius: 12px;
  
  /* Margin: External separation from siblings */
  margin: 16px auto;
  
  background-color: #fff7ed;
  color: #7c2d12;
  font-family: system-ui, sans-serif;
}`,
      demo: {
        title: 'Visual Box Model Diagram',
        html: `<div style="font-family: system-ui, sans-serif; max-width: 320px; margin: 0 auto; border: 2px dashed #fb923c; background: #fff7ed; padding: 12px; border-radius: 14px;">
  <div style="font-size: 10px; font-weight: bold; color: #ea580c; text-align: center; margin-bottom: 4px;">MARGIN BOX (Transparent Outer Space)</div>
  <div style="border: 3px solid #f97316; background: #ffedd5; padding: 14px; border-radius: 10px; text-align: center;">
    <div style="font-size: 10px; font-weight: bold; color: #c2410c; margin-bottom: 4px;">BORDER BOX (Orange Outline)</div>
    <div style="background: white; border: 1px dashed #fed7aa; padding: 16px; border-radius: 6px;">
      <div style="font-size: 10px; font-weight: bold; color: #9a3412;">PADDING AREA</div>
      <div style="background: #fed7aa; padding: 8px; border-radius: 4px; font-size: 11px; font-weight: bold; color: #431407; margin-top: 4px;">
        CONTENT (Text / Children)
      </div>
    </div>
  </div>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes',
      type: 'list',
      items: [
        'Confusing margin with padding: Padding is inside the border and shares the background color; margin is outside and always transparent.',
        'Negative padding: In CSS, padding can NEVER be negative. Margins, however, can be negative to pull elements closer.',
      ],
      callout: {
        type: 'important',
        title: 'Margins Can Be Negative, Padding Cannot',
        content: 'You can write margin-top: -10px to overlap elements, but padding: -10px is an invalid CSS declaration.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Every element is a box composed of: Content -> Padding -> Border -> Margin.',
        'Padding creates interior space and shares the element background.',
        'Margin creates exterior separation between neighboring boxes.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Inspect DevTools Box Model',
      task: 'Open browser DevTools on any element and observe the interactive Box Model diagram displayed at the bottom of the Computed styles tab.',
      hint: 'Notice the blue, green, yellow, and orange concentric rectangles.',
    },
  ],
  quiz: [
    {
      question: 'Which box model layer sits directly between the Content box and the Border box?',
      options: ['Margin', 'Padding', 'Outline', 'Shadow'],
      correctAnswer: 1,
      explanation: 'Padding sits immediately inside the Border, providing internal spacing around Content.',
    },
    {
      question: 'Does the background-color of an element extend beneath its padding?',
      options: [
        'Yes, padding is painted with the element background color',
        'No, padding is always transparent white',
        'Only on buttons',
        'Only when border-box is active',
      ],
      correctAnswer: 0,
      explanation: 'Padding is part of the inner element surface and renders the element background color or image.',
    },
    {
      question: 'Can CSS padding accept negative values, such as "padding: -10px;"?',
      options: [
        'Yes, negative padding shrinks content',
        'No, negative padding is strictly invalid in CSS',
        'Only in modern CSS',
        'Only on inline elements',
      ],
      correctAnswer: 1,
      explanation: 'According to the W3C specification, negative values are not allowed for padding.',
    },
  ],
};
