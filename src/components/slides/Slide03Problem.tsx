import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
const Slide03Problem: React.FC = () => {
  return <SlideContainer slideNumber={1} header="Problem + Key Constraints">
      <div className="space-y-10">
        {/* Business Context */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Business Context</h3>
          <p className="text-muted-foreground leading-relaxed">
            Instagram Reels had recently launched as the company's top priority. But we faced a critical problem: a lot of users were watching our short-form videos, but we didn't have enough creators making them! Demand outpaced supply! If viewers couldn't find enough entertaining videos, we worried that they’d stop using Reels altogether and visit TikTok instead.












 
          </p>
        </div>

        {/* Key Questions */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">Business Goal</p>
            <p className="text-lg font-semibold text-foreground">
              Increase the production of short-form videos.
            </p>
          </div>
          <div className="rounded-2xl bg-accent/50 p-5">
            <p className="mb-1 text-sm text-muted-foreground">Core Question</p>
            <p className="text-lg font-semibold text-foreground">
              How do we make it easier for users to make short-form videos on Instagram?
            </p>
          </div>
        </div>

        {/* Scope note */}
        <p className="text-muted-foreground text-sm mx-[30px]">Another team focused on motivating people to make videos. My team focused on making the process easier.</p>

        {/* Team Info */}
        <div className="rounded-2xl bg-muted/60 p-5">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">My Role</p>
              <p className="font-medium text-foreground">UX Researcher</p>
              <p className="mt-1 text-sm text-muted-foreground">Designed, ran, and presented all research</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="font-medium text-foreground">Cross-functional</p>
              <p className="mt-1 text-sm text-muted-foreground">Product Manager, Product Designer, Data Scientist, iOS Engineer</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Stakeholders</p>
              <p className="font-medium text-foreground">Senior Leadership</p>
              <p className="mt-1 text-sm text-muted-foreground">Including the Head of Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>;
};
export default Slide03Problem;