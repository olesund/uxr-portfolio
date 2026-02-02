import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { TrendingUp, ArrowRight } from 'lucide-react';

const NYTSlide09Impact: React.FC = () => {
  return (
    <SlideContainer slideNumber={8} header="Impact & Next Steps">
      <div className="space-y-10">
        <div className="rounded-2xl bg-primary/10 p-6">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Impact</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Research informed a strategic pivot
          </h2>
        </div>

        {/* Impact points */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <span className="text-lg font-bold text-green-600">1</span>
            </div>
            <p className="font-semibold text-foreground">Strategic Direction Change</p>
            <p className="mt-2 text-muted-foreground">
              Research informed pivot away from feed-centric strategy toward integrated video experiences
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <span className="text-lg font-bold text-green-600">2</span>
            </div>
            <p className="font-semibold text-foreground">New Product Explorations</p>
            <p className="mt-2 text-muted-foreground">
              Video team exploring article integration and search-based discovery as alternative approaches
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <span className="text-lg font-bold text-green-600">3</span>
            </div>
            <p className="font-semibold text-foreground">Stakeholder Engagement Preserved</p>
            <p className="mt-2 text-muted-foreground">
              Stakeholders remain engaged and committed to video strategy (didn't abandon it despite neutral test)
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <span className="text-lg font-bold text-green-600">4</span>
            </div>
            <p className="font-semibold text-foreground">Research as Strategic Partner</p>
            <p className="mt-2 text-muted-foreground">
              Established research as essential partner in product development and editorial strategy, not just validator
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="rounded-2xl bg-muted/60 p-6">
          <h3 className="mb-4 text-xl font-semibold text-foreground">What's Next</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-foreground">Design explorations for article-page video integration</p>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-foreground">Prototype and test search/navigation approaches for video discovery</p>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-foreground">Research to validate new designs with the target audience (less engaged users)</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide09Impact;
