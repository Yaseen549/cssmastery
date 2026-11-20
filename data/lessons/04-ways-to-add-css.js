export const waysToAddCssLesson = {
  slug: 'ways-to-add-css',
  number: '04',
  title: 'Ways to Add CSS',
  category: 'CSS Fundamentals',
  subtitle: 'External stylesheets, internal <style> tags, inline style attributes, and @import statements',
  badge: 'Beginner',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Integration Options',
      type: 'text',
      lead: 'There are three standard methods to attach CSS to an HTML document: External Stylesheets, Internal Style Blocks, and Inline Styles.',
      paragraphs: [
        'Each method serves a specific architectural role. Choosing the correct approach directly impacts page load performance, caching efficiency, maintainability, and code reusability across large web applications.',
      ],
    },
    {
      id: 'methods-comparison',
      title: 'Comparison of the 3 Integration Methods',
      type: 'table',
      table: {
        caption: 'Comparison of CSS Attachment Strategies',
        headers: ['Method', 'HTML Placement', 'Reusability', 'Caching & Performance', 'Best Use Case'],
        rows: [
          ['External Stylesheet', '<link rel="stylesheet"> in <head>', 'Site-wide across all pages', 'Cached by browser; fastest repeat visits', 'Production sites, design systems, application layouts.'],
          ['Internal Styles', '<style> block in <head>', 'Single HTML page only', 'Parsed on every page load; cannot be cached alone', 'Landing pages, email templates, critical above-the-fold CSS.'],
          ['Inline Styles', 'style="..." attribute on element', 'Single element only', 'Zero reuse; bloats HTML size', 'Dynamic JS positioning, email HTML, quick debugging.'],
        ],
      },
    },
    {
      id: 'code-examples',
      title: 'Syntax Demonstrations',
      type: 'code-example',
      codeTitle: 'index.html',
      codeLang: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Adding CSS Example</title>
  
  <!-- 1. External Stylesheet (Recommended) -->
  <link rel="stylesheet" href="styles.css">

  <!-- 2. Internal Stylesheet -->
  <style>
    .page-title {
      font-size: 24px;
      color: #ea580c;
    }
  </style>
</head>
<body>
  <h1 class="page-title">Page Header</h1>
  
  <!-- 3. Inline Style (Specific element override) -->
  <p style="color: #4b5563; font-weight: 500;">
    Inline styles have highest specificity but poor maintainability.
  </p>
</body>
</html>`,
      demo: {
        title: 'Rendered Multi-Method Page',
        html: `<div style="font-family: system-ui, sans-serif; padding: 16px; border: 1px solid #e4e4e7; border-radius: 12px; background: white;">
  <h3 style="margin: 0; font-size: 20px; color: #ea580c;">Page Header</h3>
  <p style="margin: 6px 0 0; color: #4b5563; font-weight: 500; font-size: 13px;">
    Styling resolved across external, internal, and inline declarations.
  </p>
</div>`,
      },
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & @import Warnings',
      type: 'list',
      items: [
        'Using @import inside CSS files: @import url("other.css") creates sequential network request waterfalls, blocking parallel stylesheet downloads.',
        'Overusing inline styles: Inline styles override external stylesheets with high specificity (1,0,0,0), making responsive design nearly impossible.',
        'Placing <link rel="stylesheet"> at the bottom of <body>: Causes Flash of Unstyled Content (FOUC). Always place in <head>.',
      ],
      callout: {
        type: 'warning',
        title: 'Avoid @import in Production',
        content: 'Using @import in stylesheets forces the browser to download files one after another instead of downloading in parallel. Use multiple <link> tags in <head> instead.',
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'External stylesheets via <link> are the gold standard for production web applications.',
        'Internal <style> tags are ideal for critical CSS or single-page prototypes.',
        'Inline styles should be reserved for dynamic, JavaScript-calculated values.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Link an External Stylesheet',
      task: 'Write the exact <link> tag required to connect an external stylesheet located at "css/app.css" inside the document <head>.',
      hint: '<link rel="stylesheet" href="...">',
    },
  ],
  quiz: [
    {
      question: 'Why are external stylesheets via <link> preferred for production web applications?',
      options: [
        'They execute faster than internal styles',
        'They are cached by browsers across multiple pages, reducing download times',
        'They require zero HTML tags',
        'They bypass CSS cascade specificity rules',
      ],
      correctAnswer: 1,
      explanation: 'Browsers cache external .css files on the user machine, meaning subsequent page views load instantly without re-downloading styling code.',
    },
    {
      question: 'Where should <link rel="stylesheet"> tags be placed in an HTML document to prevent Flash of Unstyled Content (FOUC)?',
      options: ['At the very end of <body>', 'Directly inside <head>', 'Inside <footer>', 'Before <!DOCTYPE html>'],
      correctAnswer: 1,
      explanation: 'Placing stylesheets in <head> ensures the browser parses rules before drawing pixels, preventing unstyled text flashes.',
    },
    {
      question: 'What is the primary drawback of using @import url(...) inside a CSS file?',
      options: [
        'It is not supported in modern browsers',
        'It creates sequential network request waterfalls that delay page rendering',
        'It ignores class selectors',
        'It converts CSS to JavaScript',
      ],
      correctAnswer: 1,
      explanation: '@import prevents parallel downloads, forcing the browser to wait for the parent CSS before discovering and requesting the child file.',
    },
  ],
};
