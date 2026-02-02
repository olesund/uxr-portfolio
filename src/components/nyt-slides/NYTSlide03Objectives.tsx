import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';

const NYTSlide03Objectives: React.FC = () => {
  return (
    <SlideContainer slideNumber={2} header="Research Objectives">
      <div className="space-y-10">
        {/* Framing */}
        <p className="text-lg leading-relaxed text-muted-foreground">
          I positioned the research as a "learning agenda" to run in parallel with an A/B test of the Watch Tab:
        </p>

        {/* Objective 1 */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">1. Test the Core Hypotheses</h3>
          <div className="space-y-3">
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">Are <em>younger</em> NYT users more likely to consume news videos?</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">Are <em>less engaged</em> NYT users more likely to consume news videos?</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">Is there a sizable group of users who use video first or exclusively in their news consumption?</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">Are our current users interested in getting videos from The New York Times in the app?</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">Is the value proposition of an editorially curated Watch Tab clear and attractive?</p>
            </div>
          </div>
        </div>

        {/* Objective 2 */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">2. Understand How Users Experience the Feature</h3>
          <div className="space-y-3">
            <div className="rounded-xl bg-accent/50 p-4">
              <p className="text-foreground">What draws people to news videos vs. other formats?</p>
            </div>
            <div className="rounded-xl bg-accent/50 p-4">
              <p className="text-foreground">What behaviors and expectations do users bring from social platforms? How do these shape how they interact with our tab?</p>
            </div>
          </div>
        </div>

        {/* Objective 3 */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">3. Be Ready When A/B Test Results Arrive</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-green-500/10 p-4">
              <p className="mb-1 text-sm font-medium text-green-600">If metrics are positive</p>
              <p className="text-foreground">Understand what's working to scale it</p>
            </div>
            <div className="rounded-xl bg-amber-500/10 p-4">
              <p className="mb-1 text-sm font-medium text-amber-600">If neutral/negative</p>
              <p className="text-foreground">Immediately diagnose why and what to try next</p>
            </div>
          </div>
        </div>

        {/* XFN Collaboration */}
        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="mb-3 text-lg font-semibold text-foreground">XFN Collaboration Strategy</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Brought product, design, and editorial stakeholders into survey design and diary study planning
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Shared preliminary findings throughout to build trust
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Framed insights as opportunities, not criticisms
            </li>
          </ul>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide03Objectives;
