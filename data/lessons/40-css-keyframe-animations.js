export const cssKeyframeAnimationsLesson = {
  slug: 'css-keyframe-animations',
  number: '40',
  title: 'Keyframe Animations (@keyframes)',
  category: 'Transforms, Transitions & Animations',
  subtitle: 'Multi-stage CSS animations, animation-fill-mode, iteration counts, and performance optimization',
  badge: 'Intermediate',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction: Autonomous Multi-Stage Motion',
      type: 'text',
      lead: 'While transitions require a trigger (like :hover) to animate between two states, Keyframe Animations (@keyframes) run autonomously and can cycle through infinite intermediate stages.',
      paragraphs: [
        'With @keyframes, you control percentage waypoints (0% to 100%), directional loops, spin cycles, pulse effects, and continuous background motion without external animation libraries.',
      ],
    },
    {
      id: 'animation-properties-table',
      title: 'The Core Animation Sub-Properties',
      type: 'table',
      table: {
        caption: 'CSS Animation Properties',
        headers: ['Property', 'Function', 'Common Values'],
        rows: [
          ['@keyframes', 'Defines the timeline stages and keyframe percentages.', '@keyframes pulse { 0% {...} 100% {...} }'],
          ['animation-name', 'Binds an element to a specific @keyframes timeline.', 'pulse, spin, fadeIn'],
          ['animation-duration', 'Total time for one complete cycle.', '1s, 2.5s, 500ms'],
          ['animation-iteration-count', 'How many times the animation plays.', '1, 3, infinite'],
          ['animation-fill-mode', 'Whether styles apply before/after playback.', 'none, forwards, backwards, both'],
          ['animation-direction', 'Playback direction.', 'normal, reverse, alternate, alternate-reverse'],
        ],
      },
    },
    {
      id: 'code-example',
      title: 'Continuous Pulsing Glow Button',
      type: 'code-example',
      codeTitle: 'keyframes.css',
      codeLang: 'css',
      code: `/* 1. Define Keyframe Timeline */
@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
  }
  70% {
    transform: scale(1.03);
    box-shadow: 0 0 0 16px rgba(249, 115, 22, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(249, 115, 22, 0);
  }
}

/* 2. Apply animation to badge */
.live-pulse-badge {
  animation: pulseGlow 2s infinite ease-in-out;
  background-color: #f97316;
  color: white;
  padding: 8px 16px;
  border-radius: 9999px;
  display: inline-block;
  font-weight: bold;
}`,
      demo: {
        title: 'Keyframe Pulse Demo',
        html: `<div style="display: flex; justify-content: center; padding: 20px;">
  <div style="background: #f97316; color: white; padding: 8px 18px; border-radius: 9999px; font-size: 12px; font-weight: bold; box-shadow: 0 0 0 4px rgba(249,115,22,0.3); font-family: sans-serif;">
    ⚡ LIVE PULSE KEYFRAME
  </div>
</div>`,
      },
    },
    {
      id: 'summary',
      title: 'Key Takeaways & Summary',
      type: 'list',
      items: [
        '@keyframes defines percentages (0%, 50%, 100%) for animation stages.',
        'animation-fill-mode: forwards keeps the final styling state when animation completes.',
        'Honor prefers-reduced-motion to protect users sensitive to screen motion.',
      ],
    },
  ],
  exercises: [
    {
      title: 'Infinite Spinner',
      task: 'Write a @keyframes spin animation that rotates an icon from 0deg to 360deg infinitely over 1 second with a linear timing function.',
      hint: '@keyframes spin { to { transform: rotate(360deg); } } animation: spin 1s linear infinite;',
    },
  ],
  quiz: [
    {
      question: 'Which animation-fill-mode value ensures an element retains the styles calculated at the LAST keyframe when the animation finishes?',
      options: ['backwards', 'forwards', 'infinite', 'retain'],
      correctAnswer: 1,
      explanation: 'animation-fill-mode: forwards keeps the final keyframe styles applied after playback finishes.',
    },
    {
      question: 'How do you make an animation repeat indefinitely without stopping?',
      options: [
        'animation-iteration-count: infinite;',
        'animation-loop: true;',
        'repeat: always;',
        'duration: max;',
      ],
      correctAnswer: 0,
      explanation: 'animation-iteration-count: infinite commands the browser to loop the keyframes indefinitely.',
    },
    {
      question: 'What are the shorthand keywords equivalent to "0%" and "100%" in a @keyframes block?',
      options: ['start and end', 'from and to', 'first and last', 'open and close'],
      correctAnswer: 1,
      explanation: 'In CSS keyframes, "from" is an alias for 0% and "to" is an alias for 100%.',
    },
  ],
};
