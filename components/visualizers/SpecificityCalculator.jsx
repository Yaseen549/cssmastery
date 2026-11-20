'use client';

import React, { useState } from 'react';
import { Calculator, Award, ArrowRight } from 'lucide-react';

export default function SpecificityCalculator() {
  const [selectorA, setSelectorA] = useState('div.card > a:hover');
  const [selectorB, setSelectorB] = useState('#main-nav a.active');

  // Calculates 4-tier tuple: (inline, id, class, element)
  const calculateSpecificity = (sel) => {
    let s = sel.trim();
    if (!s) return [0, 0, 0, 0];

    let ids = (s.match(/#[a-zA-Z0-9_-]+/g) || []).length;
    let classes = (s.match(/\.[a-zA-Z0-9_-]+/g) || []).length;
    let attrs = (s.match(/\[[^\]]+\]/g) || []).length;
    let pseudos = (s.match(/:[a-zA-Z0-9_-]+/g) || []).filter((p) => !p.startsWith('::')).length;
    let pseudoElements = (s.match(/::[a-zA-Z0-9_-]+/g) || []).length;

    // Strip out IDs, classes, attributes, pseudo elements/classes
    let stripped = s
      .replace(/#[a-zA-Z0-9_-]+/g, ' ')
      .replace(/\.[a-zA-Z0-9_-]+/g, ' ')
      .replace(/\[[^\]]+\]/g, ' ')
      .replace(/::?[a-zA-Z0-9_-]+/g, ' ')
      .replace(/[*+>~]/g, ' ');

    let elements = (stripped.match(/[a-zA-Z0-9_-]+/g) || []).length + pseudoElements;

    return [0, ids, classes + attrs + pseudos, elements];
  };

  const scoreA = calculateSpecificity(selectorA);
  const scoreB = calculateSpecificity(selectorB);

  const compareScores = () => {
    for (let i = 0; i < 4; i++) {
      if (scoreA[i] > scoreB[i]) return 'A';
      if (scoreB[i] > scoreA[i]) return 'B';
    }
    return 'Tie';
  };

  const winner = compareScores();

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center space-x-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <Calculator className="h-4 w-4 text-brand-500" />
        <h3 className="text-base font-bold text-zinc-900 dark:text-white">
          Interactive Specificity Calculator & Combat
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Selector A */}
        <div className={`p-4 rounded-xl border transition ${winner === 'A' ? 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20' : 'border-zinc-200 dark:border-zinc-800'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Selector A</span>
            {winner === 'A' && (
              <span className="flex items-center space-x-1 text-xs font-bold text-emerald-600">
                <Award className="h-3.5 w-3.5" />
                <span>Winner!</span>
              </span>
            )}
          </div>
          <input
            type="text"
            value={selectorA}
            onChange={(e) => setSelectorA(e.target.value)}
            className="w-full font-mono text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white"
          />
          <div className="mt-3 flex items-center space-x-3 text-xs font-mono">
            <span className="text-zinc-400">Score:</span>
            <span className="font-bold text-brand-600 dark:text-brand-400 text-sm">
              ({scoreA[0]}, {scoreA[1]}, {scoreA[2]}, {scoreA[3]})
            </span>
          </div>
        </div>

        {/* Selector B */}
        <div className={`p-4 rounded-xl border transition ${winner === 'B' ? 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20' : 'border-zinc-200 dark:border-zinc-800'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Selector B</span>
            {winner === 'B' && (
              <span className="flex items-center space-x-1 text-xs font-bold text-emerald-600">
                <Award className="h-3.5 w-3.5" />
                <span>Winner!</span>
              </span>
            )}
          </div>
          <input
            type="text"
            value={selectorB}
            onChange={(e) => setSelectorB(e.target.value)}
            className="w-full font-mono text-xs p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white"
          />
          <div className="mt-3 flex items-center space-x-3 text-xs font-mono">
            <span className="text-zinc-400">Score:</span>
            <span className="font-bold text-brand-600 dark:text-brand-400 text-sm">
              ({scoreB[0]}, {scoreB[1]}, {scoreB[2]}, {scoreB[3]})
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-500">
        <span className="font-bold text-zinc-700 dark:text-zinc-300">Format: </span>
        <span>(Inline, ID, Class/Attr/Pseudo-class, Element/Pseudo-element)</span>
      </div>
    </div>
  );
}
