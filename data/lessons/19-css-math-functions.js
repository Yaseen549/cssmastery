export const cssMathFunctionsLesson = {
  slug: 'css-math-functions',
  number: '19',
  title: 'CSS Math Functions (calc, min, max, clamp)',
  category: 'CSS Values & Units',
  subtitle: 'Dynamic responsive calculations, fluid typography formulas, and boundary constraints without JavaScript',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Native Math in CSS',
      type: 'text',
      lead: 'CSS math functions allow you to perform dynamic mathematical calculations directly inside property values without relying on JavaScript listeners or preprocessors.',
      paragraphs: [
        'Functions like calc(), min(), max(), and clamp() enable fluid typography that scales smoothly between mobile and desktop viewports, responsive grids, and boundary constraints.',
      ],
    },
    {
      id: 'functions-table',
      title: 'Core CSS Math Functions',
      type: 'table',
      table: {
        caption: 'CSS Math Functions Overview',
        headers: ['Function', 'Syntax Signature', 'Return Behavior', 'Primary Production Use Case'],
        rows: [
          ['calc()', 'calc(expression)', 'Computes addition (+), subtraction (-), multiplication (*), and division (/) across mixed units.', 'Full width minus fixed sidebar: calc(100% - 280px).'],
          ['min()', 'min(val1, val2, ...)', 'Returns the SMALLEST computed value from the comma-separated arguments.', 'Responsive card width with maximum cap: min(100%, 600px).'],
          ['max()', 'max(val1, val2, ...)', 'Returns the LARGEST computed value from the arguments.', 'Setting minimum readable font size or safety spacing.'],
          ['clamp()', 'clamp(MIN, PREFERRED, MAX)', 'Clamps a value between an absolute floor (MIN) and ceiling (MAX).', 'FLUID TYPOGRAPHY: clamp(1rem, 2.5vw + 0.5rem, 2.5rem).'],
        ],
      },
    },
    {
      id: 'fluid-typography-clamp',
      title: 'The Magic of Fluid Typography with clamp()',
      type: 'text',
      paragraphs: [
        'clamp() takes three parameters: clamp(minimum, preferred, maximum). On mobile screens, the value never drops below MIN. On ultra-wide monitors, it never exceeds MAX. In between, it scales smoothly with the viewport!',
      ],
      callout: {
        type: 'important',
        title: 'Spaces Around + and - are MANDATORY in calc()',
        content: 'You MUST put spaces around addition and subtraction operators: calc(100% - 20px) is valid; calc(100%-20px) is invalid syntax!',
      },
    },
    {
      id: 'code-example',
      title: 'Fluid Typography & Responsive Containers',
      type: 'code-example',
      codeTitle: 'math-functions.css',
      codeLang: 'css',
      code: `/* Fluid heading: scales between 24px (1.5rem) and 48px (3rem) */
h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  line-height: 1.15;
}

/* Responsive container: 90% on mobile, maxes out at 1200px */
.container {
  width: min(90%, 1200px);
  margin-inline: auto;
}

/* Mixed unit subtraction with calc */
.main-content {
  width: calc(100% - 300px);
}`,
      demo: {
        title: 'Fluid clamp() Typography',
        html: `<div style="font-family: system-ui, sans-serif; padding: 16px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 12px; text-align: center;">
  <h2 style="margin: 0; font-size: clamp(1.2rem, 3vw, 2rem); color: #ea580c; font-weight: 800;">
    Fluid Scaled Heading
  </h2>
  <p style="margin: 6px 0 0; font-size: 13px; color: #7c2d12;">
    Resize this window to watch the heading scale smoothly without breakpoint jumps.
  </p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'calc() blends different units together (e.g. percentages and pixels).',
        'Always place whitespace around + and - inside calc().',
        'clamp(min, preferred, max) creates fluid typography without media queries.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Fluid Font Sizing',
      task: 'Write a clamp() expression for a subheader that has a minimum size of 1rem, a preferred size of 2vw + 0.5rem, and a maximum size of 1.75rem.',
      hint: 'font-size: clamp(1rem, 2vw + 0.5rem, 1.75rem);',
    },
  ],
  quiz: [
    {
      question: 'Which syntax rule is MANDATORY when using addition or subtraction inside calc()?',
      options: [
        'Units must be identical',
        'There must be whitespace on both sides of the + or - operator',
        'Numbers must be integers',
        'Parentheses must be doubled',
      ],
      correctAnswer: 1,
      explanation: 'Without spaces, calc(100%-20px) is parsed as 100% followed by a negative number token (-20px), triggering a syntax error.',
    },
    {
      question: 'In "clamp(1rem, 4vw, 2.5rem)", what is the MAXIMUM size the value can reach?',
      options: ['1rem', '4vw', '2.5rem', 'Unlimited'],
      correctAnswer: 2,
      explanation: 'clamp(MIN, PREFERRED, MAX) clamps the value so it never exceeds the third parameter (2.5rem).',
    },
    {
      question: 'What does "width: min(100%, 800px);" do to an element?',
      options: [
        'Sets width to exactly 100% always',
        'Sets width to 800px, but shrinks to 100% if the screen is narrower than 800px',
        'Expands past 800px on large screens',
        'Throws a syntax error',
      ],
      correctAnswer: 1,
      explanation: 'min() selects whichever value is smaller, acting as a clean replacement for width: 100%; max-width: 800px.',
    },
  ],
};
