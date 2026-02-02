import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FileText, BookOpen, BarChart3, Users } from 'lucide-react';
import exampleChart from '@/assets/example_grouped_vertical_bar_chart.png';
import regressionChart from '@/assets/regression-chart.png';
import videoRoleChart from '@/assets/video-role-chart.png';
import pewSocialMediaChart from '@/assets/pew-social-media-chart.png';
import figjamScreenshot from '@/assets/figjam-synthesis-screenshot.png';

const NYTSlide04Approach: React.FC = () => {
  return (
    <SlideContainer slideNumber={3} header="Research Approach">
      <div className="space-y-10">
        <h2 className="text-2xl font-bold text-foreground">Two-Method Design (Parallel with A/B Test)</h2>

        {/* Survey */}
        <div className="rounded-2xl bg-accent/50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-foreground">A. Quantitative Survey</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Sample</p>
              <p className="font-medium text-foreground">n=~3,000 app and web visitors</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Fielded</p>
              <p className="font-medium text-foreground">Sept 30–Nov 18, 2025</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Method</p>
              <p className="font-medium text-foreground">Intercept survey on News app and web</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Analysis</p>
              <p className="font-medium text-foreground">Python in Google Colab, weighted on platform + on-site activity for representativeness</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            <strong className="text-foreground">Purpose:</strong> Validate hypotheses at scale, understand audience-level patterns
          </p>

          {/* Survey Examples Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 gap-2">
                <FileText className="h-4 w-4" />
                See survey question examples
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Survey Question Examples</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Format Preferences</p>
                  <p className="mb-3 font-medium text-foreground">How do you <em>primarily</em> get your news?</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Reading online (website, apps, newsletters)</p>
                    <p>• Listening online (podcasts, audio articles)</p>
                    <p>• Watching videos online (YouTube, TikTok, news sites)</p>
                    <p>• Watching cable or broadcast TV</p>
                    <p>• Other options...</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Video Habit Frequency</p>
                  <p className="mb-3 font-medium text-foreground">In general, how often do you watch videos about news and current events online?</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Never</p>
                    <p>• Less than once a month</p>
                    <p>• About once a month</p>
                    <p>• About once a week</p>
                    <p>• On most days</p>
                    <p>• Multiple times a day</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Jobs-to-be-Done</p>
                  <p className="mb-3 font-medium text-foreground">When you watch videos about news and current events, which of the following are you hoping to accomplish?</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Get up to speed on the latest news</p>
                    <p>• Get a fuller picture of a particular event</p>
                    <p>• Feel prepared to talk about current events</p>
                    <p>• Verify if what I've seen elsewhere is true</p>
                    <p>• Hear perspectives from real people, not just experts</p>
                    <p>• Other options...</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Video Discovery</p>
                  <p className="mb-3 font-medium text-foreground">How do you typically encounter videos about news and current events online?</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• I actively seek them out</p>
                    <p>• They are suggested to me by an algorithm</p>
                    <p>• I stumble upon them by chance</p>
                    <p>• They are sent to me by someone I know</p>
                    <p>• I get them from a daily newsletter</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground italic">
                  Survey responses were weighted by platform, user type, and active days for representativeness.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Survey Analysis Approach Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 ml-2 gap-2">
                <BarChart3 className="h-4 w-4" />
                See analysis approach
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Survey Analysis Approach</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">1. Data Export & Cleaning</p>
                  <p className="text-sm text-muted-foreground">
                    Exported raw survey data as CSV from Iterate. Used Cursor (AI code editor) to clean and standardize the data, handling edge cases and formatting inconsistencies.
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">2. Behavioral Data Join</p>
                  <p className="text-sm text-muted-foreground">
                    Joined survey responses with behavioral data from our data warehouse using SQL. This allowed me to connect self-reported preferences with actual usage patterns (active days, platform usage, subscription status).
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">3. Cell-Based Weighting</p>
                  <p className="text-sm text-muted-foreground">
                    Applied cell-based weights to ensure representativeness. Respondents were segmented by user type (anonymous, registered, subscriber), platform (app, web, both), and activity level (terciles of active days). Weights were calculated as population proportion divided by sample proportion, with caps at 4x to prevent outlier influence.
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">4. Analysis in Google Colab</p>
                  <p className="text-sm text-muted-foreground">
                    Built reusable Python functions for weighted crosstabs, group comparisons, and statistical testing. Ran regression analysis to identify which user characteristics predicted video preferences while controlling for confounds.
                  </p>
                  <div className="mt-3 rounded-lg overflow-hidden bg-white p-2">
                    <img
                      src={regressionChart}
                      alt="Regression analysis showing news consumption modes by age group"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    Example regression output (data shown is illustrative, not actual results)
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">5. NYT-Style Visualizations</p>
                  <p className="text-sm text-muted-foreground">
                    Created publication-quality charts following NYT visual style guidelines: clean typography, purposeful color choices, and clear data hierarchy.
                  </p>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-lg overflow-hidden bg-white p-2">
                      <img
                        src={exampleChart}
                        alt="Example grouped bar chart in NYT style"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden bg-white p-2">
                      <img
                        src={videoRoleChart}
                        alt="Videos role in news consumption - horizontal bar chart"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden bg-white p-2">
                      <img
                        src={pewSocialMediaChart}
                        alt="News consumption by social media site - line chart"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    Example visualizations (data shown is illustrative, not actual results)
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Diary Study */}
        <div className="rounded-2xl bg-muted/60 p-6">
          <h3 className="mb-4 text-xl font-semibold text-foreground">B. Qualitative Diary Study</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Sample</p>
              <p className="font-medium text-foreground">n=21 U.S. news consumers via dscout</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Fielded</p>
              <p className="font-medium text-foreground">Sept 26–Oct 3, 2025 (7 days)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mix</p>
              <p className="font-medium text-foreground">11 subscribers / 10 non-subscribers</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recruited</p>
              <p className="font-medium text-foreground">People who engage with NYT news AND watch news videos on TikTok/Instagram/YouTube</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-sm text-muted-foreground">Activities:</p>
            <ul className="space-y-1 text-foreground">
              <li>• First impressions exploring the Watch tab</li>
              <li>• Daily entries showing usage throughout the week</li>
              <li>• Screen recordings + video reflections</li>
              <li>• Comparison to their normal video-watching habits</li>
            </ul>
          </div>
          <p className="mt-4 text-muted-foreground">
            <strong className="text-foreground">Purpose:</strong> Understand the "why" behind behaviors, surface expectations shaped by TikTok/Reels
          </p>

          {/* Diary Study Examples Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 gap-2">
                <BookOpen className="h-4 w-4" />
                See diary study activity examples
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Diary Study Activity Examples</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Day 1: First Impressions</p>
                  <p className="mb-3 font-medium text-foreground">Screen recording + think-aloud exploration</p>
                  <p className="text-sm text-muted-foreground">
                    Participants downloaded a test version of the app and spent 3 minutes exploring while narrating: What are you noticing? What piques your curiosity? Are you confused by anything?
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Day 2: Video Habits Baseline</p>
                  <p className="mb-3 font-medium text-foreground">Comparison with existing behavior</p>
                  <p className="text-sm text-muted-foreground">
                    Participants recorded themselves using their go-to app for news videos (TikTok, Instagram, YouTube) and reflected: How do you typically find videos? What draws you to this app over others?
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Day 3: Watch Tab Expectations</p>
                  <p className="mb-3 font-medium text-foreground">Before vs. after exploration</p>
                  <p className="text-sm text-muted-foreground">
                    Before opening the Watch tab: "What do you expect to find?" After exploring: "Did it meet your expectations? Why or why not?"
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Day 5: In-the-Moment Entries</p>
                  <p className="mb-3 font-medium text-foreground">Real usage at different times of day</p>
                  <p className="text-sm text-muted-foreground">
                    At least 3 entries throughout the day: Where were you? What prompted you to open it? How long did you spend? Were you able to accomplish what you wanted?
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">Day 7: Final Reflections</p>
                  <p className="mb-3 font-medium text-foreground">Direct comparison with social platforms</p>
                  <p className="text-sm text-muted-foreground">
                    Fill-in-the-blank prompts: "I go to the Watch tab to..." vs. "I go to TikTok to..." — capturing functional and emotional differences.
                  </p>
                </div>

                <p className="text-xs text-muted-foreground italic">
                  Participants also submitted "moments" throughout the week—screenshots of anything uniquely valuable or confusing they encountered.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Diary Study Analysis Approach Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4 ml-2 gap-2">
                <Users className="h-4 w-4" />
                See analysis approach
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Diary Study Analysis Approach</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">1. Export from dscout</p>
                  <p className="text-sm text-muted-foreground">
                    Exported all video recordings and auto-generated transcripts from dscout. Each participant submitted multiple entries per day across the 7-day study period, resulting in 200+ video clips and corresponding transcripts.
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">2. FigJam Synthesis Board</p>
                  <p className="text-sm text-muted-foreground">
                    Imported all transcripts and key video clips into FigJam. Created a collaborative synthesis board organized by participant and day, allowing the team to see patterns across the full study.
                  </p>
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <img
                      src={figjamScreenshot}
                      alt="FigJam synthesis board showing diary study analysis"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    FigJam board used for collaborative synthesis
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">3. Watch Party with Collaborators</p>
                  <p className="text-sm text-muted-foreground">
                    Hosted a "watch party" session with XFN partners (PM, Design, Data Science) where we reviewed key video clips together. This created shared understanding and gave stakeholders direct exposure to user perspectives—much more impactful than reading quotes alone.
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">4. Theme Identification</p>
                  <p className="text-sm text-muted-foreground">
                    Through affinity mapping, identified recurring themes: expectations shaped by social platforms, desire for topic-specific browsing, "scan and sample" behavior, and the gap between intent and actual feature discovery. Themes were validated across multiple participants and days.
                  </p>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium text-primary">5. Triangulation with Survey</p>
                  <p className="text-sm text-muted-foreground">
                    Connected qualitative themes to quantitative survey findings. When the diary study revealed that users wanted to find specific videos, we could validate this at scale: the survey showed the same pattern across 3,000 respondents.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Why This Approach */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-foreground">Why This Approach?</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-4">
              <p className="font-medium text-foreground">Survey</p>
              <p className="text-sm text-muted-foreground">Captured what people do and prefer at scale</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="font-medium text-foreground">Diary study</p>
              <p className="text-sm text-muted-foreground">Revealed why they behave that way and what they expect</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="font-medium text-foreground">Parallel timing</p>
              <p className="text-sm text-muted-foreground">Insights ready immediately when A/B test results came in</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="font-medium text-foreground">Triangulation</p>
              <p className="text-sm text-muted-foreground">Behavioral data showed who actually used the feature vs. who should have</p>
            </div>
          </div>
        </div>

        {/* Constraints */}
        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="mb-3 text-lg font-semibold text-foreground">Constraints & How I Addressed Them</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-foreground">Tight timeline</p>
              <p className="text-sm text-muted-foreground">Had to deliver before A/B test concluded → Ran survey and diary study concurrently</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Stakeholder skepticism</p>
              <p className="text-sm text-muted-foreground">Involved them in research design; shared early findings to build buy-in ("dropped by" the senior editor's office often)</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default NYTSlide04Approach;
