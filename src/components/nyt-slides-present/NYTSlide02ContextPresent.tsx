import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide02ContextPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={1} header="Context">
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            The Opportunity
          </h2>
          <p className="text-xl text-muted-foreground">
            Half of Americans under 35 use social media or video platforms as their primary news source. NYT was already producing ~20 vertical news videos/day.
          </p>
        </div>

        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-2 text-sm text-muted-foreground">Proposed Solution</p>
          <p className="text-xl font-semibold text-foreground">
            Watch Tab: A dedicated vertical video feed
          </p>
          <p className="mt-2 text-muted-foreground">
            15-20 editorially curated videos per day, similar to TikTok
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Assumptions Behind the Watch Tab</h3>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li>• Will improve engagement with less-engaged users</li>
            <li>• Can serve as a "video version" of daily top stories</li>
            <li>• Editorial curation will be valued over personalization</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-muted/60 p-5">
          <div className="grid gap-4 md:grid-cols-3 text-center">
            <div>
              <p className="text-sm text-muted-foreground">My Role</p>
              <p className="font-semibold text-foreground">UX Researcher</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="font-semibold text-foreground">Cross-functional</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Stakeholders</p>
              <p className="font-semibold text-foreground">Senior Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide02ContextPresent;
