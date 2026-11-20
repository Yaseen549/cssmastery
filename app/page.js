'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Sparkles,
  Layers,
  CheckCircle2,
  Sliders,
} from 'lucide-react';
import MacWindow from '../components/layout/MacWindow';
import Footer from '../components/layout/Footer';
import { categories, topics } from '../data/topics';
import { useProgress } from '../lib/useProgress';

export default function HomePage() {
  const { completedTopics, isLoaded } = useProgress();

  const progressPercent = isLoaded
    ? Math.round((completedTopics.length / topics.length) * 100)
    : 0;

  return (
    <MacWindow>
      <div className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-white via-zinc-50/50 to-white px-6 py-12 sm:px-12 sm:py-16 lg:px-16 dark:border-zinc-800 dark:from-surface-dark dark:via-surface-darkSurface/50 dark:to-surface-dark">
          <div className="mx-auto max-w-4xl text-center">
            {/* Friendly Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:border-brand-900/80 dark:bg-brand-950/60 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              <span>Clear & Simple · Modern CSS Guide</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
              Learn CSS the <span className="text-brand-600 dark:text-brand-400">Easy, Visual Way</span>
            </h1>

            {/* Subtitle: Zero Jargon */}
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Everything you need to style websites with confidence. Easy step-by-step lessons, live interactive previews, and practical code examples you can copy and use.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/topics/what-is-css"
                className="flex items-center space-x-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-600 hover:shadow-lg"
              >
                <BookOpen className="h-4 w-4" />
                <span>Start Learning</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/playground"
                className="flex items-center space-x-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-bold text-zinc-800 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                <FlaskConical className="h-4 w-4 text-brand-500" />
                <span>Open Playground</span>
              </Link>

              <Link
                href="/topics"
                className="flex items-center space-x-2 rounded-xl border border-zinc-200 bg-transparent px-4 py-2.5 text-sm font-semibold text-zinc-600 transition hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white"
              >
                <span>Browse All {topics.length} Lessons</span>
              </Link>
            </div>

            {/* Learning Progress Meter (if active) */}
            {isLoaded && completedTopics.length > 0 && (
              <div className="mx-auto mt-8 max-w-md rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-zinc-700 dark:text-zinc-300">Your Learning Progress</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400">
                    {completedTopics.length} / {topics.length} ({progressPercent}%)
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-amber-500 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">
                Step-by-Step Lessons
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                50 bite-sized lessons organized from the basics to modern styling with clean code.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
                <FlaskConical className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">
                Live Playground
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Write HTML and CSS in a side-by-side editor with instant live preview.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                <Sliders className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">
                Visual Tools
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Move sliders to easily see how padding, margins, flexbox, and grid work.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900 dark:text-white">
                Practice & Quizzes
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Test your understanding with quick questions and exercises in every lesson.
              </p>
            </div>
          </div>

          {/* Curriculum Category Matrix */}
          <div className="mt-14">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                  Lesson Categories
                </h2>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  Pick a topic to start learning with visual examples and live previews.
                </p>
              </div>

              <Link
                href="/topics"
                className="text-xs font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400"
              >
                View All Lessons →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, idx) => {
                const catTopics = topics.filter((t) => t.category === cat);
                const firstTopic = catTopics[0];

                return (
                  <div
                    key={cat}
                    className="flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-5 transition hover:border-brand-300 hover:shadow-md dark:border-zinc-800 dark:bg-surface-darkSurface dark:hover:border-brand-700"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                          Part {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                          {catTopics.length} Lessons
                        </span>
                      </div>
                      <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-white">
                        {cat}
                      </h3>
                      {firstTopic && (
                        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                          Starts with: {firstTopic.title}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                      {firstTopic ? (
                        <Link
                          href={`/topics/${firstTopic.slug}`}
                          className="flex items-center space-x-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
                        >
                          <span>Start Lesson</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ) : (
                        <span className="text-xs text-zinc-400">Coming soon</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </MacWindow>
  );
}
