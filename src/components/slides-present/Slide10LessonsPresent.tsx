import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide10LessonsPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={9} header="Lessons Learned">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white">
          What This Project Taught Me
        </h2>

        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
            <p className="mb-1 text-sm font-medium text-orange-400">01</p>
            <p className="text-xl font-semibold text-white">
              Misalignment often comes from different assumptions
            </p>
            <p className="mt-2 text-slate-300">
              We all wanted an easy-to-use editor—but hadn't aligned on what videos to prioritize.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700">
            <p className="mb-1 text-sm font-medium text-orange-400">02</p>
            <p className="text-xl font-semibold text-white">
              Study what people make to understand your product
            </p>
            <p className="mt-2 text-slate-300">
              Analyzing user-created content showed us what makes videos successful.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-400">
            What I'd Do Differently
          </p>
          <p className="text-lg text-white">
            Have leadership experience the problem firsthand. Hands-on experience could have accelerated alignment.
          </p>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide10LessonsPresent;
