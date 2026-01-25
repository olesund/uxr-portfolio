import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

const Slide05Phase1: React.FC = () => {
  return (
    <SlideContainer slideNumber={4} header="Phase 1: Online Community of Reels Creators">
      <div className="space-y-10">
        {/* Objective */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
          <p className="text-muted-foreground">
            Understand how successful creators make videos and test new editing features to see which tools creators find most useful.
          </p>
        </div>

        {/* Methodology */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Method:</p>
                <p className="font-medium text-foreground">Online Community Research</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration:</p>
                <p className="font-medium text-foreground">Six Weeks</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sample:</p>
                <p className="font-medium text-foreground">20 Non-Professional Reels Creators</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Criteria:</p>
                <p className="font-medium text-foreground">US, 18-35, 10+ Reels, 1,000+ views</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Collection */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Text posts and discussions in private Facebook group</li>
            <li>• Video recordings of editing sessions</li>
            <li>• One-on-one interviews</li>
          </ul>
        </div>

        {/* Research Activities */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Research Activities</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Testing prototypes of new features</li>
            <li>• Rating entertainment value of example videos</li>
            <li>• Sharing creative process in interviews</li>
          </ul>
        </div>

        {/* Data Analysis */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
          <p className="text-muted-foreground">
            Watched videos creators shared, read their discussions, and analyzed interview notes to find patterns.
          </p>
        </div>

        {/* Key Finding */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="mb-4 text-lg text-foreground">
            Most creators actively avoided Instagram's native editor for actual video creation. Instead, they used third-party apps (like CapCut), then uploaded finished videos to Instagram.
          </p>
          <ul className="space-y-2 text-foreground">
            <li>• Creators preferred "stacked timeline" editors where video, audio, and text layers are all visible at once</li>
            <li>• Making any video was easy on Instagram. But making a good video was hard</li>
          </ul>
        </div>

        {/* Visual Placeholder */}
        <Placeholder
          type="image"
          description="Side-by-side comparison: Linear Editor (Instagram Stories style) vs. Stacked Timeline Editor (CapCut style)"
          aspectRatio="video"
        />

        {/* Recommendation */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Recommendation to Leadership</p>
          <p className="text-foreground">
            It's not enough to make it easy to create any video—users want to create good videos. We should redesign the editor from a step-by-step flow to a stacked timeline where video, audio, and text are all on one screen in different layers.
          </p>
        </div>

        {/* Outcome */}
        <div className="rounded-2xl bg-muted/60 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Outcome: Initial Rejection</p>
          <p className="mb-4 text-foreground">
            Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was 'too complex.'
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• The Reels editor was based on Instagram Stories and TikTok. Why change what works?</li>
            <li>• Quality is subjective. How do we know advanced videos are better for viewers?</li>
            <li>• A complete redesign would require massive resources. How can we be sure?</li>
          </ul>
        </div>

        {/* The Pivot */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">The Pivot</p>
          <p className="mb-4 text-foreground">
            We didn't give up. We believed a redesign was key to increasing video production. To make our case, we launched two more studies to answer:
          </p>
          <ul className="space-y-1 text-foreground">
            <li><strong>A.</strong> What makes a video high-quality?</li>
            <li><strong>B.</strong> Which video editor design makes it easier to create high-quality videos?</li>
          </ul>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide05Phase1;
