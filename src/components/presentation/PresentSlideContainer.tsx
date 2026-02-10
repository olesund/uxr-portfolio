import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PresentSlideContainerProps {
  children: React.ReactNode;
  slideNumber: number;
  header?: string;
  className?: string;
}

const PresentSlideContainer: React.FC<PresentSlideContainerProps> = ({
  children,
  slideNumber,
  header,
  className,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={slideNumber}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'flex min-h-screen flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-24',
          'bg-slate-900 text-slate-100',
          className
        )}
        aria-label={header ? `Slide ${slideNumber + 1}: ${header}` : `Slide ${slideNumber + 1}`}
      >
        <div className="mx-auto w-full max-w-4xl">
          {header && (
            <p className="mb-8 text-sm font-medium uppercase tracking-wider text-orange-400">
              {header}
            </p>
          )}
          {children}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default PresentSlideContainer;
