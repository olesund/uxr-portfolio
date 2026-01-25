import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Users, BarChart3, FlaskConical, ArrowRight } from 'lucide-react';

const phases = [
  {
    number: '01',
    title: 'Online Community of Reels Creators',
    icon: Users,
    description: 'Talked to 20 Reels creators. Discovered they were using third-party apps (like CapCut) instead of Instagram to edit their videos.',
    type: 'Qualitative',
  },
  {
    number: '02',
    title: 'Large-Scale Video Content Analysis',
    icon: BarChart3,
    description: 'Analyzed 2,000 videos to identify what makes videos successful. Found that high-quality videos use multiple clips synced to music with text overlaid.',
    type: 'Quantitative',
  },
  {
    number: '03',
    title: 'Usability Testing Experiment',
    icon: FlaskConical,
    description: 'Tested which editor design works best for simple vs. complex videos. Proved that different designs work better for different video types; more complex videos require a more advanced editor.',
    type: 'Experimental',
  },
];

const Slide04ResearchApproach: React.FC = () => {
  return (
    <SlideContainer slideNumber={3} header="Research Approach">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            A Three-Phase Research Strategy
          </h2>
          <p className="text-lg text-muted-foreground">
            This started as a small study with 20 creators but grew to include two larger projects. Each phase built on the previous, moving from exploration to experimentation.
          </p>
        </div>

        {/* Phase Cards with Timeline */}
        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 md:block" />
          
          <div className="grid gap-6 md:gap-8">
            {phases.map((phase, index) => (
              <div key={phase.number} className="relative">
                {/* Arrow connector */}
                {index < phases.length - 1 && (
                  <ArrowRight className="absolute -bottom-4 left-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 rotate-90 text-primary/50 md:block" />
                )}
                
                <Card className="relative overflow-hidden border-l-4 border-l-primary transition-shadow hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <phase.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary">Phase {phase.number}</p>
                        <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                      </div>
                      <span className="ml-auto hidden rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:inline">
                        {phase.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide04ResearchApproach;
