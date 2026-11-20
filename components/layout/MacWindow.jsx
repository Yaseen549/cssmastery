'use client';

import React from 'react';
import DocShell from './DocShell';

/**
 * MacWindow provides application shell parity with the sibling HTML platform,
 * wrapping views with the unified Header, Search Modal, and Mobile Drawer.
 */
export default function MacWindow({ children }) {
  return <DocShell>{children}</DocShell>;
}
