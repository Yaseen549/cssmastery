export const mediaQueriesAndMobileFirstLesson = {
  slug: 'media-queries-and-mobile-first',
  number: '36',
  title: 'Media Queries & Mobile-First Design',
  category: 'Responsive Design & Container Queries',
  subtitle: 'Fluid responsive layout principles, standard breakpoints, and modern range syntax',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Adaptive Web',
      type: 'text',
      lead: 'Responsive Web Design (RWD) ensures web applications render seamlessly across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
      paragraphs: [
        'Media Queries (@media) allow you to apply specific CSS declaration blocks conditionally based on device characteristics like viewport width, height, orientation, pixel density, and accessibility preferences.',
      ],
    },
    {
      id: 'mobile-first-philosophy',
      title: 'The Mobile-First Philosophy: min-width',
      type: 'text',
      paragraphs: [
        'In Mobile-First architecture, baseline CSS styles are written for the smallest mobile screens WITHOUT media queries. As screen size expands, min-width queries progressively layer on more columns, larger typography, and desktop navigation.',
        'This improves mobile performance by ensuring mobile devices parse the leanest possible stylesheets first.',
      ],
    },
    {
      id: 'modern-range-syntax',
      title: 'Modern Range Syntax (Level 4)',
      type: 'table',
      table: {
        caption: 'Legacy vs Modern Range Media Query Syntax',
        headers: ['Target Viewport', 'Legacy Syntax', 'Modern Level 4 Syntax (Recommended)'],
        rows: [
          ['Minimum width', '@media (min-width: 768px)', '@media (width >= 768px)'],
          ['Maximum width', '@media (max-width: 480px)', '@media (width <= 480px)'],
          ['Between range', '@media (min-width: 768px) and (max-width: 1024px)', '@media (768px <= width <= 1024px)'],
          ['Dark mode', '@media (prefers-color-scheme: dark)', '@media (prefers-color-scheme: dark)'],
          ['Reduced motion', '@media (prefers-reduced-motion: reduce)', '@media (prefers-reduced-motion: reduce)'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Mobile-First Layout Example',
      type: 'code-example',
      codeTitle: 'responsive.css',
      codeLang: 'css',
      code: `/* 1. Mobile Default (Single column, lean typography) */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
}

/* 2. Tablet Breakpoint: 2 Columns */
@media (width >= 768px) {
  .content-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px;
  }
}

/* 3. Desktop Breakpoint: 3 Columns */
@media (width >= 1024px) {
  .content-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 32px;
  }
}`,
      demo: {
        title: 'Breakpoint Simulation Output',
        html: `<div style="font-family: sans-serif; padding: 14px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 10px; text-align: center;">
  <span style="font-size: 11px; font-weight: bold; color: #ea580c;">Mobile First @media (width >= 768px)</span>
  <p style="margin: 6px 0 0; font-size: 13px; color: #7c2d12;">Progressive enhancement across device screen sizes.</p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Mobile-First design uses min-width queries to progressively enhance desktop screens.',
        'Modern range syntax (width >= 768px) is cleaner than legacy min-width.',
        'Always account for accessibility queries like prefers-reduced-motion.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Write a Tablet Range Query',
      task: 'Using modern range syntax, write a media query that targets screens between 768px and 1024px.',
      hint: '@media (768px <= width <= 1024px) { ... }',
    },
  ],
  quiz: [
    {
      question: 'Which query strategy represents the "Mobile-First" architectural design pattern?',
      options: [
        'Writing desktop styles first and using @media (max-width) to strip styles on mobile',
        'Writing mobile styles first and using @media (min-width) to add features on larger screens',
        'Only styling screens with fixed 320px width',
        'Using JavaScript to detect device user-agents',
      ],
      correctAnswer: 1,
      explanation: 'Mobile-first starts with mobile base styles and adds progressive enhancements as screens get wider via min-width.',
    },
    {
      question: 'What is the modern CSS Level 4 syntax equivalent to "@media (min-width: 1024px)"?',
      options: [
        '@media (width >= 1024px)',
        '@media (width: 1024px+)',
        '@media (min-screen: 1024px)',
        '@media (device-width > 1024px)',
      ],
      correctAnswer: 0,
      explanation: 'Modern CSS range syntax allows mathematical operators like width >= 1024px.',
    },
    {
      question: 'Which media feature detects if a user has requested minimal animations in their operating system settings?',
      options: [
        'prefers-contrast',
        'prefers-reduced-motion',
        'prefers-reduced-data',
        'forced-colors',
      ],
      correctAnswer: 1,
      explanation: '@media (prefers-reduced-motion: reduce) detects accessibility preferences for vestibular motion disorders.',
    },
  ],
};
