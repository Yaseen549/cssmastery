export const pseudoElementsBeforeAfterLesson = {
  slug: 'pseudo-elements-before-after',
  number: '42',
  title: 'Pseudo-Elements (::before & ::after)',
  category: 'Pseudo-Classes & Pseudo-Elements',
  subtitle: 'Generating cosmetic DOM content, custom quotation marks, badges, and decorative accents',
  badge: 'Core',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Virtual Elements in CSS',
      type: 'text',
      lead: 'Pseudo-elements (written with a double colon ::) allow you to style specific sub-parts of an element or inject virtual DOM content without adding extra HTML tags.',
      paragraphs: [
        '::before and ::after insert cosmetic inline-level boxes as the first and last child of the targeted element. They are widely used for icons, decorative accents, quotation marks, and tooltip triangles.',
      ],
    },
    {
      id: 'content-requirement',
      title: 'The Mandatory content Property',
      type: 'syntax',
      syntax: 'element::before {\n  content: ""; /* MANDATORY! */\n  display: block;\n}',
      syntaxNote: 'A pseudo-element will NOT render unless the content property is explicitly declared, even if it is just an empty string ("")!',
    },
    {
      id: 'code-example',
      title: 'Tooltip Pointer & External Link Icon',
      type: 'code-example',
      codeTitle: 'pseudo-elements.css',
      codeLang: 'css',
      code: `/* 1. External link indicator icon generated purely with CSS */
a[target="_blank"]::after {
  content: " ↗";
  font-size: 0.85em;
  color: #f97316;
  font-weight: bold;
}

/* 2. Decorative quote mark */
blockquote::before {
  content: "“";
  font-size: 3rem;
  line-height: 0;
  vertical-align: -0.4em;
  color: #fed7aa;
  margin-right: 6px;
}`,
      demo: {
        title: 'Generated Content Preview',
        html: `<div style="font-family: sans-serif; padding: 16px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 10px;">
  <blockquote style="margin: 0; font-size: 14px; font-style: italic; color: #7c2d12;">
    <span style="font-size: 24px; color: #f97316; font-weight: bold; vertical-align: -4px;">“</span>
    CSS pseudo-elements let you keep your HTML clean and purely semantic.
  </blockquote>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        '::before and ::after inject virtual child boxes into the DOM.',
        'content: "" is mandatory for them to render.',
        'Use double colons (::) to distinguish pseudo-elements from pseudo-classes (:).',
      ],
    },
  ],
  exercises: [
    {
      title: 'Prepend a Bullet Icon',
      task: 'Write a ::before rule on a .custom-list li that prepends a stylized dash "— " before each item.',
      hint: '.custom-list li::before { content: "— "; color: #f97316; }',
    },
  ],
  quiz: [
    {
      question: 'Which property is strictly MANDATORY for ::before and ::after to render in the browser?',
      options: ['display', 'content', 'position', 'width'],
      correctAnswer: 1,
      explanation: 'Without content: "" (even empty quotes), the pseudo-element is not generated in the DOM.',
    },
    {
      question: 'What is the W3C standard difference in syntax between a pseudo-class and a pseudo-element?',
      options: [
        'Pseudo-classes use a single colon (e.g. :hover); pseudo-elements use a double colon (e.g. ::after)',
        'There is no difference',
        'Pseudo-elements only work in dark mode',
        'Pseudo-classes require quotes',
      ],
      correctAnswer: 0,
      explanation: 'CSS3 formalized the distinction: single colon for pseudo-classes (states) and double colons for pseudo-elements (parts/generated content).',
    },
    {
      question: 'Where is ::before inserted in relation to the targeted element children?',
      options: [
        'Outside and before the opening tag',
        'As the very first child INSIDE the element content box',
        'Behind the background color',
        'After the closing tag',
      ],
      correctAnswer: 1,
      explanation: '::before is rendered as the first child inside the element, directly preceding other content.',
    },
  ],
};
