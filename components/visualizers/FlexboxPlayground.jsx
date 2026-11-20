'use client';

import React, { useState } from 'react';
import { Columns, Copy, Check } from 'lucide-react';

export default function FlexboxPlayground() {
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('space-between');
  const [align, setAlign] = useState('center');
  const [wrap, setWrap] = useState('nowrap');
  const [gap, setGap] = useState(12);
  const [copied, setCopied] = useState(false);

  const cssString = `display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
flex-wrap: ${wrap};
gap: ${gap}px;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <Columns className="h-4 w-4 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Interactive Flexbox Playground
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <div className="space-y-4 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          <div>
            <span className="block mb-1">flex-direction:</span>
            <div className="grid grid-cols-2 gap-1.5">
              {['row', 'column', 'row-reverse', 'column-reverse'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setDirection(val)}
                  className={`py-1 rounded-lg border transition ${
                    direction === val
                      ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-bold'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="block mb-1">justify-content:</span>
            <div className="grid grid-cols-3 gap-1.5">
              {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setJustify(val)}
                  className={`py-1 rounded-lg border text-[11px] transition ${
                    justify === val
                      ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-bold'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="block mb-1">align-items:</span>
            <div className="grid grid-cols-3 gap-1.5">
              {['stretch', 'center', 'flex-start', 'flex-end', 'baseline'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAlign(val)}
                  className={`py-1 rounded-lg border text-[11px] transition ${
                    align === val
                      ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-bold'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>gap:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-white">{gap}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="32"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>
        </div>

        {/* Live Canvas */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl min-h-[220px] flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
          <div
            style={{
              display: 'flex',
              flexDirection: direction,
              justifyContent: justify,
              alignItems: align,
              flexWrap: wrap,
              gap: `${gap}px`,
              width: '100%',
              minHeight: '160px',
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px dashed #d4d4d8',
            }}
          >
            <div style={{ background: '#f97316', color: 'white', padding: '12px 18px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px' }}>
              Item 1
            </div>
            <div style={{ background: '#ea580c', color: 'white', padding: '16px 14px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px' }}>
              Item 2
            </div>
            <div style={{ background: '#c2410c', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', fontSize: '12px' }}>
              Item 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
