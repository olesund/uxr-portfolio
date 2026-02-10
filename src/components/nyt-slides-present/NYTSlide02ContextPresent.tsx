import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const NYTSlide02ContextPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={1} header="Context">
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            The Opportunity
          </h2>
          <p className="text-xl text-slate-300">
            Half of Americans under 35 use social media or video platforms as their primary news source. NYT was already producing ~20 vertical news videos/day.
          </p>
        </div>

        <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
          <p className="mb-2 text-sm text-slate-400">Proposed Solution</p>
          <p className="text-xl font-semibold text-white">
            Watch Tab: A dedicated vertical video feed
          </p>
          <p className="mt-2 text-slate-300">
            15-20 editorially curated videos per day, similar to TikTok
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Assumptions Behind the Watch Tab</h3>
          <ul className="space-y-2 text-lg text-slate-300">
            <li>• Will improve engagement with less-engaged users</li>
            <li>• Can serve as a "video version" of daily top stories</li>
            <li>• Editorial curation will be valued over personalization</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-800/50 p-5 border border-slate-700">
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

export default NYTSlide02ContextPresent;
