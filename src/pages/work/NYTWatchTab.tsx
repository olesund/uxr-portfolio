import React, { useEffect, useRef, useState } from 'react';
import NYTSlide01Title from '@/components/nyt-slides/NYTSlide01Title';
import NYTSlide02Context from '@/components/nyt-slides/NYTSlide02Context';
import NYTSlide03Objectives from '@/components/nyt-slides/NYTSlide03Objectives';
import NYTSlide04Approach from '@/components/nyt-slides/NYTSlide04Approach';
import NYTSlide05Findings from '@/components/nyt-slides/NYTSlide05Findings';
import NYTSlide06Insight from '@/components/nyt-slides/NYTSlide06Insight';
import NYTSlide07Triangulation from '@/components/nyt-slides/NYTSlide07Triangulation';
import NYTSlide08Recommendations from '@/components/nyt-slides/NYTSlide08Recommendations';
import NYTSlide09Impact from '@/components/nyt-slides/NYTSlide09Impact';
import NYTSlide10Reflection from '@/components/nyt-slides/NYTSlide10Reflection';

const TOTAL_SLIDES = 10;

const NYTWatchTab: React.FC = () => {
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
        <NYTSlide01Title />
        <NYTSlide02Context />
        <NYTSlide03Objectives />
        <NYTSlide04Approach />
        <NYTSlide05Findings />
        <NYTSlide06Insight />
        <NYTSlide07Triangulation />
        <NYTSlide08Recommendations />
        <NYTSlide09Impact />
        <NYTSlide10Reflection />
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
