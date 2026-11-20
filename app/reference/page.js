'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Layers,
  Filter,
  CheckCircle2,
  XCircle,
  Code2,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import MacWindow from '../../components/layout/MacWindow';
import Footer from '../../components/layout/Footer';
import { propertiesCatalog, propertyCategories } from '../../data/properties';

export default function PropertiesReferencePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = propertiesCatalog.filter((prop) => {
    const matchesCat = selectedCategory === 'All' || prop.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      prop.name.toLowerCase().includes(q) ||
      prop.description.toLowerCase().includes(q) ||
      prop.syntax.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <MacWindow>
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              <Layers className="h-4 w-4" />
              <span>Quick Reference</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              CSS Property Reference
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
              Quickly look up common CSS properties, what they do, and simple code examples you can copy.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="my-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search property name, syntax, or keyword..."
                className="w-full rounded-xl border border-zinc-200 bg-white py-2 pl-9 pr-4 text-xs text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-zinc-800 dark:bg-surface-darkSurface dark:text-white dark:placeholder-zinc-500"
              />
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-zinc-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-surface-darkSurface dark:text-zinc-200"
              >
                {propertyCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            Showing {filtered.length} of {propertiesCatalog.length} properties
          </div>

          {/* Properties Grid */}
          <div className="space-y-4">
            {filtered.map((prop) => (
              <div
                key={prop.name}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition hover:border-brand-300 dark:border-zinc-800 dark:bg-surface-darkSurface dark:hover:border-brand-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800/60">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-mono text-base font-bold text-brand-600 dark:text-brand-400">
                      {prop.name}
                    </h3>
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {prop.category}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs">
                    <span className="text-zinc-400">Inherited:</span>
                    {prop.inherited ? (
                      <span className="inline-flex items-center space-x-1 font-semibold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Yes</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 font-semibold text-zinc-500 dark:text-zinc-400">
                        <XCircle className="h-3.5 w-3.5" />
                        <span>No</span>
                      </span>
                    )}

                    <span className="text-zinc-300 dark:text-zinc-700">|</span>

                    <span className="text-zinc-400">Initial:</span>
                    <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {prop.initial}
                    </code>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {prop.description}
                </p>

                <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-2.5 font-mono text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
                  <span className="text-zinc-400 select-none">syntax: </span>
                  <code>{prop.syntax}</code>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="py-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
                No CSS properties matched your search. Try searching &ldquo;grid&rdquo;, &ldquo;flex&rdquo;, or &ldquo;color&rdquo;.
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </MacWindow>
  );
}
