import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

const Slide05Phase1: React.FC = () => {
  return (
    <SlideContainer slideNumber={4} header="Phase 1: Online Community of Reels Creators">
      <div className="space-y-8">
        {/* Objectives */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Understanding How Creators Work
          </h2>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li>• Understand how successful creators make videos</li>
            <li>• Test new editing features to see which tools creators find most useful</li>
          </ul>
        </div>

        {/* Methodology */}
        <div className="grid gap-x-8 gap-y-4 text-foreground sm:grid-cols-4">
          <div>
            <p className="text-sm text-muted-foreground">Method</p>
            <p className="font-medium">Online Community Research</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Duration</p>
            <p className="font-medium">Six Weeks</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Sample</p>
            <p className="font-medium">20 Non-Professional Reels Creators</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Criteria</p>
            <p className="font-medium">US, 18-35, 10+ Reels, 1,000+ views</p>
          </div>
        </div>

        {/* Data Collection */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Data Collection</p>
          <ul className="space-y-1 text-foreground">
            <li>• Text posts and discussions in private Facebook group</li>
            <li>• Video recordings of editing sessions</li>
            <li>• One-on-one interviews</li>
          </ul>
        </div>

        {/* Research Activities */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Research Activities</p>
          <ul className="space-y-1 text-foreground">
            <li>• Testing prototypes of new features</li>
            <li>• Rating entertainment value of example videos</li>
            <li>• Sharing creative process in interviews</li>
          </ul>
        </div>

        {/* What I Did with the Data */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">What I Did with the Data</p>
          <p className="text-foreground">
            Watched videos creators shared, read their discussions, and analyzed interview notes to find patterns.
          </p>
        </div>

        {/* Key Finding */}
        <div className="border-l-4 border-primary pl-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="text-lg text-foreground">
            Most creators actively avoided Instagram's native editor for actual video creation. Instead, they used third-party apps (like CapCut), then uploaded finished videos to Instagram.
          </p>
        </div>

        {/* Why section */}
        <div className="space-y-4">
          <p className="font-semibold text-foreground">Why?</p>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              • Creators preferred "stacked timeline" editors where video, audio, and text layers are all visible at once on a single screen. Instagram's step-by-step flow forced them to edit video on one screen, then switch to separate screens for audio, text, and effects—constantly jumping back and forth to line things up.
            </li>
            <li>
              • Making any video was easy on Instagram. But making a good video was hard. Creators felt they needed to reach a quality bar before posting—unlike TikTok where the culture was more relaxed. Instagram's bar for polish was much higher.
            </li>
          </ul>
        </div>

        {/* Visual Placeholder */}
        <Placeholder
          type="image"
          description="Side-by-side comparison: Linear Editor (Instagram Stories style) vs. Stacked Timeline Editor (CapCut style)"
          aspectRatio="video"
        />

        {/* Recommendation */}
        <div className="border-l-4 border-primary pl-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Recommendation to Leadership</p>
          <p className="text-lg text-foreground">
            It's not enough to make it easy to create any video—users want to create good videos. We should redesign the editor from a step-by-step flow to a stacked timeline where video, audio, and text are all on one screen in different layers.
          </p>
        </div>

        {/* Outcome */}
        <div className="border-l-4 border-destructive pl-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-destructive">Outcome: Initial Rejection</p>
          <p className="mb-4 text-foreground">
            Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was 'too complex.'
          </p>
          <p className="mb-2 font-medium text-foreground">Their Concerns:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• The Reels editor was based on Instagram Stories (hugely successful) and TikTok's approach. Why change what works?</li>
            <li>• Quality is subjective. How do we know what more advanced videos are better for viewers?</li>
            <li>• A complete redesign would require massive engineering resources. How can we be sure this new design is better?</li>
          </ul>
        </div>

        {/* The Pivot */}
        <div className="border-l-4 border-success pl-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-success">The Pivot</p>
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
