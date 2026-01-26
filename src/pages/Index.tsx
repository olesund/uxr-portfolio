import React, { useEffect, useRef } from 'react';
import { PresentationProvider, usePresentation } from '@/contexts/PresentationContext';
import ProgressIndicator from '@/components/presentation/ProgressIndicator';
import MobileDotNav from '@/components/presentation/MobileDotNav';
import Slide01Title from '@/components/slides/Slide01Title';
import Slide02Introduction from '@/components/slides/Slide02Introduction';
import Slide03Problem from '@/components/slides/Slide03Problem';
import Slide04ResearchApproach from '@/components/slides/Slide04ResearchApproach';
import Slide05Phase1 from '@/components/slides/Slide05Phase1';
import Slide05bPivot from '@/components/slides/Slide05bPivot';
import Slide06Phase2 from '@/components/slides/Slide06Phase2';
import Slide07Phase3 from '@/components/slides/Slide07Phase3';
import Slide08Recommendation from '@/components/slides/Slide08Recommendation';
import Slide09Impact from '@/components/slides/Slide09Impact';
import Slide10Lessons from '@/components/slides/Slide10Lessons';
import Slide11Appendix from '@/components/slides/Slide11Appendix';

const PresentationContent: React.FC = () => {
  const { isAuthenticated, setCurrentSlide } = usePresentation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAuthenticated || !containerRef.current) return;

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
  }, [isAuthenticated, setCurrentSlide]);

  return (
    <div ref={containerRef} className="snap-y snap-mandatory">
      <Slide01Title />
      {isAuthenticated && (
        <>
          <Slide02Introduction />
          <Slide03Problem />
          <Slide04ResearchApproach />
          <Slide05Phase1 />
          <Slide05bPivot />
          <Slide06Phase2 />
          <Slide07Phase3 />
          <Slide08Recommendation />
          <Slide09Impact />
          <Slide10Lessons />
          <Slide11Appendix />
        </>
      )}
      <ProgressIndicator />
      <MobileDotNav />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <PresentationProvider>
      <main className="min-h-screen bg-background">
        <PresentationContent />
      </main>
    </PresentationProvider>
  );
};

export default Index;
