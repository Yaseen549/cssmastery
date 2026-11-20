export const overflowHandlingLesson = {
  slug: 'overflow-handling',
  number: '23',
  title: 'Overflow Handling (visible, hidden, scroll, auto, clip)',
  category: 'The CSS Box Model',
  subtitle: 'Managing content spills, scrollbars, smooth momentum scrolling, and text overflow ellipsis',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: When Content Outgrows Its Box',
      type: 'text',
      lead: 'The overflow property dictates what happens when an element content exceeds its designated width or height constraints.',
      paragraphs: [
        'By default, CSS is designed not to hide data: if text or images exceed a box dimensions, they spill out visibly over adjacent elements. The overflow property allows you to control clipping, scrollbars, and container boundaries.',
      ],
    },
    {
      id: 'overflow-values-table',
      title: 'The 5 Overflow Values',
      type: 'table',
      table: {
        caption: 'The 5 Standard Overflow Values',
        headers: ['Value', 'Visual Outcome', 'Scrollbars Created?', 'Establishes BFC / Scroll Container?'],
        rows: [
          ['visible (Default)', 'Content spills outside the box boundary without clipping.', 'No scrollbars.', 'No.'],
          ['hidden', 'Content is clipped to the padding box. Spilled content is invisible.', 'No visible scrollbars (programmatic scroll still possible).', 'Yes (Creates BFC).'],
          ['clip', 'Modern clipped overflow without programmatic scroll support.', 'No scrollbars.', 'No (Slightly lighter memory overhead).'],
          ['scroll', 'Always renders scrollbars, even if content fits.', 'Always present (can look ugly when empty).', 'Yes.'],
          ['auto', 'Intelligent: scrollbars appear ONLY when content overflows.', 'Appears only when needed (Best for scrollable panes).', 'Yes.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Scrollable Panes & Single-Line Ellipsis',
      type: 'code-example',
      codeTitle: 'overflow.css',
      codeLang: 'css',
      code: `/* 1. Dedicated scrollable card pane */
.scroll-card {
  max-height: 180px;
  overflow-y: auto;
  padding: 16px;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
}

/* 2. Classic single-line text truncation with ellipsis (...) */
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
}

/* 3. Modern multi-line clamp (3 lines max) */
.multi-line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
      demo: {
        title: 'Auto Scroll & Text Ellipsis',
        html: `<div style="font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 12px; max-width: 300px;">
  <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 260px; padding: 8px 12px; background: #fff7ed; border: 1px solid #fed7aa; border-radius: 6px; font-size: 13px; color: #7c2d12;">
    Super-long-headline-that-exceeds-its-container-width-is-truncated...
  </div>
  <div style="height: 100px; overflow-y: auto; padding: 12px; background: white; border: 1px solid #e4e4e7; border-radius: 6px; font-size: 12px; line-height: 1.5; color: #52525b;">
    <p style="margin: 0 0 8px;">Scrollable pane content item 1.</p>
    <p style="margin: 0 0 8px;">Scrollable pane content item 2.</p>
    <p style="margin: 0 0 8px;">Scrollable pane content item 3.</p>
    <p style="margin: 0;">Scrollable pane content item 4 (end).</p>
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'overflow: visible is the browser default, causing spills.',
        'overflow: auto adds scrollbars only when content exceeds boundaries.',
        'Text truncation requires: white-space: nowrap; overflow: hidden; text-overflow: ellipsis;.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Create a Truncated Pill',
      task: 'Combine white-space, overflow, and text-overflow to truncate a user email badge at max-width: 150px.',
      hint: 'text-overflow: ellipsis;',
    },
  ],
  quiz: [
    {
      question: 'Which overflow value automatically creates scrollbars ONLY when the content actually exceeds container dimensions?',
      options: ['overflow: visible', 'overflow: scroll', 'overflow: auto', 'overflow: clip'],
      correctAnswer: 2,
      explanation: 'overflow: auto is dynamic: scrollbars only appear when content spills.',
    },
    {
      question: 'Which trio of properties is required to create a single-line text ellipsis (...) in CSS?',
      options: [
        'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',
        'overflow: auto; text-wrap: balance; font-size: 14px;',
        'display: flex; justify-content: space-between; overflow: clip;',
        'word-break: break-all; margin: 0; padding: 0;',
      ],
      correctAnswer: 0,
      explanation: 'You must prevent line wraps (white-space: nowrap), hide the spill (overflow: hidden), and add the dot indicator (text-overflow: ellipsis).',
    },
    {
      question: 'What is the default initial value of the overflow property in CSS?',
      options: ['hidden', 'auto', 'visible', 'scroll'],
      correctAnswer: 2,
      explanation: 'CSS defaults to overflow: visible, allowing content to spill rather than clipping it silently.',
    },
  ],
};
