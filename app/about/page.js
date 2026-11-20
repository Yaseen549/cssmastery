import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Layers, ShieldCheck, Heart, Sparkles, Globe, Terminal } from 'lucide-react';
import MacWindow from '../../components/layout/MacWindow';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'About — Complete CSS Learning Platform',
  description: 'Mission, pedagogical design, and standards alignment of CSSMaster.',
};

export default function AboutPage() {
  return (
    <MacWindow>
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
            <div className="inline-flex items-center space-x-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:border-brand-900/80 dark:bg-brand-950/60 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              <span>About This Guide</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              About CSSMaster
            </h1>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              A clear, friendly guide designed to help anyone learn Cascading Style Sheets with visual examples, interactive previews, and zero confusing buzzwords.
            </p>
          </header>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center space-x-2">
                <Globe className="h-5 w-5 text-brand-500" />
                <span>How We Teach</span>
              </h2>
              <p>
                CSS is best learned through visual feedback. Instead of dry theoretical formulas, every lesson connects styling rules directly to real-time interactive previews.
              </p>
              <p>
                You learn how styles actually behave on the screen, why certain rules override others, and how to build clean, modern page layouts with ease.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-brand-500" />
                <span>Modern & Practical Skills</span>
              </h2>
              <p>
                We focus on what you actually need to build beautiful websites today:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Core Styling:</strong> Colors, fonts, margins, padding, and borders.</li>
                <li><strong>Modern Layouts:</strong> Flexbox and CSS Grid made simple with interactive builders.</li>
                <li><strong>Responsive Design:</strong> Making your pages look great on phones, tablets, and desktops.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-brand-500" />
                <span>Fast & Privacy-Friendly</span>
              </h2>
              <p>
                Everything runs directly in your browser. Your progress, bookmarks, and quiz scores are saved locally on your device without requiring an account or sign-in.
              </p>
            </section>

            <section className="rounded-2xl border border-brand-200 bg-brand-50/50 p-6 dark:border-brand-900/60 dark:bg-brand-950/20">
              <h3 className="text-base font-bold text-brand-900 dark:text-brand-200">
                Created with 🧡 by Yaseen
              </h3>
              <p className="mt-2 text-xs text-brand-800/80 dark:text-brand-300/80 leading-relaxed">
                Part of the curated programming and web development documentation suite, harmonizing with sister platforms for HTML5 and C Programming. Dedicated to accessible, uncompromising technical education for software developers worldwide.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </MacWindow>
  );
}
