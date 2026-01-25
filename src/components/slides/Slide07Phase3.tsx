import React from "react";
import SlideContainer from "@/components/presentation/SlideContainer";
import Placeholder from "@/components/presentation/Placeholder";
import basicVideoExample from "@/assets/basic-video-example.mov";
import advancedVideoExample from "@/assets/advanced-video-example.mov";

const Slide07Phase3: React.FC = () => {
  return (
    <SlideContainer slideNumber={6} header="Phase 3: Comparative Usability Study">
      <div className="space-y-10">
        {/* Objective */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
          <p className="text-muted-foreground">
            Test which editing architecture makes it easier to create different types of videos.
          </p>
        </div>

        {/* Methodology */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Method:</p>
                <p className="font-medium text-foreground">Randomized Between-Subjects Study</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration:</p>
                <p className="font-medium text-foreground">Six weeks</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sample:</p>
                <p className="font-medium text-foreground">400 Non-Professional Creators</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Criteria:</p>
                <p className="font-medium text-foreground">US, Canada, UK, India (18-35)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Partner:</p>
                <p className="font-medium text-foreground">MeasuringU (Usability Vendor)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Study Design */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Study Design</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • <strong>Independent Variables:</strong> Video complexity (basic vs. advanced), Editor type (linear vs.
              stacked)
            </li>
            <li>
              • <strong>Dependent Variables:</strong> Task completion success, Ease of use ratings
            </li>
            <li>
              • <strong>Apps Tested:</strong> Instagram Reels, TikTok (linear) vs. CapCut, InShot (stacked)
            </li>
          </ul>
        </div>

        {/* Reference Videos (that users recreated) */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Task Design</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="mb-3 text-sm font-medium text-foreground">
                <strong>Basic Video:</strong> Single clip + music + one text element
              </p>
              <div className="rounded-xl overflow-hidden bg-background">
                <video src={basicVideoExample} controls className="w-full h-auto" preload="metadata" />
              </div>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="mb-3 text-sm font-medium text-foreground">
                <strong>Advanced Video:</strong> Three clips synced to music + three text elements synced to video
              </p>
              <div className="rounded-xl overflow-hidden bg-background">
                <video src={advancedVideoExample} controls className="w-full h-auto" preload="metadata" />
              </div>
            </div>
          </div>
        </div>

        {/* Data Collection */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Participants randomly assigned a reference video and app</li>
            <li>• Task: Recreate reference video as closely as possible</li>
            <li>• Screen recording captured during task</li>
            <li>• Post-task usability ratings collected</li>
          </ul>
        </div>

        {/* Data Analysis */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Watched screen recordings to see where people struggled</li>
            <li>
              • Compared ease-of-use ratings, task completion rates, and time on task across video types and editor
              types
            </li>
          </ul>
        </div>

        {/* Key Finding */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="mb-4 text-lg text-foreground">
            If we want more high-quality content, we need a more powerful editor. Different editors worked better for
            different video types:
          </p>
          <ul className="space-y-2 text-foreground">
            <li>
              <strong>Simple Videos:</strong> Step-by-step editors performed better and rated easier to use
            </li>
            <li>
              <strong>Complex Videos:</strong> Stacked timeline editors performed better, with much faster completion
              times and better usability rating
            </li>
          </ul>
        </div>

        {/* Chart Placeholders */}
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder
            type="chart"
            description="Interaction plot showing ease-of-use ratings by editor type and video complexity"
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
