export const cssFunctionsReferenceLesson = {
  slug: 'css-functions-reference',
  number: '50',
  title: 'CSS Functions Reference',
  category: 'CSS Functions Reference',
  subtitle: 'Grouped catalog of math, color, gradient, transform, filter, shape, and counter functions',
  badge: 'Reference',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Functional Engine of CSS',
      type: 'text',
      lead: 'CSS functions are specialized keywords followed by parentheses containing arguments that compute dynamic values for properties.',
      paragraphs: [
        'Functions are used across every area of CSS: calculating responsive layout dimensions, synthesizing colors, projecting 3D transforms, clipping geometric shapes, and retrieving environmental variables.',
      ],
    },
    {
      id: 'functions-catalog',
      title: 'Categorized CSS Functions Catalog',
      type: 'table',
      table: {
        caption: 'Master Catalog of Standard CSS Functions',
        headers: ['Category', 'Functions', 'Primary Purpose'],
        rows: [
          ['Math & Geometry', 'calc(), min(), max(), clamp(), round(), mod(), rem(), abs(), sign()', 'Mathematical calculations, boundary limits, and dynamic scaling.'],
          ['Color Synthesis', 'rgb(), rgba(), hsl(), hsla(), oklch(), oklab(), lch(), lab(), color-mix(), light-dark()', 'Color generation, wide-gamut Display P3, and color blending.'],
          ['Gradients & Images', 'linear-gradient(), radial-gradient(), conic-gradient(), repeating-linear-gradient(), url(), image-set()', 'Procedural image synthesis and responsive background assets.'],
          ['Transforms', 'translate(), translateX(), translateY(), scale(), rotate(), skew(), matrix(), perspective()', '2D and 3D geometric matrix manipulations.'],
          ['Filters & Effects', 'blur(), brightness(), contrast(), drop-shadow(), grayscale(), invert(), opacity(), sepia()', 'Real-time graphic raster manipulation.'],
          ['Shapes & Clipping', 'circle(), ellipse(), polygon(), path(), inset()', 'Custom clipping paths for clip-path and CSS shapes.'],
          ['References & Environment', 'var(), env(), attr(), anchor()', 'Retrieving variables, device safe areas (safe-area-inset-top), and anchor positions.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Multi-Function Modern CSS Demonstration',
      type: 'code-example',
      codeTitle: 'functions-demo.css',
      codeLang: 'css',
      code: `/* Multi-Function Styling: Combining clamp, oklch, and blur */
.hero-banner {
  /* Fluid padding */
  padding: clamp(1rem, 5vw, 4rem);
  
  /* Modern OKLCH color-mix */
  background-color: color-mix(in oklch, oklch(0.68 0.22 45) 85%, white);
  
  /* Filter drop shadow */
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
  
  /* Dynamic safe-area padding for mobile devices with notches */
  padding-top: max(1rem, env(safe-area-inset-top));
}`,
      demo: {
        title: 'Computed Functions Output',
        html: `<div style="font-family: sans-serif; padding: 16px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 12px; text-align: center;">
  <span style="font-size: 11px; font-weight: bold; color: #ea580c;">color-mix() + clamp() + drop-shadow()</span>
  <p style="margin: 6px 0 0; font-size: 13px; color: #7c2d12;">All computed dynamically by the browser engine.</p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'CSS functions calculate values dynamically across layout, color, and motion.',
        'calc(), min(), max(), and clamp() power modern responsive web design.',
        'oklch() and color-mix() provide cutting-edge color capabilities.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Apply Mobile Safe Area',
      task: 'Write a rule that pads a mobile header by 16px or the device notch safe area, whichever is larger.',
      hint: 'padding-top: max(16px, env(safe-area-inset-top));',
    },
  ],
  quiz: [
    {
      question: 'Which CSS function retrieves device environment variables, such as mobile screen notch insets?',
      options: ['calc()', 'var()', 'env()', 'device()'],
      correctAnswer: 2,
      explanation: 'env() accesses browser-provided environment values, such as safe-area-inset-top on iPhones.',
    },
    {
      question: 'Which function allows mixing two colors in a specified color space like OKLCH?',
      options: ['color-blend()', 'color-mix()', 'blend()', 'mix()'],
      correctAnswer: 1,
      explanation: 'color-mix(in oklch, color1, color2) is the standard CSS function.',
    },
    {
      question: 'What is the return value of clamp(20px, 50px, 80px)?',
      options: ['20px', '50px', '80px', '150px'],
      correctAnswer: 1,
      explanation: 'Since 50px is between 20px (min) and 80px (max), clamp returns the preferred value: 50px.',
    },
  ],
};
