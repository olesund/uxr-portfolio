import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide08RecommendationPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={7} header="Final Recommendation">
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-8 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Key Message to Leadership
          </p>
          <blockquote className="text-3xl font-bold text-foreground md:text-4xl">
            "Simple" doesn't always mean "easy."
          </blockquote>
          <p className="mt-6 text-xl text-muted-foreground">
            The right editor depends on what you're trying to make.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Three Pieces of Evidence</h3>
          <div className="space-y-3">
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="font-semibold text-foreground">1. User Feedback (Phase 1)</p>
              <p className="text-muted-foreground">Creators avoided our editor—step-by-step couldn't support their editing needs</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="font-semibold text-foreground">2. Video Analysis (Phase 2)</p>
              <p className="text-muted-foreground">Popular videos are complex: multiple clips, synced to music with text</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="font-semibold text-foreground">3. Usability Testing (Phase 3)</p>
              <p className="text-muted-foreground">High-quality videos require precise timing—nearly impossible with step-by-step</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide08RecommendationPresent;
