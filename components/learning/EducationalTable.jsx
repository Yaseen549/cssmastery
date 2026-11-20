import React from 'react';

export default function EducationalTable({
  headers = [],
  rows = [],
  caption = '',
  className = '',
}) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className={`overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 ${className}`}>
      <table className="w-full text-left text-sm">
        {caption && (
          <caption className="border-b border-zinc-200 bg-zinc-50 px-4 py-2 text-left font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-400">
            {caption}
          </caption>
        )}
        <thead className="border-b border-zinc-200 bg-zinc-50/80 font-mono text-xs font-bold uppercase tracking-wider text-zinc-700 dark:border-zinc-800 dark:bg-surface-darkSurface dark:text-zinc-300">
          <tr>
            {headers.map((h, idx) => (
              <th key={idx} scope="col" className="px-4 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200/80 dark:divide-zinc-800">
          {rows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
            >
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={`px-4 py-3 text-zinc-700 dark:text-zinc-300 ${
                    cIdx === 0 ? 'font-mono font-medium text-brand-700 dark:text-brand-300' : ''
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
