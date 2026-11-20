export const cssGradientsLesson = {
  slug: 'css-gradients',
  number: '25',
  title: 'CSS Gradients (Linear, Radial, Conic)',
  category: 'Colors & Backgrounds',
  subtitle: 'Creating fluid multi-stop gradients, color transitions, geometric patterns, and repeating gradients',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Gradients are CSS Images',
      type: 'text',
      lead: 'In CSS, gradients are not colors — they are procedural images created on the fly by the browser engine.',
      paragraphs: [
        'Because gradients are treated as images, they are assigned via the background-image (or background) property. CSS supports three primary gradient geometries: Linear, Radial, and Conic gradients.',
      ],
    },
    {
      id: 'gradient-types-table',
      title: 'The 3 Gradient Geometries',
      type: 'table',
      table: {
        caption: 'CSS Gradient Types',
        headers: ['Function', 'Direction / Center', 'Visual Projection', 'Typical Use Case'],
        rows: [
          ['linear-gradient()', 'Angle (e.g. 135deg) or to top/right/bottom/left', 'Smooth color progression along a straight linear axis.', 'Hero backgrounds, shiny button accents, subtle card overlays.'],
          ['radial-gradient()', 'Center point (at center, at top left, etc.)', 'Colors emanate outward from a central point in circular/elliptical rings.', 'Spotlight ambient glow, specular lighting orbs.'],
          ['conic-gradient()', 'Rotational angle around a center axis', 'Colors sweep around a center like a color wheel or pie chart.', 'Pie charts, rainbow wheels, rotating border animations.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Gradient Examples',
      type: 'code-example',
      codeTitle: 'gradients.css',
      codeLang: 'css',
      code: `/* 1. Linear Gradient with direction angle and multiple color stops */
.linear-card {
  background-image: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #9a3412 100%);
  color: white;
}

/* 2. Radial Ambient Glow Orb */
.glow-orb {
  background-image: radial-gradient(circle at 30% 30%, rgba(249, 115, 22, 0.4) 0%, transparent 70%);
}

/* 3. Conic Gradient Pie Chart (30% orange, 70% dark) */
.pie-chart {
  background-image: conic-gradient(#f97316 0% 30%, #27272a 30% 100%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
}`,
      demo: {
        title: 'Gradient Visual Swatches',
        html: `<div style="display: flex; gap: 14px; align-items: center; justify-content: center; font-family: sans-serif;">
  <div style="background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 14px 20px; border-radius: 12px; font-size: 12px; font-weight: bold;">
    Linear Gradient
  </div>
  <div style="width: 60px; height: 60px; border-radius: 50%; background: conic-gradient(#f97316 0% 40%, #e4e4e7 40% 100%);"></div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Gradients are CSS images assigned via background-image.',
        'linear-gradient follows an angle; radial-gradient expands from a point; conic-gradient rotates around an axis.',
        'Hard color stops (e.g. #f97316 30%, #27272a 30%) create sharp stripe boundaries without blurring.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Two-Color Diagonal Gradient',
      task: 'Create a background linear gradient that flows from coral (#f97316) to dark rose (#be123c) at a 45-degree angle.',
      hint: 'linear-gradient(45deg, #f97316, #be123c);',
    },
  ],
  quiz: [
    {
      question: 'Which CSS property is technically used to apply a gradient?',
      options: ['color', 'background-image (or background shorthand)', 'gradient-type', 'border-color'],
      correctAnswer: 1,
      explanation: 'Gradients are procedural images and must be applied via background-image (or the background shorthand).',
    },
    {
      question: 'Which gradient function rotates colors around a central 360-degree pivot like a pie chart?',
      options: ['linear-gradient()', 'radial-gradient()', 'conic-gradient()', 'circular-gradient()'],
      correctAnswer: 2,
      explanation: 'conic-gradient transitions colors around a center point along a rotational arc.',
    },
    {
      question: 'How do you create a sharp color boundary (no smooth blur) between two gradient color stops?',
      options: [
        'Use the sharp: true keyword',
        'Place two color stops at the exact same percentage (e.g. red 50%, blue 50%)',
        'Gradients always blur',
        'Use filter: sharp()',
      ],
      correctAnswer: 1,
      explanation: 'When two colors share the same transition position, the interpolation distance is 0, creating a razor-sharp line.',
    },
  ],
};
