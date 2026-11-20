'use client';

import React, { useState } from 'react';
import { Square, Copy, Check, Sparkles, RotateCcw } from 'lucide-react';

const SHAPE_PRESETS = [
  { name: 'Standard Rounded', tl: 16, tr: 16, br: 16, bl: 16 },
  { name: 'Pill / Capsule', tl: 9999, tr: 9999, br: 9999, bl: 9999 },
  { name: 'Organic Leaf', tl: 80, tr: 0, br: 80, bl: 0 },
  { name: 'Teardrop Message', tl: 32, tr: 32, br: 32, bl: 4 },
  { name: 'Asymmetric Card', tl: 40, tr: 8, br: 40, bl: 8 },
];

export default function BorderRadiusEditor() {
  const [tl, setTl] = useState(24);
  const [tr, setTr] = useState(24);
  const [br, setBr] = useState(24);
  const [bl, setBl] = useState(24);
  const [copied, setCopied] = useState(false);

  const borderRadiusCss = `${tl}px ${tr}px ${br}px ${bl}px`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`border-radius: ${borderRadiusCss};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setTl(24);
    setTr(24);
    setBr(24);
    setBl(24);
  };

  const applyPreset = (p) => {
    setTl(p.tl);
    setTr(p.tr);
    setBr(p.br);
    setBl(p.bl);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <Square className="h-4 w-4 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Border Radius & Organic Shape Sculptor
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleReset}
            type="button"
            className="flex items-center space-x-1 rounded-lg border border-zinc-200 px-2 py-1 text-xs font-semibold text-zinc-500 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleCopy}
            type="button"
            className="flex items-center space-x-1 rounded-lg border border-zinc-200 px-2.5 py-1 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied' : 'Copy CSS'}</span>
          </button>
        </div>
      </div>

      {/* Preset Pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        <span className="flex items-center text-xs font-bold text-zinc-400">
          <Sparkles className="h-3 w-3 mr-1" /> Presets:
        </span>
        {SHAPE_PRESETS.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => applyPreset(p)}
            className="text-xs px-2.5 py-1 rounded-full border border-zinc-200 bg-zinc-50 font-medium text-zinc-700 hover:border-brand-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 transition"
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Controls */}
        <div className="space-y-4 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          {/* Top-Left */}
          <div>
            <div className="flex justify-between mb-1">
              <span>Top-Left Corner:</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{tl}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="150"
              value={tl}
              onChange={(e) => setTl(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          {/* Top-Right */}
          <div>
            <div className="flex justify-between mb-1">
              <span>Top-Right Corner:</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{tr}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="150"
              value={tr}
              onChange={(e) => setTr(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          {/* Bottom-Right */}
          <div>
            <div className="flex justify-between mb-1">
              <span>Bottom-Right Corner:</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{br}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="150"
              value={br}
              onChange={(e) => setBr(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          {/* Bottom-Left */}
          <div>
            <div className="flex justify-between mb-1">
              <span>Bottom-Left Corner:</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{bl}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="150"
              value={bl}
              onChange={(e) => setBl(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div className="rounded-lg bg-zinc-900 p-3 font-mono text-[11px] leading-relaxed text-zinc-200">
            <span className="text-zinc-500">.custom-shape &#123;</span>
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">border-radius</span>: {borderRadiusCss};
            <br />
            <span className="text-zinc-500">&#125;</span>
          </div>
        </div>

        {/* Live Preview Display */}
        <div className="flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 min-h-[300px]">
          <div
            style={{
              borderRadius: borderRadiusCss,
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              boxShadow: '0 15px 30px -5px rgba(249, 115, 22, 0.4)',
            }}
            className="w-48 h-48 transition-all duration-150 flex flex-col items-center justify-center text-white text-center p-4 border border-white/20"
          >
            <span className="font-bold text-sm tracking-wide">Dynamic Shape</span>
            <span className="font-mono text-[10px] opacity-80 mt-1">{borderRadiusCss}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
