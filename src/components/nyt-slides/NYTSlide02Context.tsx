import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';

const NYTSlide02Context: React.FC = () => {
  return (
    <SlideContainer slideNumber={1} header="Context">
      <div className="space-y-10">
        {/* The Opportunity */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">The Opportunity</h3>
          <p className="leading-relaxed text-muted-foreground">
            News consumption in the U.S. is shifting to video platforms like TikTok, Instagram, and YouTube—especially among younger audiences. According to Reuters, about half of Americans under 35 use social media or video networks as their <strong className="text-foreground">primary</strong> source of news.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The New York Times was already producing ~20 vertical news videos per day, but most users saw these on third-party apps like Instagram or TikTok. We needed to create a home for videos within our own app.
          </p>
        </div>

        {/* The Proposed Solution */}
        <div className="rounded-2xl bg-accent/50 p-5">
          <p className="mb-1 text-sm text-muted-foreground">The Proposed Solution</p>
          <p className="text-lg font-semibold text-foreground">
            Watch Tab: A dedicated vertical video feed
          </p>
          <p className="mt-2 text-muted-foreground">
            The initial vision from the senior editor was a dedicated Watch tab in the News app: a vertical video feed similar to TikTok, featuring 15-20 editorially curated videos per day.
          </p>
        </div>

        {/* Assumptions */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Assumptions Behind the Watch Tab</h3>
          <div className="space-y-3">
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">The feature will improve engagement with users who don't already have a strong, resilient habit with us.</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">The Watch tab should serve as a "video version" of the day's top stories—a replacement for reading the Home tab for users who prefer videos over text.</p>
            </div>
            <div className="rounded-xl bg-muted/60 p-4">
              <p className="text-foreground">Users will value editorial curation over a personalized feed.</p>
            </div>
          </div>
        </div>

        {/* Challenging Stakeholder Dynamics */}
        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="mb-3 text-lg font-semibold text-foreground">Challenging Stakeholder Dynamics</h3>
          <p className="leading-relaxed text-muted-foreground">
            I had concerns with this product design approach based on prior experience at Instagram. Without an algorithm and with a limited content pool (15-20 videos per day vs. unlimited on social platforms), would it lead to an engaging and satisfying experience? Would the right users even adopt it?
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My initial suggestion to explore multiple designs was met with resistance from the senior editor. I knew he didn't respond well to hypothetical push-back, so I designed a research program to <strong className="text-foreground">test the core assumptions</strong> that needed to be true for the "dedicated, curated feed of videos" to work.
          </p>
        </div>

        {/* Team Info */}
        <div className="rounded-2xl bg-muted/60 p-5">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">My Role</p>
              <p className="font-medium text-foreground">UX Researcher</p>
              <p className="mt-1 text-sm text-muted-foreground">Designed and presented all research. Mentored junior researcher who oversaw diary study.</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="font-medium text-foreground">Cross-functional</p>
              <p className="mt-1 text-sm text-muted-foreground">Product Manager, Product Designer, Data Scientist, Editors from Newsroom Video</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Stakeholders</p>
              <p className="font-medium text-foreground">Senior Leadership</p>
              <p className="mt-1 text-sm text-muted-foreground">Chief Product Officer, Masthead editor overseeing Video, Head of Video in Newsroom</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide02Context;
