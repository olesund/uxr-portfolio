import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import { Check, X } from 'lucide-react';

const NYTSlide05FindingsPresent: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={4} header="Key Research Findings">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Hypothesis Testing Results</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-green-500/20 p-4 border border-green-500/30">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-green-400">Validated</span>
            </div>
            <p className="font-semibold text-white">Younger users prefer video</p>
            <p className="text-sm text-slate-300">Under 30: 3x more likely to use video as primary news source</p>
          </div>

          <div className="rounded-2xl bg-green-500/20 p-4 border border-green-500/30">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-green-400">Validated</span>
            </div>
            <p className="font-semibold text-white">Less engaged users prefer video</p>
            <p className="text-sm text-slate-300">2x as likely to use online videos vs. frequent visitors</p>
          </div>

          <div className="rounded-2xl bg-red-500/20 p-4 border border-red-500/30">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                <X className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-red-400">Not Validated</span>
            </div>
            <p className="font-semibold text-white">Sizable "video-first" segment</p>
            <p className="text-sm text-slate-300">Readers outnumber video-first users 4:1</p>
          </div>

          <div className="rounded-2xl bg-red-500/20 p-4 border border-red-500/30">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                <X className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-red-400">Not Validated</span>
            </div>
            <p className="font-semibold text-white">Interest in NYT videos in app</p>
            <p className="text-sm text-slate-300">Awareness was high, but interest was low</p>
          </div>
        </div>

        <div className="rounded-2xl bg-red-500/20 p-4 border border-red-500/30">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
              <X className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-red-400">Not Validated</span>
          </div>
          <p className="font-semibold text-white">Curated Watch Tab value proposition</p>
          <p className="text-sm text-slate-300">Neither clear nor attractive to users</p>
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default NYTSlide05FindingsPresent;
