import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import { AlertTriangle, TrendingDown } from 'lucide-react';

const NYTSlide07TriangulationPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={6} header="Triangulating with Behavioral Data">
      <div className="space-y-8">
        <div className="rounded-2xl bg-amber-500/10 p-6">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <span className="font-semibold text-foreground">The A/B Test Came Back Neutral</span>
          </div>
          <p className="text-muted-foreground">
            Because research ran in parallel, we immediately had data to explain why.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            The Core Problem: Wrong Audience Reached the Feature
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-accent/50 p-4">
              <p className="mb-2 text-sm font-medium text-muted-foreground">Survey predicted</p>
              <p className="text-foreground">Less engaged users 2x more likely to prefer video</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="mb-2 text-sm font-medium text-muted-foreground">Behavioral data showed</p>
              <p className="text-foreground">Majority of Watch Tab users were already super-engaged (7 days/week)</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-5">
          <div className="flex items-start gap-3">
            <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
            <div>
              <p className="font-semibold text-foreground">The Disconnect</p>
              <p className="mt-1 text-muted-foreground">
                Feature reached our most engaged users, not the less-engaged video-using audience we were targeting.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-muted/60 p-5">
          <p className="mb-3 font-semibold text-foreground">Why Engagement Was Shallow</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Users wanted to find specific videos, not browse a feed</li>
            <li>• "Scan and sample" meant if first video wasn't relevant, they bounced</li>
          </ul>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide07TriangulationPresent;
