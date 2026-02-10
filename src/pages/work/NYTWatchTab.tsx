/**
 * NYT Watch Tab Case Study Page
 *
 * This page uses the consolidated NYTWatchTabCaseStudy component.
 * To edit content, see: src/data/nyt-watch-tab-content.ts
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useViewMode } from '@/hooks/useViewMode';
import ModeToggle from '@/components/presentation/ModeToggle';
import PresentationControls from '@/components/presentation/PresentationControls';
import NYTWatchTabCaseStudy from '@/components/case-study/NYTWatchTabCaseStudy';

const TOTAL_SLIDES = 10;

const NYTWatchTab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { mode, setMode, isPresent } = useViewMode();

  useEffect(() => {
    if (isPresent || !containerRef.current) return;

    const slides = containerRef.current.querySelectorAll('section[id^="slide-"]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideId = entry.target.id;
            const slideNumber = parseInt(slideId.replace('slide-', ''), 10);
            setCurrentSlide(slideNumber);
          }
        });
      },
      { threshold: 0.5 }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [isPresent]);

  const progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100;

  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(TOTAL_SLIDES - 1, prev + 1));
  }, []);

  const handleExit = useCallback(() => {
    setMode('read');
  }, [setMode]);

  // Render present mode
  if (isPresent) {
    return (
      <main className="min-h-screen bg-background">
        <ModeToggle mode={mode} onModeChange={setMode} />
        <NYTWatchTabCaseStudy isPresent={true} currentSlide={currentSlide} />
        <PresentationControls
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onExit={handleExit}
        />
      </main>
    );
  }

  // Render read mode
  return (
    <main className="min-h-screen bg-background">
      <ModeToggle mode={mode} onModeChange={setMode} />

      <div ref={containerRef} className="snap-y snap-mandatory">
        <NYTWatchTabCaseStudy isPresent={false} currentSlide={currentSlide} />
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-1 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile dot nav */}
      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full bg-background/80 px-3 py-2 shadow-lg backdrop-blur md:hidden">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? 'w-4 bg-primary' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default NYTWatchTab;
