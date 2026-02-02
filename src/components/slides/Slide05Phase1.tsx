import React from "react";
import SlideContainer from "@/components/presentation/SlideContainer";
import editorComparison from "@/assets/editor-comparison.png";

const Slide05Phase1: React.FC = () => {
  return (
    <SlideContainer slideNumber={3} header="Phase 1: Online Community of Reels Creators">
      <div className="space-y-10">
        {/* Objective */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
          <p className="text-muted-foreground">
            Understand why some small-scale creators were seeing initial success with their Reels (to see if we can help
            more users adopt similar tactics). Test new editing features to see which tools creators find most useful.
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
            <p className="text-muted-foreground">
              {" "}
              Over the course of six weeks 20 Reels creators were part of a private Facebook group. Three days a week I
              would ask them to complete a different activity. Examples included:
            </p>
            <li>• Testing prototypes of new features and giving feedback the same day</li>
            <li>• Rating entertainment value of example videos created by our new features</li>
            <li>• Sharing creative process in 1-on-1 interviews with me</li>
            <li>• Discussing with one another and sharing tips and tricks for video creation</li>
            <p>
              Because the study ran for six weeks I had the opportunity to observe many real-life moments of short-form
              video creations; more revealing than the sometimes artificial feedback received during one-off research
              sessions.
            </p>
          </ul>
        </div>

        {/* Data Analysis */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
          <p className="text-muted-foreground">
            Throughout the six weeks I was analyzing the data (Facebook posts, videos that the creators made and posted,
            notes from interviews) in real time and informed several smaller feature launches. At the end of the study
            we revieved all data again to look for patterns and this is where our greatest insight emerged.
          </p>
        </div>

        {/* Key Finding */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="mb-4 text-lg text-foreground">
            Most creators actively avoided Instagram's native editor for actual video creation. Instead, they used
            third-party apps (like CapCut), then uploaded finished videos to Instagram.
          </p>
          <ul className="space-y-2 text-foreground">
            <li>
              • Creators preferred "stacked timeline" editors where video, audio, and text layers are all visible at
              once on a single screen. Instagram's step-by-step flow forced them to edit video on one screen, then
              switch to separate screens for audio, text, and effects—constantly jumping back and forth to line things
              up.
            </li>
            <li>
              • Making any video was easy on Instagram. But making a good video was hard. Creators felt they needed to
              reach a quality bar before posting—unlike TikTok where the culture was more relaxed. Instagram's bar for
              polish was much higher.
            </li>
          </ul>
        </div>

        {/* Editor Comparison */}
        <div className="rounded-2xl overflow-hidden bg-background">
          <img
            src={editorComparison}
            alt="Side-by-side comparison: Step-by-step editor (Instagram Stories style) vs. Stacked timeline editor (CapCut style)"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Recommendation */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Recommendation to Leadership
          </p>
          <p className="text-foreground">
            It's not enough to make it easy to create any video—users want to create good videos. We should redesign the
            editor from a step-by-step flow to a stacked timeline where video, audio, and text are all on one screen in
            different layers.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide05Phase1;
