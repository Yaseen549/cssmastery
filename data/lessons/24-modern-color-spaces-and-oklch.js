export const modernColorSpacesAndOklchLesson = {
  slug: 'modern-color-spaces-and-oklch',
  number: '24',
  title: 'Modern Color Spaces & OKLCH',
  category: 'Colors & Backgrounds',
  subtitle: 'Beyond RGB and HSL: perceptual uniformity, wide-gamut Display P3, and OKLCH color palettes',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Color Revolution in CSS',
      type: 'text',
      lead: 'CSS Color Module Level 4 introduced modern color spaces like OKLCH, OKLab, and Display P3 to the web.',
      paragraphs: [
        'For 30 years, web color was confined to sRGB (hex codes, rgb, and hsl). However, HSL has a fatal flaw: human eyes perceive yellow as much brighter than blue at the same lightness value (80% lightness yellow is blinding, while 80% lightness blue is dark).',
        'OKLCH solves this through Perceptual Uniformity: 50% lightness in OKLCH has the exact same visual brightness regardless of hue, revolutionizing accessible design token creation and palette generation.',
      ],
    },
    {
      id: 'oklch-anatomy',
      title: 'Anatomy of the OKLCH Color Function',
      type: 'syntax',
      syntax: 'color: oklch(L C H [/ A]);',
      syntaxNote: 'L = Perceived Lightness (0% to 100%), C = Chroma / Saturation (0 to ~0.37+), H = Hue Angle (0 to 360 deg), A = Optional Alpha transparency.',
    },
    {
      id: 'color-spaces-table',
      title: 'Color Formats in CSS (2026 Comparison)',
      type: 'table',
      table: {
        caption: 'Comparison of Web Color Spaces',
        headers: ['Format', 'Syntax Example', 'Color Gamut', 'Perceptually Uniform?'],
        rows: [
          ['HEX', '#f97316', 'sRGB (Limited gamut)', 'No.'],
          ['RGB', 'rgb(249 115 22)', 'sRGB', 'No.'],
          ['HSL', 'hsl(24 95% 53%)', 'sRGB', 'No (Flawed lightness math).'],
          ['OKLCH (Modern Gold Standard)', 'oklch(0.68 0.22 45)', 'Wide Gamut (P3, Rec2020)', 'YES! Perceptually uniform across all hues.'],
          ['color-mix()', 'color-mix(in oklch, red 40%, blue)', 'Depends on color space', 'Linear interpolation without muddy gray transitions.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Generating Accessible Palettes with OKLCH & color-mix()',
      type: 'code-example',
      codeTitle: 'colors.css',
      codeLang: 'css',
      code: `/* Modern OKLCH Design Tokens with Fallbacks */
:root {
  /* Brand Orange in OKLCH */
  --brand-500: #f97316; /* Fallback for legacy browsers */
  --brand-500: oklch(0.68 0.22 45);
  
  /* Generating accessible hover states by adjusting lightness L */
  --brand-600: oklch(0.60 0.22 45); /* Exactly 8% darker, same chroma/hue */
  --brand-100: oklch(0.95 0.05 45); /* Soft pastel tint */
}

/* Modern color-mix() interpolation */
.badge-tint {
  background-color: color-mix(in oklch, var(--brand-500) 20%, transparent);
  color: var(--brand-500);
}`,
      demo: {
        title: 'OKLCH Palette Swatches',
        html: `<div style="font-family: system-ui, sans-serif; display: flex; gap: 8px;">
  <div style="background: oklch(0.95 0.05 45); color: #7c2d12; padding: 12px; border-radius: 8px; font-size: 11px; font-weight: bold; text-align: center; flex: 1;">
    OKLCH L: 95%
  </div>
  <div style="background: oklch(0.68 0.22 45); color: white; padding: 12px; border-radius: 8px; font-size: 11px; font-weight: bold; text-align: center; flex: 1;">
    OKLCH L: 68%
  </div>
  <div style="background: oklch(0.50 0.22 45); color: white; padding: 12px; border-radius: 8px; font-size: 11px; font-weight: bold; text-align: center; flex: 1;">
    OKLCH L: 50%
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'OKLCH provides perceptually uniform lightness across all hues.',
        'Enables Display P3 wide-gamut vibrant colors on modern displays.',
        'color-mix(in oklch, ...) produces clean color blends without muddy grays.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Darken an OKLCH Color',
      task: 'Given a button with background: oklch(0.70 0.18 50), write an active state that reduces lightness to 0.60 while keeping chroma and hue intact.',
      hint: 'oklch(0.60 0.18 50)',
    },
  ],
  quiz: [
    {
      question: 'What is the primary architectural advantage of OKLCH over HSL?',
      options: [
        'OKLCH uses less memory',
        'OKLCH is perceptually uniform: equal lightness values have equal perceived brightness across all hues',
        'OKLCH requires no CSS units',
        'OKLCH only works in dark mode',
      ],
      correctAnswer: 1,
      explanation: 'OKLCH models human eye perception accurately, meaning 60% lightness feels equally bright whether blue, green, or yellow.',
    },
    {
      question: 'What do the three parameters in oklch(L C H) represent?',
      options: [
        'Lightness, Contrast, Height',
        'Lightness, Chroma (saturation), Hue (angle)',
        'Luminosity, Cyan, Highlight',
        'Linear, Color, Hexadecimal',
      ],
      correctAnswer: 1,
      explanation: 'L is perceived Lightness, C is Chroma (color intensity), and H is the Hue angle (0 to 360).',
    },
    {
      question: 'Which modern CSS function allows mixing two colors together dynamically in a specific color space?',
      options: ['color-blend()', 'color-mix()', 'blend-colors()', 'mix-rgb()'],
      correctAnswer: 1,
      explanation: 'color-mix(in <color-space>, color1 percentage, color2 percentage) is the standard CSS function.',
    },
  ],
};
