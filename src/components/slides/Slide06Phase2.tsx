import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent } from '@/components/ui/card';
import Placeholder from '@/components/presentation/Placeholder';
import { Layers, Music, Type } from 'lucide-react';

const Slide06Phase2: React.FC = () => {
  return (
    <SlideContainer slideNumber={5} header="Phase 2: Large-Scale Video Content Analysis">
      <div className="space-y-8">
        {/* Objective */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            What makes a video high-quality?
          </h2>
          <p className="text-lg text-muted-foreground">
            Objective: Determine the attributes that set high-quality videos apart from less engaging ones.
          </p>
        </div>

        {/* How We Defined High-Quality */}
        <Card>
          <CardContent className="p-6">
            <p className="mb-2 text-sm font-medium text-muted-foreground">How We Defined "High-Quality"</p>
            <p className="text-xl font-semibold text-foreground">A video with more than 1,000 views</p>
            <p className="mt-1 text-sm text-muted-foreground">This was the top 10% of Reels in the U.S., based on data analysis</p>
          </CardContent>
        </Card>

        {/* Sample Size */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6 text-center">
            <p className="text-4xl font-bold text-primary">2,000</p>
            <p className="text-sm font-medium text-muted-foreground">Videos Total</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <p className="text-2xl font-bold text-foreground">1,000</p>
            <p className="text-sm text-muted-foreground">Successful (&gt;1,000 views)</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <p className="text-2xl font-bold text-foreground">1,000</p>
            <p className="text-sm text-muted-foreground">Less successful (&lt;1,000 views)</p>
          </div>
        </div>

        {/* Why 2,000 Videos */}
        <div className="rounded-lg bg-muted/50 p-6">
          <p className="mb-3 font-medium text-foreground">Why 2,000 Videos?</p>
          <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              80%+ statistical power to detect subtle differences
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Could test multiple video attributes at once
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Room to analyze different video types
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Gave us confidence when presenting to skeptical leadership
            </li>
          </ul>
        </div>

        {/* Analysis Method */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">How We Analyzed Them</h3>
          <p className="text-muted-foreground">
            Recruited internal colleagues to watch videos. Each person watched 50-100 videos and marked which attributes were present (yes/no). They didn't know if they were watching high or low-quality videos—keeping the analysis unbiased.
          </p>
          
          <div className="rounded-lg border bg-card p-6">
            <p className="mb-3 text-sm font-medium text-muted-foreground">Examples of Attributes Coded</p>
            <div className="flex flex-wrap gap-2">
              {['Presence of humor', 'Humans in video', 'Animals in video', 'Genre (sports, fashion, travel, dance)', 'Music usage', 'Number of clips used', 'Text on screen', 'Cuts-to-music synchronization'].map((attr) => (
                <span key={attr} className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">
                  {attr}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <p className="mb-3 text-sm font-medium text-muted-foreground">Statistical Analysis</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Compared how often each attribute appeared in high vs. low-quality videos</li>
              <li>• Ran chi-square tests to identify statistically significant differences</li>
              <li>• Ran logistic regression to determine which attributes had strongest predictive value</li>
              <li>• Ranked attributes to focus our recommendations</li>
            </ul>
          </div>
        </div>

        {/* Chart Placeholders */}
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder
            type="chart"
            description="Bar chart comparing % of high-quality vs. low-quality videos with each attribute"
            aspectRatio="video"
          />
          <Placeholder
            type="chart"
            description="Regression results showing which attributes predict video success"
            aspectRatio="video"
          />
        </div>

        {/* Key Findings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Key Findings: Three Attributes of High-Quality Videos</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6 text-center">
                <Layers className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-semibold text-foreground">Multiple Clips</p>
                <p className="mt-2 text-sm text-muted-foreground">Videos used more than one clip (vs. single-shot videos)</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6 text-center">
                <Music className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-semibold text-foreground">Music Synchronization</p>
                <p className="mt-2 text-sm text-muted-foreground">Clips synced to beat/rhythm of music</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6 text-center">
                <Type className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-semibold text-foreground">Text Synchronization</p>
                <p className="mt-2 text-sm text-muted-foreground">Text elements precisely timed to match video content and music</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Outcome */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Outcome</p>
          <p className="text-lg text-foreground">
            We had an objective definition of what makes videos high-quality. Next, we tested which editor design makes it easier to create these kinds of videos.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide06Phase2;
