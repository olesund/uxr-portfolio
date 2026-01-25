import React, { useEffect, useRef, useState } from 'react';
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
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={`slide-${slideNumber}`}
      className={cn(
        'relative scroll-mt-0 snap-start px-6 py-12 md:px-12 lg:px-20',
        fullHeight && 'flex min-h-screen flex-col justify-center',
        !fullHeight && 'min-h-[80vh] py-16 md:py-24',
        className
      )}
      aria-label={header ? `Slide ${slideNumber}: ${header}` : `Slide ${slideNumber}`}
    >
      <div
        className={cn(
          'mx-auto max-w-5xl',
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        )}
        style={{ animationDelay: '0.1s' }}
      >
        {header && (
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {header}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SlideContainer;
