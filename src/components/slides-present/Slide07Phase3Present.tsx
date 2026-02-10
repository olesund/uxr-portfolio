import React from 'react';
import PresentSlideContainer from '@/components/presentation/PresentSlideContainer';
import easeOfUseChart from '@/assets/ease-of-use-chart.png';

const Slide07Phase3Present: React.FC = () => {
  return (
    <PresentSlideContainer slideNumber={6} header="Phase 3: Comparative Usability Study">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Which Editor Works Better?
            </h2>
            <p className="text-xl text-slate-300">
              200 testers recreated videos using different editing apps.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-800/80 p-4 text-sm border border-slate-700">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-slate-400">Method</p>
                <p className="font-medium text-white">Randomized Study</p>
              </div>
              <div>
                <p className="text-slate-400">Sample</p>
                <p className="font-medium text-white">200 Creators</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-orange-500/20 p-6 border border-orange-500/30">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-400">Key Finding</p>
          <p className="text-xl font-semibold text-white mb-4">
            Different editors worked better for different video types.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">Basic Videos</p>
              <p className="text-slate-300">Step-by-step editors performed better</p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700">
              <p className="font-semibold text-white">Advanced Videos</p>
              <p className="text-slate-300">Stacked timelines performed <strong className="text-orange-400">much</strong> better</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white/10 p-2">
          <img
            src={easeOfUseChart}
            alt="Ease-of-use ratings by editor type and video complexity"
            className="w-full h-auto max-h-[180px] object-contain"
          />
        </div>
      </div>
    </PresentSlideContainer>
  );
};

export default Slide07Phase3Present;
