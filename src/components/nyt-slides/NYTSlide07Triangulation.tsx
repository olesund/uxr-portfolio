import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { AlertTriangle, TrendingDown } from 'lucide-react';

const NYTSlide07Triangulation: React.FC = () => {
  return (
    <SlideContainer slideNumber={6} header="Triangulating with Behavioral Data">
      <div className="space-y-10">
        {/* A/B Test Result */}
        <div className="rounded-2xl bg-amber-500/10 p-6">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <span className="font-semibold text-foreground">When the A/B Test Came Back Neutral</span>
          </div>
          <p className="text-muted-foreground">
            Product team's A/B test showed neutral results—no significant lift in engagement metrics. Because I had run survey and diary study research in parallel, we immediately had the data to understand why.
          </p>
        </div>

        {/* Core Problem */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">The Core Problem: Wrong Audience Reached the Feature</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-accent/50 p-5">
              <p className="mb-2 text-sm font-medium text-muted-foreground">What the survey predicted</p>
              <p className="text-foreground">
                Less engaged users are 2x more likely to prefer video
              </p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-2 text-sm font-medium text-muted-foreground">What the behavioral data showed</p>
              <p className="text-foreground">
                Only 10% of weekly app users visited the tab; majority were already super-engaged (7 days/week)
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-5">
            <div className="flex items-start gap-3">
              <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
              <div>
                <p className="font-semibold text-foreground">The Disconnect</p>
                <p className="mt-1 text-muted-foreground">
                  The majority of Watch Tab users were super-engaged, already spending 7 days a week on our app. The feature reached our most engaged users, not the less-engaged video-using audience we were trying to attract.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Engagement Was Shallow */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Why Engagement Was Shallow</h3>

          <div className="mb-6 rounded-2xl bg-muted/60 p-5">
            <p className="mb-3 text-sm font-medium text-muted-foreground">From behavioral data:</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-background p-3 text-center">
                <p className="text-2xl font-bold text-foreground">~xx sec</p>
                <p className="text-sm text-muted-foreground">Median time spent per visit</p>
              </div>
              <div className="rounded-xl bg-background p-3 text-center">
                <p className="text-2xl font-bold text-foreground">&lt;xx %</p>
                <p className="text-sm text-muted-foreground">Visits with more than 1 video impression</p>
              </div>
              <div className="rounded-xl bg-background p-3 text-center">
                <p className="text-2xl font-bold text-foreground">~x min</p>
                <p className="text-sm text-muted-foreground">Weekly time on Watch Tab (vs. much more total in-app)</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <p className="mb-3 font-semibold text-foreground">The diary study revealed why:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Users wanted to find specific videos for specific stories, not browse a feed. Without search or navigation, they couldn't accomplish their goals.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                "Scan and sample" behavior meant if the first video wasn't relevant, they bounced.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide07Triangulation;
