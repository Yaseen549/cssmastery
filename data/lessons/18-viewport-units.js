export const viewportUnitsLesson = {
  slug: 'viewport-units',
  number: '18',
  title: 'Modern Viewport Units (vh, svh, dvh, lvh)',
  category: 'CSS Values & Units',
  subtitle: 'Solving the mobile address bar jumping glitch with small (svh), dynamic (dvh), and large (lvh) viewport units',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Mobile Viewport Problem',
      type: 'text',
      lead: 'For years, setting height: 100vh on mobile devices caused a notorious layout bug: the browser address bar overlay hid the bottom of the screen.',
      paragraphs: [
        'Modern CSS introduced Small (svh), Large (lvh), and Dynamic (dvh) viewport units to solve mobile browser address bar expansions and retractions cleanly.',
      ],
    },
    {
      id: 'viewport-variants-table',
      title: 'The Viewport Unit Matrix',
      type: 'table',
      table: {
        caption: 'Viewport Units Matrix',
        headers: ['Unit', 'Name', 'Address Bar State', 'Best Use Case'],
        rows: [
          ['vh / vw', 'Standard Viewport', 'Fixed initial viewport size', 'Desktop screens, standard non-mobile containers.'],
          ['svh / svw', 'Small Viewport', 'Considers address bar VISIBLE (smallest area)', 'Full-screen hero sections where bottom content MUST never be clipped on mobile.'],
          ['lvh / lvw', 'Large Viewport', 'Considers address bar RETRACTED (largest area)', 'Background wallpapers and ambient illustrations.'],
          ['dvh / dvw', 'Dynamic Viewport', 'Dynamically updates as address bar expands/shrinks', 'Mobile modal overlays and interactive drawers.'],
          ['vmin / vmax', 'Min / Max Viewport', 'Minimum or maximum of vw and vh', 'Square responsive widgets and modal dialogs.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Bulletproof Full-Screen Layout',
      type: 'code-example',
      codeTitle: 'mobile-fullscreen.css',
      codeLang: 'css',
      code: `/* Bulletproof full-screen hero with progressive enhancement */
.hero-section {
  min-height: 100vh;  /* Fallback for older browsers */
  min-height: 100dvh; /* Modern mobile dynamic viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Modal dialog that stays fully visible regardless of address bar */
.mobile-sheet {
  max-height: 90svh;
  overflow-y: auto;
}`,
      demo: {
        title: 'Dynamic Viewport Card',
        html: `<div style="font-family: system-ui, sans-serif; padding: 16px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 12px; text-align: center;">
  <span style="font-size: 11px; font-weight: bold; color: #c2410c;">min-height: 100dvh Active</span>
  <p style="margin: 6px 0 0; font-size: 13px; color: #7c2d12;">
    Smoothly adjusts as mobile browser address bars expand and contract.
  </p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        '100vh causes clipping on mobile because of collapsible browser URL bars.',
        '100svh guarantees bottom elements are never covered by mobile chrome.',
        '100dvh dynamically tracks viewport size changes during scroll.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Full Height Mobile Hero',
      task: 'Write a ruleset for a .mobile-fullscreen container using 100dvh with a 100vh fallback.',
      hint: 'Declare min-height: 100vh first, followed immediately by min-height: 100dvh.',
    },
  ],
  quiz: [
    {
      question: 'Why did "100vh" cause issues on mobile smartphones like Safari on iOS and Chrome on Android?',
      options: [
        'Smartphones do not support CSS units',
        '100vh did not account for the collapsible browser address bar, causing bottom buttons to be hidden',
        '100vh caused screen rotation bugs',
        '100vh is an invalid CSS value',
      ],
      correctAnswer: 1,
      explanation: 'Classic 100vh measures the viewport with the address bar hidden, causing UI elements at the bottom to be obscured when the address bar is visible.',
    },
    {
      question: 'Which modern viewport unit represents the viewport height when the browser address bar is FULLY EXPANDED?',
      options: ['100lvh', '100svh', '100vh', '100dvh'],
      correctAnswer: 1,
      explanation: 'svh (Small Viewport Height) represents the smallest visible viewport area when the mobile address bar is expanded.',
    },
    {
      question: 'What does "dvh" stand for?',
      options: [
        'Desktop Viewport Height',
        'Dynamic Viewport Height',
        'Direct Vector Height',
        'Device Virtual Height',
      ],
      correctAnswer: 1,
      explanation: 'dvh stands for Dynamic Viewport Height, automatically resizing in real time as browser chrome moves.',
    },
  ],
};
