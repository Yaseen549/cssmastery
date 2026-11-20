export const scrollDrivenAnimationsLesson = {
  slug: 'scroll-driven-animations',
  number: '41',
  title: 'Scroll-Driven Animations',
  category: 'Transforms, Transitions & Animations',
  subtitle: 'Pure CSS scroll timelines: animation-timeline: scroll() and view() without JavaScript',
  badge: 'Modern',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Native Scroll Motion',
      type: 'text',
      lead: 'Scroll-driven animations link the progress of a CSS animation directly to the scrollbar position of a container or the viewport, without a single line of JavaScript!',
      paragraphs: [
        'Previously, creating reading progress bars or parallax reveals required listening to window scroll events in JavaScript, causing layout thrashing and stutter. CSS Scroll-Driven Animations run entirely on the browser compositor thread.',
      ],
    },
    {
      id: 'scroll-timelines-table',
      title: 'Scroll Timelines: scroll() vs view()',
      type: 'table',
      table: {
        caption: 'Scroll Timeline Modes',
        headers: ['Function', 'Timeline Driver', 'Best Use Case'],
        rows: [
          ['animation-timeline: scroll()', 'Progress is tied to the scroll position of the scroll container from 0% (top) to 100% (bottom).', 'Top-of-page reading progress bars.'],
          ['animation-timeline: view()', 'Progress is tied to when an element enters and exits the viewport scrollport.', 'Fade-in-on-scroll cards, parallax headers.'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Pure CSS Reading Progress Bar',
      type: 'code-example',
      codeTitle: 'scroll-progress.css',
      codeLang: 'css',
      code: `/* 1. Define Scale Keyframes */
@keyframes progressGrow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

/* 2. Top-of-page progress indicator tied to scroll position */
.reading-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #f97316;
  transform-origin: 0% 50%;
  
  /* PURE CSS SCROLL TIMELINE! */
  animation: progressGrow auto linear;
  animation-timeline: scroll();
}`,
      demo: {
        title: 'Scroll Progress Simulation',
        html: `<div style="font-family: sans-serif; padding: 14px; border: 1px solid #fed7aa; background: #fff7ed; border-radius: 10px;">
  <span style="font-size: 11px; font-weight: bold; color: #ea580c;">animation-timeline: scroll() Active</span>
  <div style="height: 4px; background: #ea580c; border-radius: 2px; margin-top: 8px; width: 60%;"></div>
  <p style="margin: 6px 0 0; font-size: 12px; color: #7c2d12;">Simulated reading bar tied to scroll position.</p>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        'animation-timeline: scroll() drives animation by document scroll offset.',
        'animation-timeline: view() triggers animation as elements cross the viewport.',
        'Runs natively on the GPU compositor without JavaScript event listeners.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Reading Progress Bar',
      task: 'Declare an animation that scales a progress bar from 0 to 1 tied to animation-timeline: scroll().',
      hint: 'animation: progress linear; animation-timeline: scroll();',
    },
  ],
  quiz: [
    {
      question: 'What drives the progress of an animation when "animation-timeline: scroll();" is declared?',
      options: [
        'A fixed timer',
        'The physical scroll position of the scroll container',
        'User mouse clicks',
        'JavaScript intervals',
      ],
      correctAnswer: 1,
      explanation: 'animation-timeline: scroll() maps the animation progress directly to the scroll distance.',
    },
    {
      question: 'Why are CSS scroll-driven animations more performant than JavaScript scroll listeners?',
      options: [
        'They execute on the browser compositor thread off the main JavaScript thread',
        'They use less memory',
        'They do not require HTML',
        'They only work in Chrome',
      ],
      correctAnswer: 0,
      explanation: 'Compromising main-thread JavaScript is avoided because the browser compositor handles the timeline updates natively.',
    },
    {
      question: 'What is the purpose of "animation-timeline: view()"?',
      options: [
        'To animate elements as they enter and cross the visible viewport area',
        'To change zoom levels',
        'To detect screen orientation',
        'To rotate 3D elements',
      ],
      correctAnswer: 0,
      explanation: 'view() establishes a timeline based on the subject visibility inside the scroll container viewport.',
    },
  ],
};
