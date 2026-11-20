export const cssAtRulesReferenceLesson = {
  slug: 'css-at-rules-reference',
  number: '49',
  title: 'CSS At-Rules Reference',
  category: 'CSS At-Rules Reference',
  subtitle: 'Comprehensive reference for @media, @supports, @keyframes, @layer, @scope, @container, and @property',
  badge: 'Reference',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: The Directives of CSS',
      type: 'text',
      lead: 'At-rules (statements beginning with the @ symbol) provide metadata, instructions, and conditional logic to the CSS engine.',
      paragraphs: [
        'From conditional media queries and cascade layers to font declarations and Houdini property registration, at-rules control how stylesheets are loaded, scoped, and executed.',
      ],
    },
    {
      id: 'at-rules-directory',
      title: 'Standardized CSS At-Rules Directory',
      type: 'table',
      table: {
        caption: 'Master Directory of CSS At-Rules',
        headers: ['At-Rule', 'Category', 'Description & Syntax Purpose'],
        rows: [
          ['@media', 'Conditional', 'Applies styles based on device characteristics (width, dark mode, resolution).'],
          ['@supports', 'Conditional', 'Feature query: tests browser support for a CSS property/value pair (e.g. @supports (display: grid)).'],
          ['@container', 'Conditional', 'Applies styles based on container size and style queries.'],
          ['@keyframes', 'Animation', 'Defines the multi-stage keyframe steps of a CSS animation.'],
          ['@layer', 'Cascade', 'Declares cascade layers and manages specificity priority.'],
          ['@scope', 'Scoping', 'Scopes rules to a specific DOM subtree with optional lower boundary ("donut scope").'],
          ['@property', 'Houdini API', 'Registers a custom property with defined syntax type, inheritance flag, and initial value.'],
          ['@font-face', 'Resource', 'Downloads and configures custom web fonts (WOFF2).'],
          ['@starting-style', 'Transitions', 'Defines initial styles for animating elements entering the DOM (e.g. popovers, dialogs).'],
          ['@page', 'Print', 'Configures margins, page size, and orientation for printed documents.'],
          ['@import', 'Resource', 'Imports external stylesheets into the current stylesheet (avoid in production for performance).'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Modern At-Rules in Action: @supports & @property',
      type: 'code-example',
      codeTitle: 'at-rules.css',
      codeLang: 'css',
      code: `/* 1. Feature Query: Graceful progressive enhancement */
@supports (display: subgrid) {
  .card-deck {
    grid-template-rows: subgrid;
  }
}

/* 2. Houdini Typed Custom Property */
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

/* Can now animate gradients smoothly! */
@keyframes spinGradient {
  to {
    --gradient-angle: 360deg;
  }
}`,
      demo: {
        title: 'Feature Detection Output',
        html: `<div style="font-family: sans-serif; padding: 14px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 10px;">
  <span style="font-size: 11px; font-weight: bold; color: #ea580c;">@supports (display: grid) Evaluated: True</span>
  <p style="margin: 4px 0 0; font-size: 13px; color: #7c2d12;">Browser conditionally confirms native feature support.</p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'At-rules govern conditional logic (@media, @supports, @container).',
        '@property enables animating previously un-animatable properties like gradients.',
        '@starting-style allows smooth entrance animations for modals and dialogs.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Feature Query Fallback',
      task: 'Write an @supports rule that applies display: flex to a fallback container only if display: grid is NOT supported.',
      hint: '@supports not (display: grid) { ... }',
    },
  ],
  quiz: [
    {
      question: 'Which at-rule is used for feature detection in CSS?',
      options: ['@detect', '@supports', '@feature', '@has'],
      correctAnswer: 1,
      explanation: '@supports tests whether the browser supports specific CSS property-value pairs.',
    },
    {
      question: 'What is the role of "@property" in modern CSS?',
      options: [
        'Registers a custom property with a defined type (<angle>, <color>), enabling smooth CSS transitions on variables',
        'Declares class names',
        'Deletes CSS properties',
        'Sets media query ranges',
      ],
      correctAnswer: 0,
      explanation: '@property gives CSS Custom Properties semantic types, making them interpolatable in keyframe animations.',
    },
    {
      question: 'Which modern at-rule defines styles for an element when it is first inserted into the DOM, enabling smooth entry transitions?',
      options: ['@keyframes', '@starting-style', '@first-paint', '@enter'],
      correctAnswer: 1,
      explanation: '@starting-style specifies the initial state from which an element transitions when entering display: block from display: none.',
    },
  ],
};
