export const cssTransitionsLesson = {
  slug: 'css-transitions',
  number: '39',
  title: 'CSS Transitions & Timing Functions',
  category: 'Transforms, Transitions & Animations',
  subtitle: 'Property state transitions, cubic-bezier easing curves, and transition delay choreography',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Smooth State Changes',
      type: 'text',
      lead: 'CSS Transitions provide an elegant way to animate changes between property values over a specified duration without JavaScript.',
      paragraphs: [
        'When an element state changes (such as via :hover, :focus, or a dynamically toggled class), a transition smoothly interpolates the intermediate values, transforming jarring instant snaps into natural physical micro-interactions.',
      ],
    },
    {
      id: 'transition-properties-table',
      title: 'The 4 Transition Properties',
      type: 'table',
      table: {
        caption: 'The 4 CSS Transition Sub-Properties',
        headers: ['Property', 'Purpose', 'Valid Values', 'Default'],
        rows: [
          ['transition-property', 'Which CSS property to animate', 'all, transform, opacity, background-color', 'all'],
          ['transition-duration', 'Time taken to complete', '0.2s, 300ms', '0s (Instant snap)'],
          ['transition-timing-function', 'Acceleration & easing curve', 'ease, linear, ease-in, ease-out, cubic-bezier()', 'ease'],
          ['transition-delay', 'Wait time before transition starts', '0.1s, 150ms', '0s'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Performant Interactive Button Transition',
      type: 'code-example',
      codeTitle: 'transitions.css',
      codeLang: 'css',
      code: `/* Performant Button Transition */
.btn-interactive {
  background-color: #f97316;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  /* TARGET ONLY PERFORMANT PROPERTIES (Never transition: all!) */
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.2s ease,
              background-color 0.15s ease;
}

.btn-interactive:hover {
  transform: translateY(-2px);
  background-color: #ea580c;
  box-shadow: 0 8px 16px rgba(249, 115, 22, 0.35);
}

.btn-interactive:active {
  transform: translateY(0);
}`,
      demo: {
        title: 'Interactive Transition Button',
        html: `<div style="display: flex; justify-content: center; padding: 16px;">
  <button style="background: #f97316; color: white; border: none; padding: 10px 22px; border-radius: 8px; font-weight: bold; font-size: 13px; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px -3px rgba(249,115,22,0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
    Hover Me (Smooth Transition)
  </button>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Performance Pitfalls',
      type: 'list',
      items: [
        'Using transition: all: Animating every property forces the browser to check layout and paint properties, causing frame drops. Always specify explicit properties (e.g. transition: transform 0.2s, opacity 0.2s).',
        'Transitioning height: 0 to height: auto: CSS cannot interpolate to "auto". Use grid-template-rows: 0fr to 1fr instead!',
      ],
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Transitions smoothly interpolate state changes between selectors (e.g. :hover).',
        'Always specify explicit properties; avoid transition: all.',
        'Use transform and opacity for optimal 60fps GPU-accelerated motion.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Smooth Scale on Hover',
      task: 'Write a transition that smoothly scales a card to 1.05 over 0.25 seconds when hovered.',
      hint: 'transition: transform 0.25s ease; :hover { transform: scale(1.05); }',
    },
  ],
  quiz: [
    {
      question: 'Why should developers avoid declaring "transition: all 0.3s;" in production code?',
      options: [
        'It is unsupported in Chrome',
        'It forces the browser to evaluate and animate non-performant layout and paint properties on every state change',
        'It disables hover states',
        'It requires JavaScript',
      ],
      correctAnswer: 1,
      explanation: 'transition: all introduces performance degradation by attempting to animate layout properties like width, height, and margins.',
    },
    {
      question: 'What happens if transition-duration is omitted or left at 0s?',
      options: [
        'The transition takes 1 second',
        'Property values change instantly with zero animation',
        'An error is logged to console',
        'The element becomes invisible',
      ],
      correctAnswer: 1,
      explanation: 'The default duration is 0s, resulting in an immediate, abrupt visual snap.',
    },
    {
      question: 'Which two properties are GPU-accelerated and ideal for smooth 60fps / 120fps animations?',
      options: ['width and height', 'transform and opacity', 'top and left', 'margin and padding'],
      correctAnswer: 1,
      explanation: 'transform and opacity can be composited directly on the GPU without triggering expensive layout reflows.',
    },
  ],
};
