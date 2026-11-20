'use client';

import React, { useState, useEffect } from 'react';
import { Sliders, RotateCcw, Calculator, Sparkles } from 'lucide-react';

export default function ContextualWorkbenchControls({
  slug = '',
  category = '',
  onChange,
  onReset,
}) {
  const isFlexbox =
    slug.includes('flex') || category.toLowerCase().includes('flexbox');
  const isGrid =
    slug.includes('grid') || category.toLowerCase().includes('grid');
  const isBoxModel =
    slug.includes('box-model') ||
    slug.includes('box-sizing') ||
    slug.includes('margin') ||
    category.toLowerCase().includes('box model');
  const isSelectors =
    slug.includes('selector') ||
    slug.includes('cascade') ||
    slug.includes('specificity') ||
    category.toLowerCase().includes('selectors') ||
    category.toLowerCase().includes('cascade');
  const isColors =
    slug.includes('color') ||
    slug.includes('gradient') ||
    category.toLowerCase().includes('colors');
  const isTransforms =
    slug.includes('transform') ||
    slug.includes('transition') ||
    slug.includes('animation') ||
    category.toLowerCase().includes('transforms');

  // Flexbox state
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [flexWrap, setFlexWrap] = useState('nowrap');
  const [flexGap, setFlexGap] = useState(12);

  // Grid state
  const [gridColumns, setGridColumns] = useState('repeat(3, 1fr)');
  const [gridGap, setGridGap] = useState(14);
  const [gridAlign, setGridAlign] = useState('stretch');

  // Box Model state
  const [boxSizing, setBoxSizing] = useState('border-box');
  const [padding, setPadding] = useState(16);
  const [borderWidth, setBorderWidth] = useState(3);
  const [margin, setMargin] = useState(16);

  // Selectors / Specificity State
  const [selectorInput, setSelectorInput] = useState('div.card > a:hover');

  // Color / Gradient state
  const [gradientAngle, setGradientAngle] = useState(135);
  const [color1, setColor1] = useState('#2563eb');
  const [color2, setColor2] = useState('#06b6d4');

  // Transform state
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);

  // Emit updated CSS rule based on active controls
  useEffect(() => {
    let generatedCss = '';

    if (isFlexbox) {
      generatedCss = `
.flex-container, .navbar, .card-row, .container, .demo-container, .box-row {
  display: flex !important;
  flex-direction: ${flexDirection} !important;
  justify-content: ${justifyContent} !important;
  align-items: ${alignItems} !important;
  flex-wrap: ${flexWrap} !important;
  gap: ${flexGap}px !important;
}`;
    } else if (isGrid) {
      generatedCss = `
.grid-container, .card-grid, .grid, .demo-grid, .container {
  display: grid !important;
  grid-template-columns: ${gridColumns} !important;
  gap: ${gridGap}px !important;
  align-items: ${gridAlign} !important;
}`;
    } else if (isBoxModel) {
      generatedCss = `
.demo-box, .box, .card, .element {
  box-sizing: ${boxSizing} !important;
  padding: ${padding}px !important;
  border-width: ${borderWidth}px !important;
  margin: ${margin}px !important;
}`;
    } else if (isColors) {
      generatedCss = `
.gradient-box, .color-swatch, .card, .demo-box {
  background: linear-gradient(${gradientAngle}deg, ${color1}, ${color2}) !important;
}`;
    } else if (isTransforms) {
      generatedCss = `
.box, .card, .demo-box, .pulse-button, .animated-card {
  transform: rotate(${rotate}deg) scale(${scale}) !important;
  transition: transform 0.2s ease !important;
}`;
    }

    if (onChange) onChange(generatedCss);
  }, [
    isFlexbox,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    flexGap,
    isGrid,
    gridColumns,
    gridGap,
    gridAlign,
    isBoxModel,
    boxSizing,
    padding,
    borderWidth,
    margin,
    isColors,
    gradientAngle,
    color1,
    color2,
    isTransforms,
    rotate,
    scale,
    onChange,
  ]);

  const handleResetControls = () => {
    setFlexDirection('row');
    setJustifyContent('flex-start');
    setAlignItems('stretch');
    setFlexWrap('nowrap');
    setFlexGap(12);

    setGridColumns('repeat(3, 1fr)');
    setGridGap(14);
    setGridAlign('stretch');

    setBoxSizing('border-box');
    setPadding(16);
    setBorderWidth(3);
    setMargin(16);

    setSelectorInput('div.card > a:hover');

    setGradientAngle(135);
    setColor1('#2563eb');
    setColor2('#06b6d4');

    setRotate(0);
    setScale(1);

    if (onReset) onReset();
  };

  // Specificity tuple computation for selectors
  const computeTuple = (sel) => {
    let s = sel.trim();
    if (!s) return [0, 0, 0, 0];
    let ids = (s.match(/#[a-zA-Z0-9_-]+/g) || []).length;
    let classes = (s.match(/\.[a-zA-Z0-9_-]+/g) || []).length;
    let attrs = (s.match(/\[[^\]]+\]/g) || []).length;
    let pseudos = (s.match(/:[a-zA-Z0-9_-]+/g) || []).filter(
      (p) => !p.startsWith('::')
    ).length;
    let pseudoElements = (s.match(/::[a-zA-Z0-9_-]+/g) || []).length;
    let stripped = s
      .replace(/#[a-zA-Z0-9_-]+/g, ' ')
      .replace(/\.[a-zA-Z0-9_-]+/g, ' ')
      .replace(/\[[^\]]+\]/g, ' ')
      .replace(/::?[a-zA-Z0-9_-]+/g, ' ')
      .replace(/[*+>~]/g, ' ');
    let elements = (stripped.match(/[a-zA-Z0-9_-]+/g) || []).length + pseudoElements;
    return [0, ids, classes + attrs + pseudos, elements];
  };

  // If no contextual controls apply to this specific topic, don't show irrelevant noise
  if (!isFlexbox && !isGrid && !isBoxModel && !isSelectors && !isColors && !isTransforms) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs dark:border-slate-800 dark:bg-surface-darkSurface/90 space-y-3.5">
      {/* Controls Section Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
          <Sliders className="h-3.5 w-3.5 text-brand-500" />
          <span>Quick Controls</span>
        </div>
        <button
          type="button"
          onClick={handleResetControls}
          title="Reset Controls"
          className="flex items-center space-x-1 text-[10.5px] font-medium text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* 1. FLEXBOX CONTROLS */}
      {isFlexbox && (
        <div className="space-y-3 text-xs">
          <div>
            <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              flex-direction:
            </span>
            <div className="grid grid-cols-3 gap-1">
              {['row', 'column', 'row-reverse'].map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => setFlexDirection(dir)}
                  className={`py-1 rounded text-[11px] font-mono font-medium transition ${
                    flexDirection === dir
                      ? 'bg-brand-500 text-white font-bold'
                      : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {dir}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              justify-content:
            </span>
            <select
              value={justifyContent}
              onChange={(e) => setJustifyContent(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-slate-50 p-1.5 text-xs font-mono dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
              <option value="flex-end">flex-end</option>
            </select>
          </div>

          <div>
            <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              align-items:
            </span>
            <select
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-slate-50 p-1.5 text-xs font-mono dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="stretch">stretch</option>
              <option value="center">center</option>
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>gap:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{flexGap}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="32"
              value={flexGap}
              onChange={(e) => setFlexGap(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>
        </div>
      )}

      {/* 2. GRID CONTROLS */}
      {isGrid && (
        <div className="space-y-3 text-xs">
          <div>
            <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              grid-template-columns:
            </span>
            <select
              value={gridColumns}
              onChange={(e) => setGridColumns(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-slate-50 p-1.5 text-xs font-mono dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="repeat(3, 1fr)">repeat(3, 1fr)</option>
              <option value="repeat(2, 1fr)">repeat(2, 1fr)</option>
              <option value="1fr 2fr">1fr 2fr</option>
              <option value="repeat(auto-fit, minmax(80px, 1fr))">auto-fit minmax(80px, 1fr)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>gap:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{gridGap}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="36"
              value={gridGap}
              onChange={(e) => setGridGap(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              align-items:
            </span>
            <select
              value={gridAlign}
              onChange={(e) => setGridAlign(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-slate-50 p-1.5 text-xs font-mono dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="stretch">stretch</option>
              <option value="start">start</option>
              <option value="center">center</option>
              <option value="end">end</option>
            </select>
          </div>
        </div>
      )}

      {/* 3. BOX MODEL CONTROLS */}
      {isBoxModel && (
        <div className="space-y-3 text-xs">
          <div>
            <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              box-sizing:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {['border-box', 'content-box'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setBoxSizing(mode)}
                  className={`py-1 rounded text-[11px] font-mono transition ${
                    boxSizing === mode
                      ? 'bg-brand-500 text-white font-bold'
                      : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>padding:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{padding}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="36"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>border-width:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{borderWidth}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="16"
              value={borderWidth}
              onChange={(e) => setBorderWidth(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>margin:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{margin}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="36"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>
        </div>
      )}

      {/* 4. SELECTORS / SPECIFICITY CONTROLS */}
      {isSelectors && (
        <div className="space-y-3 text-xs">
          <div>
            <label
              htmlFor="selector-tester"
              className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1"
            >
              Test Selector Specificity:
            </label>
            <input
              id="selector-tester"
              type="text"
              value={selectorInput}
              onChange={(e) => setSelectorInput(e.target.value)}
              placeholder="e.g. #hero .button:hover"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="rounded-lg bg-slate-50 dark:bg-slate-900/60 p-2 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between text-[11px] mb-1 font-semibold text-slate-500">
              <span>Specificity Tuple:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">
                ({computeTuple(selectorInput).join(', ')})
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
              <div className="bg-white dark:bg-slate-800 p-1 rounded border border-slate-200 dark:border-slate-700">
                <span className="block text-slate-400">Inline</span>
                <span className="font-bold">{computeTuple(selectorInput)[0]}</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-1 rounded border border-slate-200 dark:border-slate-700">
                <span className="block text-slate-400">ID</span>
                <span className="font-bold">{computeTuple(selectorInput)[1]}</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-1 rounded border border-slate-200 dark:border-slate-700">
                <span className="block text-slate-400">Class</span>
                <span className="font-bold">{computeTuple(selectorInput)[2]}</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-1 rounded border border-slate-200 dark:border-slate-700">
                <span className="block text-slate-400">Element</span>
                <span className="font-bold">{computeTuple(selectorInput)[3]}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. COLOR & GRADIENT CONTROLS */}
      {isColors && (
        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>Gradient Angle:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{gradientAngle}&deg;</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={gradientAngle}
              onChange={(e) => setGradientAngle(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="block text-[11px] text-slate-400 mb-1">Color 1:</span>
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="h-7 w-full cursor-pointer rounded border border-slate-200 bg-transparent p-0"
              />
            </div>
            <div>
              <span className="block text-[11px] text-slate-400 mb-1">Color 2:</span>
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="h-7 w-full cursor-pointer rounded border border-slate-200 bg-transparent p-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* 6. TRANSFORMS & ANIMATIONS */}
      {isTransforms && (
        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>rotate:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{rotate}&deg;</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              value={rotate}
              onChange={(e) => setRotate(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <span>scale:</span>
              <span className="font-mono text-brand-600 dark:text-brand-400">{scale}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="1.5"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}
