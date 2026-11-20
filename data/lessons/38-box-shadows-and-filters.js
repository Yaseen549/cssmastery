export const boxShadowsAndFiltersLesson = {
  slug: 'box-shadows-and-filters',
  number: '38',
  title: 'Box Shadows, Filters & Backdrop Filters',
  category: 'Borders, Shadows & Graphic Effects',
  subtitle: 'Multi-layer smooth shadows, frosted glass effects, CSS blur, and drop-shadow vs box-shadow',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Depth, Atmosphere & Glass',
      type: 'text',
      lead: 'Visual elevation, depth, and atmospheric blur are hallmark features of modern user interface design.',
      paragraphs: [
        'CSS provides box-shadow for structural card elevation, filter for graphic color adjustments, and backdrop-filter for frosted glassmorphic UI panels.',
      ],
    },
    {
      id: 'shadow-anatomy',
      title: 'Anatomy of box-shadow',
      type: 'syntax',
      syntax: 'box-shadow: [inset] x-offset y-offset blur-radius spread-radius color;',
      syntaxNote: 'Stacking multiple comma-separated shadows produces smooth, natural physical lighting instead of harsh digital outlines.',
    },
    {
      id: 'drop-shadow-vs-box-shadow',
      title: 'filter: drop-shadow() vs box-shadow',
      type: 'table',
      table: {
        caption: 'box-shadow vs drop-shadow()',
        headers: ['Property', 'Shadow Shape Cast', 'Handles Transparent PNGs & SVGs?'],
        rows: [
          ['box-shadow', 'Casts a rectangular shadow around the bounding border box.', 'NO (casts a box shadow around the entire rectangular bounding box).'],
          ['filter: drop-shadow()', 'Casts a shadow matching the EXACT pixel contours and alpha transparency.', 'YES (hugs transparent SVG cutouts, triangular tooltip arrows, and logos!).'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Smooth Multi-Layer Shadow & Frosted Glass',
      type: 'code-example',
      codeTitle: 'shadows-effects.css',
      codeLang: 'css',
      code: `/* 1. Ultra-smooth natural multi-layer elevation shadow */
.card-elevated {
  background: white;
  border-radius: 16px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 12px 24px -4px rgba(0, 0, 0, 0.08);
}

/* 2. Frosted Glassmorphism Modal Panel */
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}`,
      demo: {
        title: 'Elevation & Glass Output',
        html: `<div style="display: flex; gap: 14px; justify-content: center; font-family: sans-serif;">
  <div style="background: white; padding: 14px 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.1); font-size: 12px; font-weight: bold; color: #18181b;">
    Smooth Multi-Layer Shadow
  </div>
  <div style="background: rgba(249, 115, 22, 0.15); border: 1px solid rgba(249,115,22,0.3); backdrop-filter: blur(8px); padding: 14px 20px; border-radius: 12px; font-size: 12px; font-weight: bold; color: #ea580c;">
    Frosted Glass Effect
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Stack multiple shadows for soft, realistic elevation.',
        'backdrop-filter blurs elements behind the glass container.',
        'Use filter: drop-shadow() when casting shadows on irregular PNGs or SVGs.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Inner Shadow Inset',
      task: 'Create an inset shadow that makes an input element look physically recessed into the page.',
      hint: 'box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);',
    },
  ],
  quiz: [
    {
      question: 'Which property applies a frosted glass blur to elements BEHIND the targeted element?',
      options: ['filter: blur()', 'backdrop-filter: blur()', 'background-blur: true;', 'box-shadow: blur;'],
      correctAnswer: 1,
      explanation: 'backdrop-filter applies graphic effects to everything rendered behind the element.',
    },
    {
      question: 'Why is "filter: drop-shadow()" preferred over "box-shadow" for transparent PNG icons and SVGs?',
      options: [
        'drop-shadow uses less GPU memory',
        'drop-shadow casts the shadow along the transparent contours of the artwork rather than the square box',
        'box-shadow only supports black',
        'drop-shadow adds borders',
      ],
      correctAnswer: 1,
      explanation: 'drop-shadow respects alpha transparency, tracing the outline of SVG icons and PNG cutouts.',
    },
    {
      question: 'How do you create a smooth, non-harsh physical shadow in CSS?',
      options: [
        'Increase spread to 50px',
        'Layer multiple subtle shadows with commas: box-shadow: 0 1px 2px ..., 0 4px 8px ...',
        'Use opacity: 0.1',
        'Gradients only',
      ],
      correctAnswer: 1,
      explanation: 'Layering multiple faint shadows mimics natural physical light diffusion.',
    },
  ],
};
