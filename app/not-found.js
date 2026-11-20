import React from 'react';
import Link from 'next/link';
import { Home, BookOpen, AlertCircle } from 'lucide-react';
import MacWindow from '../components/layout/MacWindow';

export default function NotFound() {
  return (
    <MacWindow>
      <div className="flex flex-1 items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
            <AlertCircle className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
            Topic Not Found (404)
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            The requested CSS lesson or reference page does not exist or has been moved within the curriculum.
          </p>
          <div className="flex justify-center space-x-3 pt-2">
            <Link
              href="/"
              className="flex items-center space-x-1.5 rounded-xl bg-brand-500 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-brand-600"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/topics"
              className="flex items-center space-x-1.5 rounded-xl border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Browse Curriculum</span>
            </Link>
          </div>
        </div>
      </div>
    </MacWindow>
  );
}
