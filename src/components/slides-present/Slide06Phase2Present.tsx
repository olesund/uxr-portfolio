import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';

const Slide06Phase2Present: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={5} header="Phase 2: Video Content Analysis">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              What Makes Videos Successful?
            </h2>
            <p className="text-xl text-slate-300">
              Analyzed 2,000 videos to identify attributes that predict high view counts.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-800/80 p-4 text-sm border border-slate-700">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-slate-400">Method</p>
                <p className="font-medium text-white">Content Analysis</p>
              </div>
              <div>
                <p className="text-slate-400">Duration</p>
                <p className="font-medium text-white">3 Weeks</p>
              </div>
              <div>
                <p className="text-slate-400">Sample</p>
                <p className="font-medium text-white">2,000 Videos</p>
              </div>
              <div>
                <p className="text-slate-400">Threshold</p>
                <p className="font-medium text-white">&gt;1,000 views</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Three Attributes Strongly Predicted Success
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-800/80 p-4 text-center border border-slate-700">
              <p className="text-2xl font-bold text-orange-400">1</p>
              <p className="mt-2 font-semibold text-white">Multiple Clips</p>
              <p className="text-sm text-slate-400">More than one video clip</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 text-center border border-slate-700">
              <p className="text-2xl font-bold text-orange-400">2</p>
              <p className="mt-2 font-semibold text-white">Music Sync</p>
              <p className="text-sm text-slate-400">Clips synced to beat</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 text-center border border-slate-700">
              <p className="text-2xl font-bold text-orange-400">3</p>
              <p className="mt-2 font-semibold text-white">Text Sync</p>
              <p className="text-sm text-slate-400">Text timed to video</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-300 text-center">
          These three features require precise timing across layers—exactly what our step-by-step editor made difficult.
        </p>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide06Phase2Present;
