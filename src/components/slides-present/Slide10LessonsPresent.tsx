import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide10LessonsPresent: React.FC = () => {
  return (
    <PresentSlideContainer
      slideNumber={9}
      header="Lessons Learned"
      className="!bg-[hsl(220,10%,20%)]"
    >
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[hsl(40,30%,95%)]">
          What This Project Taught Me
        </h2>

        <div className="space-y-4">
          <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-5">
            <p className="mb-1 text-sm font-medium" style={{ color: 'hsl(25, 70%, 55%)' }}>01</p>
            <p className="text-xl font-semibold text-[hsl(40,30%,95%)]">
              Misalignment often comes from different assumptions
            </p>
            <p className="mt-2 text-[hsl(40,30%,85%)]/80">
              We all wanted an easy-to-use editor—but hadn't aligned on what videos to prioritize.
            </p>
          </div>

          <div className="rounded-2xl bg-[hsl(220,10%,28%)]/80 p-5">
            <p className="mb-1 text-sm font-medium" style={{ color: 'hsl(25, 70%, 55%)' }}>02</p>
            <p className="text-xl font-semibold text-[hsl(40,30%,95%)]">
              Study what people make to understand your product
            </p>
            <p className="mt-2 text-[hsl(40,30%,85%)]/80">
              Analyzing user-created content showed us what makes videos successful.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[hsl(25,50%,35%)]/30 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'hsl(25, 70%, 55%)' }}>
            What I'd Do Differently
          </p>
          <p className="text-lg text-[hsl(40,30%,95%)]">
            Have leadership experience the problem firsthand. Hands-on experience could have accelerated alignment.
          </p>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide10LessonsPresent;
