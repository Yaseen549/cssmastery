export const whatIsCssLesson = {
  slug: 'what-is-css',
  number: '01',
  title: 'What is CSS?',
  category: 'CSS Fundamentals',
  subtitle: 'The visual styling language of the open web: architecture, separation of concerns, and the cascade',
  badge: 'Beginner',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Real-World Purpose',
      type: 'text',
      lead: 'Cascading Style Sheets (CSS) is the standard styling language used to describe the visual presentation of documents written in HTML and XML.',
      paragraphs: [
        'Without CSS, the web would be a monotonous sea of plain black text on white backgrounds, standard blue underlined links, and unstyled tabular data. CSS transforms raw semantic markup into modern responsive interfaces, interactive design systems, and animated experiences.',
        'At its architectural core, CSS enforces the principle of "Separation of Concerns": HTML defines content meaning and semantic document hierarchy, while CSS dictates aesthetic presentation, spatial geometry, colors, typography, and responsive adaptability across devices.',
      ],
    },
    {
      id: 'learning-objectives',
      title: 'Learning Objectives',
      type: 'list',
      items: [
        'Understand the role of CSS in the web development triad (HTML, CSS, JavaScript).',
        'Master the fundamental principle of Separation of Concerns.',
        'Learn why CSS is called "Cascading" and how rules interact.',
        'Identify how CSS adapts across viewports (mobile, tablet, desktop, print).',
      ],
    },
    {
      id: 'beginner-explanation',
      title: 'Beginner-Friendly Explanation',
      type: 'text',
      paragraphs: [
        'Think of building a modern house: HTML represents the steel girders, load-bearing concrete walls, and rooms (the structure). JavaScript represents the electrical wiring, plumbing, and smart home sensors that trigger dynamic behaviors (the functionality).',
        'CSS is everything aesthetic and spatial: the paint on the walls, the hardwood flooring, the architectural proportions of the windows, the lighting ambiance, and the interior decor. You cannot build a beautiful living space with structure alone; CSS turns functional structure into an engaging visual environment.',
      ],
      callout: {
        type: 'tip',
        title: 'Core Concept',
        content: 'CSS does not alter the underlying HTML DOM tree. It calculates layout boxes and paints visual pixels onto the screen.',
      },
    },
    {
      id: 'technical-explanation',
      title: 'Technical Architecture: How the Browser Sees CSS',
      type: 'text',
      paragraphs: [
        'CSS is a declarative, rule-based stylesheet language. Rather than executing procedural step-by-step instructions like C or JavaScript, you declare styling rules that match target DOM nodes.',
        'When a browser fetches a webpage, its rendering engine parses HTML into the Document Object Model (DOM) and parses CSS rules into the CSS Object Model (CSSOM). The engine combines these two independent data trees into the Render Tree, computes physical box geometry during Layout (reflow), and converts boxes into visual pixels during Painting and Compositing.',
      ],
    },
    {
      id: 'formal-syntax',
      title: 'Formal Rule Syntax',
      type: 'syntax',
      syntax: 'selector { property: value; }',
      syntaxNote: 'A CSS Rule consists of a Selector pointing to HTML elements, followed by a Declaration Block enclosed in curly braces { } containing property-value pairs separated by semicolons.',
    },
    {
      id: 'property-breakdown',
      title: 'Rule Anatomy Breakdown',
      type: 'table',
      table: {
        caption: 'Anatomy of a CSS Rule',
        headers: ['Component', 'Role in Syntax', 'Example', 'Specification Rule'],
        rows: [
          ['Selector', 'Defines which DOM nodes the rule targets', 'h1, .card, #nav', 'Case-sensitive in class/id, matches element tags.'],
          ['Declaration Block', 'Container for declarations enclosed in braces', '{ ... }', 'Must open with { and terminate with }.'],
          ['Property', 'Visual aspect to be styled', 'color, font-size, margin', 'Standardized CSS identifier followed by a colon :.'],
          ['Value', 'The specific setting or parameter', '#f97316, 2rem, auto', 'Must conform to valid CSS data types (units, colors).'],
          ['Semicolon', 'Delimiter separating declarations', ';', 'Required after every declaration to prevent parsing drops.'],
        ],
      },
    },
    {
      id: 'basic-example',
      title: 'Basic Example: Simple Rule Styling',
      type: 'code-example',
      codeTitle: 'styles.css',
      codeLang: 'css',
      code: `/* Basic CSS Styling Rule */
.hero-card {
  background-color: #fff7ed;
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 24px;
  color: #7c2d12;
  font-family: system-ui, sans-serif;
}`,
      demo: {
        title: 'Styled Hero Card',
        html: `<div style="background-color: #fff7ed; border: 2px solid #f97316; border-radius: 12px; padding: 24px; color: #7c2d12; font-family: system-ui, sans-serif;">
  <h3 style="margin: 0 0 8px; color: #ea580c; font-size: 18px;">CSS In Action</h3>
  <p style="margin: 0; font-size: 14px; line-height: 1.5;">
    This element is transformed from plain text into a styled callout card using simple CSS rules.
  </p>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & Gotchas',
      type: 'list',
      items: [
        'Forgetting the closing semicolon (;): Omitting a semicolon causes the browser to discard the subsequent declaration.',
        'Mismatched curly braces: An unclosed { will cause the browser parser to ignore all succeeding CSS rules in the file.',
        'Spelling mistakes in property names: CSS fail-safes silently ignore unrecognized properties rather than crashing.',
        'Hardcoding fixed pixel widths on mobile layouts without responsive max-width constraints.',
      ],
      callout: {
        type: 'warning',
        title: 'Silent Parsing Hazard',
        content: 'CSS never throws runtime errors in the JavaScript console. If a rule has a typo (e.g. colr: red), the browser silently drops that single property and moves forward.',
      },
    },
    {
      id: 'real-world-applications',
      title: 'Real-World Applications',
      type: 'text',
      paragraphs: [
        'In production web engineering, CSS powers responsive multi-device design, corporate design token systems, dark and light theme architectures, smooth micro-interactions, print styling, and fluid responsive typography.',
      ],
    },
    {
      id: 'browser-compatibility',
      title: 'Browser Compatibility',
      type: 'text',
      paragraphs: [
        'CSS core fundamentals (selectors, colors, box model) have 100% universal support across all web browsers including Chrome, Edge, Safari, Firefox, Opera, and mobile webviews.',
      ],
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'CSS decouples visual appearance from semantic document content (Separation of Concerns).',
        'Rules match DOM elements via selectors and apply property-value pairs inside declaration blocks { }.',
        'CSS is fault-tolerant: invalid declarations are silently ignored without crashing the page.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Inspect Element Exploration',
      task: 'Open Developer Tools (F12 or right-click -> Inspect) on this page. Locate an element in the Elements tab and toggle its background-color in the Styles panel.',
      hint: 'Look for the Styles pane on the right side of DevTools.',
    },
    {
      title: 'Write a Card Declaration',
      task: 'Draft a CSS rule targeting a class .feature-badge with white text, a brand orange background (#f97316), and 8px border-radius.',
      hint: 'Remember to terminate each declaration with a semicolon.',
    },
  ],
  quiz: [
    {
      question: 'What does the acronym CSS officially stand for?',
      options: [
        'Cascading Style Sheets',
        'Creative Style System',
        'Computer Styling Standard',
        'Calculated Sheet Syntax',
      ],
      correctAnswer: 0,
      explanation: 'CSS stands for Cascading Style Sheets, highlighting the core mechanism where multiple stylesheets cascade and resolve conflicts.',
    },
    {
      question: 'What happens when a browser encounters a CSS property with a typo, such as "colr: blue;"?',
      options: [
        'The page crashes with a fatal error',
        'The browser displays an alert box',
        'The browser silently ignores the invalid property and continues parsing',
        'All CSS rules in the entire stylesheet are disabled',
      ],
      correctAnswer: 2,
      explanation: 'CSS is engineered to be resilient and forward-compatible; unrecognized properties are dropped without interrupting valid declarations.',
    },
    {
      question: 'Which principle describes keeping HTML focused on content structure while CSS handles aesthetics?',
      options: [
        'Single Responsibility Object',
        'Separation of Concerns',
        'Progressive Web Rendering',
        'Declarative Binding',
      ],
      correctAnswer: 1,
      explanation: 'Separation of Concerns ensures HTML documents remain semantic, accessible, and easily maintainable independently from presentation styling.',
    },
  ],
};
