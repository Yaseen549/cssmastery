'use client';

import React, { useState } from 'react';
import MacWindow from '../../components/layout/MacWindow';
import Footer from '../../components/layout/Footer';
import BoxModelVisualizer from '../../components/visualizers/BoxModelVisualizer';
import FlexboxPlayground from '../../components/visualizers/FlexboxPlayground';
import GridBuilder from '../../components/visualizers/GridBuilder';
import SpecificityCalculator from '../../components/visualizers/SpecificityCalculator';
import ColorOklchMixer from '../../components/visualizers/ColorOklchMixer';
import GradientGenerator from '../../components/visualizers/GradientGenerator';
import BorderRadiusEditor from '../../components/visualizers/BorderRadiusEditor';
import ShadowGenerator from '../../components/visualizers/ShadowGenerator';
import {
  Sparkles,
  Layers,
  LayoutGrid,
  Square,
  Palette,
  Calculator,
  SlidersHorizontal,
} from 'lucide-react';

const VISUALIZERS = [
  { id: 'all', label: 'All' },
  { id: 'box-model', label: 'Box Model' },
  { id: 'flexbox', label: 'Flexbox' },
  { id: 'grid', label: 'Grid' },
  { id: 'specificity', label: 'Selector Priority' },
  { id: 'oklch', label: 'Color Picker' },
  { id: 'gradient', label: 'Gradients' },
  { id: 'border-radius', label: 'Rounded Corners' },
  { id: 'shadow', label: 'Shadows' },
];

export default function VisualizersPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <MacWindow>
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
          <header className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              <Sparkles className="h-4 w-4" />
              <span>Interactive Visual Tools</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Interactive CSS Visualizers
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Move the sliders and toggle options to see how spacing, layouts, colors, and shadows work in real time.
            </p>

            {/* Filter Navigation Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {VISUALIZERS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActiveFilter(v.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    activeFilter === v.id
                      ? 'bg-brand-500 text-white shadow-2xs'
                      : 'border border-zinc-200 bg-white text-zinc-600 hover:border-brand-500 hover:text-brand-600 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </header>

          <div className="space-y-10">
            {(activeFilter === 'all' || activeFilter === 'box-model') && (
              <section id="box-model">
                <BoxModelVisualizer />
              </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'flexbox') && (
              <section id="flexbox">
                <FlexboxPlayground />
              </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'grid') && (
              <section id="grid">
                <GridBuilder />
              </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'specificity') && (
              <section id="specificity">
                <SpecificityCalculator />
              </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'oklch') && (
              <section id="oklch">
                <ColorOklchMixer />
              </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'gradient') && (
              <section id="gradient">
                <GradientGenerator />
              </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'border-radius') && (
              <section id="border-radius">
                <BorderRadiusEditor />
              </section>
            )}

            {(activeFilter === 'all' || activeFilter === 'shadow') && (
              <section id="shadow">
                <ShadowGenerator />
              </section>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </MacWindow>
  );
}
