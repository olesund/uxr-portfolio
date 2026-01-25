import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

const Slide08Recommendation: React.FC = () => {
  return (
    <SlideContainer slideNumber={7} header="Final Recommendation">
      <div className="space-y-10">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Three Pieces of Evidence</h3>
          <p className="text-muted-foreground">
            The final presentation synthesized findings from all three research phases:
          </p>
        </div>

        {/* Evidence List */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-muted/60 p-5">
            <p className="font-semibold text-foreground">1. User Feedback (Phase 1)</p>
            <p className="mt-1 text-muted-foreground">Creators avoided our editor because the step-by-step flow couldn't support the editing they wanted</p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-5">
            <p className="font-semibold text-foreground">2. Video Analysis (Phase 2)</p>
            <p className="mt-1 text-muted-foreground">Popular videos are complex: multiple clips, synced to music with text overlaid</p>
          </div>
          <div className="rounded-2xl bg-muted/60 p-5">
            <p className="font-semibold text-foreground">3. Usability Testing (Phase 3)</p>
            <p className="mt-1 text-muted-foreground">High-quality videos require precise timing across layers—nearly impossible with a step-by-step flow</p>
          </div>
        </div>

        {/* Key Message */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Message to Leadership</p>
          <blockquote className="mb-4 text-2xl font-semibold text-foreground">
            'Simple' doesn't always mean 'easy.'
          </blockquote>
          <p className="mb-4 text-lg text-foreground">
            The right editor depends on what you're trying to make.
          </p>
          <p className="text-muted-foreground">
            Leadership assumed 'simple = easy,' but our data showed simplicity becomes a barrier for complex tasks. For videos people actually want to watch (videos with the three success attributes), the 'simple' step-by-step editor was harder to use than the 'complex' stacked timeline.
          </p>
        </div>

        {/* Flywheel Concept */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">The Flywheel Effect</h3>
          <p className="text-muted-foreground">
            We should prioritize high-quality videos because they create a healthy cycle: Good videos → More viewers → More creator reach → More production → More good videos. Good content is key to getting the flywheel spinning.
          </p>
        </div>

        {/* Flywheel Placeholder */}
        <Placeholder
          type="chart"
          description="Visual flywheel diagram showing the virtuous cycle"
          aspectRatio="video"
        />
      </div>
    </SlideContainer>
  );
};

export default Slide08Recommendation;
