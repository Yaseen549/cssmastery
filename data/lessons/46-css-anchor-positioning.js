export const cssAnchorPositioningLesson = {
  slug: 'css-anchor-positioning',
  number: '46',
  title: 'CSS Anchor Positioning',
  category: 'Modern & Bleeding-Edge CSS',
  subtitle: 'Tethering floating tooltips, menus, and popovers to anchor elements without JavaScript libraries',
  badge: 'Bleeding-Edge',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The End of Popper.js',
      type: 'text',
      lead: 'CSS Anchor Positioning allows an element to physically tether and align itself to another independent element anywhere on the page, regardless of DOM hierarchy.',
      paragraphs: [
        'Historically, creating floating tooltips, dropdown menus, and popovers required heavy JavaScript libraries (like Popper.js or Floating UI) to calculate bounding boxes (getBoundingClientRect) and handle scroll repositioning.',
        'With anchor-name and position-anchor, browsers calculate anchor coordinates natively on the compositor with zero JavaScript overhead.',
      ],
    },
    {
      id: 'anchor-syntax',
      title: 'The Anchor Positioning Syntax',
      type: 'syntax',
      syntax: '/* 1. Name the Anchor Button */\n.trigger-button {\n  anchor-name: --my-anchor;\n}\n\n/* 2. Tether the Floating Tooltip */\n.tooltip {\n  position: fixed;\n  position-anchor: --my-anchor;\n  bottom: anchor(top);\n  left: anchor(center);\n  transform: translateX(-50%);\n}',
      syntaxNote: 'anchor-name assigns a custom identifier (starting with --). The floating element consumes it via position-anchor and the anchor() function.',
    },
    {
      id: 'code-example',
      title: 'Pure CSS Tooltip Anchor',
      type: 'code-example',
      codeTitle: 'anchor-demo.css',
      codeLang: 'css',
      code: `/* Anchor Trigger Button */
.btn-save {
  anchor-name: --save-btn;
  background-color: #f97316;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
}

/* Floating Tooltip tethered to the button */
.tooltip-box {
  position: fixed;
  position-anchor: --save-btn;
  bottom: anchor(top, 8px); /* 8px above button top */
  left: anchor(center);
  transform: translateX(-50%);
  background-color: #18181b;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 11px;
}`,
      demo: {
        title: 'Anchor Positioned Popover',
        html: `<div style="font-family: sans-serif; display: flex; flex-direction: column; align-items: center; padding: 20px;">
  <div style="background: #18181b; color: white; padding: 4px 10px; border-radius: 6px; font-size: 11px; margin-bottom: 8px;">
    Tethered via anchor(top)
  </div>
  <button style="background: #f97316; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">
    Anchor Trigger Button
  </button>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'anchor-name defines an anchor target with a --name identifier.',
        'position-anchor binds a floating element to that anchor.',
        'anchor(side, offset) aligns edges without JavaScript bounding box calculations.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Tether a Dropdown Menu',
      task: 'Declare an anchor name --menu-trigger on a button and position a dropdown directly below it using top: anchor(bottom).',
      hint: 'position-anchor: --menu-trigger; top: anchor(bottom);',
    },
  ],
  quiz: [
    {
      question: 'What prefix must custom anchor names start with in CSS Anchor Positioning?',
      options: ['anchor-', 'double hyphens (--)', 'hash (#)', '$'],
      correctAnswer: 1,
      explanation: 'Like CSS custom properties, anchor-name values must begin with double hyphens, such as --my-anchor.',
    },
    {
      question: 'Which CSS function calculates coordinates relative to a tethered anchor element edge?',
      options: ['calc()', 'anchor()', 'dock()', 'pin()'],
      correctAnswer: 1,
      explanation: 'The anchor() function retrieves coordinates (top, right, bottom, left, center) from the anchor.',
    },
    {
      question: 'What is the primary benefit of CSS Anchor Positioning over JavaScript libraries like Popper.js?',
      options: [
        'Calculations run natively in the browser layout engine, preventing scroll lag and reducing bundle size',
        'It changes HTML tags automatically',
        'It works without CSS',
        'It disables z-index',
      ],
      correctAnswer: 0,
      explanation: 'Native anchor positioning eliminates the need to ship heavy JavaScript positioning libraries.',
    },
  ],
};
