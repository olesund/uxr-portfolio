import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideContainerProps {
  children: React.ReactNode;
  slideNumber: number;
  header?: string;
  className?: string;
  fullHeight?: boolean;
}

const SlideContainer: React.FC<SlideContainerProps> = ({
  children,
  slideNumber,
  header,
  className,
  fullHeight = false,
}) => {
  const isEvenSlide = slideNumber % 2 === 0;

  return (
    <section
      id={`slide-${slideNumber}`}
      className={cn(
        'relative scroll-mt-0 snap-start px-6 py-12 md:px-12 lg:px-20',
        'border-b border-border/40',
        isEvenSlide ? 'bg-muted/30' : 'bg-background',
        fullHeight && 'flex min-h-screen flex-col justify-center',
        !fullHeight && 'min-h-[80vh] py-16 md:py-24',
        className
      )}
      aria-label={header ? `Slide ${slideNumber}: ${header}` : `Slide ${slideNumber}`}
    >
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {header && (
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
            {header}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default SlideContainer;
