import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent } from '@/components/ui/card';
import Placeholder from '@/components/presentation/Placeholder';
import { CheckCircle2 } from 'lucide-react';

const Slide07Phase3: React.FC = () => {
  return (
    <SlideContainer slideNumber={6} header="Phase 3: Comparative Usability Experiment">
      <div className="space-y-8">
        {/* Objective */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Does a stacked timeline make editing high-quality videos easier, or does it make things harder (as leadership feared)?
          </h2>
          <p className="text-lg text-muted-foreground">
            Objective: Test which editor design makes it easier to create different types of videos.
          </p>
        </div>

        {/* Methodology */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Method</p>
                <p className="font-semibold text-foreground">Controlled experiment, remote, unmoderated</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Partner</p>
                <p className="font-semibold text-foreground">MeasuringU (Usability Testing Firm)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Sample</p>
                <p className="font-semibold text-foreground">400 video creators</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Criteria</p>
                <p className="font-semibold text-foreground">US, Canada, UK, India (18-35)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Design Decision */}
        <div className="rounded-lg bg-muted/50 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Key Design Decision</p>
          <p className="text-foreground">
            Used existing market apps rather than building prototypes. This saved engineering time and allowed quick testing.
          </p>
        </div>

        {/* Study Design */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <p className="mb-3 text-sm font-medium text-muted-foreground">What We Varied</p>
            <ul className="space-y-2 text-foreground">
              <li>• Video complexity (basic vs. advanced)</li>
              <li>• Editor type (step-by-step vs. stacked timeline)</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="mb-3 text-sm font-medium text-muted-foreground">What We Measured</p>
            <ul className="space-y-2 text-foreground">
              <li>• Did they complete the task?</li>
              <li>• How easy did they find it?</li>
            </ul>
          </div>
        </div>

        {/* Apps Tested */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <p className="mb-3 font-semibold text-foreground">Step-by-Step Editors</p>
              <div className="flex flex-wrap gap-2">
                {['Instagram Reels', 'TikTok', 'Facebook Reels'].map((app) => (
                  <span key={app} className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">
                    {app}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="mb-3 font-semibold text-foreground">Stacked Timeline Editors</p>
              <div className="flex flex-wrap gap-2">
                {['CapCut', 'InShot'].map((app) => (
                  <span key={app} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {app}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Task Design */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Task Design</h3>
          <p className="text-muted-foreground">
            I created two reference videos for participants to recreate using provided clips:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <p className="mb-2 font-semibold text-foreground">Basic Video</p>
              <p className="text-sm text-muted-foreground">Single clip + music + one text element</p>
              <p className="mt-2 text-xs italic text-muted-foreground">Tests what step-by-step editors were designed for</p>
            </div>
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
              <p className="mb-2 font-semibold text-foreground">Advanced Video</p>
              <p className="text-sm text-muted-foreground">Three clips synced to music beat + three text elements synced to video</p>
              <p className="mt-2 text-xs italic text-primary">Tests videos with the three success attributes from Phase 2</p>
            </div>
          </div>
        </div>

        {/* Video Placeholder */}
        <Placeholder
          type="video"
          description="Videos of the two example videos (basic and advanced) participants had to recreate"
          aspectRatio="video"
        />

        {/* What I Did with the Data */}
        <div className="rounded-lg bg-muted/50 p-6">
          <p className="mb-2 font-medium text-foreground">What I Did with the Data</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Watched screen recordings to see where people struggled</li>
            <li>• Compared ease-of-use ratings across video types and editor types</li>
          </ul>
        </div>

        {/* Key Finding */}
        <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Key Finding: Editor Type Must Match Video Complexity</p>
          <p className="mb-6 text-lg text-foreground">
            The results showed no single "best" editor. Instead, different editors worked better for different video types:
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-background p-6">
              <p className="mb-3 font-semibold text-foreground">For Simple Videos (1 clip, 1 music, 1 text):</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Step-by-step editors performed better and rated easier to use</li>
                <li className="flex items-start gap-2 text-success">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Leadership was right about simple interfaces for simple tasks
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-background p-6">
              <p className="mb-3 font-semibold text-foreground">For Complex Videos (multiple clips + synchronization):</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Stacked timeline editors performed better, rated easier to use, much faster completion times</li>
                <li className="flex items-start gap-2 text-success">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  Our team was right about stacked timelines for high-quality videos
                </li>
              </ul>
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
