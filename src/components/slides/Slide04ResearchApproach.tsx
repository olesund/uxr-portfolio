import React from 'react';
import SlideContainer from '@/components/presentation/SlideContainer';

const phases = [
  {
    number: '01',
    title: 'Online Community of Reels Creators',
    description: 'Talked to 20 Reels creators. Discovered they were using third-party apps (like CapCut) instead of Instagram to edit their videos.',
    type: 'Qualitative',
  },
  {
    number: '02',
    title: 'Large-Scale Video Content Analysis',
    description: 'Analyzed 2,000 videos to identify what makes videos successful. Found that high-quality videos use multiple clips synced to music with text overlaid.',
    type: 'Quantitative',
  },
  {
    number: '03',
    title: 'Usability Testing Experiment',
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

        {/* Phase List */}
        <div className="space-y-6">
          {phases.map((phase) => (
            <div key={phase.number} className="border-l-4 border-primary pl-6">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-medium text-primary">Phase {phase.number}</span>
                <span className="text-xs text-muted-foreground">({phase.type})</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
              <p className="mt-1 text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide04ResearchApproach;
