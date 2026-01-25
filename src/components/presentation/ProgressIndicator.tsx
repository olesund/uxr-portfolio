import React from 'react';
import { usePresentation } from '@/contexts/PresentationContext';
import { cn } from '@/lib/utils';

const ProgressIndicator: React.FC = () => {
  const { currentSlide, totalSlides, goToSlide, isAuthenticated } = usePresentation();

  if (!isAuthenticated) return null;

  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 md:flex"
      aria-label="Slide navigation"
    >
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          onClick={() => {
            goToSlide(i);
            document.getElementById(`slide-${i}`)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={cn(
            'h-2.5 w-2.5 rounded-full transition-all duration-300',
            currentSlide === i
              ? 'scale-125 bg-primary'
              : 'bg-border hover:bg-muted-foreground/50'
          )}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={currentSlide === i ? 'true' : undefined}
        />
      ))}
      <span className="mt-2 text-center text-xs text-muted-foreground">
        {currentSlide + 1}/{totalSlides}
      </span>
    </nav>
  );
};

export default ProgressIndicator;
