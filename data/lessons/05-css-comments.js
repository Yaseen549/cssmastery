export const cssCommentsLesson = {
  slug: 'css-comments',
  number: '05',
  title: 'CSS Comments',
  category: 'CSS Fundamentals',
  subtitle: 'Documentation conventions, section banners, bug isolation, and minification stripping',
  badge: 'Beginner',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Semantic Purpose',
      type: 'text',
      lead: 'Comments allow developers to annotate CSS code with explanations, organize large stylesheets into navigable sections, and temporarily disable rules during debugging.',
      paragraphs: [
        'Comments are completely ignored by browser layout engines during CSSOM construction. They have zero impact on visual styling or specificity calculations.',
      ],
    },
    {
      id: 'syntax-and-conventions',
      title: 'Syntax Rules & Professional Formatting',
      type: 'syntax',
      syntax: '/* Single-line or multi-line comment */',
      syntaxNote: 'Comments start with forward-slash asterisk (/*) and terminate with asterisk forward-slash (*/). They can span single lines or multiple lines.',
    },
    {
      id: 'code-example',
      title: 'Comment Patterns in Production',
      type: 'code-example',
      codeTitle: 'documentation.css',
      codeLang: 'css',
      code: `/* ==========================================================================
   # SECTION: BRAND NAVIGATION & HEADER
   ========================================================================== */

/* Main fixed navbar container */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #18181b; /* Dark zinc canvas background */
}

/* 
 * NOTE: z-index is set to 100 to ensure dropdown menus 
 * appear above active map and iframe components.
 */
.nav-dropdown {
  position: absolute;
  z-index: 100;
}`,
      demo: {
        title: 'Commented Code Preview',
        html: `<div style="font-family: system-ui, sans-serif; background: #18181b; color: white; padding: 14px 20px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
  <span style="font-weight: bold; color: #f97316;">CSSMaster</span>
  <span style="font-size: 12px; color: #a1a1aa;">Comments Documented</span>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes',
      type: 'list',
      items: [
        'Using C++ / JavaScript // single line comments: // is invalid in standard CSS and breaks parsing of adjacent rules.',
        'Nesting comments: /* Outer /* Inner */ Break */ is invalid because the first */ terminates the entire comment prematurely.',
        'Shipping unminified verbose comments in production: Modern build tools strip comments during minification to conserve bandwidth.',
      ],
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'Standard CSS supports /* ... */ comments for single and multi-line notes.',
        'Never use // comments in raw CSS.',
        'Build tools strip comments automatically during production minification.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Section Header Practice',
      task: 'Create a multi-line ASCII banner comment marking a "BUTTON STYLES" section in a CSS file.',
      hint: 'Use asterisks to create visual dividers inside /* ... */.',
    },
  ],
  quiz: [
    {
      question: 'Which of the following is the ONLY valid comment syntax in standard vanilla CSS?',
      options: ['// Comment', '<!-- Comment -->', '/* Comment */', '# Comment'],
      correctAnswer: 2,
      explanation: 'Vanilla CSS only recognizes /* ... */ as valid comment syntax.',
    },
    {
      question: 'Can CSS comments be nested inside each other like /* outer /* inner */ */?',
      options: [
        'Yes, any level of nesting is allowed',
        'No, the first */ will close the comment early and trigger syntax errors',
        'Only inside media queries',
        'Only when using CSS variables',
      ],
      correctAnswer: 1,
      explanation: 'The CSS parser terminates a comment at the first occurrence of */, making nested comments invalid.',
    },
    {
      question: 'Do CSS comments affect the final CSSOM specificity calculations of a rule?',
      options: [
        'No, comments are stripped during tokenization and have zero effect',
        'Yes, they add 1 point to specificity',
        'Only if they contain selector names',
        'Only in dark mode',
      ],
      correctAnswer: 0,
      explanation: 'Comments are ignored during tokenization and contribute nothing to specificity or layout.',
    },
  ],
};
