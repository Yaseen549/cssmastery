import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles, BookOpen, FlaskConical, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 px-4 py-8 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-surface-darkSurface/50 dark:text-zinc-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Attribution & Copyright */}
        <div className="flex items-center space-x-1.5">
          <span>Made with</span>
          <span className="text-orange-500 font-bold">🧡</span>
          <span>by</span>
          <span className="font-bold text-zinc-800 dark:text-zinc-200">Yaseen</span>
          <span>·</span>
          <span>Simple & Visual CSS Guide</span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center space-x-4">
          <Link
            href="/topics"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            Lessons
          </Link>
          <Link
            href="/playground"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            Playground
          </Link>
          <Link
            href="/visualizers"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            Visualizers
          </Link>
          <Link
            href="/reference"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            Reference
          </Link>
          <Link
            href="/about"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
