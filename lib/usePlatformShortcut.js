'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect platform-specific modifier key (Cmd for Mac, Ctrl for Win/Linux)
 * @returns {{ isMac: boolean, modifierKey: string }}
 */
export function usePlatformShortcut() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.platform) {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    }
  }, []);

  return {
    isMac,
    modifierKey: isMac ? '⌘' : 'Ctrl',
  };
}
