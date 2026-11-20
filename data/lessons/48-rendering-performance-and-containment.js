export const renderingPerformanceAndContainmentLesson = {
  slug: 'rendering-performance-and-containment',
  number: '48',
  title: 'CSS Performance, Reflows & Containment',
  category: 'Advanced Architecture & Performance',
  subtitle: 'Layout thrashing, GPU composite layers, will-change, contain: layout paint, and content-visibility: auto',
  badge: 'Advanced',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: 60fps & 120fps Rendering',
      type: 'text',
      lead: 'In complex single-page applications and long infinite feeds, unoptimized CSS can cause noticeable frame drops, battery drain, and sluggish scrolling.',
      paragraphs: [
        'Modern CSS offers advanced performance containment features like contain and content-visibility: auto, which tell browser layout engines to skip rendering off-screen elements entirely until the user scrolls them into view.',
      ],
    },
    {
      id: 'performance-properties-table',
      title: 'High-Performance CSS Directives',
      type: 'table',
      table: {
        caption: 'Performance Optimization Properties',
        headers: ['Property', 'Function', 'Performance Benefit'],
        rows: [
          ['content-visibility: auto', 'Skips layout and paint for off-screen elements until scrolled near viewport.', 'Can reduce initial page load render time by up to 50%+ on long feeds!'],
          ['contain-intrinsic-size', 'Provides a placeholder size for content-visibility elements to prevent scrollbar jumps.', 'Prevents layout shift (CLS).'],
          ['contain: layout paint', 'Isolates element subtree; mutations inside do not cause global document reflows.', 'Prevents layout thrashing in large applications.'],
          ['will-change: transform', 'Warns the browser GPU to create a dedicated composite layer before animation begins.', 'Eliminates stutter on heavy transitions.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'content-visibility: auto for Infinite Feeds',
      type: 'code-example',
      codeTitle: 'performance.css',
      codeLang: 'css',
      code: `/* Massive performance boost for long content feeds */
.feed-item {
  /* Skips rendering this item completely when off-screen! */
  content-visibility: auto;
  
  /* Estimate height to prevent scrollbar jumping */
  contain-intrinsic-size: auto 250px;
  
  padding: 24px;
  border-bottom: 1px solid #e4e4e7;
}

/* GPU promotion for hardware-accelerated animations */
.animated-card {
  will-change: transform; /* Use sparingly! */
  transition: transform 0.2s ease;
}`,
      demo: {
        title: 'Performance Containment Card',
        html: `<div style="font-family: sans-serif; padding: 14px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 10px;">
  <span style="font-size: 11px; font-weight: bold; color: #ea580c;">content-visibility: auto Active</span>
  <p style="margin: 4px 0 0; font-size: 13px; color: #7c2d12;">Off-screen DOM subtrees bypass Layout & Paint until scrolled near.</p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'content-visibility: auto provides instant rendering performance gains on long pages.',
        'contain isolates DOM subtrees to stop layout propagation.',
        'Use will-change sparingly to prevent GPU memory exhaustion.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Apply Content Visibility',
      task: 'Declare content-visibility: auto on a long table row with a contain-intrinsic-size estimate of 40px.',
      hint: 'tr { content-visibility: auto; contain-intrinsic-size: auto 40px; }',
    },
  ],
  quiz: [
    {
      question: 'What does "content-visibility: auto;" do when an element is far off-screen?',
      options: [
        'Hides the element permanently',
        'Skips layout and painting of the element and its children until it approaches the viewport, saving CPU/GPU cycles',
        'Compresses images',
        'Deletes the element from the DOM',
      ],
      correctAnswer: 1,
      explanation: 'content-visibility: auto allows browsers to skip expensive layout and rendering calculations for off-screen nodes.',
    },
    {
      question: 'Why should "contain-intrinsic-size" always be paired with "content-visibility: auto"?',
      options: [
        'It is required by the CSS parser',
        'It gives the off-screen element a placeholder height, preventing the scrollbar thumb from jumping wildly as user scrolls',
        'It fixes color bugs',
        'It enables flexbox',
      ],
      correctAnswer: 1,
      explanation: 'contain-intrinsic-size ensures the scroll container maintains a stable height before the off-screen element is rendered.',
    },
    {
      question: 'Why is setting "will-change: transform;" on hundreds of elements simultaneously considered a bad practice?',
      options: [
        'It creates too many GPU layers, consuming excessive device RAM and draining battery life',
        'It is unsupported in Safari',
        'It breaks borders',
        'It slows down download times',
      ],
      correctAnswer: 0,
      explanation: 'will-change allocates GPU memory layers. Overusing it across many elements can crash mobile browser processes.',
    },
  ],
};
