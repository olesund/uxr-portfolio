import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent } from '@/components/ui/card';
import Placeholder from '@/components/presentation/Placeholder';
import { CheckCircle2, Rocket, Sparkles } from 'lucide-react';

const Slide09Impact: React.FC = () => {
  return (
    <SlideContainer slideNumber={8} header="Impact">
      <div className="space-y-8">
        {/* Leadership Decision */}
        <div className="rounded-xl border-2 border-success/30 bg-success/5 p-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-success" />
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-success">Leadership Decision</p>
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                Leadership approved the redesign—a decision they had initially rejected.
              </h2>
            </div>
          </div>
        </div>

        {/* Product Outcomes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Product Outcomes</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold text-foreground">Shipped the New Editor</h4>
                </div>
                <p className="text-muted-foreground">
                  A/B testing confirmed our findings: significantly more video production overall, especially high-quality videos (measured by views and likes)
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold text-foreground">Instagram "Edits" App</h4>
                </div>
                <p className="text-muted-foreground">
                  About a year later, Instagram released 'Edits'—a standalone editing app fully built around the stacked timeline design. This represented a major shift toward positioning Instagram as a serious creative platform.
                </p>
              </CardContent>
            </Card>
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
