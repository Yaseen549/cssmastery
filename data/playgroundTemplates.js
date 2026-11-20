// 10 Standardized HTML + CSS Starter Templates for the CSS Playground
// Dedicated 100% HTML & CSS Environment — Zero JavaScript

export const PLAYGROUND_TEMPLATES = {
  'hello-world': {
    id: 'hello-world',
    title: 'Hello World Card',
    description: 'A clean card with a title, text, and buttons.',
    difficulty: 'Beginner',
    html: `<main class="container">
  <div class="card">
    <div class="badge">CSSMaster 3.0</div>
    <h1>Hello, Cascading Style Sheets!</h1>
    <p>Welcome to the isolated CSS Playground. Edit styles in real-time and observe instant visual feedback.</p>
    <div class="actions">
      <button class="btn btn-primary">Primary Action</button>
      <button class="btn btn-secondary">Secondary Link</button>
    </div>
  </div>
</main>`,
    css: `/* Define Design Tokens */
:root {
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --surface-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
  --shadow-elevation: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #f8fafc;
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.container {
  width: 100%;
  max-width: 520px;
}

.card {
  background: var(--surface-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 36px;
  box-shadow: var(--shadow-elevation);
  text-align: center;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  background-color: #eff6ff;
  color: var(--primary-color);
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

h1 {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 12px;
  line-height: 1.25;
}

p {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background-color: #f1f5f9;
}`,
    expectedResult: 'A clean, centered card with blue badges, modern typography, and hover elevations.',
  },

  'profile-card': {
    id: 'profile-card',
    title: 'Profile Card',
    description: 'A personal profile card with an avatar and stats.',
    difficulty: 'Beginner',
    html: `<div class="profile-card">
  <div class="banner"></div>
  <div class="avatar-wrapper">
    <div class="avatar">YW</div>
  </div>
  <div class="profile-body">
    <h2>Yaseen Wolf</h2>
    <p class="role">Senior Systems & Frontend Architect</p>
    <p class="bio">Passionate about clean cascade systems, browser performance, and zero-runtime tooling.</p>
    
    <div class="tags">
      <span class="tag">CSS3</span>
      <span class="tag">HTML5</span>
      <span class="tag">Subgrid</span>
      <span class="tag">OKLCH</span>
    </div>

    <div class="stats">
      <div class="stat-item">
        <span class="stat-number">50</span>
        <span class="stat-label">Lessons</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">100%</span>
        <span class="stat-label">Coverage</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">0</span>
        <span class="stat-label">Placeholders</span>
      </div>
    </div>

    <button class="follow-btn">Connect & Collaborate</button>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #0b1120;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.profile-card {
  width: 100%;
  max-width: 360px;
  background: #111827;
  border: 1px solid #1e293b;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  color: #f8fafc;
}

.banner {
  height: 90px;
  background: linear-gradient(135deg, #2563eb, #06b6d4);
}

.avatar-wrapper {
  display: flex;
  justify-content: center;
  margin-top: -45px;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #1e293b;
  border: 4px solid #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 800;
  color: #38bdf8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.profile-body {
  padding: 20px 24px 28px;
  text-align: center;
}

h2 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.role {
  color: #60a5fa;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 12px;
}

.bio {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 18px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-bottom: 20px;
}

.tag {
  background: #1e293b;
  color: #93c5fd;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid #334155;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid #1e293b;
  border-bottom: 1px solid #1e293b;
  margin-bottom: 20px;
}

.stat-number {
  display: block;
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
}

.stat-label {
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
}

.follow-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
}

.follow-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}`,
    expectedResult: 'A modern dark-mode profile card with avatar overlap and grid statistics.',
  },

  'responsive-nav': {
    id: 'responsive-nav',
    title: 'Navigation Bar',
    description: 'A responsive header with a logo and menu links.',
    difficulty: 'Intermediate',
    html: `<header class="site-header">
  <div class="logo">
    <div class="logo-mark">CSS</div>
    <span class="logo-text">LearningHub</span>
  </div>

  <nav class="nav-menu">
    <a href="#" class="nav-item active">Curriculum</a>
    <a href="#" class="nav-item">Visualizers</a>
    <a href="#" class="nav-item">Playground</a>
    <a href="#" class="nav-item">Reference</a>
  </nav>

  <div class="header-actions">
    <button class="btn-ghost">Sign In</button>
    <button class="btn-primary">Explore All</button>
  </div>
</header>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #f8fafc;
  padding: 24px;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 14px 28px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-mark {
  background: #2563eb;
  color: white;
  font-weight: 900;
  font-size: 12px;
  padding: 5px 8px;
  border-radius: 8px;
}

.logo-text {
  font-weight: 800;
  font-size: 16px;
  color: #0f172a;
}

.nav-menu {
  display: flex;
  gap: 8px;
}

.nav-item {
  color: #475569;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 0.15s ease;
}

.nav-item:hover {
  color: #2563eb;
  background: #eff6ff;
}

.nav-item.active {
  color: #2563eb;
  background: #eff6ff;
  font-weight: 700;
}

.header-actions {
  display: flex;
  gap: 8px;
}

button {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}

.btn-ghost {
  background: transparent;
  color: #475569;
}

.btn-ghost:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.btn-primary {
  background: #2563eb;
  color: white;
}

.btn-primary:hover {
  background: #1d4ed8;
}`,
    expectedResult: 'A clean horizontal navigation bar with logo, active link states, and CTA buttons.',
  },

  'flexbox-layout': {
    id: 'flexbox-layout',
    title: 'Flexbox Cards',
    description: 'Three cards arranged side-by-side that wrap neatly.',
    difficulty: 'Intermediate',
    html: `<div class="dashboard">
  <div class="card flex-grow-2">
    <h3>Primary Overview</h3>
    <p>This flex child expands twice as fast as its sibling cards due to flex-grow: 2.</p>
    <div class="metric">$128,400</div>
  </div>
  <div class="card">
    <h3>Active Sessions</h3>
    <p>Standard 1fr proportional track growth.</p>
    <div class="metric">4,920</div>
  </div>
  <div class="card">
    <h3>Performance</h3>
    <p>Sub-millisecond compositor rendering.</p>
    <div class="metric">99.8%</div>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  padding: 30px;
}

.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  flex: 1 1 240px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  transition: border-color 0.2s ease;
}

.card:hover {
  border-color: #3b82f6;
}

.flex-grow-2 {
  flex-grow: 2;
  background: linear-gradient(145deg, #1e293b, #172554);
}

h3 {
  font-size: 16px;
  font-weight: 700;
  color: #93c5fd;
}

p {
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.5;
}

.metric {
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
}`,
    expectedResult: 'Multi-card responsive flex container demonstrating proportional growth.',
  },

  'css-grid-layout': {
    id: 'css-grid-layout',
    title: 'CSS Grid Layout',
    description: 'A responsive card grid that adjusts automatically.',
    difficulty: 'Beginner',
    html: `<div class="grid-container">
  <article class="grid-card">
    <span class="pill">Module 1</span>
    <h4>Specificity Formula</h4>
    <p>Understand the 4-tier tuple (inline, ID, class, element) that determines cascade victory.</p>
  </article>
  <article class="grid-card">
    <span class="pill">Module 2</span>
    <h4>Box Model Dynamics</h4>
    <p>Master margin collapsing, border-box dimensions, and overflow clipping contexts.</p>
  </article>
  <article class="grid-card">
    <span class="pill">Module 3</span>
    <h4>CSS Subgrid</h4>
    <p>Align nested descendants directly to ancestral row and column definitions.</p>
  </article>
  <article class="grid-card">
    <span class="pill">Module 4</span>
    <h4>OKLCH Color Space</h4>
    <p>Design in perceptually uniform color channels that prevent hue shifts in dark gradients.</p>
  </article>
</div>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f8fafc;
  padding: 32px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 960px;
  margin: 0 auto;
}

.grid-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.grid-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -5px rgba(37, 99, 235, 0.1);
  border-color: #93c5fd;
}

.pill {
  align-self: flex-start;
  background: #eff6ff;
  color: #2563eb;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
}

h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}

p {
  font-size: 13px;
  line-height: 1.6;
  color: #64748b;
}`,
    expectedResult: 'Fluid auto-fitting grid cards that wrap gracefully across viewports.',
  },

  'landing-page': {
    id: 'landing-page',
    title: 'Landing Page Hero',
    description: 'A hero section with a headline, buttons, and card.',
    difficulty: 'Intermediate',
    html: `<section class="hero-section">
  <div class="glow-orb"></div>
  <div class="content">
    <div class="status-badge">Next-Gen CSS Platform</div>
    <h1>Master The Cascade With Absolute Precision</h1>
    <p>From core selector mathematics to bleeding-edge container queries and subgrid, build professional web layouts with confidence.</p>
    <div class="cta-row">
      <button class="btn-main">Start Curriculum Free</button>
      <button class="btn-outline">Browse 50 Topics</button>
    </div>
  </div>
</section>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #0b1120;
  color: #f8fafc;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow: hidden;
}

.hero-section {
  position: relative;
  max-width: 720px;
  text-align: center;
  padding: 60px 20px;
}

.glow-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(6, 182, 212, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
}

.status-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #60a5fa;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 24px;
}

h1 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 40%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 18px;
}

p {
  font-size: 16px;
  color: #94a3b8;
  line-height: 1.6;
  max-width: 580px;
  margin: 0 auto 32px;
}

.cta-row {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 14px 28px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}

.btn-main {
  background: #2563eb;
  color: white;
  box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.5);
}

.btn-main:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #e2e8f0;
  border: 1px solid #334155;
}

.btn-outline:hover {
  background: #1e293b;
}`,
    expectedResult: 'A modern SaaS hero layout with text gradients and ambient radial glows.',
  },

  'css-animations': {
    id: 'css-animations',
    title: 'Button Animation',
    description: 'A button with a smooth glowing hover effect.',
    difficulty: 'Beginner',
    html: `<div class="animation-stage">
  <div class="pulse-ring"></div>
  <div class="pulse-ring delay-1"></div>
  <div class="central-core">
    <div class="core-icon">&#9889;</div>
    <div class="core-text">Compiling Cascade</div>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #0f172a;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, sans-serif;
  overflow: hidden;
}

.animation-stage {
  position: relative;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.central-core {
  position: relative;
  z-index: 10;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #06b6d4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 35px rgba(37, 99, 235, 0.6);
  animation: float 3s ease-in-out infinite alternate;
}

.core-icon {
  font-size: 32px;
}

.core-text {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 4px;
}

.pulse-ring {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid #38bdf8;
  animation: ripple 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.delay-1 {
  animation-delay: 1.2s;
}

@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

@keyframes float {
  from {
    transform: translateY(-6px);
  }
  to {
    transform: translateY(6px);
  }
}`,
    expectedResult: 'Expanding ripple wave keyframe animations with floating core element.',
  },

  'gradient-generator': {
    id: 'gradient-generator',
    title: 'Color Gradients',
    description: 'Cards styled with smooth multi-color gradients.',
    difficulty: 'Beginner',
    html: `<div class="canvas-wrap">
  <div class="mesh-card">
    <div class="glass-plate">
      <h2>CSS Color Synthesis</h2>
      <p>Multi-layered linear, radial, and conic gradients blended with backdrop filters.</p>
      <div class="chip">OKLCH Palette Blend</div>
    </div>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #0b1120;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.canvas-wrap {
  width: 100%;
  max-width: 460px;
}

.mesh-card {
  position: relative;
  height: 280px;
  border-radius: 28px;
  background: 
    radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.9) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.8) 0%, transparent 40%),
    linear-gradient(135deg, #1e1b4b 0%, #030712 100%);
  padding: 24px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-plate {
  width: 100%;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 20px;
  color: white;
}

h2 {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;
}

p {
  font-size: 13px;
  color: #cbd5e1;
  line-height: 1.5;
  margin-bottom: 12px;
}

.chip {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: #67e8f9;
  background: rgba(6, 182, 212, 0.15);
  padding: 3px 10px;
  border-radius: 9999px;
}`,
    expectedResult: 'Multi-layer radial background with glassmorphic foreground plate.',
  },

  'form-styling': {
    id: 'form-styling',
    title: 'Clean Form Inputs',
    description: 'A signup form with neat inputs and styled buttons.',
    difficulty: 'Beginner',
    html: `<form class="styled-form">
  <h2>Account Registration</h2>
  
  <div class="field">
    <label for="name">Full Name</label>
    <input type="text" id="name" placeholder="John Doe" required />
  </div>

  <div class="field">
    <label for="email">Work Email</label>
    <input type="email" id="email" placeholder="developer@example.com" required />
  </div>

  <div class="checkbox-row">
    <input type="checkbox" id="terms" checked />
    <label for="terms">I agree to standard CSS standards and WCAG compliance</label>
  </div>

  <button type="button" class="submit-btn">Create Developer Account</button>
</form>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f8fafc;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.styled-form {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 24px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}

label {
  font-size: 13px;
  font-weight: 600;
  color: #334155;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: #f8fafc;
  color: #0f172a;
  transition: all 0.15s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #2563eb;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 24px;
}

input[type="checkbox"] {
  accent-color: #2563eb;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.checkbox-row label {
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease;
}

.submit-btn:hover {
  background: #1d4ed8;
}`,
    expectedResult: 'Clean, accessible form inputs with responsive focus rings and custom checkboxes.',
  },

  'css-interactive-accordion': {
    id: 'css-interactive-accordion',
    title: 'Accordion FAQ',
    description: 'Expandable FAQ sections styled with clean CSS.',
    difficulty: 'Intermediate',
    html: `<div class="accordion-wrapper">
  <h2>Frequently Asked Questions</h2>
  
  <details class="accordion-item" open>
    <summary class="accordion-trigger">
      <span>What is the Cascade in CSS?</span>
      <span class="chevron">&#9662;</span>
    </summary>
    <div class="accordion-content">
      <p>The cascade is the algorithm browsers use to resolve conflicting CSS property declarations based on origin, importance, cascade layers, specificity, and source order.</p>
    </div>
  </details>

  <details class="accordion-item">
    <summary class="accordion-trigger">
      <span>How does CSS Subgrid differ from Grid?</span>
      <span class="chevron">&#9662;</span>
    </summary>
    <div class="accordion-content">
      <p>Subgrid allows a nested grid item to inherit the row and column track definitions of its parent grid, aligning deeply nested content across separate cards seamlessly.</p>
    </div>
  </details>

  <details class="accordion-item">
    <summary class="accordion-trigger">
      <span>Can CSS handle interactions without JavaScript?</span>
      <span class="chevron">&#9662;</span>
    </summary>
    <div class="accordion-content">
      <p>Yes! With native elements like &lt;details&gt;, :hover, :focus-visible, :checked, and scroll-driven animation timelines, sophisticated interactive UIs can be built in pure CSS.</p>
    </div>
  </details>
</div>`,
    css: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #0b1120;
  color: #f8fafc;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.accordion-wrapper {
  width: 100%;
  max-width: 480px;
  background: #111827;
  border: 1px solid #1e293b;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
}

h2 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #ffffff;
}

.accordion-item {
  border-bottom: 1px solid #1e293b;
  padding: 12px 0;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  color: #e2e8f0;
  cursor: pointer;
  list-style: none;
  user-select: none;
  transition: color 0.15s ease;
}

.accordion-trigger::-webkit-details-marker {
  display: none;
}

.accordion-trigger:hover {
  color: #60a5fa;
}

.chevron {
  font-size: 16px;
  color: #94a3b8;
  transition: transform 0.2s ease;
}

details[open] .chevron {
  transform: rotate(180deg);
  color: #3b82f6;
}

.accordion-content {
  padding-top: 10px;
  font-size: 13px;
  line-height: 1.6;
  color: #94a3b8;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    expectedResult: 'Interactive pure CSS accordion with animated rotating chevrons and content expansion.',
  },
};
