const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

// Ensure directories exist
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(path.join(publicDir, 'images'))) fs.mkdirSync(path.join(publicDir, 'images'), { recursive: true });

// CSS3 Devicon Shield SVG Group (scaled as needed)
function getCss3Shield(x, y, scale = 1) {
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
      <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
      <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
      <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
      <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
      <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
    </g>
  `;
}

// 1. STANDARD OPEN GRAPH (1200 x 630)
function generateOgSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" fill="none">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <radialGradient id="glowBlue" cx="20%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.32" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glowCyan" cx="85%" cy="75%" r="55%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.85" />
    </linearGradient>
    <linearGradient id="blueText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="28" flood-color="#000000" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Luminous Ambient Glows -->
  <rect width="1200" height="630" fill="url(#glowBlue)" />
  <rect width="1200" height="630" fill="url(#glowCyan)" />

  <!-- Grid overlay lines -->
  <g stroke="#334155" stroke-opacity="0.15" stroke-width="1">
    <line x1="0" y1="105" x2="1200" y2="105" />
    <line x1="0" y1="210" x2="1200" y2="210" />
    <line x1="0" y1="315" x2="1200" y2="315" />
    <line x1="0" y1="420" x2="1200" y2="420" />
    <line x1="0" y1="525" x2="1200" y2="525" />
    <line x1="150" y1="0" x2="150" y2="630" />
    <line x1="300" y1="0" x2="300" y2="630" />
    <line x1="450" y1="0" x2="450" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="750" y1="0" x2="750" y2="630" />
    <line x1="900" y1="0" x2="900" y2="630" />
    <line x1="1050" y1="0" x2="1050" y2="630" />
  </g>

  <!-- Center Card Container -->
  <rect x="70" y="55" width="1060" height="520" rx="24" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" filter="url(#shadow)" />

  <!-- Window Toolbar Dots -->
  <circle cx="115" cy="98" r="6.5" fill="#ef4444" />
  <circle cx="137" cy="98" r="6.5" fill="#f59e0b" />
  <circle cx="159" cy="98" r="6.5" fill="#10b981" />

  <text x="185" y="103" font-family="ui-monospace, monospace" font-size="13" font-weight="600" fill="#64748b">
    cssmaster.dev · Complete CSS Learning Platform
  </text>

  <!-- CSS3 Shield Logo -->
  ${getCss3Shield(115, 150, 1.35)}

  <!-- Brand Title & Tagline -->
  <g transform="translate(320, 195)">
    <!-- Pill Badge -->
    <rect x="0" y="-30" width="220" height="28" rx="14" fill="#1e3a8a" fill-opacity="0.6" stroke="#3b82f6" stroke-width="1" />
    <text x="16" y="-12" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#93c5fd" letter-spacing="0.05em">
      MODERN CSS GUIDE · 2026
    </text>

    <!-- Main Title -->
    <text y="42" font-family="system-ui, -apple-system, sans-serif" font-size="58" font-weight="900" fill="#ffffff" letter-spacing="-0.03em">
      CSS<tspan fill="url(#blueText)">Master</tspan>
    </text>

    <!-- Tagline -->
    <text y="88" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="600" fill="#cbd5e1">
      Learn CSS the Easy, Visual Way
    </text>

    <!-- Subtitle -->
    <text y="122" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="400" fill="#94a3b8">
      Clear step-by-step lessons, live code playground, and interactive visual tools.
    </text>
  </g>

  <!-- Feature Pills Row -->
  <g transform="translate(115, 395)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="215" height="52" rx="12" fill="#0f172a" stroke="#334155" />
    <text x="20" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#60a5fa">📘 50 Core Lessons</text>

    <!-- Pill 2 -->
    <rect x="235" y="0" width="235" height="52" rx="12" fill="#0f172a" stroke="#334155" />
    <text x="255" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#38bdf8">⚡ Live Playground</text>

    <!-- Pill 3 -->
    <rect x="490" y="0" width="230" height="52" rx="12" fill="#0f172a" stroke="#334155" />
    <text x="510" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#818cf8">🎨 Visual Toolkits</text>

    <!-- Pill 4 -->
    <rect x="740" y="0" width="230" height="52" rx="12" fill="#0f172a" stroke="#334155" />
    <text x="760" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#34d399">✓ Zero Jargon · 100% Free</text>
  </g>

  <!-- Bottom Bar: Topics & Attribution -->
  <g transform="translate(115, 515)">
    <text font-family="system-ui, sans-serif" font-size="15" font-weight="500" fill="#64748b">
      Selectors · Box Model · Flexbox · CSS Grid · Responsive Design · Animations · Colors
    </text>
    <text x="970" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#f97316" text-anchor="end">
      Made with 🧡 by Yaseen
    </text>
  </g>
</svg>`;
}

// 2. TWITTER / X SUMMARY LARGE CARD (1200 x 630)
function generateTwitterSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" fill="none">
  <defs>
    <linearGradient id="twBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="50%" stop-color="#0b1120" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <radialGradient id="twGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.30" />
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="twBlueText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#twBg)" />
  <rect width="1200" height="630" fill="url(#twGlow)" />

  <!-- Outer Rounded Container -->
  <rect x="50" y="45" width="1100" height="540" rx="28" fill="#0b1120" fill-opacity="0.85" stroke="#1e293b" stroke-width="2" />

  <!-- Header line -->
  <g transform="translate(95, 95)">
    ${getCss3Shield(0, 0, 0.65)}
    <text x="100" y="52" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="-0.02em">
      CSS<tspan fill="url(#twBlueText)">Master</tspan>
    </text>
    <rect x="300" y="26" width="115" height="26" rx="13" fill="#1e293b" />
    <text x="357" y="43" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#94a3b8" text-anchor="middle">
      CSS3 GUIDE
    </text>
  </g>

  <!-- Main Headline -->
  <g transform="translate(95, 230)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" fill="#ffffff" letter-spacing="-0.03em">
      Learn CSS the Easy, Visual Way
    </text>
    <text y="48" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#94a3b8">
      Master Cascading Style Sheets with 50 structured lessons and live sandbox previews.
    </text>
  </g>

  <!-- Features Row -->
  <g transform="translate(95, 345)">
    <rect x="0" y="0" width="220" height="60" rx="14" fill="#0f172a" stroke="#2563eb" stroke-opacity="0.4" />
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#60a5fa">📘 50 Lessons</text>

    <rect x="245" y="0" width="245" height="60" rx="14" fill="#0f172a" stroke="#2563eb" stroke-opacity="0.4" />
    <text x="269" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#38bdf8">⚡ Live Playground</text>

    <rect x="515" y="0" width="245" height="60" rx="14" fill="#0f172a" stroke="#2563eb" stroke-opacity="0.4" />
    <text x="539" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#818cf8">🎨 Visual Tools</text>

    <rect x="785" y="0" width="225" height="60" rx="14" fill="#0f172a" stroke="#2563eb" stroke-opacity="0.4" />
    <text x="809" y="36" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#34d399">🚀 100% Free</text>
  </g>

  <!-- Footer Info -->
  <g transform="translate(95, 485)">
    <text font-family="ui-monospace, monospace" font-size="15" font-weight="600" fill="#64748b">
      https://cssmaster.dev · Built for beginners &amp; developers
    </text>
    <text x="1010" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#f97316" text-anchor="end">
      Made with 🧡 by Yaseen
    </text>
  </g>
</svg>`;
}

// 3. SQUARE SOCIAL POST (1080 x 1080) - Instagram, WhatsApp, Discord
function generateSquareSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080" fill="none">
  <defs>
    <linearGradient id="sqBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <radialGradient id="sqGlow" cx="50%" cy="35%" r="50%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="sqBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="url(#sqBg)" />
  <rect width="1080" height="1080" fill="url(#sqGlow)" />

  <!-- Outer Card Frame -->
  <rect x="60" y="60" width="960" height="960" rx="36" fill="#0f172a" fill-opacity="0.75" stroke="#334155" stroke-width="2" />

  <!-- Centered CSS Shield -->
  ${getCss3Shield(436, 150, 1.6)}

  <!-- Title & Headline -->
  <text x="540" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="900" fill="#ffffff" letter-spacing="-0.03em" text-anchor="middle">
    CSS<tspan fill="url(#sqBlue)">Master</tspan>
  </text>

  <text x="540" y="475" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#cbd5e1" text-anchor="middle">
    Learn CSS the Easy, Visual Way
  </text>

  <text x="540" y="520" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" fill="#94a3b8" text-anchor="middle">
    Clear step-by-step lessons, live code playground, and visual tools.
  </text>

  <!-- 4 Feature Badges Grid -->
  <g transform="translate(180, 570)">
    <!-- Row 1 -->
    <rect x="0" y="0" width="345" height="70" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.3" />
    <text x="35" y="43" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#60a5fa">📘 50 Core Lessons</text>

    <rect x="375" y="0" width="345" height="70" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.3" />
    <text x="410" y="43" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#38bdf8">⚡ Live Playground</text>

    <!-- Row 2 -->
    <rect x="0" y="90" width="345" height="70" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.3" />
    <text x="35" y="133" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#818cf8">🎨 Visual Toolkits</text>

    <rect x="375" y="90" width="345" height="70" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.3" />
    <text x="410" y="133" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#34d399">🚀 Zero Setup Free</text>
  </g>

  <!-- Tag List -->
  <g transform="translate(540, 800)">
    <text font-family="ui-monospace, monospace" font-size="17" font-weight="600" fill="#64748b" text-anchor="middle">
      Flexbox · CSS Grid · Box Model · Gradients · Animations
    </text>
  </g>

  <!-- Bottom Attribution -->
  <g transform="translate(540, 930)">
    <text font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#f97316" text-anchor="middle">
      Made with 🧡 by Yaseen
    </text>
    <text y="28" font-family="ui-monospace, monospace" font-size="13" font-weight="500" fill="#64748b" text-anchor="middle">
      cssmaster.dev
    </text>
  </g>
</svg>`;
}

// 4. VERTICAL SOCIAL STORY / REEL / MOBILE (1080 x 1920)
function generateStorySvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920" fill="none">
  <defs>
    <linearGradient id="stBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="40%" stop-color="#0b1120" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <radialGradient id="stGlow" cx="50%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="stBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="url(#stBg)" />
  <rect width="1080" height="1920" fill="url(#stGlow)" />

  <!-- Top Logo Bar -->
  <g transform="translate(100, 240)">
    ${getCss3Shield(0, 0, 1.2)}
    <text x="175" y="90" font-family="system-ui, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-0.03em">
      CSS<tspan fill="url(#stBlue)">Master</tspan>
    </text>
  </g>

  <!-- Main Headline -->
  <g transform="translate(100, 480)">
    <rect x="0" y="-35" width="240" height="34" rx="17" fill="#1e3a8a" fill-opacity="0.6" stroke="#3b82f6" stroke-width="1" />
    <text x="20" y="-13" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#93c5fd" letter-spacing="0.05em">
      FREE INTERACTIVE GUIDE
    </text>

    <text y="55" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="900" fill="#ffffff" letter-spacing="-0.03em">
      Learn CSS the
    </text>
    <text y="130" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="900" fill="url(#stBlue)" letter-spacing="-0.03em">
      Easy, Visual Way
    </text>
    <text y="195" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#94a3b8">
      Zero boring theory. Real interactive previews.
    </text>
  </g>

  <!-- Code Snippet Card Window -->
  <g transform="translate(100, 750)">
    <rect width="880" height="380" rx="24" fill="#0f172a" stroke="#1e293b" stroke-width="2" />
    <!-- Window dots -->
    <circle cx="45" cy="40" r="8" fill="#ef4444" />
    <circle cx="70" cy="40" r="8" fill="#f59e0b" />
    <circle cx="95" cy="40" r="8" fill="#10b981" />
    <text x="130" y="46" font-family="ui-monospace, monospace" font-size="16" fill="#64748b">styles.css</text>

    <!-- Code text -->
    <text x="45" y="115" font-family="ui-monospace, monospace" font-size="22" fill="#60a5fa">.card {</text>
    <text x="80" y="155" font-family="ui-monospace, monospace" font-size="22" fill="#94a3b8">display: <tspan fill="#38bdf8">flex</tspan>;</text>
    <text x="80" y="195" font-family="ui-monospace, monospace" font-size="22" fill="#94a3b8">gap: <tspan fill="#f59e0b">1.5rem</tspan>;</text>
    <text x="80" y="235" font-family="ui-monospace, monospace" font-size="22" fill="#94a3b8">border-radius: <tspan fill="#f59e0b">16px</tspan>;</text>
    <text x="80" y="275" font-family="ui-monospace, monospace" font-size="22" fill="#94a3b8">box-shadow: <tspan fill="#a78bfa">0 20px 25px -5px rgb(0 0 0 / 0.1)</tspan>;</text>
    <text x="45" y="315" font-family="ui-monospace, monospace" font-size="22" fill="#60a5fa">}</text>
  </g>

  <!-- Feature Cards Vertical List -->
  <g transform="translate(100, 1190)">
    <rect x="0" y="0" width="880" height="95" rx="20" fill="#1e293b" fill-opacity="0.7" stroke="#334155" />
    <text x="40" y="58" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#ffffff">📘 50 Step-by-Step Lessons</text>

    <rect x="0" y="120" width="880" height="95" rx="20" fill="#1e293b" fill-opacity="0.7" stroke="#334155" />
    <text x="40" y="178" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#ffffff">⚡ In-Browser HTML &amp; CSS Playground</text>

    <rect x="0" y="240" width="880" height="95" rx="20" fill="#1e293b" fill-opacity="0.7" stroke="#334155" />
    <text x="40" y="298" font-family="system-ui, sans-serif" font-size="26" font-weight="700" fill="#ffffff">🎨 Visual Sliders &amp; Property Lab</text>
  </g>

  <!-- Bottom CTA & Attribution -->
  <g transform="translate(540, 1680)">
    <rect x="-300" y="-35" width="600" height="70" rx="35" fill="#3b82f6" />
    <text y="9" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">
      Start Learning at cssmaster.dev →
    </text>

    <text y="100" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#f97316" text-anchor="middle">
      Made with 🧡 by Yaseen
    </text>
  </g>
</svg>`;
}

// 5. GITHUB SOCIAL PREVIEW (1280 x 640)
function generateGithubSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 640" width="1280" height="640" fill="none">
  <defs>
    <linearGradient id="ghBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <radialGradient id="ghGlow" cx="25%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="ghBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <rect width="1280" height="640" fill="url(#ghBg)" />
  <rect width="1280" height="640" fill="url(#ghGlow)" />

  <!-- Frame -->
  <rect x="60" y="50" width="1160" height="540" rx="24" fill="#0f172a" fill-opacity="0.8" stroke="#334155" stroke-width="1.5" />

  <!-- Logo -->
  ${getCss3Shield(110, 140, 1.45)}

  <!-- Text -->
  <g transform="translate(325, 185)">
    <text font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="900" fill="#ffffff" letter-spacing="-0.03em">
      CSS<tspan fill="url(#ghBlue)">Master</tspan> Learning Platform
    </text>
    <text y="48" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#93c5fd">
      The Complete Modern CSS Educational Platform
    </text>
    <text y="88" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="400" fill="#94a3b8">
      Next.js 16 (App Router) · Tailwind CSS v4 · Shiki Pre-Highlighting · Client-Side Playground
    </text>
  </g>

  <!-- Tags -->
  <g transform="translate(110, 385)">
    <rect x="0" y="0" width="240" height="54" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.4" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#60a5fa">📘 50 CSS Lessons</text>

    <rect x="260" y="0" width="250" height="54" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.4" />
    <text x="284" y="34" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#38bdf8">⚡ Secure Playground</text>

    <rect x="530" y="0" width="250" height="54" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.4" />
    <text x="554" y="34" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#818cf8">🎨 Visual Toolkits</text>

    <rect x="800" y="0" width="260" height="54" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.4" />
    <text x="824" y="34" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#34d399">🚀 100% Client-Side</text>
  </g>

  <!-- Footer -->
  <g transform="translate(110, 520)">
    <text font-family="system-ui, sans-serif" font-size="15" font-weight="500" fill="#64748b">
      MIT Licensed · Open Source Educational Project
    </text>
    <text x="1060" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#f97316" text-anchor="end">
      Made with 🧡 by Yaseen
    </text>
  </g>
</svg>`;
}

async function buildAll() {
  console.log('Generating social media OpenGraph images...');

  const items = [
    {
      name: 'OpenGraph Standard (1200x630)',
      svg: generateOgSvg(),
      width: 1200,
      height: 630,
      svgPaths: [path.join(publicDir, 'og-image.svg')],
      pngPaths: [
        path.join(publicDir, 'og-image.png'),
        path.join(publicDir, 'images', 'og-image.png'),
        path.join(appDir, 'opengraph-image.png'),
      ],
    },
    {
      name: 'Twitter Card (1200x630)',
      svg: generateTwitterSvg(),
      width: 1200,
      height: 630,
      svgPaths: [path.join(publicDir, 'twitter-image.svg')],
      pngPaths: [
        path.join(publicDir, 'twitter-image.png'),
        path.join(publicDir, 'images', 'twitter-image.png'),
        path.join(appDir, 'twitter-image.png'),
      ],
    },
    {
      name: 'Social Square 1:1 (1080x1080)',
      svg: generateSquareSvg(),
      width: 1080,
      height: 1080,
      svgPaths: [path.join(publicDir, 'social-square.svg')],
      pngPaths: [
        path.join(publicDir, 'social-square.png'),
        path.join(publicDir, 'images', 'social-square.png'),
      ],
    },
    {
      name: 'Social Story 9:16 (1080x1920)',
      svg: generateStorySvg(),
      width: 1080,
      height: 1920,
      svgPaths: [path.join(publicDir, 'social-story.svg')],
      pngPaths: [
        path.join(publicDir, 'social-story.png'),
        path.join(publicDir, 'images', 'social-story.png'),
      ],
    },
    {
      name: 'GitHub Repository Preview (1280x640)',
      svg: generateGithubSvg(),
      width: 1280,
      height: 640,
      svgPaths: [path.join(publicDir, 'github-preview.svg')],
      pngPaths: [
        path.join(publicDir, 'github-preview.png'),
        path.join(publicDir, 'images', 'github-preview.png'),
      ],
    },
  ];

  for (const item of items) {
    const svgBuf = Buffer.from(item.svg);

    // Save SVG versions
    for (const p of item.svgPaths) {
      fs.writeFileSync(p, item.svg, 'utf8');
    }

    // Render high-res PNGs with Sharp
    const pngBuf = await sharp(svgBuf, { density: 150 })
      .resize(item.width, item.height)
      .png({ quality: 95, compressionLevel: 8 })
      .toBuffer();

    for (const p of item.pngPaths) {
      fs.writeFileSync(p, pngBuf);
      console.log(`✓ Generated: ${path.relative(path.join(__dirname, '..'), p)} (${item.width}x${item.height})`);
    }
  }

  console.log('\nAll social media images successfully generated!');
}

buildAll().catch((err) => {
  console.error('Error generating social images:', err);
  process.exit(1);
});
