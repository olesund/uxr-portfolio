import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';

const Slide03Problem: React.FC = () => {
  return (
    <SlideContainer slideNumber={2} header="Problem + Key Constraints">
      <div className="space-y-8">
        {/* Business Context */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Business Context
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Instagram Reels had recently launched as the company's top priority. But we faced a critical problem: people were watching Reels. A lot of them! But we didn't have enough creators making them. Demand outpaced supply. If viewers couldn't find enough entertaining videos, they'd stop using the feature.
          </p>
        </div>

        {/* Key Questions */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Business Goal</p>
            <p className="text-xl font-semibold text-foreground">
              Increase the production of short-form videos.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Core Question</p>
            <p className="text-xl font-semibold text-foreground">
              How do we make it easier for users to make short-form videos on Instagram?
            </p>
          </div>
        </div>

        {/* Scope note */}
        <p className="text-muted-foreground">
          Another team focused on motivating people to make videos. My team focused on making the editing process easier.
        </p>

        {/* Team Info */}
        <div className="rounded-lg bg-muted/50 p-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">My Role</p>
              <p className="font-medium text-foreground">Lead UX Researcher</p>
              <p className="text-sm text-muted-foreground">Designed, ran, and presented all research</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="font-medium text-foreground">Cross-functional</p>
              <p className="text-sm text-muted-foreground">Product Manager, Product Designer, Data Scientist, iOS Engineer</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Stakeholders</p>
              <p className="font-medium text-foreground">Senior Leadership</p>
              <p className="text-sm text-muted-foreground">Including the Head of Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide03Problem;
