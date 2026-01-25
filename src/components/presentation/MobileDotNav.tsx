import React from 'react';
import { usePresentation } from '@/contexts/PresentationContext';
import { cn } from '@/lib/utils';

const MobileDotNav: React.FC = () => {
  const { currentSlide, totalSlides, goToSlide, isAuthenticated } = usePresentation();

  if (!isAuthenticated) return null;

  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-card/90 px-4 py-2 shadow-lg backdrop-blur-sm md:hidden"
      aria-label="Mobile slide navigation"
    >
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          onClick={() => {
            goToSlide(i);
            document.getElementById(`slide-${i}`)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={cn(
            'h-2 w-2 rounded-full transition-all duration-300',
            currentSlide === i
              ? 'scale-125 bg-primary'
              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
          )}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={currentSlide === i ? 'true' : undefined}
        />
      ))}
    </nav>
  );
};

export default MobileDotNav;
