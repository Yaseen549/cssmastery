export const webTypographyAndFontFaceLesson = {
  slug: 'web-typography-and-font-face',
  number: '26',
  title: 'Web Typography & @font-face',
  category: 'Typography & Web Fonts',
  subtitle: 'System font stacks, custom web font loading, font-display: swap, and variable fonts',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Voice of the Interface',
      type: 'text',
      lead: 'Typography accounts for more than 90% of information consumption on the web. Mastering font stacks, custom @font-face loading, and font rendering is essential for high-performance design.',
      paragraphs: [
        'Loading custom fonts improperly can cause jarring flashes of invisible text (FOIT) or unstyled text (FOUT), damaging user experience and Core Web Vitals (CLS). Modern CSS provides deep control over font loading and variable font axes.',
      ],
    },
    {
      id: 'font-face-syntax',
      title: 'The @font-face At-Rule',
      type: 'syntax',
      syntax: '@font-face {\n  font-family: "CustomFont";\n  src: url("font.woff2") format("woff2");\n  font-display: swap;\n}',
      syntaxNote: 'WOFF2 (Web Open Font Format 2.0) is the modern gold standard format offering 30%+ better compression than legacy TTF/OTF.',
    },
    {
      id: 'font-display-table',
      title: 'The font-display Strategy Matrix',
      type: 'table',
      table: {
        caption: 'The 5 font-display Values',
        headers: ['Value', 'Block Period (Hidden)', 'Swap Period (Fallback -> Custom)', 'Best Use Case'],
        rows: [
          ['swap', 'Extremely short (100ms)', 'Infinite (Swaps as soon as custom font loads)', 'Standard body text and articles (Prevents blank screens).'],
          ['block', 'Short (~3 seconds)', 'Infinite', 'Icon fonts or brand logos where fallback text looks broken.'],
          ['fallback', 'Short (100ms)', 'Short (~3s)', 'Non-critical styling where custom font is optional.'],
          ['optional', 'Short (100ms)', 'Zero (Only uses custom font if already cached)', 'Ultra-fast low-bandwidth mobile connections.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'System Font Stack & Variable Font Loading',
      type: 'code-example',
      codeTitle: 'typography.css',
      codeLang: 'css',
      code: `/* Modern Native System UI Font Stack (Zero network request!) */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Custom Variable Font with WOFF2 */
@font-face {
  font-family: "Geist";
  src: url("/fonts/GeistVariable.woff2") format("woff2");
  font-weight: 100 900; /* Continuous variable weight range */
  font-display: swap;
}

/* Consuming Variable Font Weight */
h1 {
  font-family: "Geist", sans-serif;
  font-weight: 750; /* Precision non-standard weights possible! */
  letter-spacing: -0.03em;
}`,
      demo: {
        title: 'Rendered Typographic Hierarchy',
        html: `<div style="font-family: system-ui, sans-serif; padding: 16px; border: 1px solid #e4e4e7; border-radius: 12px; background: white;">
  <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.03em; color: #18181b;">
    System-UI Typographic Heading
  </h2>
  <p style="margin: 8px 0 0; font-size: 13px; line-height: 1.6; color: #52525b;">
    Rendered with native system font smoothing, offering zero layout shift and instantaneous load times.
  </p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Always use WOFF2 format for web font delivery.',
        'Use font-display: swap to prevent Flash of Invisible Text (FOIT).',
        'Variable fonts bundle an entire font family (weights 100-900) into a single file.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Declare a @font-face Rule',
      task: 'Write a @font-face declaration for "Inter" loading "inter.woff2" with font-display: swap.',
      hint: '@font-face { font-family: "Inter"; src: url("inter.woff2") format("woff2"); font-display: swap; }',
    },
  ],
  quiz: [
    {
      question: 'Which modern font file format provides the highest compression efficiency for the web?',
      options: ['TTF', 'OTF', 'WOFF2', 'SVG Font'],
      correctAnswer: 2,
      explanation: 'WOFF2 uses Brotli compression and is supported across 98%+ of all browsers worldwide.',
    },
    {
      question: 'What is the primary benefit of "font-display: swap;"?',
      options: [
        'It changes font color automatically',
        'It displays fallback system text immediately while the custom font downloads, preventing invisible text',
        'It increases font weight',
        'It disables italics',
      ],
      correctAnswer: 1,
      explanation: 'font-display: swap prevents FOIT (Flash of Invisible Text), showing system text until the custom font arrives.',
    },
    {
      question: 'What is a "Variable Font"?',
      options: [
        'A font defined in JavaScript',
        'A single font file that can dynamically vary weight, width, and slant continuously across axes',
        'A font that only works with CSS variables',
        'A random font chosen by the browser',
      ],
      correctAnswer: 1,
      explanation: 'Variable fonts allow a single file to produce infinite weight and slant variations without downloading separate bold, light, and black files.',
    },
  ],
};
