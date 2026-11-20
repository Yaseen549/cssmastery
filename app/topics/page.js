'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Search, CheckCircle2, ChevronRight, Sparkles, Filter } from 'lucide-react';
import MacWindow from '../../components/layout/MacWindow';
import Footer from '../../components/layout/Footer';
import { categories, topics } from '../../data/topics';

export default function TopicsCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = topics.filter((t) => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.shortDesc && t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <MacWindow>
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              <BookOpen className="h-4 w-4" />
              <span>CSS Lessons</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              All CSS Lessons
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
              Browse all {topics.length} lessons with visual examples, interactive previews, and quick quizzes.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="my-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter topics by name, concept, or category..."
                className="w-full rounded-xl border border-zinc-200 bg-white py-2 pl-9 pr-4 text-xs text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:outline-none dark:border-zinc-800 dark:bg-surface-darkSurface dark:text-white dark:placeholder-zinc-500"
              />
            </div>

            {/* Category Dropdown Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-zinc-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-surface-darkSurface dark:text-zinc-200"
              >
                <option value="All">All Categories ({topics.length})</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Topics Cards List */}
          <div className="space-y-3">
            {filteredTopics.map((topic) => {
              return (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl border border-zinc-200/80 bg-white p-4 transition hover:border-brand-300 hover:shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface dark:hover:border-brand-700"
                >
                  <div className="flex items-start space-x-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 font-mono text-xs font-bold text-zinc-600 group-hover:bg-brand-500 group-hover:text-white transition dark:bg-zinc-800 dark:text-zinc-400">
                      {topic.number}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-zinc-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 transition">
                          {topic.title}
                        </h3>
                        {topic.badge && (
                          <span className="rounded bg-brand-50 px-1.5 py-0.5 text-[10px] font-bold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                            {topic.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        {topic.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-0 flex items-center justify-between sm:justify-end space-x-3 text-xs text-zinc-400">
                    <span className="text-[11px] rounded bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                      {topic.category}
                    </span>
                    <span className="text-[11px] font-mono">{topic.readTime}</span>
                    <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-brand-500 transition" />
                  </div>
                </Link>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="py-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
                No topics matched your search criteria.
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </MacWindow>
  );
}
