'use client';

import React, { useState } from 'react';
import { Layers, Copy, Check, Sparkles, RotateCcw } from 'lucide-react';

const SHADOW_PRESETS = [
  { name: 'Subtle Card', x: 0, y: 4, blur: 12, spread: -2, color: '#000000', opacity: 0.1, inset: false },
  { name: 'Floating Modal', x: 0, y: 20, blur: 30, spread: -5, color: '#000000', opacity: 0.25, inset: false },
  { name: 'Warm Amber Glow', x: 0, y: 8, blur: 25, spread: 0, color: '#f97316', opacity: 0.45, inset: false },
  { name: 'Neumorphic Inset', x: 4, y: 4, blur: 8, spread: 0, color: '#000000', opacity: 0.2, inset: true },
  { name: 'Hard Pop Drop', x: 6, y: 6, blur: 0, spread: 0, color: '#ea580c', opacity: 1, inset: false },
];

export default function ShadowGenerator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(10);
  const [blur, setBlur] = useState(25);
  const [spread, setSpread] = useState(-5);
  const [color, setColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0.2);
  const [inset, setInset] = useState(false);
  const [copied, setCopied] = useState(false);

  // Convert hex + opacity to rgba string
  const r = parseInt(color.slice(1, 3), 16) || 0;
  const g = parseInt(color.slice(3, 5), 16) || 0;
  const b = parseInt(color.slice(5, 7), 16) || 0;
  const rgbaStr = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  const shadowCss = `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${rgbaStr}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`box-shadow: ${shadowCss};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setX(0);
    setY(10);
    setBlur(25);
    setSpread(-5);
    setColor('#000000');
    setOpacity(0.2);
    setInset(false);
  };

  const applyPreset = (p) => {
    setX(p.x);
    setY(p.y);
    setBlur(p.blur);
    setSpread(p.spread);
    setColor(p.color);
    setOpacity(p.opacity);
    setInset(p.inset);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <Layers className="h-4 w-4 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Box Shadow & Elevation Simulator
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
        {SHADOW_PRESETS.map((p) => (
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>X Offset:</span>
                <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{x}px</span>
              </div>
              <input
                type="range"
                min="-40"
                max="40"
                value={x}
                onChange={(e) => setX(Number(e.target.value))}
                className="w-full accent-brand-500"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Y Offset:</span>
                <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{y}px</span>
              </div>
              <input
                type="range"
                min="-40"
                max="40"
                value={y}
                onChange={(e) => setY(Number(e.target.value))}
                className="w-full accent-brand-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Blur Radius:</span>
                <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{blur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="w-full accent-brand-500"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Spread Radius:</span>
                <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{spread}px</span>
              </div>
              <input
                type="range"
                min="-20"
                max="30"
                value={spread}
                onChange={(e) => setSpread(Number(e.target.value))}
                className="w-full accent-brand-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <div className="flex justify-between mb-1">
                <span>Shadow Color:</span>
                <span className="font-mono text-zinc-900 dark:text-white">{color}</span>
              </div>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-8 w-full cursor-pointer rounded border border-zinc-300 bg-transparent p-0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Opacity:</span>
                <span className="font-mono text-zinc-900 dark:text-white">{Math.round(opacity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full accent-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inset}
                onChange={(e) => setInset(e.target.checked)}
                className="rounded border-zinc-300 text-brand-600 focus:ring-brand-500 h-4 w-4"
              />
              <span className="font-semibold text-zinc-900 dark:text-white">Inset Shadow (Inner)</span>
            </label>
          </div>

          <div className="rounded-lg bg-zinc-900 p-3 font-mono text-[11px] leading-relaxed text-zinc-200">
            <span className="text-zinc-500">.elevation-card &#123;</span>
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">box-shadow</span>: {shadowCss};
            <br />
            <span className="text-zinc-500">&#125;</span>
          </div>
        </div>

        {/* Live Preview Display */}
        <div className="flex flex-col items-center justify-center p-10 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 min-h-[300px]">
          <div
            style={{
              boxShadow: shadowCss,
            }}
            className="w-56 h-36 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-all duration-150 flex flex-col items-center justify-center p-4 text-center"
          >
            <span className="font-bold text-sm text-zinc-900 dark:text-white">Elevated Element</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Real-time Shadow Canvas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
