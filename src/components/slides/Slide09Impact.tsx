import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

const Slide09Impact: React.FC = () => {
  return (
    <SlideContainer slideNumber={8} header="Impact">
      <div className="space-y-10">
        {/* Leadership Decision */}
        <div className="rounded-2xl bg-success/10 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-success">Leadership Decision</p>
          <p className="text-xl font-semibold text-foreground">
            Leadership approved the redesign—a decision they had initially rejected.
          </p>
        </div>

        {/* Product Outcomes */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Product Outcomes</h3>
          
          <div className="space-y-4">
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="font-medium text-foreground">Shipped the New Editor</p>
              <p className="mt-1 text-muted-foreground">
                A/B testing confirmed our findings: significantly more video production overall, especially high-quality videos (measured by views and likes)
              </p>
            </div>
            
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="font-medium text-foreground">Instagram "Edits" App</p>
              <p className="mt-1 text-muted-foreground">
                About a year later, Instagram released 'Edits'—a standalone editing app fully built around the stacked timeline design. This represented a major shift toward positioning Instagram as a serious creative platform.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Placeholders */}
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder
            type="image"
            description="Screenshot of the new stacked timeline editor in Instagram Reels"
            aspectRatio="video"
          />
          <Placeholder
            type="image"
            description="Screenshot of Instagram Edits app announcement/press release"
            aspectRatio="video"
          />
        </div>

        {/* A/B Test Results Placeholder */}
        <Placeholder
          type="chart"
          description="Chart showing A/B test results (production increase, quality metrics)"
          aspectRatio="video"
        />
      </div>
    </SlideContainer>
  );
};

export default Slide09Impact;
