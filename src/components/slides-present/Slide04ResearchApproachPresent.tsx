import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const phases = [
  {
    number: '01',
    title: 'Online Community of Reels Creators',
    type: 'Qualitative',
    insight: '20 creators revealed they use third-party apps instead of Instagram',
  },
  {
    number: '02',
    title: 'Large-Scale Video Content Analysis',
    type: 'Quantitative',
    insight: '2,000 videos analyzed to identify success factors',
  },
  {
    number: '03',
    title: 'Usability Testing Experiment',
    type: 'Experimental',
    insight: '200 participants proved different editors work for different video types',
  },
];

const Slide04ResearchApproachPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={2} header="Research Overview">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          A Three-Phase Research Strategy
        </h2>
        <p className="text-xl text-slate-300">
          Each phase built on the previous, moving from exploration to experimentation.
        </p>

        <div className="space-y-4">
          {phases.map((phase) => (
            <div key={phase.number} className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-lg font-bold text-orange-400">Phase {phase.number}</span>
                <span className="text-sm text-slate-400">({phase.type})</span>
              </div>
              <h4 className="text-lg font-semibold text-white">{phase.title}</h4>
              <p className="mt-1 text-slate-300">{phase.insight}</p>
            </div>
          ))}
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide04ResearchApproachPresent;
