/**
 * PresentSlide - Reusable slide wrapper for presentation mode
 *
 * Creates a slide that looks like a presentation deck with:
 * - Rounded corners
 * - Background color with surrounding space
 * - Consistent sizing across all slides
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface PresentSlideProps {
  header?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const PresentSlide: React.FC<PresentSlideProps> = ({
  header,
  children,
  className,
  dark = false,
}) => {
  return (
    <section
      className={cn(
        'snap-start flex min-h-screen items-center justify-center px-8 py-16',
        dark ? 'bg-[hsl(25,12%,22%)]' : 'bg-[hsl(25,12%,22%)]'
      )}
    >
      <div
        className={cn(
          'w-full max-w-6xl rounded-3xl p-12 shadow-2xl',
          dark
            ? 'bg-[hsl(20,22%,14%)] text-[hsl(35,30%,92%)]'
            : 'bg-background text-foreground',
          className
        )}
      >
        {header && (
          <p className={cn(
            'mb-8 text-sm font-medium uppercase tracking-wider',
            dark ? 'text-[hsl(195,65%,55%)]' : 'text-primary'
          )}>
            {header}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
