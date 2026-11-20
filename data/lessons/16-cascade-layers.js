export const cascadeLayersLesson = {
  slug: 'cascade-layers',
  number: '16',
  title: 'Cascade Layers (@layer)',
  category: 'Cascade, Specificity & Inheritance',
  subtitle: 'Managing CSS architecture, component priorities, and third-party overrides with @layer',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Specificity Solver',
      type: 'text',
      lead: 'Cascade Layers (@layer) is a landmark W3C feature that gives developers explicit control over cascade precedence, completely independent of selector specificity.',
      paragraphs: [
        'Historically, overriding styles from a third-party framework or utility library required creating increasingly convoluted, highly specific selectors (e.g. body #app div.card.is-active).',
        'With @layer, rules defined in a higher layer ALWAYS override rules defined in a lower layer, even if the lower layer uses an ID selector and the higher layer uses a single class!',
      ],
    },
    {
      id: 'layer-order',
      title: 'Layer Order & Precedence Rules',
      type: 'table',
      table: {
        caption: 'Cascade Layers Priority (Normal Declarations)',
        headers: ['Layer Priority', 'Declaration Type', 'Behavior & Precedence'],
        rows: [
          ['1 (Highest)', 'Unlayered Styles', 'Styles written outside of any @layer block ALWAYS win over layered styles.'],
          ['2', 'Last Defined Layer', 'Layers declared later in the @layer order list win over earlier layers.'],
          ['3', 'First Defined Layer', 'Base / reset layers have lowest precedence.'],
          ['Note on !important', 'REVERSED for !important', 'Crucially, for !important declarations, the priority order is COMPLETELY INVERTED (lower layers win)!'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Layer Definition in Architecture',
      type: 'code-example',
      codeTitle: 'layers.css',
      codeLang: 'css',
      code: `/* 1. Establish the layer priority order up front */
@layer reset, base, components, utilities;

/* Base Reset Layer */
@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
}

/* Components Layer */
@layer components {
  /* High specificity ID inside components layer */
  #submit-btn {
    background-color: #3b82f6;
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
  }
}

/* Utilities Layer (Declared LATER in order) */
@layer utilities {
  /* Single class (0,0,1,0) OVERRIDES the ID (#submit-btn) above! */
  .bg-orange {
    background-color: #f97316;
  }
}`,
      demo: {
        title: 'Layer Precedence Winner',
        html: `<div style="font-family: sans-serif; padding: 16px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 12px;">
  <span style="font-size: 11px; font-weight: bold; color: #ea580c;">@layer utilities > @layer components</span>
  <p style="margin: 6px 0 0; font-size: 13px; color: #7c2d12;">
    .bg-orange in utilities layer effortlessly overrides #submit-btn in components layer!
  </p>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Gotchas',
      type: 'list',
      items: [
        'Unlayered styles always win: Any CSS written outside @layer beats all normal layered styles, regardless of layer order.',
        'The !important inversion: An !important declaration in @layer reset beats an !important in @layer utilities. This ensures user-agent accessibility resets cannot be hijacked.',
      ],
      callout: {
        type: 'important',
        title: 'Universal Browser Support',
        content: '@layer is fully supported across all modern web browsers since early 2022 (Chrome, Firefox, Safari, Edge).',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        '@layer decouples cascade priority from selector specificity.',
        'Define layer order at the top of your stylesheet: @layer reset, base, components, overrides;',
        'Higher layers win over lower layers, eliminating specificity wars.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Establish 3 Layers',
      task: 'Declare three layers named "reset", "framework", and "custom", ensuring "custom" has highest precedence.',
      hint: '@layer reset, framework, custom;',
    },
  ],
  quiz: [
    {
      question: 'In "@layer base, components, utilities;", which layer has the highest precedence for normal CSS declarations?',
      options: ['base', 'components', 'utilities', 'All have equal precedence'],
      correctAnswer: 2,
      explanation: 'For normal declarations, layers declared later in the order list take precedence over earlier layers.',
    },
    {
      question: 'What happens when a single class in a higher layer conflicts with an ID in a lower layer?',
      options: [
        'The ID wins because of specificity',
        'The higher layer wins, completely ignoring the lower layer specificity',
        'The browser drops both declarations',
        'They are merged',
      ],
      correctAnswer: 1,
      explanation: 'Cascade Layer order takes precedence BEFORE selector specificity is evaluated. The higher layer wins.',
    },
    {
      question: 'Where do unlayered CSS rules (written outside any @layer) rank compared to layered rules?',
      options: [
        'Unlayered rules have lowest priority',
        'Unlayered rules have higher priority than all normal layered rules',
        'Unlayered rules are ignored',
        'They have identical priority',
      ],
      correctAnswer: 1,
      explanation: 'Styles outside of any @layer block always take precedence over normal layered styles.',
    },
  ],
};
