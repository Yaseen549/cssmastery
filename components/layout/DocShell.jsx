'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchModal from '../ui/SearchModal';
import MobileDrawer from './MobileDrawer';

export default function DocShell({ children, fullHeight = false, fixedLayout = false }) {
  const isFull = fullHeight || fixedLayout;
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`${
        isFull ? 'h-screen max-h-screen overflow-hidden' : 'min-h-screen'
      } flex flex-col bg-surface-canvas dark:bg-surface-dark text-slate-900 dark:text-slate-100 transition-colors`}
    >
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onToggleMobileMenu={() => setMobileDrawerOpen(true)}
      />

      <div
        className={`flex-1 flex flex-col min-h-0 ${
          isFull ? 'h-[calc(100vh-3.5rem)] overflow-hidden' : ''
        }`}
      >
        {children}
      </div>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        onOpenSearch={() => {
          setMobileDrawerOpen(false);
          setSearchOpen(true);
        }}
      />
    </div>
  );
}
