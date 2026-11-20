import React from 'react';
import {
  Info,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  AlertOctagon,
  Sparkles,
} from 'lucide-react';

export default function Callout({
  type = 'note',
  title = '',
  children,
  className = '',
}) {
  const configs = {
    note: {
      border: 'border-blue-200 dark:border-blue-900/60',
      bg: 'bg-blue-50/70 dark:bg-blue-950/30',
      text: 'text-blue-900 dark:text-blue-200',
      iconText: 'text-blue-600 dark:text-blue-400',
      defaultTitle: 'Note',
      Icon: Info,
    },
    tip: {
      border: 'border-emerald-200 dark:border-emerald-900/60',
      bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
      text: 'text-emerald-900 dark:text-emerald-200',
      iconText: 'text-emerald-600 dark:text-emerald-400',
      defaultTitle: 'Pro Tip',
      Icon: Lightbulb,
    },
    warning: {
      border: 'border-amber-200 dark:border-amber-900/60',
      bg: 'bg-amber-50/70 dark:bg-amber-950/30',
      text: 'text-amber-900 dark:text-amber-200',
      iconText: 'text-amber-600 dark:text-amber-400',
      defaultTitle: 'Warning',
      Icon: AlertTriangle,
    },
    important: {
      border: 'border-rose-200 dark:border-rose-900/60',
      bg: 'bg-rose-50/70 dark:bg-rose-950/30',
      text: 'text-rose-900 dark:text-rose-200',
      iconText: 'text-rose-600 dark:text-rose-400',
      defaultTitle: 'Critical Rule',
      Icon: AlertOctagon,
    },
    'best-practice': {
      border: 'border-brand-200 dark:border-brand-900/60',
      bg: 'bg-brand-50/70 dark:bg-brand-950/30',
      text: 'text-brand-900 dark:text-brand-200',
      iconText: 'text-brand-600 dark:text-brand-400',
      defaultTitle: 'Modern Best Practice',
      Icon: Sparkles,
    },
  };

  const c = configs[type] || configs.note;
  const Icon = c.Icon;

  return (
    <div
      role="region"
      aria-label={title || c.defaultTitle}
      className={`rounded-xl border p-4 ${c.border} ${c.bg} ${className}`}
    >
      <div className="flex items-start space-x-3">
        <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${c.iconText}`} />
        <div className="flex-1 space-y-1">
          <h4 className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>
            {title || c.defaultTitle}
          </h4>
          <div className={`text-sm leading-relaxed ${c.text}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
