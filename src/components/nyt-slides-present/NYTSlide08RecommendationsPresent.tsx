import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide08RecommendationsPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={7} header="Recommendations">
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-foreground">Communication Strategy</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="font-semibold text-foreground">Pre-meeting 1:1s</p>
              <p className="text-sm text-muted-foreground">Let stakeholders internalize data before group discussion</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="font-semibold text-foreground">Led with learning</p>
              <p className="text-sm text-muted-foreground">Started with validated hypotheses, not failures</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="font-semibold text-foreground">Framed as opportunities</p>
              <p className="text-sm text-muted-foreground">Not criticisms of the original vision</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="font-semibold text-foreground">Let recommendations emerge</p>
              <p className="text-sm text-muted-foreground">Senior editor suggested the pivot himself</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">The Recommendations</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-2 font-semibold text-foreground">1. Meet users where they are</p>
              <p className="text-muted-foreground">Integrate video into article pages—the #1 visited surface</p>
            </div>
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-2 font-semibold text-foreground">2. Enable intent-driven discovery</p>
              <p className="text-muted-foreground">Add search, categories, or navigation for specific videos</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide08RecommendationsPresent;
