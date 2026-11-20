import { createHighlighter } from 'shiki';

let highlighterPromise = null;

async function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['css', 'html', 'javascript', 'json', 'bash'],
    });
  }
  return highlighterPromise;
}

/**
 * Pre-highlights code on the server using Shiki
 * @param {string} code Raw code string
 * @param {string} lang Language identifier ('css', 'html', etc.)
 * @returns {Promise<string>} Pre-rendered HTML string with inline styles
 */
export async function highlightCode(code, lang = 'css') {
  if (!code) return '';
  try {
    const highlighter = await getHighlighterInstance();
    const cleanLang = ['css', 'html', 'javascript', 'json', 'bash'].includes(lang) ? lang : 'css';
    return highlighter.codeToHtml(code.trim(), {
      lang: cleanLang,
      theme: 'github-dark',
    });
  } catch (error) {
    console.error(`Shiki highlight error for language "${lang}":`, error);
    // Graceful fallback to escaped HTML pre block
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8"><code>${escaped}</code></pre>`;
  }
}
