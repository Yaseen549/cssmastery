'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, ChevronRight, Hash, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import { topics } from '../../data/topics';
import { propertiesCatalog } from '../../data/properties';
import { usePlatformShortcut } from '../../lib/usePlatformShortcut';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();
  const { modifierKey } = usePlatformShortcut();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const q = query.toLowerCase().trim();

  // Search matching topics
  const matchingTopics = q
    ? topics.filter((t) => {
        return (
          t.title.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          (t.shortDesc && t.shortDesc.toLowerCase().includes(q)) ||
          t.number.includes(q)
        );
      }).slice(0, 6)
    : topics.slice(0, 5);

  // Search matching properties
  const matchingProperties = q
    ? propertiesCatalog.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.syntax.toLowerCase().includes(q)
        );
      }).slice(0, 4)
    : [];

  const combinedResults = [
    ...matchingTopics.map((t) => ({ ...t, resultType: 'topic' })),
    ...matchingProperties.map((p) => ({ ...p, resultType: 'property' })),
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, combinedResults.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + combinedResults.length) % Math.max(1, combinedResults.length));
    } else if (e.key === 'Enter' && combinedResults[selectedIndex]) {
      e.preventDefault();
      const item = combinedResults[selectedIndex];
      if (item.resultType === 'topic') {
        router.push(`/topics/${item.slug}`);
      } else {
        router.push(`/reference`);
      }
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search CSS Topics and Properties"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl transition-all dark:border-zinc-800 dark:bg-zinc-900"
      >
        {/* Search Input Box */}
        <div className="flex items-center border-b border-zinc-200 px-4 dark:border-zinc-800">
          <Search className="h-4 w-4 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search 50 topics, properties, functions, selectors..."
            className="w-full bg-transparent px-3 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white dark:placeholder-zinc-500"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {combinedResults.length > 0 ? (
            <div className="space-y-1">
              {/* Topics Header if search is active */}
              {matchingTopics.length > 0 && q && (
                <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Curriculum Lessons ({matchingTopics.length})
                </div>
              )}

              {matchingTopics.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <Link
                    key={item.slug}
                    href={`/topics/${item.slug}`}
                    onClick={onClose}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                      isSelected
                        ? 'bg-brand-50 text-brand-900 dark:bg-brand-950/60 dark:text-brand-100'
                        : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/60'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 font-mono text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {item.number}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold truncate">{item.title}</span>
                          <span className="text-[10px] rounded px-1.5 py-0.5 bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                            {item.category}
                          </span>
                        </div>
                        {item.shortDesc && (
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-sm">
                            {item.shortDesc}
                          </p>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-400 shrink-0 ml-2" />
                  </Link>
                );
              })}

              {/* Properties Section */}
              {matchingProperties.length > 0 && (
                <>
                  <div className="mt-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-t border-zinc-100 pt-2 dark:border-zinc-800">
                    Properties Encyclopedia ({matchingProperties.length})
                  </div>
                  {matchingProperties.map((prop, pIdx) => {
                    const overallIdx = matchingTopics.length + pIdx;
                    const isSelected = overallIdx === selectedIndex;

                    return (
                      <Link
                        key={prop.name}
                        href="/reference"
                        onClick={onClose}
                        onMouseEnter={() => setSelectedIndex(overallIdx)}
                        className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                          isSelected
                            ? 'bg-brand-50 text-brand-900 dark:bg-brand-950/60 dark:text-brand-100'
                            : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/60'
                        }`}
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 font-mono text-xs font-bold text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                            CSS
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="font-mono font-bold text-brand-600 dark:text-brand-400 truncate">
                                {prop.name}
                              </span>
                              <span className="text-[10px] rounded px-1.5 py-0.5 bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                                {prop.category}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-sm">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-zinc-400 shrink-0 ml-2" />
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          ) : (
            <div className="py-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
              No matching CSS topics or properties found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Modal Footer Shortcut Hints */}
        <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center space-x-2">
            <span>Navigate:</span>
            <kbd className="rounded border border-zinc-300 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">
              ↑
            </kbd>
            <kbd className="rounded border border-zinc-300 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">
              ↓
            </kbd>
            <span>Select:</span>
            <kbd className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">
              ↵
            </kbd>
          </div>
          <div className="flex items-center space-x-1">
            <span>Close:</span>
            <kbd className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">
              ESC
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
