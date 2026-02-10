import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide05bPivotPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={4} header="The Pivot">
      <div className="space-y-8">
        <div className="rounded-2xl bg-red-500/20 p-6 border border-red-500/30">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
            Outcome: Initial Rejection
          </p>
          <p className="text-xl text-white">
            Leadership pushed back hard. They wanted Instagram to "feel simple" and worried a stacked timeline was "too complex."
          </p>
        </div>

        <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">
            The New Core Question
          </p>
          <p className="text-lg text-slate-400 line-through decoration-2 mb-3">
            How do we make it easier to make short-form videos?
          </p>
          <p className="text-2xl font-medium text-white">
            How do we make it easier to make <strong className="text-orange-400">good</strong> short-form videos?
          </p>
        </div>

        <div className="text-white">
          <p className="mb-4 text-slate-300">We needed to rigorously answer two questions:</p>
          <ul className="space-y-2 text-lg">
            <li><strong className="text-orange-400">A.</strong> What makes a video high-quality?</li>
            <li><strong className="text-orange-400">B.</strong> Which editor design makes it easier to create high-quality videos?</li>
          </ul>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide05bPivotPresent;
