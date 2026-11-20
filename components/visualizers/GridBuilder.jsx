'use client';

import React, { useState } from 'react';
import { LayoutGrid, Copy, Check, RotateCcw } from 'lucide-react';

export default function GridBuilder() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(16);
  const [colUnit, setColUnit] = useState('1fr');
  const [alignItems, setAlignItems] = useState('stretch');
  const [justifyItems, setJustifyItems] = useState('stretch');
  const [copied, setCopied] = useState(false);

  const totalCells = cols * rows;

  const colTemplate =
    colUnit === 'minmax'
      ? `repeat(${cols}, minmax(80px, 1fr))`
      : `repeat(${cols}, ${colUnit})`;
  const rowTemplate = `repeat(${rows}, minmax(60px, 1fr))`;

  const cssString = `display: grid;
grid-template-columns: ${colTemplate};
grid-template-rows: ${rowTemplate};
gap: ${gap}px;
align-items: ${alignItems};
justify-items: ${justifyItems};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCols(3);
    setRows(2);
    setGap(16);
    setColUnit('1fr');
    setAlignItems('stretch');
    setJustifyItems('stretch');
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <LayoutGrid className="h-4 w-4 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            CSS Grid Builder & Track Visualizer
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <div className="space-y-4 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          <div>
            <div className="flex justify-between mb-1">
              <span>Columns (Tracks):</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{cols}</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={cols}
              onChange={(e) => setCols(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Rows (Tracks):</span>
              <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{rows}</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Track Sizing Unit:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">{colUnit}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: '1fr', val: '1fr' },
                { label: 'minmax(80px, 1fr)', val: 'minmax' },
                { label: 'auto', val: 'auto' },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setColUnit(item.val)}
                  className={`py-1.5 px-2 rounded-lg border font-mono text-[11px] font-semibold transition ${
                    colUnit === item.val
                      ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Gap Spacing:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">{gap}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="36"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <span className="block mb-1">align-items:</span>
              <select
                value={alignItems}
                onChange={(e) => setAlignItems(e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 p-1.5 text-xs font-mono dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              >
                <option value="stretch">stretch</option>
                <option value="start">start</option>
                <option value="center">center</option>
                <option value="end">end</option>
              </select>
            </div>
            <div>
              <span className="block mb-1">justify-items:</span>
              <select
                value={justifyItems}
                onChange={(e) => setJustifyItems(e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 p-1.5 text-xs font-mono dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              >
                <option value="stretch">stretch</option>
                <option value="start">start</option>
                <option value="center">center</option>
                <option value="end">end</option>
              </select>
            </div>
          </div>

          {/* Generated Code Snippet */}
          <div className="mt-3 rounded-lg bg-zinc-900 p-3 font-mono text-[11px] leading-relaxed text-zinc-200">
            <span className="text-zinc-500">.grid-container &#123;</span>
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">display</span>: grid;
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">grid-template-columns</span>: {colTemplate};
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">grid-template-rows</span>: {rowTemplate};
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">gap</span>: {gap}px;
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">align-items</span>: {alignItems};
            <br />
            &nbsp;&nbsp;<span className="text-brand-400">justify-items</span>: {justifyItems};
            <br />
            <span className="text-zinc-500">&#125;</span>
          </div>
        </div>

        {/* Live Grid Canvas */}
        <div className="flex flex-col h-full justify-center p-4 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 min-h-[300px]">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: colUnit === 'minmax' ? `repeat(${cols}, minmax(40px, 1fr))` : `repeat(${cols}, ${colUnit})`,
              gridTemplateRows: `repeat(${rows}, minmax(50px, 1fr))`,
              gap: `${gap}px`,
              alignItems: alignItems,
              justifyItems: justifyItems,
              width: '100%',
              minHeight: '220px',
            }}
            className="p-3 bg-zinc-100/70 dark:bg-zinc-950/70 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700"
          >
            {Array.from({ length: totalCells }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-zinc-800 border border-brand-200 dark:border-brand-900/50 shadow-2xs transition-all hover:scale-[1.02] hover:border-brand-500 min-h-[50px]"
              >
                <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                  Item {i + 1}
                </span>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                  cell #{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
