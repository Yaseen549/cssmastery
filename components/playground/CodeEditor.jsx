'use client';

import React, { useRef, useEffect } from 'react';
import { Copy, Check, RotateCcw, AlignLeft } from 'lucide-react';

export default function CodeEditor({
  language = 'css', // 'html' | 'css' | 'javascript'
  value = '',
  onChange,
  onReset,
  label = '',
  readOnly = false,
}) {
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);
  const [copied, setCopied] = React.useState(false);

  const lines = value.split('\n');
  const lineCount = lines.length;

  // Sync scrolling between line numbers and textarea
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (e.shiftKey) {
        // Shift+Tab: Remove 2 leading spaces if possible
        const before = value.substring(0, start);
        const after = value.substring(end);
        if (before.endsWith('  ')) {
          const newVal = before.slice(0, -2) + after;
          onChange(newVal);
          setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = Math.max(0, start - 2);
          }, 0);
        }
      } else {
        // Tab: Insert 2 spaces
        const newVal = value.substring(0, start) + '  ' + value.substring(end);
        onChange(newVal);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        }, 0);
      }
    }

    // Auto-close brackets and quotes
    const pairs = {
      '{': '}',
      '[': ']',
      '(': ')',
      '"': '"',
      "'": "'",
      '`': '`',
    };

    if (pairs[e.key] && textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (start === end) {
        e.preventDefault();
        const closeChar = pairs[e.key];
        const newVal = value.substring(0, start) + e.key + closeChar + value.substring(end);
        onChange(newVal);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 1;
        }, 0);
      }
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBeautify = () => {
    // Simple indentation / trim formatting
    try {
      const cleaned = lines
        .map((l) => l.trimEnd())
        .join('\n');
      onChange(cleaned);
    } catch (err) {}
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#0b1120] text-slate-200 select-none border-zinc-200/50 dark:border-zinc-800 overflow-hidden">
      {/* Editor Sub-header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0f172a] px-3 py-1.5 text-xs shrink-0">
        <div className="flex items-center space-x-2">
          <span className="font-mono font-bold text-slate-300 text-[11.5px]">
            {label || language.toUpperCase()}
          </span>
          <span className="rounded bg-slate-800 px-1.5 py-0.2 font-mono text-[10px] text-slate-400">
            {lineCount} {lineCount === 1 ? 'line' : 'lines'}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={handleBeautify}
            title="Clean trailing whitespace"
            className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition"
          >
            <AlignLeft className="h-3.5 w-3.5" />
          </button>

          {onReset && (
            <button
              type="button"
              onClick={onReset}
              title="Reset Editor"
              className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={handleCopy}
            title="Copy Code"
            className="flex items-center space-x-1 rounded px-1.5 py-0.5 text-[11px] text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition"
          >
            {copied ? (
              <Check className="h-3 w-3 text-emerald-400" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
            <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Editor Main Text Area with Line Numbers */}
      <div className="flex-1 min-h-0 relative flex overflow-hidden font-mono text-xs leading-relaxed">
        {/* Line Numbers Column */}
        <div
          ref={lineNumbersRef}
          aria-hidden="true"
          className="w-10 select-none overflow-hidden bg-[#0a0f1d] py-3 pr-2.5 text-right font-mono text-[11px] text-slate-600 border-r border-slate-800/70"
        >
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} className="h-5 leading-5">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          readOnly={readOnly}
          spellCheck="false"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          aria-label={`${label || language} code editor`}
          className="flex-1 min-h-0 h-full w-full resize-none bg-transparent p-3 text-slate-100 focus:outline-none selection:bg-brand-500/30 selection:text-white leading-5 overflow-auto whitespace-pre font-mono text-[12px]"
        />
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between border-t border-slate-800/80 bg-[#0a0f1d] px-3 py-1 font-mono text-[10px] text-slate-500 shrink-0">
        <div>UTF-8 &bull; 2 Spaces Indent</div>
        <div>{value.length} characters</div>
      </div>
    </div>
  );
}
