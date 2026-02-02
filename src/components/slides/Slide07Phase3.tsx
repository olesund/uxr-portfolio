import React, { useState } from "react";
import SlideContainer from "@/components/presentation/SlideContainer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import TesterExperienceModal from "@/components/presentation/TesterExperienceModal";
import easeOfUseChart from "@/assets/ease-of-use-chart.png";
import basicVideoExample from "@/assets/basic-video-example.mov";
import advancedVideoExample from "@/assets/advanced-video-example.mov";

const Slide07Phase3: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <p className="font-medium text-foreground">200 Non-Professional Creators</p>
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
          <p className="mb-4 text-muted-foreground">
            We partnered with a research vendor to run an experiment in which 200 testers tried to recreate an example
            video using a randomly assigned video editing app. Afterwards they indicated if they felt like they
            completed the task and rated how easy the task was.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • <strong>Independent Variables:</strong> Video complexity (basic vs. advanced), Editing apps
              (step-by-step flows vs. stacked timelines)
            </li>
            <li>
              • <strong>Dependent Variables:</strong> Task completion success, Ease of use ratings, Time on task
            </li>
            <li>
              • <strong>Apps Tested:</strong>
              <ul className="ml-6 mt-1 space-y-1">
                <li>— Step-by-step flow: Instagram Reels, TikTok</li>
                <li>— Stacked timeline editors: CapCut, InShot</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Try the Tester Experience CTA */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-6 text-center">
          <Button 
            onClick={() => setIsModalOpen(true)} 
            size="lg" 
            className="gap-2 w-full sm:w-auto text-sm sm:text-base whitespace-normal h-auto py-3"
          >
            <Play className="h-5 w-5 shrink-0" />
            <span>See what this experiment looked like for the participant</span>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            You will be randomly assigned an app to download and a video to re-create (the "basic" or "advanced" example).
          </p>
        </div>

        <TesterExperienceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Reference Videos (that users recreated) */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Reference videos (that users recreated)</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="mb-3 text-base font-medium text-foreground">
                <strong>Basic Video:</strong> Single clip + music + one text element
              </p>
              <div className="rounded-xl overflow-hidden bg-background">
                <video src={basicVideoExample} controls className="w-full h-auto max-h-[200px] object-contain" preload="metadata" />
              </div>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="mb-3 text-base font-medium text-foreground">
                <strong>Advanced Video:</strong> Three clips synced to music + three text elements synced to video
              </p>
              <div className="rounded-xl overflow-hidden bg-background">
                <video src={advancedVideoExample} controls className="w-full h-auto max-h-[200px] object-contain" preload="metadata" />
              </div>
            </div>
          </div>
        </div>

        {/* Data Analysis */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
          <p className="mb-4 text-muted-foreground">
            For each participant we measured how long it took to complete the video editing task. We also asked them to
            rate the difficulty of the task on a 5-point likert scale.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • Compared ease-of-use ratings, task completion rates, and time on task across video types and editor
              types
            </li>
            <li>• Statistical tests to detect significant differences</li>
          </ul>
        </div>

        {/* Key Finding */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="mb-4 text-lg text-foreground">
            There wasn't a single design that was always better: Different editors worked better for different video
            types.
          </p>
          <ul className="space-y-2 text-foreground">
            <li>
              <strong>Basic Videos:</strong> Step-by-step editors performed better with faster completion rates and
              rated easier to use
            </li>
            <li>
              <strong>Advanced Videos:</strong> Stacked timeline editors performed better, with much faster completion
              times, better usability rating, and fewer instances of users getting stuck (in observed videos)
            </li>
          </ul>
        </div>

        {/* Ease-of-Use Chart */}
        <div className="rounded-2xl overflow-hidden bg-background">
          <img
            src={easeOfUseChart}
            alt="Interaction plot showing ease-of-use ratings by editor type and video complexity"
            className="w-full h-auto"
          />
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide07Phase3;
