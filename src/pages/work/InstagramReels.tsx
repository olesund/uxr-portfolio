import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useViewMode } from '@/hooks/useViewMode';
import ModeToggle from '@/components/presentation/ModeToggle';
import PresentationControls from '@/components/presentation/PresentationControls';

// Read mode slides
import Slide01Title from '@/components/slides/Slide01Title';
import Slide03Problem from '@/components/slides/Slide03Problem';
import Slide04ResearchApproach from '@/components/slides/Slide04ResearchApproach';
import Slide05Phase1 from '@/components/slides/Slide05Phase1';
import Slide05bPivot from '@/components/slides/Slide05bPivot';
import Slide06Phase2 from '@/components/slides/Slide06Phase2';
import Slide07Phase3 from '@/components/slides/Slide07Phase3';
import Slide08Recommendation from '@/components/slides/Slide08Recommendation';
import Slide09Impact from '@/components/slides/Slide09Impact';
import Slide10Lessons from '@/components/slides/Slide10Lessons';

// Present mode slides
import Slide01TitlePresent from '@/components/slides-present/Slide01TitlePresent';
import Slide03ProblemPresent from '@/components/slides-present/Slide03ProblemPresent';
import Slide04ResearchApproachPresent from '@/components/slides-present/Slide04ResearchApproachPresent';
import Slide05Phase1Present from '@/components/slides-present/Slide05Phase1Present';
import Slide05bPivotPresent from '@/components/slides-present/Slide05bPivotPresent';
import Slide06Phase2Present from '@/components/slides-present/Slide06Phase2Present';
import Slide07Phase3Present from '@/components/slides-present/Slide07Phase3Present';
import Slide08RecommendationPresent from '@/components/slides-present/Slide08RecommendationPresent';
import Slide09ImpactPresent from '@/components/slides-present/Slide09ImpactPresent';
import Slide10LessonsPresent from '@/components/slides-present/Slide10LessonsPresent';

const TOTAL_SLIDES = 10;

const presentSlides = [
  Slide01TitlePresent,
  Slide03ProblemPresent,
  Slide04ResearchApproachPresent,
  Slide05Phase1Present,
  Slide05bPivotPresent,
  Slide06Phase2Present,
  Slide07Phase3Present,
  Slide08RecommendationPresent,
  Slide09ImpactPresent,
  Slide10LessonsPresent,
];

const InstagramReels: React.FC = () => {
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
    const CurrentPresentSlide = presentSlides[currentSlide];

    return (
      <main className="min-h-screen bg-background">
        <ModeToggle mode={mode} onModeChange={setMode} />
        <CurrentPresentSlide />
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
        <Slide01Title />
        <Slide03Problem />
        <Slide04ResearchApproach />
        <Slide05Phase1 />
        <Slide05bPivot />
        <Slide06Phase2 />
        <Slide07Phase3 />
        <Slide08Recommendation />
        <Slide09Impact />
        <Slide10Lessons />
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

export default InstagramReels;
