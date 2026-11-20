export const modernFormStylingLesson = {
  slug: 'modern-form-styling',
  number: '43',
  title: 'Modern Form Styling & Controls',
  category: 'Forms & UI Styling',
  subtitle: 'Custom inputs, buttons, checkboxes with accent-color, appearance: none, and :focus-visible',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Evolution of Form Controls',
      type: 'text',
      lead: 'Historically, styling native HTML form controls like checkboxes, radio buttons, and select dropdowns was notoriously painful and inconsistent across operating systems.',
      paragraphs: [
        'Modern CSS provides native tools like accent-color, appearance: none, and :focus-visible to theme and customize form elements cleanly while maintaining complete accessibility.',
      ],
    },
    {
      id: 'code-example',
      title: 'Modern Form Controls with accent-color & focus-visible',
      type: 'code-example',
      codeTitle: 'forms.css',
      codeLang: 'css',
      code: `/* 1. Instant custom branding for checkboxes, radios, ranges */
:root {
  accent-color: #f97316; /* One line themes all native controls! */
}

/* 2. Accessible Focus Ring (Only appears for keyboard users!) */
button:focus-visible,
input:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.4);
  border-color: #f97316;
}

/* 3. Strip native appearance for custom select menus */
.custom-select {
  appearance: none;
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}`,
      demo: {
        title: 'Themed Form Controls',
        html: `<div style="font-family: sans-serif; display: flex; flex-direction: column; gap: 10px; max-width: 260px;">
  <label style="display: flex; align-items: center; gap: 8px; font-size: 13px;">
    <input type="checkbox" checked style="accent-color: #f97316; width: 18px; height: 18px;">
    <span>accent-color Checkbox</span>
  </label>
  <label style="display: flex; align-items: center; gap: 8px; font-size: 13px;">
    <input type="radio" checked style="accent-color: #f97316; width: 18px; height: 18px;">
    <span>accent-color Radio</span>
  </label>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'accent-color provides instant 1-line theming for checkboxes, radios, and progress bars.',
        'Always use :focus-visible instead of :focus to avoid unsightly mouse focus rings while keeping keyboard navigation accessible.',
        'appearance: none strips OS default chrome to build bespoke controls.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Theme a Range Slider',
      task: 'Set the accent-color on an <input type="range"> to #f97316.',
      hint: 'input[type="range"] { accent-color: #f97316; }',
    },
  ],
  quiz: [
    {
      question: 'Which modern CSS property themes native checkboxes, radio buttons, and sliders with a single declaration?',
      options: ['control-color', 'accent-color', 'checkbox-theme', 'form-style'],
      correctAnswer: 1,
      explanation: 'accent-color re-tints native form controls cleanly across all modern browsers.',
    },
    {
      question: 'Why is ":focus-visible" superior to classic ":focus" for buttons?',
      options: [
        ':focus-visible only triggers focus rings when navigating via keyboard, preventing awkward outlines on mouse clicks',
        ':focus-visible is faster',
        ':focus is deprecated',
        ':focus-visible adds animations',
      ],
      correctAnswer: 0,
      explanation: ':focus-visible smartly distinguishes keyboard tab focus from mouse clicks, pleasing both designers and accessibility auditors.',
    },
    {
      question: 'What does "appearance: none;" do to a form element?',
      options: [
        'Hides the element from the page',
        'Strips native platform OS styling, allowing full custom CSS borders and backgrounds',
        'Disables user clicks',
        'Changes font size',
      ],
      correctAnswer: 1,
      explanation: 'appearance: none strips vendor OS styling from inputs, buttons, and select dropdowns.',
    },
  ],
};
