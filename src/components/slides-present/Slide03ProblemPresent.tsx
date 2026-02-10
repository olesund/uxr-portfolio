import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide03ProblemPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={1} header="Problem + Key Constraints">
      <div className="space-y-10">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            The Challenge
          </h2>
          <p className="text-xl text-slate-300">
            Reels had launched as Instagram's top priority, but creator supply couldn't keep up with viewer demand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700">
            <p className="mb-2 text-sm text-slate-400">Business Goal</p>
            <p className="text-xl font-semibold text-white">
              Increase short-form video production
            </p>
          </div>
          <div className="rounded-2xl bg-slate-800/80 p-6 border border-slate-700">
            <p className="mb-2 text-sm text-slate-400">Core Question</p>
            <p className="text-xl font-semibold text-white">
              How do we make it easier to create videos?
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800/50 p-6 border border-slate-700">
          <div className="grid gap-4 md:grid-cols-3 text-center">
            <div>
              <p className="text-sm text-slate-400">My Role</p>
              <p className="font-semibold text-white">UX Researcher</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Team</p>
              <p className="font-semibold text-white">Cross-functional</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Stakeholders</p>
              <p className="font-semibold text-white">Senior Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide03ProblemPresent;
