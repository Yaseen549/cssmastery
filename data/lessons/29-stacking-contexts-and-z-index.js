export const stackingContextsAndZIndexLesson = {
  slug: 'stacking-contexts-and-z-index',
  number: '29',
  title: 'Stacking Contexts & z-index',
  category: 'Display & Positioning',
  subtitle: 'Why z-index: 9999 fails: triggers for local stacking contexts and isolation: isolate',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Third Dimension of CSS',
      type: 'text',
      lead: 'z-index controls the 3D stacking order of elements along the z-axis (perpendicular to the screen).',
      paragraphs: [
        'Every developer has experienced the frustration of declaring z-index: 999999, yet the element remains stubbornly trapped beneath a dropdown or modal. This occurs because z-index is NOT global: it operates inside local Stacking Contexts.',
      ],
    },
    {
      id: 'stacking-context-triggers',
      title: 'What Triggers a Stacking Context?',
      type: 'table',
      table: {
        caption: 'Common Triggers for Stacking Contexts',
        headers: ['Trigger Condition', 'Explanation', 'Modern Utility'],
        rows: [
          ['Root element <html>', 'The default top-level stacking context of the document.', 'Baseline.'],
          ['position: relative/absolute with z-index != auto', 'The classic stacking context trigger.', 'Standard legacy pattern.'],
          ['position: fixed or sticky', 'Always creates a stacking context in modern browsers.', 'Modals, sticky headers.'],
          ['opacity < 1', 'Any opacity less than 1 creates a local stacking context.', 'Faded elements trap children z-index!'],
          ['transform, filter, perspective != none', 'CSS transforms spawn new composited stacking contexts.', 'Animated cards trap children!'],
          ['isolation: isolate (Modern Clean Way)', 'Explicitly creates a clean stacking context without side effects.', 'BEST PRACTICE for component isolation.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'The isolation: isolate Solution',
      type: 'code-example',
      codeTitle: 'stacking.css',
      codeLang: 'css',
      code: `/* Component Isolation: Cleanly bounds all internal z-index layers */
.modal-component {
  isolation: isolate; /* Creates a clean new stacking context */
  position: relative;
  z-index: 50;
}

/* Internal elements can use modest z-indexes (1, 2, 3) without polluting global page */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1;
}

.modal-content {
  position: relative;
  z-index: 2; /* Sits cleanly above backdrop */
}`,
      demo: {
        title: 'Stacking Order Preview',
        html: `<div style="position: relative; height: 120px; font-family: sans-serif;">
  <div style="position: absolute; top: 10px; left: 10px; width: 140px; height: 80px; background: #94a3b8; color: white; padding: 10px; border-radius: 8px; z-index: 1;">
    Layer 1 (z: 1)
  </div>
  <div style="position: absolute; top: 30px; left: 50px; width: 140px; height: 80px; background: #f97316; color: white; padding: 10px; border-radius: 8px; z-index: 2; box-shadow: 0 8px 16px rgba(0,0,0,0.15);">
    Layer 2 (z: 2 WINS)
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'z-index only applies to positioned elements (position != static) or flex/grid items.',
        'Stacking contexts act like sub-universes: child elements cannot escape their parent stacking level.',
        'Use isolation: isolate to establish clean, predictable component stacking contexts.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Isolate a Header Component',
      task: 'Add isolation: isolate to a .site-header component so its internal z-index layers never conflict with footer modals.',
      hint: '.site-header { isolation: isolate; }',
    },
  ],
  quiz: [
    {
      question: 'Why does z-index: 9999 fail to bring an element above another element on the page?',
      options: [
        'The number 9999 is too high for CSS',
        'The element is trapped inside a parent stacking context that has a lower z-index than the competitor',
        'z-index only works on buttons',
        'z-index requires JavaScript',
      ],
      correctAnswer: 1,
      explanation: 'If parent A has z-index: 1 and parent B has z-index: 2, no child inside parent A can ever appear above parent B, regardless of how high its z-index is.',
    },
    {
      question: 'Which modern CSS property explicitly creates a new stacking context without requiring dummy transforms or relative positioning?',
      options: ['display: flow-root', 'isolation: isolate', 'box-sizing: border-box', 'overflow: clip'],
      correctAnswer: 1,
      explanation: 'isolation: isolate was specifically added to CSS to allow developers to create stacking contexts cleanly.',
    },
    {
      question: 'Does z-index have any effect on an element with default "position: static" (outside flex/grid)?',
      options: [
        'Yes, always',
        'No, z-index is completely ignored on standard static positioned elements',
        'Only on mobile devices',
        'Only in tables',
      ],
      correctAnswer: 1,
      explanation: 'In normal flow, z-index only operates on positioned elements (relative, absolute, fixed, sticky) or flex/grid children.',
    },
  ],
};
