'use client';

import React, { useState } from 'react';
import { Eye, Sliders, X, Sparkles } from 'lucide-react';
import Sidebar from './Sidebar';
import RightWorkbench from './RightWorkbench';

export default function TopicLayout({
  children,
  demo,
  slug,
  category,
  sections = [],
}) {
  const [mobileWorkbenchOpen, setMobileWorkbenchOpen] = useState(false);

  return (
    <div className="relative flex flex-1 min-h-0 h-full w-full overflow-hidden bg-surface-canvas dark:bg-surface-dark">
      {/* 1. LEFT SIDEBAR (Sticky on desktop, independent scroll) */}
      <Sidebar className="hidden lg:flex" />

      {/* 2. CENTER: MAIN READING CANVAS (Independent Scrolling) */}
      <main
        id="reading-canvas"
        className="flex-1 min-w-0 h-full overflow-y-auto flex flex-col"
      >
        <div className="min-h-full flex flex-col justify-between">
          <div className="w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-8 py-6 lg:py-8 flex-1">
            {children}
          </div>
        </div>
      </main>

      {/* 3. RIGHT PANEL (Sticky on desktop, independent scroll if overflows) */}
      <RightWorkbench
        demo={demo}
        slug={slug}
        category={category}
        sections={sections}
        className="hidden xl:flex"
      />

      {/* 4. TABLET & MOBILE FLOATING TRIGGER BUTTON */}
      <div className="xl:hidden fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={() => setMobileWorkbenchOpen(true)}
          className="flex items-center space-x-2 rounded-full bg-brand-500 px-4 py-2.5 text-xs font-bold text-white shadow-xl shadow-brand-500/30 hover:bg-brand-600 transition hover:scale-105 active:scale-95"
        >
          <Sliders className="h-4 w-4" />
          <span>Interactive Demo & Controls</span>
        </button>
      </div>

      {/* 5. TABLET & MOBILE SLIDE-OUT WORKBENCH DRAWER */}
      {mobileWorkbenchOpen && (
        <div className="xl:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileWorkbenchOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="relative w-full max-w-md h-full bg-white dark:bg-surface-dark flex flex-col shadow-2xl z-10">
            {/* Drawer Top Header */}
            <div className="flex h-12 items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 bg-slate-50 dark:bg-surface-darkSurface">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                <span>Interactive Workbench</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileWorkbenchOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Embedded Workbench */}
            <div className="flex-1 min-h-0 overflow-hidden">
              <RightWorkbench
                demo={demo}
                slug={slug}
                category={category}
                sections={sections}
                className="w-full border-l-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
