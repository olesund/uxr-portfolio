import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide06Phase2Present: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={5} header="Phase 2: Video Content Analysis">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              What Makes Videos Successful?
            </h2>
            <p className="text-xl text-muted-foreground">
              Analyzed 2,000 videos to identify attributes that predict high view counts.
            </p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground">Method</p>
                <p className="font-medium text-foreground">Content Analysis</p>
              </div>
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground">3 Weeks</p>
              </div>
              <div>
                <p className="text-muted-foreground">Sample</p>
                <p className="font-medium text-foreground">2,000 Videos</p>
              </div>
              <div>
                <p className="text-muted-foreground">Threshold</p>
                <p className="font-medium text-foreground">&gt;1,000 views</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Three Attributes Strongly Predicted Success
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-background/50 p-4 text-center">
              <p className="text-2xl font-bold text-foreground">1</p>
              <p className="mt-2 font-semibold text-foreground">Multiple Clips</p>
              <p className="text-sm text-muted-foreground">More than one video clip</p>
            </div>
            <div className="rounded-xl bg-background/50 p-4 text-center">
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="mt-2 font-semibold text-foreground">Music Sync</p>
              <p className="text-sm text-muted-foreground">Clips synced to beat</p>
            </div>
            <div className="rounded-xl bg-background/50 p-4 text-center">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="mt-2 font-semibold text-foreground">Text Sync</p>
              <p className="text-sm text-muted-foreground">Text timed to video</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-muted-foreground text-center">
          These three features require precise timing across layers—exactly what our step-by-step editor made difficult.
        </p>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide06Phase2Present;
