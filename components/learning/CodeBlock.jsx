'use client';

import React, { useState } from 'react';
import { Check, Copy, Code2 } from 'lucide-react';

export default function CodeBlock({
  html = '',
  code = '',
  language = 'css',
  title = '',
  className = '',
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div
      className={`relative my-4 overflow-hidden rounded-xl border border-zinc-800 bg-[#1e1e1e] shadow-lg ${className}`}
    >
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <Code2 className="h-3.5 w-3.5 text-brand-400" />
          <span className="font-semibold text-zinc-300">
            {title || (language === 'css' ? 'styles.css' : 'example')}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-400">
            {language}
          </span>
          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy code to clipboard"
            className="flex items-center space-x-1 rounded px-2 py-1 text-[11px] text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Body */}
      {html ? (
        <div
          className="overflow-x-auto p-4 text-xs font-mono leading-relaxed [&_pre]:!bg-transparent [&_pre]:!m-0 [&_code]:!bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-200">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
