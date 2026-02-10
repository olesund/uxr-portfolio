import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import editorComparison from '@/assets/editor-comparison.png';

const Slide05Phase1Present: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={3} header="Phase 1: Online Creator Community">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Key Finding
            </h2>
            <p className="text-xl text-muted-foreground">
              Creators actively avoided Instagram's editor in favor of third-party apps like CapCut.
            </p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground">Method</p>
                <p className="font-medium text-foreground">Online Community</p>
              </div>
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground">6 Weeks</p>
              </div>
              <div>
                <p className="text-muted-foreground">Sample</p>
                <p className="font-medium text-foreground">20 Creators</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Why They Avoided Our Editor</p>
          <ul className="space-y-2 text-lg text-foreground">
            <li>• Preferred "stacked timeline" editors with all layers visible at once</li>
            <li>• Instagram's step-by-step flow required constant switching between screens</li>
            <li>• Making any video was easy, but making a <strong>good</strong> video was hard</li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden bg-background">
          <img
            src={editorComparison}
            alt="Step-by-step editor vs. Stacked timeline editor comparison"
            className="w-full h-auto max-h-[200px] object-contain"
          />
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide05Phase1Present;
