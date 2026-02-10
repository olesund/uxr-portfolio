import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide08RecommendationPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={7} header="Final Recommendation">
      <div className="space-y-8">
        <div className="rounded-2xl bg-orange-500/20 p-8 text-center border border-orange-500/30">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Key Message to Leadership
          </p>
          <blockquote className="text-3xl font-bold text-white md:text-4xl">
            "Simple" doesn't always mean "easy."
          </blockquote>
          <p className="mt-6 text-xl text-slate-300">
            The right editor depends on what you're trying to make.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Three Pieces of Evidence</h3>
          <div className="space-y-3">
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">1. User Feedback (Phase 1)</p>
              <p className="text-slate-300">Creators avoided our editor—step-by-step couldn't support their editing needs</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">2. Video Analysis (Phase 2)</p>
              <p className="text-slate-300">Popular videos are complex: multiple clips, synced to music with text</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">3. Usability Testing (Phase 3)</p>
              <p className="text-slate-300">High-quality videos require precise timing—nearly impossible with step-by-step</p>
            </div>
          </div>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide08RecommendationPresent;
