'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Code2,
  FileCode,
  Sparkles,
  RotateCcw,
  Download,
  Copy,
  Check,
  Monitor,
  Tablet,
  Smartphone,
  Sliders,
  Maximize2,
  Minimize2,
  ChevronDown,
  RefreshCw,
} from 'lucide-react';
import DocShell from '../../components/layout/DocShell';
import CodeEditor from '../../components/playground/CodeEditor';
import { PLAYGROUND_TEMPLATES } from '../../data/playgroundTemplates';

function PlaygroundContent() {
  const searchParams = useSearchParams();
  const initialTemplateKey = searchParams.get('template') || 'hello-world';
  const initialTemplate =
    PLAYGROUND_TEMPLATES[initialTemplateKey] || PLAYGROUND_TEMPLATES['hello-world'];

  // Current project state
  const [currentTemplateId, setCurrentTemplateId] = useState(initialTemplate.id);
  const [projectTitle, setProjectTitle] = useState(initialTemplate.title);

  // Two code buffers: HTML and CSS only
  const [htmlCode, setHtmlCode] = useState(initialTemplate.html);
  const [cssCode, setCssCode] = useState(initialTemplate.css);

  // UI State: exactly two editor tabs
  const [activeTab, setActiveTab] = useState('css'); // 'css' | 'html'
  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile' | 'custom'
  const [customWidth, setCustomWidth] = useState(640);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('');

  // Live preview doc state
  const [previewKey, setPreviewKey] = useState(1);
  const [debouncedSrcDoc, setDebouncedSrcDoc] = useState('');

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Generate clean HTML + CSS bundle (Zero JavaScript)
  const buildIframeDocument = useCallback(() => {
    // 1. Strip any <script> tags to ensure zero script injection
    let safeHtml = htmlCode.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      '<!-- [script tag removed: JavaScript execution is disabled in this CSS playground] -->'
    );

    // 2. Neutralize any inline event handlers (onclick, onload, onerror, etc.)
    safeHtml = safeHtml.replace(
      /\s+on[a-zA-Z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,
      ' data-blocked-event="true"'
    );

    // 3. Strict Content Security Policy: Absolutely no scripts
    const cspMeta = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; media-src data: blob:; connect-src 'none'; object-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none';">`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${cspMeta}
  <style>
    ${cssCode}
  </style>
</head>
<body>
  ${safeHtml}
</body>
</html>`;
  }, [htmlCode, cssCode]);

  // Automatic live debounced compilation (150ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSrcDoc(buildIframeDocument());
    }, 150);
    return () => clearTimeout(timer);
  }, [htmlCode, cssCode, buildIframeDocument]);

  // Manual Refresh / Run button
  const handleManualRefresh = () => {
    setPreviewKey((k) => k + 1);
    setDebouncedSrcDoc(buildIframeDocument());
  };

  // Template change
  const handleTemplateSelect = (key) => {
    const t = PLAYGROUND_TEMPLATES[key];
    if (!t) return;
    setCurrentTemplateId(t.id);
    setProjectTitle(t.title);
    setHtmlCode(t.html);
    setCssCode(t.css);
    setActiveTab('css');
    setPreviewKey((k) => k + 1);
  };

  // Reset current template
  const handleResetCurrent = () => {
    const t = PLAYGROUND_TEMPLATES[currentTemplateId] || initialTemplate;
    setHtmlCode(t.html);
    setCssCode(t.css);
    setPreviewKey((k) => k + 1);
  };

  // Export handlers (HTML and CSS only)
  const handleCopyCode = async (type) => {
    let text = '';
    if (type === 'html') text = htmlCode;
    else if (type === 'css') text = cssCode;
    else text = buildIframeDocument();

    await navigator.clipboard.writeText(text);
    setCopyFeedback(`Copied ${type.toUpperCase()}`);
    setTimeout(() => setCopyFeedback(''), 2000);
    setExportDropdownOpen(false);
  };

  const handleDownloadFile = (type) => {
    let filename = '';
    let content = '';
    let mime = 'text/plain';

    if (type === 'html') {
      filename = 'index.html';
      content = htmlCode;
      mime = 'text/html';
    } else if (type === 'css') {
      filename = 'styles.css';
      content = cssCode;
      mime = 'text/css';
    } else {
      filename = `${currentTemplateId}-bundle.html`;
      content = buildIframeDocument();
      mime = 'text/html';
    }

    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    setExportDropdownOpen(false);
  };

  return (
    <DocShell fullHeight={!isFullscreen}>
      <div
        className={`flex flex-col select-none overflow-hidden ${isFullscreen
          ? 'fixed inset-0 z-50 bg-[#0b1120] text-slate-100 h-screen w-screen'
          : 'flex-1 h-full min-h-0 bg-surface-canvas dark:bg-surface-dark'
          }`}
      >
        {/* Playground Sub-Header Bar */}
        <div className="shrink-0 border-b border-slate-200/90 bg-white px-4 py-2 dark:border-slate-800 dark:bg-surface-darkSurface">
          <div className="flex items-center justify-between gap-3 w-full">
            {/* Title & Template Selector */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h1 className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                    CSS Playground
                  </h1>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 hidden sm:block">
                    Edit HTML & CSS with instant live preview
                  </p>
                </div>
              </div>

              {/* Template Picker Dropdown */}
              <div className="relative">
                <label htmlFor="template-picker" className="sr-only">
                  Choose Starter Template
                </label>
                <select
                  id="template-picker"
                  value={currentTemplateId}
                  onChange={(e) => handleTemplateSelect(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-800 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {Object.values(PLAYGROUND_TEMPLATES).map((tmpl) => (
                    <option key={tmpl.id} value={tmpl.id}>
                      {tmpl.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Action Tools: Run, Reset, Save, Export, Fullscreen */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={handleManualRefresh}
                title="Refresh preview"
                className="flex items-center space-x-1 rounded-lg bg-brand-500/10 border border-brand-500/20 px-2.5 py-1 text-xs font-bold text-brand-600 dark:text-brand-400 hover:bg-brand-500 hover:text-white transition"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Run</span>
              </button>

              <button
                type="button"
                onClick={handleResetCurrent}
                title="Reset code to starter template"
                className="flex items-center space-x-1 rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>

              {/* Export Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setExportDropdownOpen(!exportDropdownOpen)}
                  className="flex items-center space-x-1 rounded-lg bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-2xs hover:bg-brand-600 transition"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Export</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                {exportDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-700 dark:bg-slate-900 z-50 text-xs">
                    <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Copy Code
                    </div>
                    <button
                      onClick={() => handleCopyCode('html')}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>Copy HTML</span>
                      <Copy className="h-3 w-3 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleCopyCode('css')}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>Copy CSS</span>
                      <Copy className="h-3 w-3 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleCopyCode('bundle')}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/60"
                    >
                      <span>Copy All (Bundle)</span>
                      <Copy className="h-3 w-3" />
                    </button>

                    <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                    <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Download Files
                    </div>
                    <button
                      onClick={() => handleDownloadFile('html')}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>index.html</span>
                      <Download className="h-3 w-3 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleDownloadFile('css')}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span>styles.css</span>
                      <Download className="h-3 w-3 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleDownloadFile('bundle')}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/60"
                    >
                      <span>Export Full .html</span>
                      <Download className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>

              {copyFeedback && (
                <span className="text-xs font-semibold text-emerald-500 animate-fade-in">
                  {copyFeedback}
                </span>
              )}

              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enter Fullscreen'}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Main Workspace Body: Split Editor & Preview */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden w-full h-full">
          {/* Left Column: Code Editor (exactly 2 tabs) */}
          <div className="flex flex-col w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 h-1/2 lg:h-full min-h-0 bg-[#0b1120] overflow-hidden">
            {/* Editor Tab Bar: Exactly index.html and styles.css */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#0f172a] px-3 py-1.5 shrink-0">
              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('css')}
                  className={`flex items-center space-x-1.5 rounded-lg px-3 py-1 text-xs font-bold transition ${activeTab === 'css'
                    ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  <FileCode className="h-3.5 w-3.5 text-brand-400" />
                  <span>styles.css</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('html')}
                  className={`flex items-center space-x-1.5 rounded-lg px-3 py-1 text-xs font-bold transition ${activeTab === 'html'
                    ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  <Code2 className="h-3.5 w-3.5 text-amber-400" />
                  <span>index.html</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
                HTML + CSS Only
              </div>
            </div>

            {/* Active Code Editor */}
            <div className="flex-1 min-h-0 h-full overflow-hidden flex flex-col">
              {activeTab === 'css' && (
                <CodeEditor
                  language="css"
                  label="styles.css"
                  value={cssCode}
                  onChange={setCssCode}
                  onReset={() => setCssCode(PLAYGROUND_TEMPLATES[currentTemplateId]?.css || '')}
                />
              )}
              {activeTab === 'html' && (
                <CodeEditor
                  language="html"
                  label="index.html"
                  value={htmlCode}
                  onChange={setHtmlCode}
                  onReset={() => setHtmlCode(PLAYGROUND_TEMPLATES[currentTemplateId]?.html || '')}
                />
              )}
            </div>
          </div>

          {/* Right Column: Sandboxed Live Preview (Full Height, No Console) */}
          <div className="flex-1 min-h-0 flex flex-col bg-slate-100 dark:bg-slate-950/70 overflow-hidden h-1/2 lg:h-full">
            {/* Viewport Toolbar */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-darkSurface px-4 py-1.5 shrink-0">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Live Preview
                </span>
              </div>

              {/* Responsive Width Presets */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5 dark:border-slate-700 dark:bg-slate-900">
                  <button
                    type="button"
                    onClick={() => setViewport('desktop')}
                    title="Desktop (100% width)"
                    className={`rounded px-2 py-1 text-xs transition ${viewport === 'desktop'
                      ? 'bg-white font-bold text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                      }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('tablet')}
                    title="Tablet (768px width)"
                    className={`rounded px-2 py-1 text-xs transition ${viewport === 'tablet'
                      ? 'bg-white font-bold text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                      }`}
                  >
                    <Tablet className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('mobile')}
                    title="Mobile (375px width)"
                    className={`rounded px-2 py-1 text-xs transition ${viewport === 'mobile'
                      ? 'bg-white font-bold text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                      }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('custom')}
                    title="Custom slider width"
                    className={`rounded px-2 py-1 text-xs transition ${viewport === 'custom'
                      ? 'bg-white font-bold text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                      }`}
                  >
                    <Sliders className="h-3.5 w-3.5" />
                  </button>
                </div>

                {viewport === 'custom' && (
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                    <input
                      type="range"
                      min="320"
                      max="1100"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(Number(e.target.value))}
                      className="w-24 accent-brand-500"
                    />
                    <span>{customWidth}px</span>
                  </div>
                )}
              </div>
            </div>

            {/* Live Preview Container */}
            <div
              className={`flex-1 min-h-0 flex items-center justify-center overflow-hidden w-full h-full ${viewport === 'desktop'
                ? 'bg-white dark:bg-slate-950'
                : 'p-3 bg-slate-100 dark:bg-slate-900/60'
                }`}
            >
              {viewport === 'desktop' ? (
                <iframe
                  key={previewKey}
                  srcDoc={debouncedSrcDoc}
                  title="Live Preview"
                  sandbox=""
                  className="w-full h-full border-0 bg-white block"
                />
              ) : (
                <div
                  style={{
                    width:
                      viewport === 'tablet'
                        ? '768px'
                        : viewport === 'mobile'
                          ? '375px'
                          : `${customWidth}px`,
                    maxWidth: '100%',
                  }}
                  className="h-full w-full max-h-full rounded-xl border border-slate-300 bg-white shadow-lg overflow-hidden transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 flex flex-col"
                >
                  <iframe
                    key={previewKey}
                    srcDoc={debouncedSrcDoc}
                    title="Live Preview"
                    sandbox=""
                    className="w-full h-full flex-1 min-h-0 border-0 bg-white block"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DocShell>
  );
}

export default function PlaygroundPage() {
  return (
    <Suspense
      fallback={
        <DocShell fullHeight>
          <div className="flex-1 flex items-center justify-center p-12 text-slate-400 font-mono text-sm">
            Initializing CSS Playground...
          </div>
        </DocShell>
      }
    >
      <PlaygroundContent />
    </Suspense>
  );
}
