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
    <SlideContainer slideNumber={3} header="Research Overview">
      <div className="space-y-10">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-foreground">A Three-Phase Research Strategy</h3>
          <p className="text-muted-foreground">
            This started as a small study with 20 creators but grew to include two larger projects. Each phase built on the previous, moving from exploration to experimentation.
          </p>
        </div>

        {/* Phase List */}
        <div className="space-y-4">
          {phases.map((phase) => (
            <div key={phase.number} className="rounded-2xl bg-muted/60 p-5">
              <div className="mb-2 flex items-baseline gap-3">
                <span className="text-sm font-medium text-primary">Phase {phase.number}</span>
                <span className="text-sm text-muted-foreground">({phase.type})</span>
              </div>
              <h4 className="font-semibold text-foreground">{phase.title}</h4>
              <p className="mt-1 text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide04ResearchApproach;
