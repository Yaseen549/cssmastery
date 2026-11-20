'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu } from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { usePlatformShortcut } from '../../lib/usePlatformShortcut';

export default function Header({ onToggleMobileMenu, onOpenSearch }) {
  const pathname = usePathname();
  const { modifierKey } = usePlatformShortcut();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Learn CSS', href: '/topics' },
    { label: 'Reference', href: '/reference' },
    { label: 'Visualizers', href: '/visualizers' },
    { label: 'Playground', href: '/playground' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-surface-dark/95 transition-colors">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
        {/* Left: Mobile Drawer Trigger + CSS Blue Logo */}
        <div className="flex items-center space-x-3">
          {onToggleMobileMenu && (
            <button
              type="button"
              onClick={onToggleMobileMenu}
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
          <Logo size="md" href="/" />
        </div>

        {/* Center: Search Trigger Pill */}
        <div className="hidden sm:flex flex-1 max-w-md mx-6">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 transition hover:border-brand-500 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-brand-500 dark:hover:bg-slate-900"
          >
            <div className="flex items-center space-x-2">
              <Search className="h-3.5 w-3.5 text-slate-400" />
              <span>Search CSS lessons, properties...</span>
            </div>
            <kbd
              className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              suppressHydrationWarning
            >
              {modifierKey}+K
            </kbd>
          </button>
        </div>

        {/* Right: Navigation Links + Theme Toggle */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <nav className="hidden md:flex items-center space-x-1 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 rounded-md px-3 py-1.5 transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-bold dark:bg-brand-950/70 dark:text-brand-300'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Search icon button for mobile */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 sm:hidden"
            aria-label="Open search dialog"
          >
            <Search className="h-4 w-4" />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
