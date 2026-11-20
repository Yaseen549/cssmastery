'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Code2,
  Sparkles,
  Bookmark,
  Check,
} from 'lucide-react';
import CodeBlock from './CodeBlock';
import EducationalTable from './EducationalTable';
import Callout from './Callout';
import TopicPagination from './TopicPagination';
import CssDemoSandbox from './CssDemoSandbox';
import QuizCard from './QuizCard';
import CodeChallenge from './CodeChallenge';

export default function LessonContent({
  lesson,
  highlightedCodes = {},
  prevTopic = null,
  nextTopic = null,
}) {
  if (!lesson) return null;

  return (
    <article className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-8 lg:px-12 xl:px-16 max-w-4xl xl:max-w-5xl w-full">
      {/* Breadcrumb Trail */}
      <div className="mb-4 flex items-center justify-between">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs text-zinc-400">
          <Link href="/" className="hover:text-brand-600 dark:hover:text-brand-400">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/topics" className="hover:text-brand-600 dark:hover:text-brand-400">
            Lessons
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-zinc-700 dark:text-zinc-200 truncate">
            Lesson {lesson.number}: {lesson.title}
          </span>
        </nav>
      </div>

      {/* Lesson Header */}
      <header className="mb-8 border-b border-zinc-200/80 pb-6 dark:border-zinc-800">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          <span>Topic #{lesson.number}</span>
          <span>·</span>
          <span>{lesson.category}</span>
          {lesson.badge && (
            <>
              <span>·</span>
              <span className="rounded bg-brand-50 px-1.5 py-0.5 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                {lesson.badge}
              </span>
            </>
          )}
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl font-sans dark:text-white">
          {lesson.title}
        </h1>
        {lesson.subtitle && (
          <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
            {lesson.subtitle}
          </p>
        )}
      </header>

      {/* Lesson Sections (Adhering to 18-part structure) */}
      <div className="space-y-10">
        {lesson.sections.map((section, sIdx) => {
          return (
            <section
              key={section.id || sIdx}
              id={section.id}
              className="scroll-mt-24 space-y-4"
            >
              {/* Section Heading */}
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center space-x-2">
                <span>{section.title}</span>
              </h2>

              {/* Lead Text */}
              {section.lead && (
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {section.lead}
                </p>
              )}

              {/* Paragraphs */}
              {section.paragraphs && (
                <div className="space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Syntax Display */}
              {section.syntax && (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100">
                  <code>{section.syntax}</code>
                  {section.syntaxNote && (
                    <p className="mt-2 text-xs font-sans text-zinc-500 dark:text-zinc-400">
                      {section.syntaxNote}
                    </p>
                  )}
                </div>
              )}

              {/* Table Breakdown */}
              {section.table && (
                <EducationalTable
                  headers={section.table.headers}
                  rows={section.table.rows}
                  caption={section.table.caption}
                />
              )}

              {/* Code Example */}
              {section.code && (
                <CodeBlock
                  code={section.code}
                  html={highlightedCodes[section.id]}
                  language={section.codeLang || 'css'}
                  title={section.codeTitle}
                />
              )}

              {/* In-flow Demo Sandbox (for smaller screens or explicit placement) */}
              {section.demo && (
                <div className="xl:hidden my-6">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Live Output
                  </div>
                  <CssDemoSandbox demo={section.demo} slug={lesson.slug} />
                </div>
              )}

              {/* Bulleted List */}
              {section.items && (
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Callouts */}
              {section.callout && (
                <Callout
                  type={section.callout.type || 'note'}
                  title={section.callout.title}
                >
                  {section.callout.content}
                </Callout>
              )}
            </section>
          );
        })}

        {/* Practice Exercises Section */}
        {lesson.exercises && lesson.exercises.length > 0 && (
          <section id="exercises" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-brand-500" />
              <span>Practice Exercises</span>
            </h2>
            <div className="space-y-4">
              {lesson.exercises.map((ex, exIdx) => (
                <CodeChallenge
                  key={exIdx}
                  exercise={ex}
                  index={exIdx}
                  slug={lesson.slug}
                />
              ))}
            </div>
          </section>
        )}

        {/* Knowledge Check Quiz Card */}
        {lesson.quiz && (
          <QuizCard
            questions={lesson.quiz}
            slug={lesson.slug}
          />
        )}
      </div>

      {/* Topic Pagination */}
      <TopicPagination prevTopic={prevTopic} nextTopic={nextTopic} />
    </article>
  );
}
