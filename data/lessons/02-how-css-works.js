export const howCssWorksLesson = {
  slug: 'how-css-works',
  number: '02',
  title: 'How CSS Works',
  category: 'CSS Fundamentals',
  subtitle: 'The browser layout pipeline: DOM, CSSOM, Render Tree, Layout, Paint, and Composite',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Behind the Browser Viewport',
      type: 'text',
      lead: 'When you enter a URL and hit Enter, the browser converts raw HTML characters and CSS rules into visual pixels on your screen through a high-speed rendering engine pipeline.',
      paragraphs: [
        'Understanding how browsers parse, calculate, layout, and paint CSS is what separates junior copy-paste developers from senior frontend engineers. When you understand the pipeline, you can prevent layout thrashing, write performant 60fps animations, and diagnose mysterious visual bugs with surgical precision.',
      ],
    },
    {
      id: 'learning-objectives',
      title: 'Learning Objectives',
      type: 'list',
      items: [
        'Trace the 5 core stages of the Critical Rendering Path.',
        'Understand the construction of the DOM and CSSOM.',
        'Learn how the Render Tree merges content with visual styles.',
        'Differentiate between Reflow (Layout) and Repaint performance costs.',
      ],
    },
    {
      id: 'browser-pipeline',
      title: 'The 5 Critical Rendering Stages',
      type: 'table',
      table: {
        caption: 'The Browser Layout & Rendering Pipeline',
        headers: ['Stage', 'Input', 'Output', 'Operation Description'],
        rows: [
          ['1. DOM Construction', 'HTML bytes / tokens', 'DOM Tree', 'Parses HTML tags into hierarchical nodes (Document Object Model).'],
          ['2. CSSOM Construction', 'CSS bytes / tokens', 'CSSOM Tree', 'Parses stylesheet rules into styled node maps (CSS Object Model).'],
          ['3. Render Tree', 'DOM + CSSOM', 'Render Tree', 'Filters out invisible nodes (display: none) and attaches computed styles.'],
          ['4. Layout (Reflow)', 'Render Tree', 'Geometric Box Tree', 'Calculates exact physical pixel coordinates and dimensions (x, y, w, h).'],
          ['5. Paint & Composite', 'Geometric Box Tree', 'Screen Pixels', 'Fills pixels, rasterizes textures, and composites GPU layers onto the display.'],
        ],
      },
    },
    {
      id: 'render-tree-mechanics',
      title: 'Render Tree Mechanics: What Gets Included?',
      type: 'text',
      paragraphs: [
        'The Render Tree contains only nodes required to paint the screen. Elements with display: none are completely omitted from the Render Tree because they occupy no physical space.',
        'Crucially, elements with visibility: hidden or opacity: 0 ARE included in the Render Tree and Layout stage: they consume spatial geometry, even though their visual pixels are transparent.',
      ],
      callout: {
        type: 'important',
        title: 'display: none vs visibility: hidden',
        content: 'display: none eliminates the node from Layout computation entirely. visibility: hidden keeps the box in Layout, preserving its width and height while rendering empty space.',
      },
    },
    {
      id: 'code-example',
      title: 'Reflow vs Repaint Demonstration',
      type: 'code-example',
      codeTitle: 'pipeline-demo.css',
      codeLang: 'css',
      code: `/* Triggers Layout (Reflow) + Repaint + Composite (High CPU cost) */
.box-resize {
  width: 200px;
  height: 150px;
  margin: 20px;
}

/* Triggers Repaint + Composite (Medium cost) */
.box-recolor {
  background-color: #f97316;
  color: #ffffff;
}

/* Triggers ONLY Composite on GPU (Fastest, 60fps / 120fps smooth) */
.box-transform {
  transform: translateY(-8px);
  opacity: 0.9;
}`,
      demo: {
        title: 'GPU Accelerated Hover Effect',
        html: `<div style="display: flex; gap: 16px; justify-content: center;">
  <div style="background: #18181b; color: white; padding: 16px 24px; border-radius: 12px; border: 1px solid #3f3f46; transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 12px 24px -6px rgba(249,115,22,0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
    <div style="font-weight: bold; color: #f97316;">GPU Composite</div>
    <div style="font-size: 12px; color: #a1a1aa; margin-top: 4px;">Hover Me: 60fps Smooth</div>
  </div>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Performance Bottlenecks',
      type: 'list',
      items: [
        'Animating width, height, or top/left: Forces continuous layout recalculations on every single frame (Layout Thrashing).',
        'Reading layout properties in JavaScript loops (e.g. element.offsetHeight) immediately after modifying styles (Forced Synchronous Layout).',
        'Failing to leverage CSS transform and opacity for motion graphics.',
      ],
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'The browser merges the DOM and CSSOM to produce the Render Tree.',
        'Layout computes physical coordinates; Paint fills color pixels; Composite stacks layers.',
        'Always animate transform and opacity for hardware-accelerated, silk-smooth animations.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Identify the Pipeline Cost',
      task: 'Categorize these properties into Layout, Paint, or Composite triggers: background-color, transform, width, opacity, padding.',
      hint: 'Does the property change geometric spacing or just color/pixels?',
    },
  ],
  quiz: [
    {
      question: 'Which browser tree structure combines DOM elements with their computed CSSOM styling rules?',
      options: [
        'The Shadow DOM',
        'The Render Tree',
        'The Abstract Syntax Tree',
        'The Virtual Layout Frame',
      ],
      correctAnswer: 1,
      explanation: 'The Render Tree is created by merging the DOM and CSSOM, containing only nodes that are visible and occupy physical space.',
    },
    {
      question: 'Why is animating "transform: translateY(-10px)" faster than animating "top: -10px"?',
      options: [
        'Transform uses JavaScript instead of CSS',
        'Transform operates purely on the GPU compositing layer without triggering Reflow',
        'Top is an obsolete property no longer supported',
        'Transform recalculates document margin geometry',
      ],
      correctAnswer: 1,
      explanation: 'Transform does not alter document geometry, bypassing the expensive Layout (Reflow) stage and executing directly on the GPU compositor.',
    },
    {
      question: 'Does an element with "display: none" exist in the browser Render Tree?',
      options: [
        'Yes, with width and height equal to zero',
        'Yes, but with zero opacity',
        'No, it is excluded completely from the Render Tree',
        'Only on desktop viewports',
      ],
      correctAnswer: 2,
      explanation: 'Elements with display: none are completely omitted from the Render Tree and consume zero computational resources during layout.',
    },
  ],
};
