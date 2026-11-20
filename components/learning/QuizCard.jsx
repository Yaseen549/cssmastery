'use client';

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCw, Award } from 'lucide-react';

export default function QuizCard({
  questions = [],
  slug = '',
  onComplete = null,
}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) return null;

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (onComplete) {
      onComplete(calculateScore(), questions.length);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="my-8 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-surface-darkSurface">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-200/80 pb-3 dark:border-zinc-800">
        <div className="flex items-center space-x-2">
          <HelpCircle className="h-5 w-5 text-brand-500" />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Quick Quiz
          </h3>
        </div>
        <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
          {questions.length} Questions
        </span>
      </div>

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const isSelected = selectedAnswers[qIdx] !== undefined;
          const isCorrect = selectedAnswers[qIdx] === q.correctAnswer;

          return (
            <div key={qIdx} className="space-y-3">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {qIdx + 1}. {q.question}
              </p>

              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  const isChoice = selectedAnswers[qIdx] === oIdx;
                  let optStyle =
                    'border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300';

                  if (isChoice && !submitted) {
                    optStyle =
                      'border-brand-500 bg-brand-50/60 dark:bg-brand-950/40 text-brand-900 dark:text-brand-200';
                  } else if (submitted) {
                    if (oIdx === q.correctAnswer) {
                      optStyle =
                        'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium';
                    } else if (isChoice && !isCorrect) {
                      optStyle =
                        'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      className={`flex w-full items-center justify-between rounded-xl border p-3 text-left text-xs transition ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && oIdx === q.correctAnswer && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 ml-2" />
                      )}
                      {submitted && isChoice && !isCorrect && (
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && q.explanation && (
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-200/60 dark:border-zinc-800">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">Explanation:</span>{' '}
                  {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Actions */}
      <div className="mt-6 flex items-center justify-between border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={handleSubmit}
            className="flex items-center space-x-1.5 rounded-xl bg-brand-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Submit Answers</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        ) : (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-bold text-zinc-900 dark:text-white">
                Score: {score} / {questions.length} (
                {Math.round((score / questions.length) * 100)}%)
              </span>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center space-x-1 rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <RotateCw className="h-3.5 w-3.5" />
              <span>Retry</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
