import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import reelsEditorBefore from '@/assets/reels-editor-before.png';
import reelsEditorAfter from '@/assets/reels-editor-after.png';

const Slide09ImpactPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={8} header="Impact">
      <div className="space-y-8">
        <div className="rounded-2xl bg-accent/50 p-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Leadership Decision</p>
          <p className="text-2xl font-bold text-foreground">
            Leadership approved the redesign—a decision they had initially rejected.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <div className="rounded-xl overflow-hidden bg-background">
              <img
                src={reelsEditorBefore}
                alt="Editor before - linear timeline"
                className="w-full h-auto max-h-[180px] object-contain"
              />
            </div>
            <p className="text-center font-medium text-foreground">Before</p>
            <p className="text-center text-sm text-muted-foreground">Video clips only on this screen</p>
          </div>
          <div className="space-y-2">
            <div className="rounded-xl overflow-hidden bg-background">
              <img
                src={reelsEditorAfter}
                alt="Editor after - stacked timeline"
                className="w-full h-auto max-h-[180px] object-contain"
              />
            </div>
            <p className="text-center font-medium text-foreground">After</p>
            <p className="text-center text-sm text-muted-foreground">Clips, audio, text on one surface</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-muted/60 p-4">
            <p className="font-semibold text-foreground">A/B Test Results</p>
            <p className="text-sm text-muted-foreground">Significantly more video production, especially high-quality videos</p>
          </div>
          <div className="rounded-xl bg-muted/60 p-4">
            <p className="font-semibold text-foreground">Instagram "Edits" App</p>
            <p className="text-sm text-muted-foreground">Standalone app built around stacked timeline design</p>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide09ImpactPresent;
