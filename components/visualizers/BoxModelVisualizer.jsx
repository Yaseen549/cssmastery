'use client';

import React, { useState } from 'react';
import { Sliders, Copy, Check } from 'lucide-react';

export default function BoxModelVisualizer() {
  const [padding, setPadding] = useState(20);
  const [border, setBorder] = useState(4);
  const [margin, setMargin] = useState(24);
  const [width, setWidth] = useState(200);
  const [boxSizing, setBoxSizing] = useState('border-box');
  const [copied, setCopied] = useState(false);

  const totalWidth =
    boxSizing === 'border-box'
      ? width
      : width + padding * 2 + border * 2;

  const cssString = `box-sizing: ${boxSizing};
width: ${width}px;
padding: ${padding}px;
border: ${border}px solid #f97316;
margin: ${margin}px;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <Sliders className="h-4 w-4 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Interactive Box Model Visualizer
          </h3>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center space-x-1 rounded-lg border border-zinc-200 px-2.5 py-1 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? 'Copied' : 'Copy CSS'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sliders Controls */}
        <div className="space-y-4 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          <div>
            <div className="flex justify-between mb-1">
              <span>Box Sizing Mode:</span>
              <span className="font-mono text-brand-600 font-bold">{boxSizing}</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setBoxSizing('border-box')}
                className={`flex-1 py-1.5 rounded-lg border font-semibold transition ${
                  boxSizing === 'border-box'
                    ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                    : 'border-zinc-200 dark:border-zinc-700'
                }`}
              >
                border-box (Standard)
              </button>
              <button
                type="button"
                onClick={() => setBoxSizing('content-box')}
                className={`flex-1 py-1.5 rounded-lg border font-semibold transition ${
                  boxSizing === 'content-box'
                    ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                    : 'border-zinc-200 dark:border-zinc-700'
                }`}
              >
                content-box (Legacy)
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Width:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">{width}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="300"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Padding:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">{padding}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Border Width:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">{border}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="16"
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Margin:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">{margin}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 text-xs">
            <span className="text-zinc-400">Total Rendered Width: </span>
            <span className="font-mono font-bold text-brand-600 dark:text-brand-400">
              {totalWidth}px
            </span>
          </div>
        </div>

        {/* Live Diagram */}
        <div className="flex justify-center p-4 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl">
          <div
            style={{
              padding: `${margin}px`,
              border: '2px dashed #fb923c',
              backgroundColor: '#fff7ed',
              borderRadius: '16px',
            }}
          >
            <div
              style={{
                border: `${border}px solid #f97316`,
                backgroundColor: '#ffedd5',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  padding: `${padding}px`,
                  backgroundColor: '#ffffff',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    width: `${boxSizing === 'border-box' ? Math.max(20, width - padding * 2 - border * 2) : width}px`,
                    height: '50px',
                    backgroundColor: '#fed7aa',
                    color: '#7c2d12',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '11px',
                    borderRadius: '4px',
                  }}
                >
                  Content
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
