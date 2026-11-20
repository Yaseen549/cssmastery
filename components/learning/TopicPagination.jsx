import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TopicPagination({ prevTopic, nextTopic }) {
  return (
    <nav
      aria-label="Topic Pagination"
      className="mt-12 flex flex-col gap-4 border-t border-zinc-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800"
    >
      {/* Previous Topic */}
      {prevTopic ? (
        <Link
          href={`/topics/${prevTopic.slug}`}
          className="group flex flex-1 items-center space-x-3 rounded-xl border border-zinc-200/80 p-4 transition hover:border-brand-300 hover:bg-brand-50/40 dark:border-zinc-800 dark:hover:border-brand-700/60 dark:hover:bg-brand-950/20"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-400">
            <ChevronLeft className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-400">
              Previous Lesson
            </span>
            <span className="block truncate text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {prevTopic.number}. {prevTopic.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {/* Next Topic */}
      {nextTopic ? (
        <Link
          href={`/topics/${nextTopic.slug}`}
          className="group flex flex-1 items-center justify-between space-x-3 rounded-xl border border-zinc-200/80 p-4 text-right transition hover:border-brand-300 hover:bg-brand-50/40 dark:border-zinc-800 dark:hover:border-brand-700/60 dark:hover:bg-brand-950/20"
        >
          <div className="min-w-0 flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-400">
              Next Lesson
            </span>
            <span className="block truncate text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {nextTopic.number}. {nextTopic.title}
            </span>
          </div>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-400">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
