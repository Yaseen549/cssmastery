'use client';

import React, { useState } from 'react';
import { Palette, Copy, Check } from 'lucide-react';

export default function ColorOklchMixer() {
  const [lightness, setLightness] = useState(0.68);
  const [chroma, setChroma] = useState(0.22);
  const [hue, setHue] = useState(45);
  const [copied, setCopied] = useState(false);

  const oklchString = `oklch(${lightness} ${chroma} ${hue})`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(oklchString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <Palette className="h-4 w-4 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Modern OKLCH Color Space Mixer
          </h3>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center space-x-1 rounded-lg border border-zinc-200 px-2.5 py-1 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? 'Copied' : 'Copy OKLCH'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          <div>
            <div className="flex justify-between mb-1">
              <span>Lightness (L):</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">
                {Math.round(lightness * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={lightness}
              onChange={(e) => setLightness(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Chroma / Saturation (C):</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">
                {chroma}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="0.37"
              step="0.01"
              value={chroma}
              onChange={(e) => setChroma(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Hue Angle (H):</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">
                {hue}°
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border font-mono text-xs text-brand-600 dark:text-brand-400">
            <code>{oklchString}</code>
          </div>
        </div>

        {/* Live Swatch Preview */}
        <div
          style={{ backgroundColor: oklchString }}
          className="h-44 rounded-2xl shadow-xl flex items-center justify-center transition-colors"
        >
          <span
            style={{ color: lightness > 0.6 ? '#18181b' : '#ffffff' }}
            className="font-bold text-sm uppercase tracking-wider font-mono drop-shadow-xs"
          >
            {oklchString}
          </span>
        </div>
      </div>
    </div>
  );
}
