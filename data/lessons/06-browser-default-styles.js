export const browserDefaultStylesLesson = {
  slug: 'browser-default-styles',
  number: '06',
  title: 'Browser Default Styles & Resets',
  category: 'CSS Fundamentals',
  subtitle: 'User-agent stylesheets, cross-browser quirks, modern resets, and Normalize.css',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The User-Agent Stylesheet',
      type: 'text',
      lead: 'Before your stylesheet loads a single line of CSS, web browsers apply their own built-in default styles known as the User-Agent (UA) stylesheet.',
      paragraphs: [
        'Every browser (Chrome, Safari, Firefox, Edge) ships with a UA stylesheet. This is why <h1> tags are large and bold, <ul> lists have left indentation and bullet dots, and <body> has an 8px margin by default.',
        'Because UA stylesheets have slight historical discrepancies across different browser vendors, professional web developers use CSS Resets or Normalization stylesheets to establish a predictable, cross-browser clean slate.',
      ],
    },
    {
      id: 'modern-reset',
      title: 'The Modern CSS Reset (2026 Industry Standard)',
      type: 'code-example',
      codeTitle: 'reset.css',
      codeLang: 'css',
      code: `/* 1. Use more-intuitive box-sizing model across all elements */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default 8px margin on body and headings */
* {
  margin: 0;
}

/* 3. Improve media defaults: responsive images & SVGs */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 4. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 5. Avoid text overflow and improve line wrap */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 6. Root stacking context for modern framework apps */
#root, #__next {
  isolation: isolate;
}`,
      demo: {
        title: 'Unreset vs Reset Comparison',
        html: `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-family: sans-serif;">
  <div style="border: 1px solid #f87171; background: #fef2f2; padding: 12px; border-radius: 8px;">
    <span style="font-size: 11px; font-weight: bold; color: #dc2626;">Without Reset</span>
    <h4 style="margin: 12px 0; font-size: 14px;">Default Margin Spill</h4>
    <p style="font-size: 12px; margin: 12px 0;">Content has unpredictable default spacing.</p>
  </div>
  <div style="border: 1px solid #34d399; background: #f0fdf4; padding: 12px; border-radius: 8px;">
    <span style="font-size: 11px; font-weight: bold; color: #059669;">With Modern Reset</span>
    <h4 style="margin: 0; font-size: 14px;">Controlled 0-Margin</h4>
    <p style="font-size: 12px; margin: 4px 0 0;">Predictable layout geometry.</p>
  </div>
</div>`,
      },
    },
    {
      id: 'reset-vs-normalize',
      title: 'CSS Reset vs Normalize.css',
      type: 'table',
      table: {
        caption: 'Reset vs Normalize Strategies',
        headers: ['Strategy', 'Core Philosophy', 'Handling of Defaults', 'When to Choose'],
        rows: [
          ['CSS Reset', 'Wipes all styling to zero', 'Sets margins, paddings, and borders to 0', 'Custom bespoke design systems and component libraries.'],
          ['Normalize.css', 'Preserves useful defaults, fixes bugs', 'Keeps headings bold and lists indented, fixes OS glitches', 'Content-heavy blogs, editorial sites, legacy projects.'],
          ['Modern CSS Reset', 'Hybrid: sets box-sizing and removes margins', 'Sensible defaults for modern web apps & frameworks', 'Next.js, React, Tailwind, and modern web apps.'],
        ],
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Gotchas',
      type: 'list',
      items: [
        'Using the old Eric Meyer reset without updating box-sizing: The 2007 reset omitted box-sizing: border-box.',
        'Removing outline on focus: * { outline: none; } destroys keyboard navigation accessibility. Always use :focus-visible.',
        'Not setting max-width: 100% on images: Large images break out of grid containers and cause horizontal mobile scrollbars.',
      ],
      callout: {
        type: 'important',
        title: 'Never Destroy Focus Outlines',
        content: 'Never use * { outline: none; } in your reset. It makes your site completely unusable for keyboard-only and screen reader users.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Browsers apply default UA styles (8px body margin, default font sizes).',
        'A modern reset establishes box-sizing: border-box and eliminates unwanted default margins.',
        'Always preserve accessible focus states for keyboard users.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Implement Box-Sizing Reset',
      task: 'Write the universal selector rule that applies border-box to all elements and pseudo-elements.',
      hint: 'Target *, *::before, *::after.',
    },
  ],
  quiz: [
    {
      question: 'What is the default margin applied to the <body> element in most browser UA stylesheets?',
      options: ['0px', '8px', '16px', '1rem'],
      correctAnswer: 1,
      explanation: 'Browsers apply a default margin of 8px to <body> unless explicitly overridden by a reset or stylesheet.',
    },
    {
      question: 'What is the primary benefit of setting "box-sizing: border-box" in a universal reset?',
      options: [
        'It makes all text bold by default',
        'Padding and border widths are included inside the declared width/height rather than expanding the box',
        'It removes all margins from images',
        'It forces elements to use flexbox layout',
      ],
      correctAnswer: 1,
      explanation: 'With border-box, an element with width: 200px and padding: 20px remains exactly 200px wide, preventing sizing calculation headaches.',
    },
    {
      question: 'Why is "* { outline: none; }" considered a severe accessibility violation?',
      options: [
        'It slows down browser rendering speed',
        'It prevents keyboard users from seeing which button or link is currently focused',
        'It disables hover states',
        'It changes font weights in Safari',
      ],
      correctAnswer: 1,
      explanation: 'Keyboard users rely on focus rings to navigate interfaces. Removing them without a replacement leaves them stranded.',
    },
  ],
};
