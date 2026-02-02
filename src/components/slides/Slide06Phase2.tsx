import React, { useState } from "react";
import SlideContainer from "@/components/presentation/SlideContainer";
import videoAttributesChart from "@/assets/video-attributes-chart.png";
import regressionChart from "@/assets/regression-chart.png";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Slide06Phase2: React.FC = () => {
  return (
    <SlideContainer slideNumber={5} header="Phase 2: Large-Scale Video Content Analysis">
      <div className="space-y-10">
        {/* Objective */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Objective</h3>
          <p className="text-muted-foreground">
            Determine the attributes that set high-quality videos apart from less engaging ones.
          </p>
        </div>

        {/* Methodology */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Method:</p>
                <p className="font-medium text-foreground">Content Analysis</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration:</p>
                <p className="font-medium text-foreground">Three weeks</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sample:</p>
                <p className="font-medium text-foreground">2,000 Videos (1,000 each group)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Success Threshold:</p>
                <p className="font-medium text-foreground">&gt;1,000 views (top 10% in US)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Coders:</p>
                <p className="font-medium text-foreground">Internal colleagues (blinded)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Collection with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h3 className="mb-3 text-xl font-semibold text-foreground">Data Collection</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Recruited internal colleagues to watch 50-100 videos each, randomly assigned from both the low and high-quality pools</li>
              <li>• Coders marked which attributes were present in each video (yes=1/no=0)</li>
              <li>• Coders didn't know if a video was high or low-quality (blinded) to keep their responses unbiased</li>
              <li>• Coders completed a training session with example videos and a coding manual defining each attribute</li>
              <li>• 10% of videos were coded by multiple coders to assess inter-rater reliability (κ &gt; 0.80)</li>
            </ul>
            
            {/* View Coding Sheet Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-4 gap-2">
                  <FileText className="h-4 w-4" />
                  View example coding sheet
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle>Sample Video Coding Sheet</DialogTitle>
                </DialogHeader>
                <div className="w-full h-[70vh]">
                  <iframe
                    src="/documents/Video_Coding_Sheet_Example.pdf"
                    className="w-full h-full rounded-lg border border-border"
                    title="Video Coding Sheet Example"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Sidebar box */}
          <div className="lg:w-72 shrink-0">
            <div className="rounded-2xl bg-muted/60 p-5 border-l-4 border-primary">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Examples of Attributes Coded</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Presence of humor, humans, animals</li>
                <li>• Genre (sports, fashion, travel, dance)</li>
                <li>• Music usage, number of clips, text on screen</li>
                <li>• Cuts-to-music synchronization</li>
                <li>• Etc.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Analysis */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Data Analysis</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Compared attribute frequency in high vs. low-quality videos</li>
            <li>• Ran chi-square tests for statistical significance</li>
            <li>• Ran logistic regression to find strongest predictors</li>
          </ul>
        </div>

        {/* Charts */}
        <div>
          <div className="grid gap-4 md:grid-cols-2">
            <Dialog>
              <DialogTrigger asChild>
                <div className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity">
                  <img
                    src={videoAttributesChart}
                    alt="Bar chart comparing % of high-quality vs. low-quality videos with each attribute"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-2">
                <img
                  src={videoAttributesChart}
                  alt="Bar chart comparing % of high-quality vs. low-quality videos with each attribute"
                  className="w-full h-auto object-contain"
                />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <div className="rounded-2xl overflow-hidden bg-background cursor-pointer hover:opacity-90 transition-opacity">
                  <img
                    src={regressionChart}
                    alt="Regression results showing which attributes predict video success"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-2">
                <img
                  src={regressionChart}
                  alt="Regression results showing which attributes predict video success"
                  className="w-full h-auto object-contain"
                />
              </DialogContent>
            </Dialog>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground italic">Example charts using dummy data.</p>
        </div>

        {/* Key Finding */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding</p>
          <p className="mb-4 text-lg text-foreground">Three attributes strongly predicted if a video was high-quality (received &gt; 1,000 views):</p>
          <ul className="space-y-2 text-foreground">
            <li>
              <strong>1. Multiple Clips</strong> — Videos used more than one clip (vs. single-shot)
            </li>
            <li>
              <strong>2. Music Sync</strong> — Clips synced to beat/rhythm of music
            </li>
            <li>
              <strong>3. Text Sync</strong> — Text elements precisely timed to match video and music
            </li>
          </ul>
        </div>

        {/* Outcome */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Outcome</p>
          <p className="text-foreground">
            We had an objective definition of what makes videos high-quality. Next, we tested which editor design makes
            it easier to create these kinds of videos.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide06Phase2;
