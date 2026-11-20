'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Eye,
  Bookmark,
  Sparkles,
  Sliders,
  ExternalLink,
  RotateCw,
  Code2,
  Copy,
  Check,
  ChevronRight,
} from 'lucide-react';
import CssDemoSandbox from '../learning/CssDemoSandbox';
import ContextualWorkbenchControls from './ContextualWorkbenchControls';

export default function RightWorkbench({
  demo,
  slug = '',
  category = '',
  sections = [],
  className = '',
}) {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'toc'
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id || '');
  const [injectedCss, setInjectedCss] = useState('');
  const [copied, setCopied] = useState(false);

  // Combine original demo CSS with contextual controls override
  const augmentedDemo = useMemo(() => {
    if (!demo) return null;
    return {
      ...demo,
      css: `${demo.css || ''}\n/* User Contextual Controls Injected CSS */\n${injectedCss}`,
    };
  }, [demo, injectedCss]);

  // Scroll-spy observer for "On This Page"
  useEffect(() => {
    if (sections.length === 0) return;

    const scrollContainer = document.getElementById('reading-canvas');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        root: scrollContainer || null,
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSectionId(id);
    }
  };

  const handleCopyAugmentedCss = async () => {
    if (!augmentedDemo) return;
    await navigator.clipboard.writeText(augmentedDemo.css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside
      aria-label="Interactive Demonstration & Navigation Panel"
      className={`w-80 xl:w-[380px] shrink-0 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark flex flex-col h-full min-h-0 overflow-hidden select-none ${className}`}
    >
      {/* 1. TOP WORKBENCH TAB BAR (Sticky on top of panel) */}
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark px-3 py-2.5">
        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition ${activeTab === 'demo'
              ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300 shadow-2xs'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
          >
            <Eye className="h-3.5 w-3.5 text-brand-500" />
            <span>Live Demo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('toc')}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition ${activeTab === 'toc'
              ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300 shadow-2xs'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
          >
            <Bookmark className="h-3.5 w-3.5 text-brand-500" />
            <span>On This Page</span>
          </button>
        </div>

        <span className="flex items-center space-x-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
          <Sparkles className="h-3 w-3 text-brand-500" />
          <span>Live Preview</span>
        </span>
      </div>

      {/* 2. WORKBENCH SCROLLING BODY */}
      <div className="flex-1 min-h-0 overflow-y-auto p-3.5 space-y-4">
        {activeTab === 'demo' ? (
          <div className="space-y-4">
            {/* Live Preview Sandbox */}
            {augmentedDemo ? (
              <CssDemoSandbox
                demo={augmentedDemo}
                slug={slug}
              />
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-800 p-8 text-center text-xs text-slate-400">
                Interactive preview visualizer active.
              </div>
            )}

            {/* Contextual Topic-Specific Controls */}
            <ContextualWorkbenchControls
              slug={slug}
              category={category}
              onChange={setInjectedCss}
              onReset={() => setInjectedCss('')}
            />

            {/* Quick Action: Open in Full Playground */}
            <div className="rounded-xl border border-blue-200/80 bg-blue-50/60 p-3 dark:border-blue-900/60 dark:bg-blue-950/40 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-200">
                    Want to try this code?
                  </h4>
                  <p className="text-[11px] text-blue-700 dark:text-blue-400 mt-0.5">
                    Open this example in the live Playground to edit and experiment.
                  </p>
                </div>
              </div>
              <Link
                href={`/playground?template=${slug.includes('grid')
                  ? 'css-grid-layout'
                  : slug.includes('flex')
                    ? 'flexbox-layout'
                    : slug.includes('animation')
                      ? 'css-animations'
                      : slug.includes('gradient')
                        ? 'gradient-generator'
                        : 'hello-world'
                  }`}
                className="mt-2.5 inline-flex w-full items-center justify-center space-x-1.5 rounded-lg bg-brand-500 py-1.5 text-xs font-bold text-white hover:bg-brand-600 transition shadow-2xs"
              >
                <span>Experiment in Playground</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        ) : (
          /* "On This Page" Table of Contents */
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Lesson Sections ({sections.length})
              </span>
            </div>

            <nav aria-label="Table of Contents" className="space-y-1">
              {sections.map((sec, idx) => {
                const isCurrent = activeSectionId === sec.id;
                return (
                  <button
                    key={sec.id || idx}
                    type="button"
                    onClick={() => scrollToHeading(sec.id)}
                    className={`w-full group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition ${isCurrent
                      ? 'bg-brand-50 font-bold text-brand-700 dark:bg-brand-950/70 dark:text-brand-300 border-l-2 border-brand-500'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200'
                      }`}
                  >
                    <span className="truncate pr-2">{sec.title}</span>
                    <ChevronRight
                      className={`h-3 w-3 shrink-0 transition-transform ${isCurrent
                        ? 'text-brand-500 translate-x-0.5'
                        : 'text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100'
                        }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </aside>
  );
}
