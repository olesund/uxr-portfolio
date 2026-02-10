import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import { TrendingUp, ArrowRight } from 'lucide-react';

const NYTSlide09ImpactPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={8} header="Impact & Next Steps">
      <div className="space-y-8">
        <div className="rounded-2xl bg-primary/10 p-6 text-center">
          <div className="mb-4 flex justify-center">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Research informed a strategic pivot
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-muted/60 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
              <span className="font-bold text-green-600">1</span>
            </div>
            <p className="font-semibold text-foreground">Strategic Direction Change</p>
            <p className="text-sm text-muted-foreground">Pivot from feed-centric to integrated video experiences</p>
          </div>
          <div className="rounded-xl bg-muted/60 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
              <span className="font-bold text-green-600">2</span>
            </div>
            <p className="font-semibold text-foreground">New Product Explorations</p>
            <p className="text-sm text-muted-foreground">Article integration and search-based discovery</p>
          </div>
          <div className="rounded-xl bg-muted/60 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
              <span className="font-bold text-green-600">3</span>
            </div>
            <p className="font-semibold text-foreground">Stakeholder Engagement Preserved</p>
            <p className="text-sm text-muted-foreground">Team remains committed despite neutral test</p>
          </div>
          <div className="rounded-xl bg-muted/60 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
              <span className="font-bold text-green-600">4</span>
            </div>
            <p className="font-semibold text-foreground">Research as Strategic Partner</p>
            <p className="text-sm text-muted-foreground">Essential partner in product development</p>
          </div>
        </div>

        <div className="rounded-2xl bg-muted/60 p-5">
          <h3 className="mb-3 font-semibold text-foreground">What's Next</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              <p className="text-muted-foreground">Design explorations for article-page video integration</p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              <p className="text-muted-foreground">Prototype search/navigation approaches</p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              <p className="text-muted-foreground">Validate with target audience (less engaged users)</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide09ImpactPresent;
