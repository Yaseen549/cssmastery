'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  Copy,
  Check,
  Palette,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function CssDemoSandbox({
  demo,
  slug = 'css-demo',
  className = '',
}) {
  const [viewport, setViewport] = useState('desktop'); // desktop | tablet | mobile
  const [copied, setCopied] = useState(false);
  const [bgMode, setBgMode] = useState('light'); // light | dark | grid
  const [key, setKey] = useState(0);

  if (!demo) return null;

  const rawHtml = demo.html || '<div class="demo-box">CSS Preview</div>';
  const customCss = demo.css || '';

  const viewportWidths = {
    desktop: 'w-full',
    tablet: 'max-w-[768px]',
    mobile: 'max-w-[360px]',
  };

  const handleCopy = async () => {
    try {
      const fullDoc = `<style>\n${customCss}\n</style>\n${rawHtml}`;
      await navigator.clipboard.writeText(fullDoc);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const bgStyles = {
    light: 'bg-white text-slate-900',
    dark: 'bg-slate-900 text-white',
    grid: 'bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white',
  };

  const fullSrcDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'none'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; connect-src 'none';">
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      margin: 0;
      padding: 16px;
      line-height: 1.5;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      color: ${bgMode === 'dark' ? '#f8fafc' : '#0f172a'};
      background-color: ${bgMode === 'dark' ? '#0b1120' : '#ffffff'};
    }
    ${customCss}
  </style>
</head>
<body>
  ${rawHtml}
</body>
</html>`;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm dark:border-slate-800 dark:bg-surface-darkSurface ${className}`}
    >
      {/* Titlebar Chrome */}
      <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/90 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/90">
        {/* macOS Dots & Simulated URL */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="hidden sm:inline-block rounded-md bg-slate-200/60 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            css://preview/{slug}
          </span>
        </div>

        {/* Viewport Toggles & Utility Buttons */}
        <div className="flex items-center space-x-1">
          {/* Desktop */}
          <button
            onClick={() => setViewport('desktop')}
            type="button"
            aria-label="Desktop viewport"
            className={`rounded p-1 transition ${
              viewport === 'desktop'
                ? 'bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
          </button>

          {/* Tablet */}
          <button
            onClick={() => setViewport('tablet')}
            type="button"
            aria-label="Tablet viewport"
            className={`rounded p-1 transition ${
              viewport === 'tablet'
                ? 'bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Tablet className="h-3.5 w-3.5" />
          </button>

          {/* Mobile */}
          <button
            onClick={() => setViewport('mobile')}
            type="button"
            aria-label="Mobile viewport"
            className={`rounded p-1 transition ${
              viewport === 'mobile'
                ? 'bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
          </button>

          <span className="h-3 w-px bg-slate-300 dark:bg-slate-700" />

          {/* Background Toggle */}
          <button
            onClick={() => setBgMode((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'grid' : 'light'))}
            type="button"
            aria-label="Toggle preview background"
            className="rounded p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          >
            <Palette className="h-3.5 w-3.5" />
          </button>

          {/* Reload / Reset */}
          <button
            onClick={() => setKey((k) => k + 1)}
            type="button"
            aria-label="Reload preview"
            className="rounded p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>

          {/* Copy Demo */}
          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy demo markup"
            className="rounded p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Render Surface with Sandboxed Iframe */}
      <div className={`flex justify-center p-3 sm:p-4 min-h-[220px] transition-colors ${bgStyles[bgMode]}`}>
        <div className={`w-full transition-all duration-300 ${viewportWidths[viewport]}`}>
          <iframe
            key={key}
            srcDoc={fullSrcDoc}
            title={demo.title || 'CSS Demonstration'}
            sandbox="allow-scripts"
            className="h-64 w-full rounded-lg border border-slate-200/80 bg-white shadow-2xs dark:border-slate-800 dark:bg-slate-900"
          />
        </div>
      </div>

      {/* Footer Quick Action: Experiment in Playground */}
      <div className="flex items-center justify-between border-t border-slate-200/80 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60 text-xs">
        <span className="text-[11px] text-slate-500 dark:text-slate-400">Isolated CSS Preview</span>
        <Link
          href={`/playground?template=${slug.includes('grid') ? 'css-grid-layout' : slug.includes('flex') ? 'flexbox-layout' : slug.includes('animation') ? 'css-animations' : slug.includes('gradient') ? 'gradient-generator' : 'hello-world'}`}
          className="inline-flex items-center space-x-1 font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition"
        >
          <Sparkles className="h-3 w-3" />
          <span>Experiment in Playground</span>
          <ExternalLink className="h-3 w-3 ml-0.5" />
        </Link>
      </div>
    </div>
  );
}
