'use client';

import React, { useState } from 'react';
import { Palette, Copy, Check, Sparkles } from 'lucide-react';

const PRESETS = [
  { name: 'Warm Amber', type: 'linear-gradient', angle: 135, stops: ['#f97316', '#ea580c', '#7c2d12'] },
  { name: 'Sunset Glow', type: 'linear-gradient', angle: 90, stops: ['#ff7e5f', '#feb47b', '#d946ef'] },
  { name: 'Deep Space', type: 'radial-gradient', angle: 0, stops: ['#3b82f6', '#1e1b4b', '#030712'] },
  { name: 'Cyber Neon', type: 'conic-gradient', angle: 180, stops: ['#06b6d4', '#ec4899', '#8b5cf6'] },
  { name: 'Emerald Forest', type: 'linear-gradient', angle: 45, stops: ['#10b981', '#059669', '#064e3b'] },
];

export default function GradientGenerator() {
  const [type, setType] = useState('linear-gradient'); // 'linear-gradient' | 'radial-gradient' | 'conic-gradient'
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState('#f97316');
  const [stop1, setStop1] = useState(0);
  const [color2, setColor2] = useState('#ea580c');
  const [stop2, setStop2] = useState(50);
  const [color3, setColor3] = useState('#9a3412');
  const [stop3, setStop3] = useState(100);
  const [copied, setCopied] = useState(false);

  let gradientCss = '';
  if (type === 'linear-gradient') {
    gradientCss = `linear-gradient(${angle}deg, ${color1} ${stop1}%, ${color2} ${stop2}%, ${color3} ${stop3}%)`;
  } else if (type === 'radial-gradient') {
    gradientCss = `radial-gradient(circle at center, ${color1} ${stop1}%, ${color2} ${stop2}%, ${color3} ${stop3}%)`;
  } else {
    gradientCss = `conic-gradient(from ${angle}deg at 50% 50%, ${color1} ${stop1}%, ${color2} ${stop2}%, ${color3} ${stop3}%)`;
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`background: ${gradientCss};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPreset = (preset) => {
    setType(preset.type);
    setAngle(preset.angle);
    setColor1(preset.stops[0]);
    setColor2(preset.stops[1]);
    setColor3(preset.stops[2]);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <Palette className="h-4 w-4 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            CSS Gradient Studio & Color Blend Generator
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

      {/* Preset Pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        <span className="flex items-center text-xs font-bold text-zinc-400">
          <Sparkles className="h-3 w-3 mr-1" /> Presets:
        </span>
        {PRESETS.map((p) => (
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
          {/* Gradient Type Selector */}
          <div>
            <span className="block mb-1">Gradient Type:</span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Linear', val: 'linear-gradient' },
                { label: 'Radial', val: 'radial-gradient' },
                { label: 'Conic', val: 'conic-gradient' },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setType(item.val)}
                  className={`py-1.5 rounded-lg border font-semibold text-center transition ${
                    type === item.val
                      ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Angle Slider (for Linear and Conic) */}
          {type !== 'radial-gradient' && (
            <div>
              <div className="flex justify-between mb-1">
                <span>Angle:</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">{angle}&deg;</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-brand-500"
              />
            </div>
          )}

          {/* Stop 1 */}
          <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">Color Stop 1</span>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="h-6 w-8 cursor-pointer rounded border border-zinc-300 bg-transparent p-0"
                />
                <span className="font-mono text-[11px]">{color1}</span>
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-500">
              <span>Position:</span>
              <span className="font-mono">{stop1}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={stop1}
              onChange={(e) => setStop1(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          {/* Stop 2 */}
          <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">Color Stop 2</span>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="h-6 w-8 cursor-pointer rounded border border-zinc-300 bg-transparent p-0"
                />
                <span className="font-mono text-[11px]">{color2}</span>
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-500">
              <span>Position:</span>
              <span className="font-mono">{stop2}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={stop2}
              onChange={(e) => setStop2(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          {/* Stop 3 */}
          <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">Color Stop 3</span>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={color3}
                  onChange={(e) => setColor3(e.target.value)}
                  className="h-6 w-8 cursor-pointer rounded border border-zinc-300 bg-transparent p-0"
                />
                <span className="font-mono text-[11px]">{color3}</span>
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-500">
              <span>Position:</span>
              <span className="font-mono">{stop3}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={stop3}
              onChange={(e) => setStop3(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>
        </div>

        {/* Live Preview Display */}
        <div className="flex flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
          <div
            style={{
              background: gradientCss,
              boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)',
            }}
            className="w-full h-56 rounded-2xl border border-white/20 transition-all duration-200 flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-xl drop-shadow"
          >
            <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              Live Preview
            </div>
          </div>

          <div className="w-full rounded-lg bg-zinc-900 p-3 font-mono text-[11px] leading-relaxed text-zinc-200 break-all select-all">
            <span className="text-zinc-500">background:</span> <span className="text-brand-400">{gradientCss}</span>;
          </div>
        </div>
      </div>
    </div>
  );
}
