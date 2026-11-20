'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RotateCw,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export default function CodeChallenge({
  exercise,
  index,
  slug,
  isCompleted = false,
  onToggleComplete = null,
}) {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const exerciseId = `${slug}-ex-${index}`;

  const handleTest = () => {
    const trimmed = code.trim();
    if (!trimmed) {
      setFeedback({
        type: 'error',
        message: 'Please write some CSS rules before testing.',
      });
      return;
    }

    // Basic structural validation for CSS
    const hasBraces = trimmed.includes('{') && trimmed.includes('}');
    const hasColon = trimmed.includes(':');
    const hasSemicolon = trimmed.includes(';');

    if (!hasBraces && !hasColon) {
      setFeedback({
        type: 'error',
        message: 'CSS rules require a selector, declaration block { ... }, and property: value declarations.',
      });
      return;
    }

    if (hasBraces && !hasSemicolon) {
      setFeedback({
        type: 'warning',
        message: 'Remember that each CSS declaration inside braces must terminate with a semicolon (;).',
      });
      return;
    }

    // Check if user included hints or task keywords if available
    let keywordHint = '';
    if (exercise.hint) {
      const match = exercise.hint.match(/`([^`]+)`/);
      if (match && !trimmed.toLowerCase().includes(match[1].toLowerCase().replace(/;/g, ''))) {
        keywordHint = ` Tip: Remember to utilize ${match[0]}.`;
      }
    }

    setFeedback({
      type: 'success',
      message: `Syntax validated successfully! Great implementation.${keywordHint}`,
    });

    if (onToggleComplete && !isCompleted) {
      onToggleComplete(exerciseId);
    }
  };

  const handleReset = () => {
    setCode('');
    setFeedback(null);
  };

  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-xs transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-surface-darkSurface dark:hover:border-zinc-700">
      {/* Exercise Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800/60">
        <div className="flex items-center space-x-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-100 font-mono text-xs font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {index + 1}
          </span>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
            {exercise.title}
          </h4>
        </div>

        <div className="flex items-center space-x-2">
          {onToggleComplete && (
            <button
              type="button"
              onClick={() => onToggleComplete(exerciseId)}
              className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                  : 'border border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
            >
              <CheckCircle2
                className={`h-3.5 w-3.5 ${
                  isCompleted ? 'text-emerald-600 fill-emerald-100 dark:fill-emerald-950' : 'text-zinc-400'
                }`}
              />
              <span>{isCompleted ? 'Solved' : 'Mark Solved'}</span>
            </button>
          )}

          <Link
            href="/playground"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 rounded-lg border border-zinc-200 px-2 py-1 text-xs font-medium text-zinc-500 hover:border-brand-300 hover:text-brand-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-brand-400"
            title="Experiment in full CSS Lab"
          >
            <span>CSS Lab</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Task Description */}
      <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
        {exercise.task}
      </p>

      {/* Interactive Code Editor Box */}
      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-900 dark:border-zinc-800">
        <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-1.5 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center space-x-1.5">
            <Code2 className="h-3.5 w-3.5 text-brand-400" />
            <span>Interactive CSS Input</span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition"
          >
            <RotateCw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="/* Enter your CSS rules or declarations here */&#10;.example {&#10;  property: value;&#10;}"
          rows={4}
          spellCheck={false}
          className="w-full resize-y bg-zinc-950 p-3 font-mono text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none"
        />

        <div className="flex items-center justify-between border-t border-zinc-800/80 bg-zinc-900/60 px-3 py-2">
          {exercise.hint ? (
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-1 text-[11px] font-semibold text-brand-400 hover:text-brand-300 transition"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>{showHint ? 'Hide Hint' : 'View Hint'}</span>
              {showHint ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handleTest}
            className="rounded-lg bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-2xs transition hover:bg-brand-600"
          >
            Verify Solution
          </button>
        </div>
      </div>

      {/* Hint Expandable Drawer */}
      {showHint && exercise.hint && (
        <div className="mt-3 rounded-xl border border-brand-200/80 bg-brand-50/70 p-3 text-xs text-brand-900 dark:border-brand-900/60 dark:bg-brand-950/40 dark:text-brand-300">
          <span className="font-bold">Hint: </span>
          {exercise.hint}
        </div>
      )}

      {/* Feedback Banner */}
      {feedback && (
        <div
          className={`mt-3 flex items-start space-x-2 rounded-xl p-3 text-xs ${
            feedback.type === 'success'
              ? 'border border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
              : feedback.type === 'warning'
              ? 'border border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200'
              : 'border border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200'
          }`}
        >
          {feedback.type === 'success' ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          ) : (
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
          )}
          <span>{feedback.message}</span>
        </div>
      )}
    </div>
  );
}
