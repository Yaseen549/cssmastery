'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CheckCircle2,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  BookOpen,
} from 'lucide-react';
import { categories, topics } from '../../data/topics';

export default function Sidebar({ className = '', onSelectTopic = null }) {
  const pathname = usePathname();
  const [filterQuery, setFilterQuery] = useState('');
  const activeLinkRef = useRef(null);

  // Find the category containing the current active lesson
  const currentTopic = topics.find((t) => `/topics/${t.slug}` === pathname);
  const activeCategory = currentTopic?.category || categories[0];

  // Track expanded categories (default active category expanded, others collapsed for compact viewing)
  const [expandedCategories, setExpandedCategories] = useState(() => {
    const initial = {};
    categories.forEach((cat) => {
      initial[cat] = cat === activeCategory;
    });
    return initial;
  });

  // When pathname changes, ensure active category is expanded
  useEffect(() => {
    if (activeCategory) {
      setExpandedCategories((prev) => ({
        ...prev,
        [activeCategory]: true,
      }));
    }
  }, [activeCategory]);

  // Scroll active link into view inside sidebar on mount/navigation
  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [pathname]);

  const toggleCategory = (cat) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const toggleAll = () => {
    const allExpanded = categories.every((cat) => expandedCategories[cat]);
    const nextState = {};
    categories.forEach((cat) => {
      nextState[cat] = !allExpanded;
    });
    setExpandedCategories(nextState);
  };

  // Filter topics based on query
  const filteredTopics = filterQuery.trim()
    ? topics.filter(
        (t) =>
          t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
          t.slug.toLowerCase().includes(filterQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(filterQuery.toLowerCase()) ||
          t.number.includes(filterQuery)
      )
    : topics;

  // Group filtered topics
  const grouped = categories.reduce((acc, cat) => {
    const matched = filteredTopics.filter((t) => t.category === cat);
    if (matched.length > 0) acc[cat] = matched;
    return acc;
  }, {});

  return (
    <aside
      aria-label="Curriculum Navigation Sidebar"
      className={`w-64 xl:w-72 shrink-0 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-surface-dark flex flex-col h-full min-h-0 overflow-hidden select-none ${className}`}
    >
      {/* 1. STICKY NON-HIDING SEARCH BAR ON TOP */}
      <div className="sticky top-0 z-20 bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 p-3 space-y-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search 50 CSS lessons..."
            aria-label="Filter CSS lessons"
            className="w-full rounded-md border border-slate-200 bg-slate-50 pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-500"
          />
        </div>

        {/* Quick Toolbar: Topics count & Expand/Collapse All */}
        <div className="flex items-center justify-between text-[10.5px] font-semibold text-slate-400 dark:text-slate-500 px-0.5">
          <span className="font-mono">{filteredTopics.length} Lessons</span>
          <button
            type="button"
            onClick={toggleAll}
            className="flex items-center space-x-1 hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            <ChevronsUpDown className="h-3 w-3" />
            <span>Toggle All</span>
          </button>
        </div>
      </div>

      {/* 2. CATEGORIZED LESSONS LIST WITH INDEPENDENT SCROLLING */}
      <nav className="flex-1 min-h-0 overflow-y-auto p-2 space-y-2 text-xs">
        {Object.entries(grouped).map(([category, items]) => {
          // If searching, keep all matching categories expanded
          const isExpanded = filterQuery.trim() ? true : expandedCategories[category];
          const hasActiveLesson = items.some((t) => `/topics/${t.slug}` === pathname);

          return (
            <div
              key={category}
              className="rounded-lg border border-transparent transition-colors"
            >
              {/* Category Accordion Header */}
              <button
                type="button"
                onClick={() => toggleCategory(category)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left transition ${
                  hasActiveLesson
                    ? 'text-brand-700 dark:text-brand-300 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center space-x-1.5 min-w-0 pr-1">
                  {isExpanded ? (
                    <ChevronDown className="h-3 w-3 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
                  )}
                  <span className="text-[11px] uppercase tracking-wider font-bold truncate">
                    {category}
                  </span>
                </div>
                <span className="text-[9.5px] font-mono rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.2 text-slate-500 shrink-0">
                  {items.length}
                </span>
              </button>

              {/* Collapsible Category Items */}
              {isExpanded && (
                <div className="pl-2 pr-1 pt-0.5 space-y-0.5 border-l border-slate-100 dark:border-slate-800/80 ml-3 mt-0.5">
                  {items.map((topic) => {
                    const href = `/topics/${topic.slug}`;
                    const isActive = pathname === href;

                    return (
                      <Link
                        key={topic.slug}
                        href={href}
                        ref={isActive ? activeLinkRef : null}
                        onClick={() => onSelectTopic && onSelectTopic()}
                        className={`group flex items-center justify-between rounded-md px-2 py-1.5 text-xs transition-colors ${
                          isActive
                            ? 'bg-brand-50 font-bold text-brand-600 dark:bg-brand-950/70 dark:text-brand-400 border-l-2 border-brand-500'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center space-x-2 min-w-0">
                          <span
                            className={`font-mono text-[10px] ${
                              isActive ? 'text-brand-600 dark:text-brand-400 font-bold' : 'text-slate-400'
                            }`}
                          >
                            {topic.number}
                          </span>
                          <span className="truncate">{topic.title}</span>
                        </div>

                        {topic.badge ? (
                          <span className="text-[9px] rounded px-1 py-0.2 bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 group-hover:text-brand-500">
                            {topic.badge}
                          </span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
