import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

const Slide09Impact: React.FC = () => {
  return (
    <SlideContainer slideNumber={8} header="Impact">
      <div className="space-y-8">
        {/* Leadership Decision */}
        <div className="border-l-4 border-success pl-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-success">Leadership Decision</p>
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Leadership approved the redesign—a decision they had initially rejected.
          </h2>
        </div>

        {/* Product Outcomes */}
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Product Outcomes</p>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-foreground">Shipped the New Editor</p>
              <p className="text-muted-foreground">
                A/B testing confirmed our findings: significantly more video production overall, especially high-quality videos (measured by views and likes)
              </p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Instagram "Edits" App</p>
              <p className="text-muted-foreground">
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
