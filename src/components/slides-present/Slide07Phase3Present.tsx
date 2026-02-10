import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import easeOfUseChart from '@/assets/ease-of-use-chart.png';

const Slide07Phase3Present: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={6} header="Phase 3: Comparative Usability Study">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Which Editor Works Better?
            </h2>
            <p className="text-xl text-muted-foreground">
              200 testers recreated videos using different editing apps.
            </p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground">Method</p>
                <p className="font-medium text-foreground">Randomized Study</p>
              </div>
              <div>
                <p className="text-muted-foreground">Sample</p>
                <p className="font-medium text-foreground">200 Creators</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="text-xl font-semibold text-foreground mb-4">
            Different editors worked better for different video types.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-background/50 p-4">
              <p className="font-semibold text-foreground">Basic Videos</p>
              <p className="text-muted-foreground">Step-by-step editors performed better</p>
            </div>
            <div className="rounded-xl bg-background/50 p-4">
              <p className="font-semibold text-foreground">Advanced Videos</p>
              <p className="text-muted-foreground">Stacked timelines performed <strong>much</strong> better</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden bg-background">
          <img
            src={easeOfUseChart}
            alt="Ease-of-use ratings by editor type and video complexity"
            className="w-full h-auto max-h-[180px] object-contain"
          />
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide07Phase3Present;
