import React, { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onExit: () => void;
}

const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onExit,
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        onPrevious();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        onNext();
        break;
      case 'Escape':
        e.preventDefault();
        onExit();
        break;
      case 'Home':
        e.preventDefault();
        // Go to first slide by calling onPrevious multiple times or handle in parent
        for (let i = currentSlide; i > 0; i--) {
          onPrevious();
        }
        break;
      case 'End':
        e.preventDefault();
        // Go to last slide by calling onNext multiple times or handle in parent
        for (let i = currentSlide; i < totalSlides - 1; i++) {
          onNext();
        }
        break;
    }
  }, [currentSlide, totalSlides, onPrevious, onNext, onExit]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const canGoPrevious = currentSlide > 0;
  const canGoNext = currentSlide < totalSlides - 1;

  return (
    <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-slate-800/95 px-2 py-2 shadow-lg backdrop-blur-sm border border-slate-700">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-full transition-all',
          canGoPrevious
            ? 'text-white hover:bg-slate-700'
            : 'text-slate-600 cursor-not-allowed'
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="px-4 text-sm font-medium text-white">
        {currentSlide + 1} / {totalSlides}
      </div>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-full transition-all',
          canGoNext
            ? 'text-white hover:bg-slate-700'
            : 'text-slate-600 cursor-not-allowed'
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mx-1 h-6 w-px bg-slate-700" />

      <button
        onClick={onExit}
        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-slate-700 hover:text-white"
        aria-label="Exit presentation mode"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PresentationControls;
