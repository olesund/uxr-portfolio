import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide04ApproachPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={3} header="Research Approach">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-foreground">
          Two-Method Design (Parallel with A/B Test)
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-accent/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">A. Quantitative Survey</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sample</span>
                <span className="font-medium text-foreground">n=~3,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Method</span>
                <span className="font-medium text-foreground">Intercept survey</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Analysis</span>
                <span className="font-medium text-foreground">Python + weighted stats</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Purpose:</strong> Validate hypotheses at scale
            </p>
          </div>

          <div className="rounded-2xl bg-muted/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">B. Qualitative Diary Study</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sample</span>
                <span className="font-medium text-foreground">n=21 via dscout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium text-foreground">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mix</span>
                <span className="font-medium text-foreground">11 subs / 10 non-subs</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Purpose:</strong> Understand the "why" behind behaviors
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background p-5">
          <h4 className="mb-3 font-semibold text-foreground">Why This Approach?</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <p className="text-muted-foreground">Survey captured what people do at scale</p>
            <p className="text-muted-foreground">Diary study revealed why they behave that way</p>
            <p className="text-muted-foreground">Parallel timing: insights ready when A/B results arrived</p>
            <p className="text-muted-foreground">Triangulation with behavioral data</p>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide04ApproachPresent;
