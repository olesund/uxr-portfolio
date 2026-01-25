import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent } from '@/components/ui/card';
import Placeholder from '@/components/presentation/Placeholder';
import { AlertTriangle, MessageSquare, Video, Users } from 'lucide-react';

const Slide05Phase1: React.FC = () => {
  return (
    <SlideContainer slideNumber={4} header="Phase 1: Online Community of Reels Creators">
      <div className="space-y-8">
        {/* Objectives */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Understanding How Creators Work
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm font-medium text-muted-foreground">Objective 1</p>
              <p className="font-medium text-foreground">Understand how successful creators make videos</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm font-medium text-muted-foreground">Objective 2</p>
              <p className="font-medium text-foreground">Test new editing features to see which tools creators find most useful</p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Method</p>
                <p className="font-semibold text-foreground">Online Community Research</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Duration</p>
                <p className="font-semibold text-foreground">Six Weeks</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Sample</p>
                <p className="font-semibold text-foreground">20 Non-Professional Reels Creators</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Criteria</p>
                <p className="font-semibold text-foreground">US, 18-35, 10+ Reels, 1,000+ views</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="text-sm text-foreground">Text posts and discussions in private Facebook group</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
            <Video className="h-5 w-5 text-primary" />
            <span className="text-sm text-foreground">Video recordings of editing sessions</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm text-foreground">One-on-one interviews</span>
          </div>
        </div>

        {/* Key Finding */}
        <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
              <p className="text-lg font-medium text-foreground">
                Most creators actively avoided Instagram's native editor for actual video creation. Instead, they used third-party apps (like CapCut), then uploaded finished videos to Instagram.
              </p>
            </div>
          </div>
        </div>

        {/* Why section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Why?</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>Creators preferred "stacked timeline" editors where video, audio, and text layers are all visible at once on a single screen. Instagram's step-by-step flow forced them to edit video on one screen, then switch to separate screens for audio, text, and effects—constantly jumping back and forth to line things up.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>Making any video was easy on Instagram. But making a good video was hard. Creators felt they needed to reach a quality bar before posting—unlike TikTok where the culture was more relaxed. Instagram's bar for polish was much higher.</span>
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
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Recommendation to Leadership</p>
            <p className="text-lg text-foreground">
              It's not enough to make it easy to create any video—users want to create good videos. We should redesign the editor from a step-by-step flow to a stacked timeline where video, audio, and text are all on one screen in different layers.
            </p>
          </CardContent>
        </Card>

        {/* Outcome */}
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-destructive">Outcome: Initial Rejection</p>
          <p className="mb-4 text-foreground">
            Leadership pushed back hard. They wanted Instagram to 'feel simple' and worried that a stacked timeline was 'too complex.'
          </p>
          <div className="space-y-2">
            <p className="font-medium text-foreground">Their Concerns:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• The Reels editor was based on Instagram Stories (hugely successful) and TikTok's approach. Why change what works?</li>
              <li>• Quality is subjective. How do we know what more advanced videos are better for viewers?</li>
              <li>• A complete redesign would require massive engineering resources. How can we be sure this new design is better?</li>
            </ul>
          </div>
        </div>

        {/* The Pivot */}
        <div className="rounded-lg border border-success/30 bg-success/5 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-success">The Pivot</p>
          <p className="mb-4 text-foreground">
            We didn't give up. We believed a redesign was key to increasing video production. To make our case, we launched two more studies to answer:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded bg-background p-4">
              <p className="font-medium text-foreground">A. What makes a video high-quality?</p>
            </div>
            <div className="rounded bg-background p-4">
              <p className="font-medium text-foreground">B. Which video editor design makes it easier to create high-quality videos?</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide05Phase1;
