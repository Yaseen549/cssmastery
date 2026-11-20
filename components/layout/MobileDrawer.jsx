'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Search, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import Logo from '../ui/Logo';
import { categories, topics } from '../../data/topics';
import { useProgress } from '../../lib/useProgress';

export default function MobileDrawer({ isOpen, onClose, onOpenSearch }) {
  const pathname = usePathname();
  const { isTopicCompleted } = useProgress();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-2xl transition-all dark:bg-surface-dark">
        {/* Drawer Header */}
        <div className="flex h-14 items-center justify-between border-b border-zinc-200/80 px-4 dark:border-zinc-800">
          <Logo size="sm" />
          <button
            onClick={onClose}
            type="button"
            aria-label="Close navigation drawer"
            className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Action Bar */}
        <div className="p-3 border-b border-zinc-200/80 dark:border-zinc-800">
          <button
            onClick={onOpenSearch}
            type="button"
            className="flex w-full items-center space-x-2 rounded-xl border border-zinc-200/80 bg-zinc-50 px-3 py-2 text-xs text-zinc-500 dark:border-zinc-700/80 dark:bg-zinc-800 dark:text-zinc-400"
          >
            <Search className="h-4 w-4" />
            <span>Search CSS topics...</span>
          </button>
        </div>

        {/* Drawer Content: Topic Categories & Links */}
        <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto p-3 space-y-6">
          {categories.map((category) => {
            const catTopics = topics.filter((t) => t.category === category);
            if (catTopics.length === 0) return null;

            return (
              <div key={category} className="space-y-1">
                <h4 className="px-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {category}
                </h4>
                <div className="space-y-0.5">
                  {catTopics.map((topic) => {
                    const isActive = pathname === `/topics/${topic.slug}`;
                    const completed = isTopicCompleted(topic.slug);

                    return (
                      <Link
                        key={topic.slug}
                        href={`/topics/${topic.slug}`}
                        onClick={onClose}
                        className={`flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${
                          isActive
                            ? 'border-l-2 border-brand-500 bg-brand-50 font-semibold text-brand-700 shadow-2xs dark:bg-brand-950/60 dark:text-brand-300'
                            : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center space-x-2 min-w-0">
                          <span className="font-mono text-[10px] text-zinc-400">
                            {topic.number}
                          </span>
                          <span className="truncate">{topic.title}</span>
                        </div>
                        {completed && (
                          <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
