export const cssContainerQueriesLesson = {
  slug: 'css-container-queries',
  number: '37',
  title: 'CSS Container Queries (@container)',
  category: 'Responsive Design & Container Queries',
  subtitle: 'Component-driven responsiveness: styling elements based on parent container width with cqw units',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Beyond the Viewport',
      type: 'text',
      lead: 'Media queries respond to the browser viewport width. Container Queries (@container) respond to the size of the element immediate parent container.',
      paragraphs: [
        'This represents the holy grail of modular component design: a single card component can render in a compact stacked layout when placed inside a narrow sidebar, yet automatically expand into a horizontal layout when placed in a wide main content area — without a single viewport media query!',
      ],
    },
    {
      id: 'two-step-workflow',
      title: 'The Two-Step Container Query Workflow',
      type: 'table',
      table: {
        caption: 'How Container Queries Work',
        headers: ['Step', 'CSS Declaration', 'Purpose'],
        rows: [
          ['1. Register Container', 'container-type: inline-size; (or container: name / inline-size;)', 'Tells the browser to monitor the width of this parent element.'],
          ['2. Query Container', '@container (width >= 400px) { ... }', 'Applies styles to descendants based on the container width.'],
        ],
      },
    },
    {
      id: 'container-units-table',
      title: 'Container Query Units',
      type: 'table',
      table: {
        caption: 'Container Relative Units',
        headers: ['Unit', 'Relative Measurement', 'Analogy to Viewport Units'],
        rows: [
          ['cqw', '1% of the query container width', 'Like vw, but relative to container!'],
          ['cqh', '1% of the query container height', 'Like vh, but relative to container!'],
          ['cqi', '1% of the query container inline-size', 'Writing-mode relative.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Modular Self-Responsive Card Component',
      type: 'code-example',
      codeTitle: 'container-queries.css',
      codeLang: 'css',
      code: `/* 1. Define the parent container */
.card-wrapper {
  container-type: inline-size; /* Monitor width */
}

/* 2. Default: Stacked layout for narrow container */
.profile-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 12px;
}

/* 3. When the CONTAINER is 450px or wider: Switch to horizontal layout! */
@container (width >= 450px) {
  .profile-card {
    flex-direction: row;
    align-items: center;
    padding: 24px;
  }
}`,
      demo: {
        title: 'Container Query Behavior',
        html: `<div style="font-family: sans-serif; padding: 14px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 10px;">
  <span style="font-size: 11px; font-weight: bold; color: #ea580c;">@container (width >= 450px) Active</span>
  <p style="margin: 6px 0 0; font-size: 13px; color: #7c2d12;">
    Components adapt to their parent container size, whether in a sidebar or hero grid.
  </p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Container queries enable truly modular, reusable responsive components.',
        'Use container-type: inline-size on the parent to register it.',
        'Use @container (width >= X) on child selectors.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Register an Inline Container',
      task: 'Declare an article element as a container that monitors its inline-size.',
      hint: 'article { container-type: inline-size; }',
    },
  ],
  quiz: [
    {
      question: 'What is the fundamental difference between @media queries and @container queries?',
      options: [
        '@media measures the entire browser viewport; @container measures the size of a specific parent element',
        '@container only works with images',
        '@media requires JavaScript',
        'There is no difference',
      ],
      correctAnswer: 0,
      explanation: '@container queries allow components to respond directly to the available width of their own parent wrapper.',
    },
    {
      question: 'What declaration must be placed on a parent element before @container can query its dimensions?',
      options: [
        'container-type: inline-size;',
        'display: container;',
        'is-container: true;',
        'position: relative;',
      ],
      correctAnswer: 0,
      explanation: 'container-type: inline-size (or normal) tells the browser engine to establish a container query context.',
    },
    {
      question: 'What does the unit "cqw" represent in CSS?',
      options: [
        'Color Quality Weight',
        '1% of the query container width',
        'Custom Query Width',
        'Cascading Query Width',
      ],
      correctAnswer: 1,
      explanation: 'cqw represents 1% of the registered query container width.',
    },
  ],
};
