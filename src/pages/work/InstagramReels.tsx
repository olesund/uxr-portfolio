import React, { useEffect, useRef, useState } from 'react';
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

const TOTAL_SLIDES = 10;

const InstagramReels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

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
  }, []);

  const progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100;

  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
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
