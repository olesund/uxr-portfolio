import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide05bPivotPresent: React.FC = () => {
  return (
    <PresentSlideContainer
      slideNumber={4}
      header="The Pivot"
      className="!bg-[hsl(220,10%,20%)]"
    >
      <div className="space-y-8">
        <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>
            Outcome: Initial Rejection
          </p>
          <p className="text-xl text-[hsl(40,30%,95%)]">
            Leadership pushed back hard. They wanted Instagram to "feel simple" and worried a stacked timeline was "too complex."
          </p>
        </div>

        <div className="rounded-2xl bg-[hsl(25,50%,35%)]/30 p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>
            The New Core Question
          </p>
          <p className="text-lg text-[hsl(40,30%,70%)] line-through decoration-2 mb-3">
            How do we make it easier to make short-form videos?
          </p>
          <p className="text-2xl font-medium text-[hsl(40,30%,95%)]">
            How do we make it easier to make <strong style={{ color: 'hsl(25, 70%, 55%)' }}>good</strong> short-form videos?
          </p>
        </div>

        <div className="text-[hsl(40,30%,95%)]">
          <p className="mb-4">We needed to rigorously answer two questions:</p>
          <ul className="space-y-2 text-lg">
            <li><strong>A.</strong> What makes a video high-quality?</li>
            <li><strong>B.</strong> Which editor design makes it easier to create high-quality videos?</li>
          </ul>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide05bPivotPresent;
