import React from "react";
import SlideContainer from "@/components/presentation/SlideContainer";
import Placeholder from "@/components/presentation/Placeholder";
import reelsEditorScreenshot from "@/assets/reels-editor-screenshot.webp";
import editsAppScreenshot from "@/assets/edits-app-screenshot.webp";

const Slide09Impact: React.FC = () => {
  return (
    <SlideContainer slideNumber={8} header="Impact">
      <div className="space-y-10">
        {/* Leadership Decision */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Leadership Decision</p>
          <p className="text-xl font-semibold text-foreground">
            Leadership approved the redesign—a decision they had initially rejected.
          </p>
        </div>

        {/* Product Outcomes */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Product Outcomes</h3>

          <div className="space-y-4">
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="font-medium text-foreground">Shipped the New Editor</p>
              <p className="mt-1 text-muted-foreground">
                A/B testing confirmed our findings: significantly more video production overall, especially high-quality
                videos (measured by views and likes). When the feature finally rolled out to all users there was major
                press release and PR campaign (a rare instance for product features)
              </p>
            </div>

            {/* Quote and Screenshot */}
            <div className="grid gap-4 md:grid-cols-2 items-center">
              <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                <p className="text-muted-foreground italic">
                  "We're making it easier for you to edit your reels on Instagram by bringing together video clips,
                  audio, stickers, and text on a unified editing screen. This makes it easier to align and time elements
                  of your reel to the right moments in a more visual way."
                </p>
                <footer className="mt-3">
                  <a
                    href="https://about.fb.com/news/2023/04/instagram-reels-trending-audio-and-gifts-updates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    — Instagram Press Release
                  </a>
                </footer>
              </blockquote>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={reelsEditorScreenshot}
                  alt="Instagram Reels stacked timeline editor interface"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="font-medium text-foreground">Instagram "Edits" App</p>
              <p className="mt-1 text-muted-foreground">
                About a year later, Instagram released 'Edits'—a standalone editing app fully built around the stacked
                timeline design. This represented a major shift toward positioning Instagram as a serious creative
                platform.
              </p>
            </div>

            {/* Edits App Quote and Screenshot */}
            <div className="grid gap-4 md:grid-cols-2 items-center">
              <blockquote className="rounded-2xl border-l-4 border-primary bg-muted/40 p-5">
                <p className="text-muted-foreground italic">
                  "Today, we're launching Edits, a new video creation app that helps you make great videos directly on
                  your phone. If you're passionate about making videos, Edits has the tools you need to support your
                  creation process, all in one place."
                </p>
                <footer className="mt-3">
                  <a
                    href="https://about.fb.com/news/2025/04/introducing-edits-streamlined-video-creation-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    — Instagram Press Release
                  </a>
                </footer>
              </blockquote>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={editsAppScreenshot}
                  alt="Instagram Edits app interface showing video editing features"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Placeholders */}
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder
            type="image"
            description="Screenshot of the new stacked timeline editor in Instagram Reels"
            aspectRatio="video"
          />
          <Placeholder
            type="image"
            description="Screenshot of Instagram Edits app announcement/press release"
            aspectRatio="video"
          />
        </div>

        {/* A/B Test Results Placeholder */}
        <Placeholder
          type="chart"
          description="Chart showing A/B test results (production increase, quality metrics)"
          aspectRatio="video"
        />
      </div>
    </SlideContainer>
  );
};

export default Slide09Impact;
