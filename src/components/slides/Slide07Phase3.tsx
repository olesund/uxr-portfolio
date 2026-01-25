import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

const Slide07Phase3: React.FC = () => {
  return (
    <SlideContainer slideNumber={6} header="Phase 3: Comparative Usability Study">
      <div className="space-y-10">
        {/* Hero Card */}
        <div className="rounded-2xl bg-accent/50 p-6 md:p-8">
          <p className="mb-2 text-sm font-medium text-primary">PHASE 3</p>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Comparative Usability Study
          </h2>
          <p className="text-muted-foreground">
            Experimental study testing which architecture works best for basic vs. advanced videos. Proved stacked timeline editors make it easier to create high-quality videos.
          </p>
        </div>

        {/* Objective */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
          <p className="mb-4 text-muted-foreground">
            Test which editing architecture makes it easier to create different types of videos.
          </p>
          <div className="rounded-2xl bg-accent/40 p-5">
            <p className="mb-1 text-sm text-muted-foreground">Critical Question:</p>
            <p className="text-foreground">
              "Does the stacked timeline architecture make editing easier, or does it add complexity that makes things harder (as leadership feared)?"
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Method:</p>
                <p className="font-medium text-foreground">Randomized Between-Subjects Experimental Study</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Partner:</p>
                <p className="font-medium text-foreground">MeasuringU (Quantitative Usability Vendor)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sample:</p>
                <p className="font-medium text-foreground">400 Non-Professional Video Creators</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Markets:</p>
                <p className="font-medium text-foreground">US, Canada, UK, India (18-35)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Design Decision */}
        <div>
          <p className="text-foreground">
            <span className="font-semibold">Key Design Decision:</span>{' '}
            <span className="text-muted-foreground">
              Used existing market apps rather than building prototypes. This saved engineering time and allowed quick testing.
            </span>
          </p>
        </div>

        {/* Study Design */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Study Design</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">• Independent Variables:</span> Video complexity (basic vs. advanced), Editing architecture (linear vs. stacked timeline)
            </li>
            <li>
              <span className="font-medium text-foreground">• Dependent Variables:</span> Task completion success, Ease of use ratings
            </li>
          </ul>
        </div>

        {/* Apps Tested */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Apps Tested</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-1 text-sm text-muted-foreground">Linear Flow:</p>
              <p className="font-medium text-foreground">Instagram Reels, TikTok, Facebook Reels</p>
            </div>
            <div className="rounded-2xl bg-accent/40 p-5">
              <p className="mb-1 text-sm text-muted-foreground">Stacked Timeline:</p>
              <p className="font-medium text-foreground">CapCut, InShot</p>
            </div>
          </div>
        </div>

        {/* Task Design */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Task Design</h3>
          <p className="mb-4 text-muted-foreground">
            I created two reference videos for participants to recreate using provided clips:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-2 font-medium text-foreground">Basic Video</p>
              <p className="text-muted-foreground">Single clip + music + one text element</p>
              <p className="mt-2 text-sm italic text-muted-foreground">Tests what step-by-step editors were designed for</p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-2 font-medium text-foreground">Advanced Video</p>
              <p className="text-muted-foreground">Three clips synced to music beat + three text elements synced to video</p>
              <p className="mt-2 text-sm italic text-muted-foreground">Tests videos with the three success attributes from Phase 2</p>
            </div>
          </div>
        </div>

        {/* Video Placeholder */}
        <Placeholder
          type="video"
          description="Videos of the two example videos (basic and advanced) participants had to recreate"
          aspectRatio="video"
        />

        {/* Procedure */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Procedure</h3>
          <ol className="space-y-2 text-muted-foreground">
            <li>1. Participants randomly assigned a reference video to recreate (basic or advanced) and app to edit with</li>
            <li>2. Task: Recreate reference video as closely as possible using the assigned app</li>
            <li>3. Screen recording captured during task</li>
            <li>4. Post-task usability rating collected</li>
          </ol>
        </div>

        {/* Data Analysis */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Watched screen recordings to see where people struggled</li>
            <li>• Compared ease-of-use ratings across video types and editor types</li>
          </ul>
        </div>

        {/* Key Finding */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="mb-4 text-lg font-medium text-foreground">
            Editor Type Must Match Video Complexity
          </p>
          <p className="mb-6 text-muted-foreground">
            The results showed no single "best" editor. Instead, different editors worked better for different video types:
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-background/80 p-4">
              <p className="mb-2 font-medium text-foreground">For Simple Videos:</p>
              <p className="text-muted-foreground">Step-by-step editors performed better and rated easier to use. Leadership was right about simple interfaces for simple tasks.</p>
            </div>
            <div className="rounded-xl bg-background/80 p-4">
              <p className="mb-2 font-medium text-foreground">For Complex Videos:</p>
              <p className="text-muted-foreground">Stacked timeline editors performed better, rated easier to use, with much faster completion times. Our team was right about stacked timelines for high-quality videos.</p>
            </div>
          </div>
        </div>

        {/* Chart Placeholders */}
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder
            type="chart"
            description="Interaction plot showing ease-of-use ratings: Basic videos (linear > stacked), Advanced videos (stacked > linear)"
            aspectRatio="video"
          />
          <Placeholder
            type="chart"
            description="Task completion time comparison across conditions"
            aspectRatio="video"
          />
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide07Phase3;
