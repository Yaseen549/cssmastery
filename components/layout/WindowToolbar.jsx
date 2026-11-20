'use client';

import React from 'react';
import Header from './Header';

export default function WindowToolbar({ onToggleMobileMenu, onOpenSearch }) {
  return (
    <Header
      onToggleMobileMenu={onToggleMobileMenu}
      onOpenSearch={onOpenSearch}
    />
  );
}
