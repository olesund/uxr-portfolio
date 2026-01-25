import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import Placeholder from '@/components/presentation/Placeholder';

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

        {/* How We Defined High-Quality */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-2 text-sm text-muted-foreground">How We Defined "High-Quality"</p>
          <p className="text-xl font-semibold text-foreground">A video with more than 1,000 views</p>
          <p className="text-muted-foreground">This was the top 10% of Reels in the U.S., based on data analysis</p>
        </div>

        {/* Sample Size */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Sample</h3>
          <div className="rounded-2xl bg-muted/60 p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-primary">2,000</p>
                <p className="text-muted-foreground">Videos Total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1,000</p>
                <p className="text-muted-foreground">Successful (&gt;1,000 views)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1,000</p>
                <p className="text-muted-foreground">Less successful (&lt;1,000 views)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why 2,000 Videos */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Why 2,000 Videos?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• 80%+ statistical power to detect subtle differences</li>
            <li>• Could test multiple video attributes at once</li>
            <li>• Room to analyze different video types</li>
            <li>• Gave us confidence when presenting to skeptical leadership</li>
          </ul>
        </div>

        {/* Analysis Method */}
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">How We Analyzed Them</h3>
          <p className="mb-4 text-muted-foreground">
            Recruited internal colleagues to watch videos. Each person watched 50-100 videos and marked which attributes were present (yes/no). They didn't know if they were watching high or low-quality videos—keeping the analysis unbiased.
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="mb-2 font-medium text-foreground">Examples of Attributes Coded</p>
              <p className="text-muted-foreground">
                Presence of humor, Humans in video, Animals in video, Genre (sports, fashion, travel, dance), Music usage, Number of clips used, Text on screen, Cuts-to-music synchronization
              </p>
            </div>

            <div>
              <p className="mb-2 font-medium text-foreground">Statistical Analysis</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Compared how often each attribute appeared in high vs. low-quality videos</li>
                <li>• Ran chi-square tests to identify statistically significant differences</li>
                <li>• Ran logistic regression to determine which attributes had strongest predictive value</li>
                <li>• Ranked attributes to focus our recommendations</li>
              </ul>
            </div>
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
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Key Findings: Three Attributes of High-Quality Videos</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-2 font-semibold text-foreground">1. Multiple Clips</p>
              <p className="text-muted-foreground">Videos used more than one clip (vs. single-shot videos)</p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-2 font-semibold text-foreground">2. Music Sync</p>
              <p className="text-muted-foreground">Clips synced to beat/rhythm of music</p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="mb-2 font-semibold text-foreground">3. Text Sync</p>
              <p className="text-muted-foreground">Text elements precisely timed to match video content and music</p>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Outcome</p>
          <p className="text-foreground">
            We had an objective definition of what makes videos high-quality. Next, we tested which editor design makes it easier to create these kinds of videos.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide06Phase2;
