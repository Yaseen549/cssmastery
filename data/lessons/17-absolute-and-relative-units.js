export const absoluteAndRelativeUnitsLesson = {
  slug: 'absolute-and-relative-units',
  number: '17',
  title: 'Absolute & Relative Font Units',
  category: 'CSS Values & Units',
  subtitle: 'Pixels vs em vs rem vs ch vs ex: accessible font scaling and modular component spacing',
  badge: 'Beginner',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Sizing Units of CSS',
      type: 'text',
      lead: 'Every numerical dimension in CSS requires a unit. CSS units are divided into two fundamental classes: Absolute Units and Relative Units.',
      paragraphs: [
        'Absolute units (like px) remain fixed regardless of user preferences or parent containers. Relative units (like rem, em, ch) scale dynamically, providing the foundation for responsive design and accessible typography that honors user font-size settings.',
      ],
    },
    {
      id: 'units-table',
      title: 'Comprehensive CSS Units Comparison',
      type: 'table',
      table: {
        caption: 'Absolute vs Relative Units in CSS',
        headers: ['Unit', 'Classification', 'Relative To', 'Primary Production Use Case'],
        rows: [
          ['px', 'Absolute', '1 device pixel at standard 96 DPI', 'Borders (1px), subtle shadows, fixed micro-offsets.'],
          ['rem', 'Relative', 'Root element (<html>) font-size (default 16px)', 'Typography, global spacing scales, layout paddings (ACCESSIBLE!).'],
          ['em', 'Relative', 'Immediate parent font-size', 'Component-scoped padding, icons scaling with adjacent text.'],
          ['ch', 'Relative', 'Width of the character "0" in the current font', 'Constraining reading measure (e.g. max-width: 65ch for comfortable reading).'],
          ['%', 'Relative', 'Parent element dimension of the same property', 'Fluid column widths, image constraints (max-width: 100%).'],
        ],
      },
    },
    {
      id: 'rem-vs-em-mechanics',
      title: 'rem vs em: The Critical Distinction',
      type: 'text',
      paragraphs: [
        '1rem is ALWAYS relative to the root <html> font-size (typically 16px). If the user increases their browser font size to 24px for accessibility, 1rem scales proportionally to 24px.',
        '1em is relative to the CURRENT element font-size. This causes "compounding" when nesting: if a parent is 1.5em and a child is 1.5em, the child becomes 2.25 times the base size!',
      ],
      callout: {
        type: 'best-practice',
        title: 'Rule of Thumb: rem for Typography & Spacing',
        content: 'Use rem for font sizes and margins to ensure your site scales when visually impaired users adjust browser settings. Use px for 1px borders.',
      },
    },
    {
      id: 'code-example',
      title: 'Responsive Accessible Typography with rem & ch',
      type: 'code-example',
      codeTitle: 'units.css',
      codeLang: 'css',
      code: `/* Accessible Typography Scale using rem */
h1 {
  font-size: 2.25rem; /* 36px at 16px base */
  line-height: 1.2;
  margin-bottom: 1rem;
}

/* Optimal reading column width: 65 characters wide */
article {
  max-width: 65ch;
  font-size: 1rem; /* 16px base */
  line-height: 1.6;
}

/* Icon scaling with text using em */
.button-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.2em;
}`,
      demo: {
        title: 'Optimal 65ch Reading Column',
        html: `<div style="font-family: system-ui, sans-serif; max-width: 65ch; padding: 16px; border: 1px solid #e4e4e7; border-radius: 8px; background: white;">
  <h3 style="margin: 0; font-size: 1.25rem; color: #18181b;">Article Measure Constrained to 65ch</h3>
  <p style="margin: 8px 0 0; font-size: 0.9rem; line-height: 1.6; color: #52525b;">
    Lines that are too long cause reader fatigue. Constraining reading width with the ch unit ensures line lengths stay between 60 to 75 characters.
  </p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Never hardcode body typography in px; use rem for accessibility.',
        'rem references the root element; em references the element own font-size.',
        'Use ch to establish optimal typographical reading measures (45ch to 75ch).',
      ],
    },
  ],
  exercises: [
    {
      title: 'Convert Pixels to rem',
      task: 'Assuming a standard 16px root font size, convert 24px and 32px into rem values.',
      hint: '24 / 16 = 1.5rem, 32 / 16 = 2rem.',
    },
  ],
  quiz: [
    {
      question: 'What is the base reference point for 1rem in a standard web browser?',
      options: [
        'The immediate parent element font size',
        'The root <html> element font size (default 16px)',
        'The viewport width',
        'The physical monitor pixel count',
      ],
      correctAnswer: 1,
      explanation: 'rem stands for "Root EM", meaning it is calculated strictly against the root <html> font size.',
    },
    {
      question: 'Why should font sizes be defined in rem instead of px for production websites?',
      options: [
        'rem renders in higher resolution',
        'rem honors user browser font-size accessibility adjustments; fixed px ignores them',
        'rem loads faster',
        'px is deprecated in CSS3',
      ],
      correctAnswer: 1,
      explanation: 'When users change their default font size for low-vision accessibility, rem units scale proportionally.',
    },
    {
      question: 'What does the unit "ch" represent in CSS?',
      options: [
        'Column height',
        'The advance measure (width) of the character "0" in the current font',
        'Character count limit',
        'Channel hue',
      ],
      correctAnswer: 1,
      explanation: '1ch is defined as the width of the zero ("0") glyph in the element font.',
    },
  ],
};
