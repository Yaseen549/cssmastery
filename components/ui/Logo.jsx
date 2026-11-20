'use client';

import React from 'react';
import Link from 'next/link';

export default function Logo({
  size = 'md',
  showText = true,
  showBadge = true,
  version = 'CSS3',
  className = '',
  href = '/',
}) {
  const sizeMap = {
    sm: { icon: 'h-6 w-auto', text: 'text-sm font-semibold', badge: 'text-[9px] px-1' },
    md: { icon: 'h-7 w-auto', text: 'text-base font-bold', badge: 'text-[10px] px-1.5' },
    lg: { icon: 'h-9 w-auto', text: 'text-lg font-bold', badge: 'text-[10px] px-1.5' },
    xl: { icon: 'h-12 w-auto', text: 'text-2xl font-extrabold', badge: 'text-xs px-2' },
  };

  const s = sizeMap[size] || sizeMap.md;

  const content = (
    <div className={`group flex items-center space-x-2.5 ${className}`}>
      {/* Official CSS3 Logo (direct from devicons/devicon icons/css3/css3-original.svg) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className={`${s.icon} shrink-0 transition-transform duration-200 group-hover:scale-105`}
      >
        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
        <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
        <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
        <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
        <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="flex items-center space-x-1.5">
          <span
            className={`tracking-tight text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 ${s.text}`}
          >
            CSS<span className="text-brand-600 dark:text-brand-400">Master</span>
          </span>
          {showBadge && (
            <span
              className={`hidden sm:inline-block rounded-full border border-brand-200 bg-brand-50 py-0.5 font-bold uppercase tracking-wider text-brand-700 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-300 ${s.badge}`}
            >
              {version}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="CSSMaster Reference Home">
      {content}
    </Link>
  );
}
