import type { ReactNode } from 'react';
import Link from 'next/link';

type MobileFiltersPanelProps = {
  title?: string;
  activeCount?: number;
  summaryText?: string;
  clearHref?: string;
  children: ReactNode;
};

export default function MobileFiltersPanel({
  title = 'Filters',
  activeCount = 0,
  summaryText = 'No filters applied',
  clearHref,
  children,
}: MobileFiltersPanelProps) {
  return (
    <details className="mb-4 rounded-xl border border-border bg-background/40 p-4 lg:hidden">
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-molten-orange">{title}</span>
          <div className="flex items-center gap-2">
            {activeCount > 0 && clearHref ? (
              <Link
                href={clearHref}
                scroll={false}
                className="rounded-full border border-border px-2 py-1 text-xs text-molten-orange transition-colors hover:text-ember-glow"
              >
                Clear
              </Link>
            ) : null}
            <span className="rounded-full border border-border px-2 py-1 text-xs text-steel-blue">
              {activeCount > 0 ? `${activeCount} active` : 'No active filters'}
            </span>
          </div>
        </div>
        <p className="mt-2 truncate text-xs text-muted-foreground">{summaryText}</p>
      </summary>
      <div className="mt-4 space-y-6">{children}</div>
    </details>
  );
}
